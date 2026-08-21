import type { APIRoute } from 'astro'
import { ContactAckEmail } from '@/components/emails/ContactAckEmail'
import { InternalLeadEmail } from '@/components/emails/InternalLeadEmail'
import { sendEmail } from '@/lib/email/send'
import { isHoneypotTriggered } from '@/lib/honeypot'
import { EMAIL_INTERNAL_TO } from '@/lib/resend'
import { fail, ok } from '@/lib/responses'
import { verifyTurnstileToken } from '@/lib/turnstile'
import { makeContactSchema } from '@/lib/validation/contact'

export const prerender = false

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let body: unknown
  try {
    body = await request.json()
  }
  catch {
    return fail(400, 'Invalid request')
  }

  // Honeypot: nunca devolver error aca, delataria el filtro al bot.
  if (isHoneypotTriggered((body as { website?: unknown })?.website)) {
    return ok()
  }

  const parsed = makeContactSchema().safeParse(body)
  if (!parsed.success) {
    console.warn('[contact] validation failed:', parsed.error.issues)
    return fail(400, 'Invalid data')
  }

  const { nombre, telefono, email, mensaje, turnstileToken } = parsed.data

  const isHuman = await verifyTurnstileToken(turnstileToken, clientAddress)
  if (!isHuman) {
    return fail(403, 'Verificación fallida. Intenta de nuevo.')
  }

  await Promise.all([
    sendEmail({
      to: EMAIL_INTERNAL_TO,
      subject: `Nuevo lead — Contacto: ${nombre}`,
      template: InternalLeadEmail({ sourceLabel: 'Contacto', nombre, email, telefono, mensaje }),
      replyTo: email,
    }),
    sendEmail({
      to: email,
      subject: 'Recibimos tu mensaje — Brainstorming',
      template: ContactAckEmail({ firstName: nombre }),
    }),
  ])

  return ok()
}
