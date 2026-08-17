import { z } from 'zod'

export interface ContactMessages {
  nombre: string
  telefono: string
  email: string
  mensaje: string
}

export const DEFAULT_CONTACT_MESSAGES: ContactMessages = {
  nombre: 'Nombre inválido',
  telefono: 'Teléfono inválido',
  email: 'Correo inválido',
  mensaje: 'Mensaje inválido',
}

export function makeContactSchema(m: ContactMessages = DEFAULT_CONTACT_MESSAGES) {
  return z.object({
    nombre: z.string().trim().min(2, m.nombre).max(100, m.nombre),
    telefono: z.string().trim().min(6, m.telefono).max(30, m.telefono),
    email: z.email(m.email).max(150, m.email),
    mensaje: z.string().trim().min(10, m.mensaje).max(2000, m.mensaje),
    turnstileToken: z.string().min(1, 'Verificación requerida').max(2048),
    privacyConsent: z.literal(true, { error: 'Debes aceptar la Política de Privacidad' }),
    website: z.string().optional(), // honeypot
  })
}

export type ContactInput = z.infer<ReturnType<typeof makeContactSchema>>
