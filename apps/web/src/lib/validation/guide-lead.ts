import { z } from 'zod'

export interface GuideLeadMessages {
  nombre: string
  email: string
  slug: string
}

export const DEFAULT_GUIDE_LEAD_MESSAGES: GuideLeadMessages = {
  nombre: 'Nombre inválido',
  email: 'Correo inválido',
  slug: 'Guía inválida',
}

export function makeGuideLeadSchema(m: GuideLeadMessages = DEFAULT_GUIDE_LEAD_MESSAGES) {
  return z.object({
    nombre: z.string().trim().min(2, m.nombre).max(100, m.nombre),
    email: z.email(m.email).max(150, m.email),
    slug: z.string().trim().min(1, m.slug).max(200, m.slug),
    privacyConsent: z.literal(true, { error: 'Debes aceptar la Política de Privacidad' }),
    turnstileToken: z.string().max(2048).optional(), // validado en el servidor por verifyTurnstileToken
    website: z.string().optional(), // honeypot
  })
}

export type GuideLeadInput = z.infer<ReturnType<typeof makeGuideLeadSchema>>
