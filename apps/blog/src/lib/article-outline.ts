import type { ArticleSection } from '@/data/articles'

export interface OutlineItem {
  id: string
  label: string
}

/** Sin tildes ni signos: "¿Identificar y comprender?" → "identificar-y-comprender". */
export function slugifyHeading(text: string): string {
  return text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Un id único por sección, en el mismo orden (vacío si la sección no tiene subtítulo). Dos subtítulos iguales no
 * pueden compartir id: el segundo recibe un sufijo. Lo usan el cuerpo (los `id` de los h2) y el índice (los enlaces).
 */
export function sectionIds(sections: readonly Pick<ArticleSection, 'heading'>[]): string[] {
  const used = new Map<string, number>()
  return sections.map(({ heading }) => {
    const base = slugifyHeading(heading) || 'seccion'
    if (!heading.trim())
      return ''
    const seen = used.get(base) ?? 0
    used.set(base, seen + 1)
    return seen === 0 ? base : `${base}-${seen + 1}`
  })
}

/** Entradas del índice "En este artículo": las secciones con subtítulo. */
export function outlineOf(sections: readonly Pick<ArticleSection, 'heading'>[]): OutlineItem[] {
  const ids = sectionIds(sections)
  return sections.flatMap(({ heading }, index) => (ids[index] ? [{ id: ids[index], label: heading }] : []))
}
