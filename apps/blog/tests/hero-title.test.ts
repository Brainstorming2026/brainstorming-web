import assert from 'node:assert/strict'
// eslint-disable-next-line test/no-import-node-test
import { test } from 'node:test'
import { heroTitleClass } from '../src/lib/hero-title.ts'

const text = (n: number) => 'a'.repeat(n)

test('un título más largo nunca recibe un tamaño mayor que uno corto', () => {
  const short = heroTitleClass(text(40))
  const medium = heroTitleClass(text(90))
  const long = heroTitleClass(text(160))
  assert.notEqual(short, medium)
  assert.notEqual(medium, long)
  assert.match(short, /lg:text-5xl/)
  assert.match(long, /lg:text-4xl/)
})

test('los umbrales son 60 y 110 caracteres, ignorando espacios de los extremos', () => {
  assert.equal(heroTitleClass(text(60)), heroTitleClass(text(10)))
  assert.notEqual(heroTitleClass(text(61)), heroTitleClass(text(60)))
  assert.equal(heroTitleClass(text(110)), heroTitleClass(text(61)))
  assert.notEqual(heroTitleClass(text(111)), heroTitleClass(text(110)))
  assert.equal(heroTitleClass(`   ${text(60)}   `), heroTitleClass(text(60)))
})

test('junto a una imagen (dividida) el título va un paso más chico que a lo ancho', () => {
  assert.notEqual(heroTitleClass(text(40), 'narrow'), heroTitleClass(text(40), 'wide'))
  assert.match(heroTitleClass(text(40), 'narrow'), /lg:text-\[2\.5rem\]/)
})
