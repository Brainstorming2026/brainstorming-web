import assert from 'node:assert/strict'
import { createServer } from 'node:http'
// El proyecto no necesita instalar un runner para probar contratos y HTTP del servidor.
// eslint-disable-next-line test/no-import-node-test
import { test } from 'node:test'
import { guidesResponse, toGuide } from '../src/lib/cms/guides.ts'
import { fetchGuides } from '../src/lib/cms/transport.ts'

const fixture = {
  slug: 'guia-nueva',
  publishedAt: '2026-10-21T10:00:00.000Z',
  title: 'Una guía nueva',
  category: 'optimizacion',
  featured: true,
  cover: { url: 'https://files.brainstorming.la/cover.webp', contentType: 'image/webp', sizeBytes: 100, fileName: 'cover.webp' },
  pdf: { url: 'https://files.brainstorming.la/guide.pdf', contentType: 'application/pdf', sizeBytes: 200, fileName: 'guide.pdf' },
}

test('el catálogo adapta una guía nueva sin depender de imágenes o PDF estáticos', () => {
  const { guides } = guidesResponse.parse({ guides: [fixture] })
  assert.deepEqual(toGuide(guides[0]!), {
    slug: 'guia-nueva',
    title: 'Una guía nueva',
    category: 'optimizacion',
    featured: true,
    image: fixture.cover.url,
    pdf: fixture.pdf.url,
  })
})

test('rechaza slugs repetidos, categorías desconocidas y archivos con MIME incorrecto', () => {
  for (const guides of [
    [fixture, fixture],
    [{ ...fixture, category: 'categoria-inventada' }],
    [{ ...fixture, pdf: { ...fixture.pdf, contentType: 'text/html' } }],
  ]) {
    assert.equal(guidesResponse.safeParse({ guides }).success, false)
  }
})

test('el transporte autentica, conserva un catálogo vacío y falla cerrado ante errores HTTP o archivos externos', async () => {
  let result = { status: 200, body: { guides: [fixture] } }
  let authorization: string | undefined
  const server = createServer((request, response) => {
    authorization = request.headers.authorization
    assert.equal(request.url, '/v1/content/guides')
    response.writeHead(result.status, { 'content-type': 'application/json' })
    response.end(JSON.stringify(result.body))
  })
  await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve))
  const address = server.address()
  assert.ok(address && typeof address !== 'string')
  const config = { apiUrl: `http://127.0.0.1:${address.port}`, token: 'test-only-token' }
  try {
    assert.equal((await fetchGuides(config))[0]?.title, fixture.title)
    assert.equal(authorization, 'Bearer test-only-token')
    result = { status: 200, body: { guides: [] } }
    assert.deepEqual(await fetchGuides(config), [])
    result = { status: 503, body: { guides: [fixture] } }
    await assert.rejects(fetchGuides(config), /503/)
    result = { status: 200, body: { guides: [{ ...fixture, pdf: { ...fixture.pdf, url: 'https://evil.example/guide.pdf' } }] } }
    await assert.rejects(fetchGuides(config), /archivo/)
    result = { status: 200, body: { guides: [{ ...fixture, cover: { ...fixture.cover, url: 'http://169.254.169.254/metadata' } }] } }
    await assert.rejects(fetchGuides(config), /archivo/)
  }
  finally {
    await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()))
  }
})
