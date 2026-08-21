import { Heading, Text } from '@react-email/components'
import { emailColors, EmailLayout } from '@/components/emails/EmailLayout'

export interface SubscribeWelcomeEmailProps {
  topics?: string[]
}

export function SubscribeWelcomeEmail({ topics }: SubscribeWelcomeEmailProps) {
  return (
    <EmailLayout preview="Ya estás suscrito al Brainstorming Blog">
      <Text style={{ color: emailColors.primary, fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.04em', textTransform: 'uppercase', margin: '0 0 12px' }}>
        Suscripción confirmada
      </Text>

      <Heading style={{ color: emailColors.ink, fontSize: '26px', lineHeight: '32px', fontWeight: 700, margin: '0 0 16px' }}>
        ¡Bienvenido al Brainstorming Blog!
      </Heading>

      <Text style={{ color: emailColors.grayBody, fontSize: '15px', lineHeight: '24px', margin: '0 0 8px' }}>
        A partir de ahora te avisaremos cuando publiquemos contenido nuevo
        {topics && topics.length > 0 ? ' sobre los temas que elegiste' : ''}
        .
      </Text>

      <Text style={{ color: emailColors.grayBody, fontSize: '15px', lineHeight: '24px', margin: 0 }}>
        Mientras tanto, puedes revisar nuestros últimos artículos en
        {' '}
        <a href="https://blog.brainstorming.la" style={{ color: emailColors.primary }}>blog.brainstorming.la</a>
        .
      </Text>
    </EmailLayout>
  )
}

SubscribeWelcomeEmail.PreviewProps = {
  topics: ['Desarrollo Web', 'Inbound Marketing'],
} satisfies SubscribeWelcomeEmailProps

export default SubscribeWelcomeEmail
