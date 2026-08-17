import { Heading, Text } from '@react-email/components'
import { emailColors, EmailLayout } from '@/components/emails/EmailLayout'

export interface ContactAckEmailProps {
  firstName: string
}

export function ContactAckEmail({ firstName }: ContactAckEmailProps) {
  return (
    <EmailLayout preview="Recibimos tu mensaje, te contactaremos pronto">
      <Text style={{ color: emailColors.primary, fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.04em', textTransform: 'uppercase', margin: '0 0 12px' }}>
        Mensaje recibido
      </Text>

      <Heading style={{ color: emailColors.ink, fontSize: '26px', lineHeight: '32px', fontWeight: 700, margin: '0 0 16px' }}>
        Gracias
        {' '}
        {firstName}
        , ya vimos tu mensaje
      </Heading>

      <Text style={{ color: emailColors.grayBody, fontSize: '15px', lineHeight: '24px', margin: '0 0 8px' }}>
        Nuestro equipo revisará tu solicitud y te contactará muy pronto para conversar sobre tu proyecto.
      </Text>

      <Text style={{ color: emailColors.grayBody, fontSize: '15px', lineHeight: '24px', margin: 0 }}>
        Mientras tanto, puedes conocer más de nuestro trabajo en
        {' '}
        <a href="https://brainstorming.la/proyectos" style={{ color: emailColors.primary }}>brainstorming.la/proyectos</a>
        .
      </Text>
    </EmailLayout>
  )
}

ContactAckEmail.PreviewProps = {
  firstName: 'Luis',
} satisfies ContactAckEmailProps

export default ContactAckEmail
