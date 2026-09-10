import { duration, ease } from './config'
import { ensureGsap } from './gsap-client'
import { prefersReducedMotion } from './reduced-motion'

interface StaggerGridOptions {
  /** 'wipe': clip-path desde abajo (default). 'organic': fade+scale con offset Y variable por item. */
  variant?: 'wipe' | 'organic'
  /** Rotación inicial en grados, se asienta en 0 (Problemas cards). */
  rotateFrom?: number
  /** Override de duración por item — secciones "calmadas" (ej. equipo/valores) piden más pausa que un grid de datos. */
  itemDuration?: number
  /** Override del espaciado entre items del batch. */
  itemStagger?: number
}

/**
 * Anima una grilla de elementos repetidos (cards, logos, icons) en batch:
 * agrupa las entradas al scroll en un único ScrollTrigger.batch en vez de uno
 * por item, más barato en secciones con muchos elementos.
 */
export function staggerGrid(items: Element[] | NodeListOf<Element>, options: StaggerGridOptions = {}) {
  const { variant = 'wipe', rotateFrom = 0, itemDuration = duration.gridItem, itemStagger = duration.cardStagger } = options
  const list = Array.from(items)
  if (list.length === 0)
    return

  const { gsap, ScrollTrigger } = ensureGsap()

  if (prefersReducedMotion()) {
    gsap.set(list, { clearProps: 'opacity,transform,clipPath' })
    return
  }

  const from: gsap.TweenVars
    = variant === 'wipe'
      ? { clipPath: 'inset(0% 0% 100% 0%)', opacity: 0, y: 28, rotate: rotateFrom }
      : { opacity: 0, scale: 0.92, y: () => gsap.utils.random(10, 28) }

  const to: gsap.TweenVars
    = variant === 'wipe'
      ? { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, y: 0, rotate: 0, duration: itemDuration, ease: ease.out }
      : { opacity: 1, scale: 1, y: 0, duration: itemDuration, ease: ease.out }

  // Oculta todo YA, en cuanto carga la página — no recién al cruzar el
  // trigger. Si no, el elemento se ve normal mientras el usuario scrollea
  // hacia él y "salta" al estado oculto justo al entrar (glitch visible).
  gsap.set(list, from)

  // Batch callbacks fire after setup; keep their tweens in a revertible context.
  const batchContext = gsap.context(() => {})
  ScrollTrigger.batch(list, {
    start: 'top 88%',
    // Reveal de entrada: pasa una sola vez por elemento, no se repite al
    // volver a scrollear sobre la sección (ver reveal.ts / headline.ts, que
    // ya son single-shot por defecto de GSAP).
    once: true,
    onEnter: (batch: Element[]) =>
      batchContext.add(() => {
        gsap.to(batch, { ...to, stagger: itemStagger, overwrite: true, clearProps: 'transform,opacity,clipPath' })
      }),
  })
}
