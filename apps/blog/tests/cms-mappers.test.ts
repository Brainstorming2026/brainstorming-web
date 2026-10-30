import assert from 'node:assert/strict'
// eslint-disable-next-line test/no-import-node-test
import { test } from 'node:test'
import { articlePreviewSchema, publishedArticleSchema } from '../src/lib/cms/contract.ts'

const file = { url: 'https://files.test/a.png', contentType: 'image/png', sizeBytes: 10, fileName: 'a.png' }
const base = {
  slug: 'a',
  publishedAt: '2026-10-21T00:00:00Z',
  editorialDate: '2026-10-21',
  title: 'T',
  kicker: '',
  seoTitle: null,
  excerpt: 'R',
  readingMinutes: 1,
  category: { slug: 'c', label: 'C', description: '' },
  author: null,
  hero: file,
  intro: [],
}

test('un artículo sin opciones visuales (API anterior) se ve como siempre', () => {
  const parsed = publishedArticleSchema.parse({ ...base, blocks: [] })
  assert.equal(parsed.heroStyle, 'full')
  assert.equal(parsed.accent, 'violet')
})

test('las opciones visuales válidas se conservan y las desconocidas rompen el build', () => {
  assert.equal(publishedArticleSchema.parse({ ...base, blocks: [], heroStyle: 'centered', accent: 'coral' }).heroStyle, 'centered')
  assert.equal(publishedArticleSchema.safeParse({ ...base, blocks: [], accent: '#ff0000' }).success, false)
})

test('el contrato acepta los cuatro bloques nuevos y rechaza uno desconocido', () => {
  const blocks = [
    { type: 'stats', items: [{ value: '92%', label: 'x' }] },
    { type: 'steps', heading: '', items: [{ title: 'a', text: 'b' }] },
    { type: 'callout', style: 'idea', title: '', text: 'x' },
    { type: 'split', file, alt: 'a', heading: 'h', text: 't', imageSide: 'left' },
  ]
  assert.equal(publishedArticleSchema.safeParse({ ...base, blocks }).success, true)
  assert.equal(publishedArticleSchema.safeParse({ ...base, blocks: [{ type: 'carrusel' }] }).success, false)
})

test('una vista previa admite una imagen con texto aún sin imagen', () => {
  const preview = {
    ...base,
    status: 'draft',
    category: null,
    hero: null,
    problems: [],
    blocks: [{ type: 'split', file: null, alt: '', heading: '', text: '', imageSide: 'right' }],
  }
  assert.equal(articlePreviewSchema.safeParse(preview).success, true)
})
