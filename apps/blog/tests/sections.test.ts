import assert from 'node:assert/strict'
// eslint-disable-next-line test/no-import-node-test
import { test } from 'node:test'
import { groupIntoSections } from '../src/lib/cms/sections.ts'

interface B { kind: string, heading?: string, drawable?: boolean }
const map = (b: B) => (b.drawable === false ? null : b.kind)
const headingOf = (b: B) => (b.heading === undefined ? null : b.heading)

test('un bloque con título abre sección y los demás se quedan en ella', () => {
  const sections = groupIntoSections(
    [{ kind: 'text', heading: 'Uno' }, { kind: 'image' }, { kind: 'stats' }, { kind: 'steps', heading: 'Dos' }, { kind: 'quote' }],
    map,
    headingOf,
  )
  assert.deepEqual(sections, [
    { heading: 'Uno', blocks: ['text', 'image', 'stats'] },
    { heading: 'Dos', blocks: ['steps', 'quote'] },
  ])
})

test('si el primer bloque no abre sección, se crea una sin título', () => {
  assert.deepEqual(groupIntoSections([{ kind: 'image' }, { kind: 'text', heading: 'A' }], map, headingOf), [
    { heading: '', blocks: ['image'] },
    { heading: 'A', blocks: ['text'] },
  ])
})

test('un texto sin título abre una sección sin título', () => {
  assert.deepEqual(groupIntoSections([{ kind: 'text', heading: '' }, { kind: 'cta' }], map, headingOf), [
    { heading: '', blocks: ['text', 'cta'] },
  ])
})

test('un bloque que no se puede dibujar se omite sin abrir sección ni dejar hueco', () => {
  assert.deepEqual(
    groupIntoSections([{ kind: 'text', heading: 'A' }, { kind: 'split', drawable: false, heading: 'X' }, { kind: 'cta' }], map, headingOf),
    [{ heading: 'A', blocks: ['text', 'cta'] }],
  )
  assert.deepEqual(groupIntoSections([], map, headingOf), [])
})
