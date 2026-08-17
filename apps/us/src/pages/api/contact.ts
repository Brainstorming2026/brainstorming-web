import type { APIRoute } from 'astro'
import { ContactAckEmail } from '@/components/emails/ContactAckEmail'
import { InternalLeadEmail } from '@/components/emails/InternalLeadEmail'
import { sendEmail } from '@/lib/email/send'
import { isHoneypotTriggered } from '@/lib/honeypot'
import { upsertContact } from '@/lib/hubspot'
import { captureError } from '@/lib/observability'
import { EMAIL_INTERNAL_TO } from '@/lib/resend'
import { fail, ok } from '@/lib/responses'
import { makeContactSchema } from '@/lib/validation/contact'

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
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

  const { firstName, lastName, companyEmail, phone, investment, message, lang } = parsed.data
  const fullName = `${firstName} ${lastName}`.trim()

  // HubSpot es el registro del lead — critico, si falla el request falla
  // (no queremos perder el lead silenciosamente).
  const saved = await upsertContact({
    email: companyEmail,
    firstname: firstName,
    lastname: lastName,
    phone,
    lead_source: 'contact-us',
    investment_range: investment,
    message,
  })
  if (!saved) {
    captureError(new Error('HubSpot upsert failed'), { scope: 'contact', extra: { email: companyEmail } })
    return fail(502, 'We could not process your message. Please try again.')
  }

  // Ambos correos son best-effort: HubSpot ya es el registro critico del
  // lead (arriba), estos son notificaciones, no la unica copia del dato.
  await Promise.all([
    sendEmail({
      to: EMAIL_INTERNAL_TO,
      subject: `Nuevo lead — US Contact: ${fullName}`,
      template: InternalLeadEmail({ nombre: fullName, email: companyEmail, telefono: phone, mensaje: message, investmentRange: investment }),
      replyTo: companyEmail,
    }),
    sendEmail({
      to: companyEmail,
      subject: lang === 'es' ? 'Recibimos tu mensaje — Brainstorming' : 'We received your message — Brainstorming',
      template: ContactAckEmail({ firstName, lang }),
    }),
  ])

  return ok()
}
