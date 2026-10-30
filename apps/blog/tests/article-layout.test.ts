import assert from 'node:assert/strict'
// eslint-disable-next-line test/no-import-node-test
import { test } from 'node:test'
import { blockWidth } from '../src/lib/article-layout.ts'

test('la lectura va angosta y la imagen ancha solo si se pidió', () => {
  assert.equal(blockWidth({ type: 'paragraph', text: 'x' }), 'narrow')
  assert.equal(blockWidth({ type: 'quote', text: 'x' }), 'narrow')
  assert.equal(blockWidth({ type: 'image', image: 'https://x.test/a.png', wide: true }), 'wide')
  assert.equal(blockWidth({ type: 'image', image: 'https://x.test/a.png' }), 'narrow')
})

test('lo visual (cifras, pasos, imagen con texto) usa el ancho amplio y el recuadro la columna de lectura', () => {
  assert.equal(blockWidth({ type: 'stats', items: [] }), 'wide')
  assert.equal(blockWidth({ type: 'steps', items: [] }), 'wide')
  assert.equal(blockWidth({ type: 'split', image: 'x', alt: '', heading: '', text: '', imageSide: 'left' }), 'wide')
  assert.equal(blockWidth({ type: 'callout', style: 'tip', title: '', text: '' }), 'narrow')
})
