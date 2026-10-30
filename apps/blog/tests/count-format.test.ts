import assert from 'node:assert/strict'
// eslint-disable-next-line test/no-import-node-test
import { test } from 'node:test'
import { formatCount, parseCount } from '../src/lib/motion/count-format.ts'

test('parseCount separa prefijo, número y sufijo', () => {
  assert.deepEqual(parseCount('92%'), { prefix: '', target: 92, decimals: 0, separator: '.', suffix: '%' })
  assert.deepEqual(parseCount('S/ 1.1M'), { prefix: 'S/ ', target: 1.1, decimals: 1, separator: '.', suffix: 'M' })
  assert.deepEqual(parseCount('+3,5x'), { prefix: '+', target: 3.5, decimals: 1, separator: ',', suffix: 'x' })
})

test('parseCount no anima lo ambiguo o lo que no es una cifra', () => {
  assert.equal(parseCount('1.200'), null)
  assert.equal(parseCount('24/7'), null)
  assert.equal(parseCount('Mucho'), null)
  assert.equal(parseCount(''), null)
})

test('formatCount conserva decimales, separador, prefijo y sufijo', () => {
  const parts = parseCount('S/ 1,5M')!
  assert.equal(formatCount(parts, 0), 'S/ 0,0M')
  assert.equal(formatCount(parts, 1.5), 'S/ 1,5M')
  assert.equal(formatCount(parseCount('92%')!, 45.6), '46%')
})
