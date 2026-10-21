const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
/** Convert the original, visible Spanish publication date without inventing times. */
export function publicationDate(value: string): string | undefined {
  const match = value.trim().toLowerCase().match(/^(\d{1,2})\s+(\w+)\s+(\d{4})$/)
  if (!match)
    return undefined
  const month = months.indexOf(match[2]) + 1
  const day = Number(match[1])
  if (!month || day < 1 || day > 31)
    return undefined
  return `${match[3]}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}
export function excerpt(text: string, limit = 160): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= limit)
    return clean
  const end = clean.lastIndexOf(' ', limit - 1)
  return `${clean.slice(0, end > 0 ? end : limit - 1).replace(/[,:;]$/, '')}…`
}

/** "2024-03-18" → "18 marzo 2024": el formato visible que ya usan los artículos. */
export function spanishDate(iso: string): string {
  const match = iso.match(/^(\d{4})-(\d{2})-(\d{2})/)
  if (!match)
    return iso
  return `${Number(match[3])} ${months[Number(match[2]) - 1]} ${match[1]}`
}
