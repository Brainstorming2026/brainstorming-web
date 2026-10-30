import assert from 'node:assert/strict'
// eslint-disable-next-line test/no-import-node-test
import { test } from 'node:test'
import { MAX_LEAD_LENGTH, splitLead } from '../src/lib/article-lead.ts'

test('un primer párrafo corto se destaca y el resto queda aparte', () => {
  assert.deepEqual(splitLead(['Corto.', 'Segundo.']), { lead: 'Corto.', rest: ['Segundo.'] })
})

test('un primer párrafo largo no se destaca: todo se lee en tamaño normal', () => {
  const long = 'a'.repeat(MAX_LEAD_LENGTH + 1)
  assert.deepEqual(splitLead([long, 'Otro.']), { lead: null, rest: [long, 'Otro.'] })
  assert.equal(splitLead(['a'.repeat(MAX_LEAD_LENGTH)]).lead, 'a'.repeat(MAX_LEAD_LENGTH))
})

test('descarta vacíos y espacios, y tolera una introducción vacía', () => {
  assert.deepEqual(splitLead(['  ', '  Hola  ', '']), { lead: 'Hola', rest: [] })
  assert.deepEqual(splitLead([]), { lead: null, rest: [] })
})
