import { z } from 'zod'

export interface SubscribeMessages {
  email: string
}

export const DEFAULT_SUBSCRIBE_MESSAGES: SubscribeMessages = {
  email: 'Correo inválido',
}

export function makeSubscribeSchema(m: SubscribeMessages = DEFAULT_SUBSCRIBE_MESSAGES) {
  return z.object({
    email: z.email(m.email).max(150, m.email),
    // Checkboxes de "temas de interes" — el footer no los tiene, los otros
    // 3 forms si. Opcional y libre (son labels de `data/posts.ts`, no un enum
    // cerrado en el server: agregar una categoria nueva no debe requerir tocar
    // este schema).
    topics: z.array(z.string().trim().min(1).max(60)).max(20).optional(),
    website: z.string().optional(), // honeypot
  })
}

export type SubscribeInput = z.infer<ReturnType<typeof makeSubscribeSchema>>
