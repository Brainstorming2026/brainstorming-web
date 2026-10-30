export interface Section<M> {
  heading: string
  blocks: M[]
}

/**
 * Agrupa bloques en secciones. Un bloque con título de sección (`headingOf` devuelve texto, aunque sea vacío) abre una
 * sección nueva; los demás se quedan en la actual. Si el primero no abre sección, se crea una sin título. Los bloques
 * que no se pueden dibujar (`map` devuelve null) se omiten sin dejar hueco ni abrir sección.
 */
export function groupIntoSections<B, M>(
  blocks: readonly B[],
  map: (block: B) => M | null,
  headingOf: (block: B) => string | null,
): Section<M>[] {
  const sections: Section<M>[] = []
  for (const block of blocks) {
    const mapped = map(block)
    if (mapped === null)
      continue
    const heading = headingOf(block)
    if (heading !== null || sections.length === 0)
      sections.push({ heading: heading ?? '', blocks: [] })
    sections.at(-1)!.blocks.push(mapped)
  }
  return sections
}
