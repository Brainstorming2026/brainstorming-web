import assert from 'node:assert/strict'
// El proyecto no instala un runner: Node alcanza para probar funciones puras.
// eslint-disable-next-line test/no-import-node-test
import { test } from 'node:test'
import { outlineOf, sectionIds, slugifyHeading } from '../src/lib/article-outline.ts'

test('slugifyHeading quita tildes, signos y espacios sobrantes', () => {
  assert.equal(slugifyHeading('¿Identificar y comprender?'), 'identificar-y-comprender')
  assert.equal(slugifyHeading('  Sector Turismo y comunicación de marca  '), 'sector-turismo-y-comunicacion-de-marca')
})

test('sectionIds deja vacías las secciones sin subtítulo y desambigua repetidos', () => {
  const ids = sectionIds([{ heading: '' }, { heading: 'Ideas' }, { heading: 'Ideas' }, { heading: 'Ideas!' }, { heading: 'Otro' }])
  assert.deepEqual(ids, ['', 'ideas', 'ideas-2', 'ideas-3', 'otro'])
})

test('outlineOf solo lista las secciones con subtítulo y conserva el texto original', () => {
  assert.deepEqual(outlineOf([{ heading: '' }, { heading: '¿Cómo empezar?' }, { heading: 'Cierre' }]), [
    { id: 'como-empezar', label: '¿Cómo empezar?' },
    { id: 'cierre', label: 'Cierre' },
  ])
  assert.deepEqual(outlineOf([]), [])
})
