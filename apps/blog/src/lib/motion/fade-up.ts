import { duration, ease } from './config'
import { ensureGsap } from './gsap-client'
import { prefersReducedMotion } from './reduced-motion'

interface FadeUpOptions {
  /** Espaciado entre elementos que entran juntos. */
  stagger?: number
  /** Cuánto sube cada elemento al aparecer (px). Corto a propósito: es lectura, no espectáculo. */
  distance?: number
}

/**
 * Entrada sobria para bloques de texto: aparecen y suben unos px al llegar al viewport, una sola vez.
 * Se ocultan YA al cargar (nunca dentro de `onEnter`), así no se ven antes de animarse. Con
 * `prefers-reduced-motion` no se toca nada: el contenido queda visible desde el principio.
 */
export function fadeUp(items: Element[] | NodeListOf<Element>, { stagger = 0.08, distance = 24 }: FadeUpOptions = {}) {
  const list = Array.from(items)
  if (list.length === 0 || prefersReducedMotion())
    return

  const { gsap, ScrollTrigger } = ensureGsap()
  gsap.set(list, { opacity: 0, y: distance })

  ScrollTrigger.batch(list, {
    start: 'top 90%',
    once: true,
    onEnter: (batch: Element[]) =>
      gsap.to(batch, { opacity: 1, y: 0, duration: duration.flourish + 0.4, ease: ease.out, stagger, overwrite: true }),
  })
}
