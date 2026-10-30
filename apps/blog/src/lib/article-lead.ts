/** Hasta cuántos caracteres un párrafo cabe como "destacado" sin ocupar media pantalla en tamaño grande. */
export const MAX_LEAD_LENGTH = 300

export interface LeadSplit {
  /** Párrafo que se muestra grande, o `null` si el primero es demasiado largo para destacarse. */
  lead: string | null
  /** Los demás párrafos, en tamaño de lectura normal. */
  rest: string[]
}

/**
 * Separa la introducción en "destacado" y resto. Un destacado en tamaño grande solo funciona si es corto: un párrafo
 * de diez líneas a 24 px cansa, así que entonces todo se lee en tamaño normal. Los párrafos vacíos se descartan.
 */
export function splitLead(paragraphs: readonly string[]): LeadSplit {
  const clean = paragraphs.map(paragraph => paragraph.trim()).filter(Boolean)
  const [first, ...others] = clean
  if (first === undefined)
    return { lead: null, rest: [] }
  return first.length <= MAX_LEAD_LENGTH ? { lead: first, rest: others } : { lead: null, rest: clean }
}
