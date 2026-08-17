import type { ReactElement } from 'react'
import { render } from '@react-email/render'
import { captureError } from '@/lib/observability'
import { EMAIL_FROM, resend } from '@/lib/resend'

export interface SendEmailInput {
  to: string
  subject: string
  template: ReactElement
  /** Para responder directo al lead con un click desde el email interno. */
  replyTo?: string
}

/**
 * Envio best-effort: nunca lanza. Si Resend falla, se loguea y el caller
 * decide si eso bloquea el request (ver criterio de criticidad por caso).
 */
export async function sendEmail(input: SendEmailInput): Promise<boolean> {
  try {
    const html = await render(input.template)
    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: input.to,
      subject: input.subject,
      html,
      replyTo: input.replyTo,
    })
    if (error) {
      captureError(error, { scope: 'email', extra: { to: input.to, subject: input.subject } })
      return false
    }
    return true
  }
  catch (err) {
    captureError(err, { scope: 'email', extra: { to: input.to, subject: input.subject } })
    return false
  }
}
