import { Heading, Hr, Link, Section, Text } from '@react-email/components'
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

function Field({ label, value, isLast }: { label: string, value: string, isLast?: boolean }) {
  return (
    <Section style={{ padding: '12px 16px', borderBottom: isLast ? undefined : `1px solid ${emailColors.mist}` }}>
      <Text style={{ color: emailColors.muted, fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.04em', textTransform: 'uppercase', margin: '0 0 2px' }}>
        {label}
      </Text>
      <Text style={{ color: emailColors.ink, fontSize: '15px', lineHeight: '22px', margin: 0, wordBreak: 'break-word' }}>
        {value}
      </Text>
    </Section>
  )
}

export function InternalLeadEmail({ sourceLabel, nombre, email, telefono, mensaje, guideTitle }: InternalLeadEmailProps) {
  const fields = [
    { label: 'Nombre', value: nombre },
    { label: 'Email', value: email },
    telefono && { label: 'Teléfono', value: telefono },
    guideTitle && { label: 'Guía', value: guideTitle },
    mensaje && { label: 'Mensaje', value: mensaje },
  ].filter((f): f is { label: string, value: string } => Boolean(f))

  return (
    <EmailLayout preview={`Nuevo lead — ${sourceLabel}: ${nombre}`}>
      <Text style={{ color: emailColors.primary, fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.04em', textTransform: 'uppercase', margin: '0 0 12px' }}>
        {sourceLabel}
      </Text>

      <Heading style={{ color: emailColors.ink, fontSize: '24px', lineHeight: '30px', fontWeight: 700, margin: '0 0 20px' }}>
        Nuevo lead
      </Heading>

      <Section style={{ backgroundColor: emailColors.surface, borderRadius: '12px', overflow: 'hidden', margin: '0 0 24px' }}>
        {fields.map((f, i) => (
          <Field key={f.label} label={f.label} value={f.value} isLast={i === fields.length - 1} />
        ))}
      </Section>

      <Link
        href={`mailto:${email}`}
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
        Responder a
        {' '}
        {nombre.split(' ')[0]}
      </Link>

      <Hr style={{ borderColor: emailColors.mist, margin: '24px 0 16px' }} />

      <Text style={{ color: emailColors.muted, fontSize: '12px', lineHeight: '18px', margin: 0 }}>
        También puedes responder directo a este correo — el reply-to ya apunta al lead.
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
  guideTitle: 'Los 10 mandamientos del Community Manager',
} satisfies InternalLeadEmailProps

export default InternalLeadEmail
