import type { APIRoute } from 'astro'
import { GuideDeliveryEmail } from '@/components/emails/GuideDeliveryEmail'
import { InternalLeadEmail } from '@/components/emails/InternalLeadEmail'
import { sendEmail } from '@/lib/email/send'
import { guideCoverEmailUrl } from '@/lib/email/assets'
import { resolveGuideBySlug } from '@/lib/guide-lead'
import { isHoneypotTriggered } from '@/lib/honeypot'
import { EMAIL_INTERNAL_TO } from '@/lib/resend'
import { fail, ok } from '@/lib/responses'
import { makeGuideLeadSchema } from '@/lib/validation/guide-lead'

export const prerender = false

export const POST: APIRoute = async ({ request, site }) => {
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

  const { nombre, email, slug } = parsed.data

  // Nunca se confia en un pdf/titulo enviado por el cliente — se resuelve
  // desde `data/guides.ts` a partir del slug.
  const guide = resolveGuideBySlug(slug)
  if (!guide) {
    return fail(400, 'Invalid data')
  }

  const guideUrl = new URL(guide.pdf, site ?? 'https://brainstorming.la').toString()

  await Promise.all([
    sendEmail({
      to: EMAIL_INTERNAL_TO,
      subject: `Nuevo lead — Guía: ${nombre}`,
      template: InternalLeadEmail({ sourceLabel: 'Guía práctica', nombre, email, guideTitle: guide.title }),
      replyTo: email,
    }),
    sendEmail({
      to: email,
      subject: `Tu guía "${guide.title}" está lista`,
      template: GuideDeliveryEmail({ firstName: nombre, guideTitle: guide.title, guideUrl, guideImageUrl: guideCoverEmailUrl(guide.slug) }),
    }),
  ])

  return ok()
}
