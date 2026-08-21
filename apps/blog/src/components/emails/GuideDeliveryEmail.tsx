import { Heading, Img, Link, Section, Text } from '@react-email/components'
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
    <EmailLayout preview={`Tu guía "${guideTitle}" está lista`}>
      <Text style={{ color: emailColors.primary, fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.04em', textTransform: 'uppercase', margin: '0 0 12px' }}>
        Guía descargable
      </Text>

      <Heading style={{ color: emailColors.ink, fontSize: '26px', lineHeight: '32px', fontWeight: 700, margin: '0 0 16px' }}>
        Gracias
        {' '}
        {firstName}
        , aquí está tu guía
      </Heading>

      <Section style={{ backgroundColor: emailColors.surface, borderRadius: '14px', overflow: 'hidden', margin: '0 0 24px' }}>
        <Img src={guideImageUrl} alt="" width="440" style={{ display: 'block', width: '100%', height: 'auto' }} />
        <Section style={{ padding: '18px 24px' }}>
          <Text style={{ color: emailColors.ink, fontSize: '15px', fontWeight: 700, lineHeight: '22px', margin: 0 }}>
            {guideTitle}
          </Text>
        </Section>
      </Section>

      <Link
        href={guideUrl}
        style={{
          display: 'inline-block',
          backgroundColor: emailColors.primary,
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: 'bold',
          textDecoration: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
        }}
      >
        Descargar guía
      </Link>
    </EmailLayout>
  )
}

GuideDeliveryEmail.PreviewProps = {
  firstName: 'Luis',
  guideTitle: '16 mandamientos para ser un buen Community Manager',
  guideUrl: 'https://brainstorming.la/pdfs/mandamientos-community-manager.pdf',
  guideImageUrl: 'https://brainstorming.la/email/guides/mandamientos-community-manager.png',
} satisfies GuideDeliveryEmailProps

export default GuideDeliveryEmail
