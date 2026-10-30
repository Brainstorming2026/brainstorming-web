/** "92%", "S/ 1.1M", "+3": prefijo, número (entero o con 1–2 decimales) y sufijo. Cualquier otra forma no se anima. */
const PARTS = /^(\D*)(\d+(?:[.,]\d{1,2})?)(\D*)$/

export interface CountParts {
  prefix: string
  target: number
  decimals: number
  separator: '.' | ','
  suffix: string
}

/** `null` si el texto no es un número animable (p. ej. "1.200", que en español son mil doscientos, o "24/7"). */
export function parseCount(text: string): CountParts | null {
  const match = PARTS.exec(text.trim())
  if (!match)
    return null
  const [, prefix, number, suffix] = match
  const separator = number.includes(',') ? ',' : '.'
  const decimals = number.includes(separator) ? number.length - number.indexOf(separator) - 1 : 0
  return { prefix, target: Number(number.replace(',', '.')), decimals, separator, suffix }
}

export function formatCount({ prefix, decimals, separator, suffix }: CountParts, value: number): string {
  return `${prefix}${value.toFixed(decimals).replace('.', separator)}${suffix}`
}
