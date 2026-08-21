import { Button, Heading, Img, Section, Text } from '@react-email/components'
import { emailColors, EmailLayout } from '@/components/emails/EmailLayout'

export interface GuideDeliveryEmailProps {
  firstName: string
  guideTitle: string
  guideUrl: string
  /** Portada de la guia — ver lib/email/assets.ts#guideCoverEmailUrl. */
  guideImageUrl: string
}

export function GuideDeliveryEmail({ firstName, guideTitle, guideUrl, guideImageUrl }: GuideDeliveryEmailProps) {
  return (
    <EmailLayout preview={`Tu guía "${guideTitle}" ya está lista para descargar`}>
      <Text style={{ color: emailColors.primary, fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.04em', textTransform: 'uppercase', margin: '0 0 12px' }}>
        Guía práctica
      </Text>

      <Heading style={{ color: emailColors.ink, fontSize: '26px', lineHeight: '32px', fontWeight: 700, margin: '0 0 16px' }}>
        Hola
        {' '}
        {firstName}
        , tu guía ya está lista
      </Heading>

      <Text style={{ color: emailColors.grayBody, fontSize: '15px', lineHeight: '24px', margin: '0 0 24px' }}>
        Gracias por tu interés en el contenido de Brainstorming. Descarga tu copia de:
      </Text>

      <Section style={{ backgroundColor: emailColors.mist, borderRadius: '14px', overflow: 'hidden', margin: '0 0 28px' }}>
        <Img src={guideImageUrl} alt="" width="440" style={{ display: 'block', width: '100%', height: 'auto' }} />
        <Section style={{ padding: '18px 24px' }}>
          <Text style={{ color: emailColors.ink, fontSize: '17px', fontWeight: 700, lineHeight: '24px', margin: 0 }}>
            {guideTitle}
          </Text>
        </Section>
      </Section>

      <Button
        href={guideUrl}
        style={{
          backgroundColor: emailColors.primary,
          color: '#ffffff',
          padding: '14px 32px',
          borderRadius: '999px',
          fontWeight: 'bold',
          fontSize: '14px',
          textDecoration: 'none',
          display: 'inline-block',
        }}
      >
        Descargar guía
      </Button>

      <Text style={{ color: emailColors.grayBody, fontSize: '13px', lineHeight: '20px', margin: '28px 0 0' }}>
        Si el botón no funciona, copia y pega este enlace en tu navegador:
        {' '}
        <a href={guideUrl} style={{ color: emailColors.primary }}>{guideUrl}</a>
      </Text>
    </EmailLayout>
  )
}

GuideDeliveryEmail.PreviewProps = {
  firstName: 'Luis',
  guideTitle: '8 secretos que tu diseñador nunca te dirá al momento de crear tu logo',
  guideUrl: 'https://brainstorming.la/pdfs/8-secretos-crear-tu-logo.pdf',
  guideImageUrl: 'https://brainstorming.la/email/guides/8-secretos-crear-tu-logo.png',
} satisfies GuideDeliveryEmailProps

export default GuideDeliveryEmail
