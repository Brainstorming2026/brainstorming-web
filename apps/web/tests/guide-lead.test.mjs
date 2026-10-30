import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { createServer } from 'node:http'
import { registerHooks } from 'node:module'
// eslint-disable-next-line test/no-import-node-test
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const emails = []
const fixture = {
  slug: 'posicionar-marca-google',
  publishedAt: '2026-10-21T10:00:00.000Z',
  title: 'Título publicado nuevo',
  category: 'desarrollo-web',
  featured: true,
  cover: { url: 'https://files.brainstorming.la/nueva.webp', contentType: 'image/webp', sizeBytes: 123, fileName: 'nueva.webp' },
  pdf: { url: 'https://files.brainstorming.la/nueva.pdf', contentType: 'application/pdf', sizeBytes: 456, fileName: 'nueva.pdf' },
}

test('ambos formularios resuelven la revisión publicada; retiro o caída CMS jamás envían un PDF anterior', async () => {
  let status = 200
  let guides = [fixture]
  const server = createServer((_request, response) => {
    response.writeHead(status, { 'content-type': 'application/json' })
    response.end(JSON.stringify({ guides }))
  })
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
  const address = server.address()
  assert.ok(address && typeof address !== 'string')
  const apiUrl = `http://127.0.0.1:${address.port}`
  // Únicas sustituciones: entorno y servicios con efectos externos. Fuente/contrato/resolver/validación reales.
  const virtual = {
    'astro:env/server': `export const CMS_API_URL=${JSON.stringify(apiUrl)}, CMS_FILES_URL=undefined, CMS_CONTENT_TOKEN='test-only-token', CONTENT_SOURCE='cms'`,
    '@/components/emails/GuideDeliveryEmail': 'export const GuideDeliveryEmail = props => ({ kind: "delivery", ...props })',
    '@/components/emails/InternalLeadEmail': 'export const InternalLeadEmail = props => ({ kind: "internal", ...props })',
    '@/lib/email/send': 'export const sendEmail = async props => { globalThis[Symbol.for("guide-test-emails")].push(props); return props.template.kind !== globalThis[Symbol.for("guide-test-failure")] }',
    '@/lib/resend': 'export const EMAIL_INTERNAL_TO="test-team@example.invalid"',
    '@/lib/turnstile': 'export const verifyTurnstileToken=async()=>true',
    '@/lib/observability': 'export const captureError=()=>{}',
  }
  globalThis[Symbol.for('guide-test-emails')] = emails
  const hooks = registerHooks({
    resolve(specifier, context, nextResolve) {
      if (virtual[specifier])
        return { url: `guide-test:${specifier}`, shortCircuit: true }
      if (specifier.startsWith('@/')) {
        const app = context.parentURL.includes('/apps/blog/') ? 'blog' : 'web'
        const base = new URL(`../../${app}/src/${specifier.slice(2)}`, import.meta.url)
        const path = fileURLToPath(base)
        const extension = ['', '.ts', '.tsx'].find(suffix => existsSync(`${path}${suffix}`))
        if (extension !== undefined)
          return { url: `${base.href}${extension}`, shortCircuit: true }
      }
      return nextResolve(specifier, context)
    },
    load(url, context, nextLoad) {
      if (url.startsWith('guide-test:'))
        return { source: virtual[url.slice('guide-test:'.length)], format: 'module', shortCircuit: true }
      if (/\.(?:webp|png)$/.test(url))
        return { source: `export default { src:${JSON.stringify(url)}, width:400, height:300, format:'webp' }`, format: 'module', shortCircuit: true }
      if (url.includes('/apps/') && url.endsWith('.ts')) {
        const source = readFileSync(new URL(url), 'utf8')
        return { source: ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext } }).outputText, format: 'module', shortCircuit: true }
      }
      return nextLoad(url, context)
    },
  })
  try {
    const endpoints = [
      await import('../src/pages/api/guide-lead.ts'),
      await import('../../blog/src/pages/api/guide-lead.ts'),
    ]
    for (const endpoint of endpoints) {
      const submit = () => endpoint.POST({
        request: new Request('https://www.brainstorming.la/api/guide-lead', {
          method: 'POST',
          body: JSON.stringify({ nombre: 'Prueba', email: 'test@example.invalid', slug: fixture.slug, privacyConsent: true, turnstileToken: 'fake', pdf: 'https://evil.example/falso.pdf', title: 'Falso' }),
        }),
        site: new URL('https://www.brainstorming.la'),
        clientAddress: '127.0.0.1',
      })
      status = 200
      guides = [fixture]
      emails.length = 0
      assert.equal((await submit()).status, 200)
      const delivery = emails.find(email => email.template.kind === 'delivery')
      assert.equal(delivery.template.guideTitle, fixture.title)
      assert.equal(delivery.template.guideUrl, fixture.pdf.url)
      assert.equal(delivery.template.guideImageUrl, fixture.cover.url)
      guides = []
      emails.length = 0
      assert.equal((await submit()).status, 400)
      assert.equal(emails.length, 0)
      status = 503
      assert.equal((await submit()).status, 503)
      assert.equal(emails.length, 0)
      status = 200
      guides = [fixture]
      for (const kind of ['internal', 'delivery']) {
        emails.length = 0
        globalThis[Symbol.for('guide-test-failure')] = kind
        assert.equal((await submit()).status, 502)
        if (kind === 'internal')
          assert.equal(emails.some(email => email.template.kind === 'delivery'), false)
      }
      delete globalThis[Symbol.for('guide-test-failure')]
    }
  }
  finally {
    hooks.deregister()
    delete globalThis[Symbol.for('guide-test-emails')]
    delete globalThis[Symbol.for('guide-test-failure')]
    await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()))
  }
})
