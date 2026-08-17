import { Heading, Text } from '@react-email/components'
import { emailColors, EmailLayout } from '@/components/emails/EmailLayout'

export interface InternalLeadEmailProps {
  nombre: string
  email: string
  telefono?: string
  mensaje?: string
  investmentRange?: string
}

function Row({ label, value }: { label: string, value: string }) {
  return (
    <Text style={{ color: emailColors.grayBody, fontSize: '14px', lineHeight: '22px', margin: '0 0 4px' }}>
      <strong style={{ color: emailColors.ink }}>
        {label}
        :
      </strong>
      {' '}
      {value}
    </Text>
  )
}

export function InternalLeadEmail({ nombre, email, telefono, mensaje, investmentRange }: InternalLeadEmailProps) {
  return (
    <EmailLayout preview={`Nuevo lead — US Contact: ${nombre}`} footerTagline="Agencia de Marketing — Branding, Desarrollo Web e Inbound Marketing">
      <Text style={{ color: emailColors.primary, fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.04em', textTransform: 'uppercase', margin: '0 0 12px' }}>
        Contacto — US Site
      </Text>

      <Heading style={{ color: emailColors.ink, fontSize: '24px', lineHeight: '30px', fontWeight: 700, margin: '0 0 20px' }}>
        Nuevo lead
      </Heading>

      <Row label="Nombre" value={nombre} />
      <Row label="Email" value={email} />
      {telefono && <Row label="Teléfono" value={telefono} />}
      {investmentRange && <Row label="Inversión anual" value={investmentRange} />}
      {mensaje && <Row label="Mensaje" value={mensaje} />}

      <Text style={{ color: emailColors.grayBody, fontSize: '13px', lineHeight: '20px', margin: '20px 0 0' }}>
        Responde directo a este correo para contactar al lead.
      </Text>
    </EmailLayout>
  )
}

InternalLeadEmail.PreviewProps = {
  nombre: 'John Doe',
  email: 'lead@example.com',
  telefono: '+1 555 555 5555',
  investmentRange: '$50,000 - $100,000',
  mensaje: 'Interested in a full branding + web project.',
} satisfies InternalLeadEmailProps

export default InternalLeadEmail
