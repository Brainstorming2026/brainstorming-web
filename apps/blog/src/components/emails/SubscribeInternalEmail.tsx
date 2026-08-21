import { Heading, Section, Text } from '@react-email/components'
import { emailColors, EmailLayout } from '@/components/emails/EmailLayout'

export interface SubscribeInternalEmailProps {
  email: string
  topics?: string[]
  source: string
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

export function SubscribeInternalEmail({ email, topics, source }: SubscribeInternalEmailProps) {
  const fields = [
    { label: 'Email', value: email },
    { label: 'Origen', value: source },
    topics && topics.length > 0 && { label: 'Temas de interés', value: topics.join(', ') },
  ].filter((f): f is { label: string, value: string } => Boolean(f))

  return (
    <EmailLayout preview={`Nuevo suscriptor — Blog: ${email}`}>
      <Text style={{ color: emailColors.primary, fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.04em', textTransform: 'uppercase', margin: '0 0 12px' }}>
        Newsletter — Blog
      </Text>

      <Heading style={{ color: emailColors.ink, fontSize: '24px', lineHeight: '30px', fontWeight: 700, margin: '0 0 20px' }}>
        Nuevo suscriptor
      </Heading>

      <Section style={{ backgroundColor: emailColors.surface, borderRadius: '12px', overflow: 'hidden' }}>
        {fields.map((f, i) => (
          <Field key={f.label} label={f.label} value={f.value} isLast={i === fields.length - 1} />
        ))}
      </Section>
    </EmailLayout>
  )
}

SubscribeInternalEmail.PreviewProps = {
  email: 'lead@example.com',
  topics: ['Desarrollo Web', 'Inbound Marketing'],
  source: 'Footer',
} satisfies SubscribeInternalEmailProps

export default SubscribeInternalEmail
