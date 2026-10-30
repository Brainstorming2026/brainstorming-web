import type { APIRoute } from 'astro'
import { GuideDeliveryEmail } from '@/components/emails/GuideDeliveryEmail'
import { InternalLeadEmail } from '@/components/emails/InternalLeadEmail'
import { sendEmail } from '@/lib/email/send'
import { resolveGuideBySlug } from '@/lib/guide-lead'
import { isHoneypotTriggered } from '@/lib/honeypot'
import { captureError } from '@/lib/observability'
import { EMAIL_INTERNAL_TO } from '@/lib/resend'
import { fail, ok } from '@/lib/responses'
import { verifyTurnstileToken } from '@/lib/turnstile'
import { makeGuideLeadSchema } from '@/lib/validation/guide-lead'

export const prerender = false

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

  const parsed = makeGuideLeadSchema().safeParse(body)
  if (!parsed.success) {
    console.warn('[guide-lead] validation failed:', parsed.error.issues)
    return fail(400, 'Invalid data')
  }

  const { nombre, email, telefono, empresa, slug, turnstileToken } = parsed.data

  // Este endpoint manda un correo al email que escribe el visitante: sin
  // verificacion humana seria un relay de spam a terceros.
  if (!await verifyTurnstileToken(turnstileToken, clientAddress)) {
    return fail(403, 'Verificación fallida. Intenta de nuevo.')
  }

  // Un fallo del CMS nunca autoriza entregar el PDF de una revisión anterior.
  let guide
  try {
    guide = await resolveGuideBySlug(slug)
  }
  catch {
    console.error('[guide-lead] catálogo de guías no disponible')
    return fail(503, 'La guía no está disponible temporalmente. Intenta de nuevo.')
  }
  if (!guide) {
    return fail(400, 'Invalid data')
  }

  // Sin CRM todavia (ver plan de integracion pendiente), este correo interno
  // es el UNICO registro del lead — critico, si falla el request falla para
  // no perder el lead en silencio.
  const notified = await sendEmail({
    to: EMAIL_INTERNAL_TO,
    subject: `Nuevo lead — Guía: ${nombre}`,
    template: InternalLeadEmail({ nombre, email, telefono, empresa, guideTitle: guide.title }),
    replyTo: email,
  })
  if (!notified) {
    captureError(new Error('Internal notification failed'), { scope: 'guide-lead', extra: { email, slug } })
    return fail(502, 'No se pudo procesar tu solicitud. Intenta de nuevo.')
  }

  const delivered = await sendEmail({
    to: email,
    subject: `Tu guía "${guide.title}" está lista`,
    template: GuideDeliveryEmail({ firstName: nombre, guideTitle: guide.title, guideUrl: guide.pdf, guideImageUrl: guide.coverUrl }),
  })
  if (!delivered)
    return fail(502, 'No se pudo enviar la guía. Intenta de nuevo.')

  return ok()
}
