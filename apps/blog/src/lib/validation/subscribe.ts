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
    topics: z.array(z.string().trim().min(1).max(60)).max(20).optional(),
    turnstileToken: z.string().max(2048).optional(),
    website: z.string().optional(), // honeypot
  })
}

export type SubscribeInput = z.infer<ReturnType<typeof makeSubscribeSchema>>
