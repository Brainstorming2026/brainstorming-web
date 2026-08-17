import { Heading, Text } from '@react-email/components'
import { emailColors, EmailLayout } from '@/components/emails/EmailLayout'

export interface ContactAckEmailProps {
  firstName: string
  lang: 'en' | 'es'
}

const COPY = {
  en: {
    preview: 'We received your message, we\'ll be in touch soon',
    eyebrow: 'Message received',
    heading: (name: string) => `Thanks ${name}, we got your message`,
    body1: 'Our team will review your request and get in touch soon to talk about your project.',
    body2Prefix: 'In the meantime, take a look at our work at',
    footerTagline: 'Marketing Agency — Branding, Web Development & Inbound Marketing',
  },
  es: {
    preview: 'Recibimos tu mensaje, te contactaremos pronto',
    eyebrow: 'Mensaje recibido',
    heading: (name: string) => `Gracias ${name}, ya vimos tu mensaje`,
    body1: 'Nuestro equipo revisará tu solicitud y te contactará muy pronto para conversar sobre tu proyecto.',
    body2Prefix: 'Mientras tanto, puedes conocer más de nuestro trabajo en',
    footerTagline: 'Agencia de Marketing — Branding, Desarrollo Web e Inbound Marketing',
  },
} as const

export function ContactAckEmail({ firstName, lang }: ContactAckEmailProps) {
  const c = COPY[lang]

  return (
    <EmailLayout preview={c.preview} footerTagline={c.footerTagline}>
      <Text style={{ color: emailColors.primary, fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.04em', textTransform: 'uppercase', margin: '0 0 12px' }}>
        {c.eyebrow}
      </Text>

      <Heading style={{ color: emailColors.ink, fontSize: '26px', lineHeight: '32px', fontWeight: 700, margin: '0 0 16px' }}>
        {c.heading(firstName)}
      </Heading>

      <Text style={{ color: emailColors.grayBody, fontSize: '15px', lineHeight: '24px', margin: '0 0 8px' }}>
        {c.body1}
      </Text>

      <Text style={{ color: emailColors.grayBody, fontSize: '15px', lineHeight: '24px', margin: 0 }}>
        {c.body2Prefix}
        {' '}
        <a href="https://us.brainstorming.la" style={{ color: emailColors.primary }}>us.brainstorming.la</a>
        .
      </Text>
    </EmailLayout>
  )
}

ContactAckEmail.PreviewProps = {
  firstName: 'Luis',
  lang: 'en',
} satisfies ContactAckEmailProps

export default ContactAckEmail
