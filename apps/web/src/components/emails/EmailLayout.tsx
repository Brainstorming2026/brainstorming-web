import type { ReactNode } from 'react'
import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import { redes } from '@/data/footer'
import { BRAINSTORMING_LOGO_URL, SOCIAL_ICON_URLS } from '@/lib/email/assets'

const COLOR = {
  ink: '#0f0f10',
  grayBody: '#54595f',
  muted: '#9a9a9a',
  mist: '#eef2f8',
  primary: '#7d44e4',
  surface: '#f7f9fc',
}

export interface EmailLayoutProps {
  preview: string
  children: ReactNode
}

export function EmailLayout({ preview, children }: EmailLayoutProps) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={{ backgroundColor: COLOR.surface, fontFamily: 'Helvetica, Arial, sans-serif', margin: 0, padding: '40px 16px' }}>
        <Container style={{ backgroundColor: '#ffffff', margin: '0 auto', maxWidth: '520px', borderRadius: '20px', overflow: 'hidden' }}>
          <div style={{ height: '4px', backgroundColor: COLOR.primary }} />

          <Section style={{ padding: '36px 40px 24px' }}>
            <Img src={BRAINSTORMING_LOGO_URL} alt="Brainstorming" width="152" style={{ display: 'block' }} />
          </Section>

          <Hr style={{ borderColor: COLOR.mist, margin: 0 }} />

          <Section style={{ padding: '32px 40px 40px' }}>
            {children}
          </Section>

          <Hr style={{ borderColor: COLOR.mist, margin: 0 }} />

          <Section style={{ padding: '32px 40px', textAlign: 'center' }}>
            <Text style={{ color: COLOR.grayBody, fontSize: '13px', lineHeight: '20px', margin: '0 0 24px' }}>
              Agencia de Marketing Digital y Desarrollo Web. <br />
            </Text>

            <Section align="center" style={{ width: `${redes.length * 44}px`, margin: '0 auto' }}>
              <Row align="center">
                {redes.map(r => (
                  <Column key={r.name} align="center" style={{ width: '44px' }}>
                    <Link href={r.href}>
                      <Img
                        src={SOCIAL_ICON_URLS[r.name]}
                        alt={r.label}
                        width="40"
                        height="40"
                        style={{ display: 'block', margin: '0 auto' }}
                      />
                    </Link>
                  </Column>
                ))}
              </Row>
            </Section>

            <Text style={{ color: COLOR.muted, fontSize: '12px', lineHeight: '18px', margin: '24px 0 0' }}>
              Brainstorming — brainstorming.la
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export { COLOR as emailColors }
