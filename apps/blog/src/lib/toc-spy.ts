/**
 * Marca qué sección se está leyendo: la última cuyo encabezado ya cruzó el tercio superior de la pantalla.
 * Devuelve la función que desconecta el observador (se llama al cambiar de página).
 */
export function watchSections(ids: readonly string[], onActive: (id: string) => void): () => void {
  const headings = ids.flatMap(id => document.getElementById(id) ?? [])
  if (headings.length === 0 || typeof IntersectionObserver === 'undefined')
    return () => {}

  const observer = new IntersectionObserver(
    (entries) => {
      // El primer encabezado visible en la franja superior es el que se está leyendo.
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible[0])
        onActive(visible[0].target.id)
    },
    { rootMargin: '-15% 0px -70% 0px' },
  )
  headings.forEach(heading => observer.observe(heading))
  return () => observer.disconnect()
}
