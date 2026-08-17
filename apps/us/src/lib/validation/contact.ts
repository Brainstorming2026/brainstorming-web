import { z } from 'zod'

export interface ContactMessages {
  firstName: string
  lastName: string
  companyEmail: string
  phone: string
  investment: string
}

export const DEFAULT_CONTACT_MESSAGES: ContactMessages = {
  firstName: 'Invalid first name',
  lastName: 'Invalid last name',
  companyEmail: 'Invalid email',
  phone: 'Invalid phone number',
  investment: 'Select an investment range',
}

export function makeContactSchema(m: ContactMessages = DEFAULT_CONTACT_MESSAGES) {
  return z.object({
    firstName: z.string().trim().min(1, m.firstName).max(100, m.firstName),
    lastName: z.string().trim().min(1, m.lastName).max(100, m.lastName),
    companyEmail: z.email(m.companyEmail).max(150, m.companyEmail),
    phone: z.string().trim().min(6, m.phone).max(30, m.phone),
    investment: z.string().trim().min(1, m.investment).max(60, m.investment),
    message: z.string().trim().max(2000).optional(),
    lang: z.enum(['en', 'es']).default('en'),
    turnstileToken: z.string().min(1, 'Verification required').max(2048),
    privacyConsent: z.literal(true, { error: 'You must accept the Privacy Policy' }),
    website: z.string().optional(), // honeypot
  })
}

export type ContactInput = z.infer<ReturnType<typeof makeContactSchema>>
