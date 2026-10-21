import type { APIRoute } from 'astro'
import { GuideDeliveryEmail } from '@/components/emails/GuideDeliveryEmail'
import { InternalLeadEmail } from '@/components/emails/InternalLeadEmail'
import { guideCoverEmailUrl } from '@/lib/email/assets'
import { sendEmail } from '@/lib/email/send'
import { resolveGuideBySlug } from '@/lib/guide-lead'
import { isHoneypotTriggered } from '@/lib/honeypot'
import { EMAIL_INTERNAL_TO } from '@/lib/resend'
import { fail, ok } from '@/lib/responses'
import { verifyTurnstileToken } from '@/lib/turnstile'
import { makeGuideLeadSchema } from '@/lib/validation/guide-lead'

export const prerender = false

export const POST: APIRoute = async ({ request, site, clientAddress }) => {
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

  const { nombre, email, slug, turnstileToken } = parsed.data

  // Este endpoint manda un correo al email que escribe el visitante: sin
  // verificacion humana seria un relay de spam a terceros.
  if (!await verifyTurnstileToken(turnstileToken, clientAddress)) {
    return fail(403, 'Verificación fallida. Intenta de nuevo.')
  }

  // Siempre resolver por slug contra la fuente publicada, sin aceptar URL del visitante.
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

  const guideUrl = new URL(guide.pdf, site ?? new URL(request.url)).toString()

  const notified = await sendEmail({
    to: EMAIL_INTERNAL_TO,
    subject: `Nuevo lead — Guía: ${nombre}`,
    template: InternalLeadEmail({ sourceLabel: 'Guía práctica', nombre, email, guideTitle: guide.title }),
    replyTo: email,
  })
  if (!notified)
    return fail(502, 'No se pudo procesar tu solicitud. Intenta de nuevo.')

  const delivered = await sendEmail({
    to: email,
    subject: `Tu guía "${guide.title}" está lista`,
    template: GuideDeliveryEmail({ firstName: nombre, guideTitle: guide.title, guideUrl, guideImageUrl: typeof guide.image === 'string' ? guide.image : guideCoverEmailUrl(guide.slug) }),
  })
  if (!delivered)
    return fail(502, 'No se pudo enviar la guía. Intenta de nuevo.')

  return ok()
}
