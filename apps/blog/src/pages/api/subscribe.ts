import type { APIRoute } from 'astro'
import { RESEND_SUBSCRIBE_AUDIENCE_ID } from 'astro:env/server'
import { SubscribeInternalEmail } from '@/components/emails/SubscribeInternalEmail'
import { SubscribeWelcomeEmail } from '@/components/emails/SubscribeWelcomeEmail'
import { sendEmail } from '@/lib/email/send'
import { isHoneypotTriggered } from '@/lib/honeypot'
import { captureError } from '@/lib/observability'
import { EMAIL_INTERNAL_TO, resend } from '@/lib/resend'
import { fail, ok } from '@/lib/responses'
import { verifyTurnstileToken } from '@/lib/turnstile'
import { makeSubscribeSchema } from '@/lib/validation/subscribe'

export const prerender = false

// Endpoint compartido por los 4 forms de suscripcion del blog (footer, modal,
// newsletter de home, newsletter de categoria) — todos piden email (+ topics
// opcional), asi que un solo schema/handler cubre los 4 sin duplicar logica.
export const POST: APIRoute = async ({ request, clientAddress }) => {
  let body: unknown
  try {
    body = await request.json()
  }
  catch {
    return fail(400, 'Invalid request')
  }

  if (isHoneypotTriggered((body as { website?: unknown })?.website)) {
    return ok()
  }

  const parsed = makeSubscribeSchema().safeParse(body)
  if (!parsed.success) {
    console.warn('[subscribe] validation failed:', parsed.error.issues)
    return fail(400, 'Invalid data')
  }

  const isHuman = await verifyTurnstileToken(parsed.data.turnstileToken, clientAddress)
  if (!isHuman) {
    return fail(403, 'Verificación fallida. Intenta de nuevo.')
  }

  const { email, topics } = parsed.data
  const source = (body as { source?: unknown })?.source
  const sourceLabel = typeof source === 'string' && source.trim().length > 0 ? source : 'Desconocido'

  // Lista real de suscriptores — no es un CRM, es solo la audiencia de Resend
  // (dedupe + unsubscribe automatico). Sin `RESEND_SUBSCRIBE_AUDIENCE_ID`
  // configurada, el form sigue funcionando: solo se pierde el registro en la
  // audiencia (degrade, no rompe).
  if (RESEND_SUBSCRIBE_AUDIENCE_ID) {
    const { error } = await resend.contacts.create({
      email,
      audienceId: RESEND_SUBSCRIBE_AUDIENCE_ID,
      unsubscribed: false,
    })
    if (error) {
      captureError(error, { scope: 'subscribe', extra: { email } })
    }
  }

  // Best-effort: la audiencia de Resend (arriba) ya es el registro real del
  // suscriptor: si estos correos fallan, no se pierde el dato.
  await Promise.all([
    sendEmail({
      to: EMAIL_INTERNAL_TO,
      subject: `Nuevo suscriptor — Blog: ${email}`,
      template: SubscribeInternalEmail({ email, topics, source: sourceLabel }),
    }),
    sendEmail({
      to: email,
      subject: 'Ya estás suscrito al Brainstorming Blog',
      template: SubscribeWelcomeEmail({ topics }),
    }),
  ])

  return ok()
}
