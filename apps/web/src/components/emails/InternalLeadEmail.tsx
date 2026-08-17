import { Heading, Text } from '@react-email/components'
import { emailColors, EmailLayout } from '@/components/emails/EmailLayout'

export interface InternalLeadEmailProps {
  /** 'Contacto' | 'Guía práctica' — ya formateado para mostrar. */
  sourceLabel: string
  nombre: string
  email: string
  telefono?: string
  mensaje?: string
  guideTitle?: string
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

export function InternalLeadEmail({ sourceLabel, nombre, email, telefono, mensaje, guideTitle }: InternalLeadEmailProps) {
  return (
    <EmailLayout preview={`Nuevo lead — ${sourceLabel}: ${nombre}`}>
      <Text style={{ color: emailColors.primary, fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.04em', textTransform: 'uppercase', margin: '0 0 12px' }}>
        {sourceLabel}
      </Text>

      <Heading style={{ color: emailColors.ink, fontSize: '24px', lineHeight: '30px', fontWeight: 700, margin: '0 0 20px' }}>
        Nuevo lead
      </Heading>

      <Row label="Nombre" value={nombre} />
      <Row label="Email" value={email} />
      {telefono && <Row label="Teléfono" value={telefono} />}
      {guideTitle && <Row label="Guía" value={guideTitle} />}
      {mensaje && <Row label="Mensaje" value={mensaje} />}

      <Text style={{ color: emailColors.grayBody, fontSize: '13px', lineHeight: '20px', margin: '20px 0 0' }}>
        Responde directo a este correo para contactar al lead.
      </Text>
    </EmailLayout>
  )
}

InternalLeadEmail.PreviewProps = {
  sourceLabel: 'Contacto',
  nombre: 'Luis Angel',
  email: 'lead@example.com',
  telefono: '+51 999 999 999',
  mensaje: 'Quiero información sobre sus servicios de branding.',
} satisfies InternalLeadEmailProps

export default InternalLeadEmail
