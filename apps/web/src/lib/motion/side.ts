/**
 * Lado de la pantalla en que está un elemento: -1 izquierda, 1 derecha, 0 al
 * centro (o cuando ocupa todo el ancho, como en móvil). Sirve para que cada
 * bloque entre desde su propio lado: la columna izquierda desde la izquierda,
 * la derecha desde la derecha y lo centrado desde abajo.
 */
export function sideOf(el: Element): -1 | 0 | 1 {
  const { left, width } = el.getBoundingClientRect()
  const viewport = document.documentElement.clientWidth
  if (width > viewport * 0.7)
    return 0
  const center = (left + width / 2) / viewport
  if (center < 0.42)
    return -1
  if (center > 0.58)
    return 1
  return 0
}

/** Estado inicial de una entrada lateral: desde su lado, o desde abajo si está al centro. */
export function sideFrom(el: Element, distance = 40): gsap.TweenVars {
  const side = sideOf(el)
  return side === 0 ? { autoAlpha: 0, y: distance * 0.6 } : { autoAlpha: 0, x: side * distance }
}
