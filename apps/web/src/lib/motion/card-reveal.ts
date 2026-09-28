import { duration, ease } from './config'
import { ensureGsap } from './gsap-client'
import { prefersReducedMotion } from './reduced-motion'

interface RevealCardsOptions {
  /**
   * Elemento cuyo cruce dispara el grupo entero. Por defecto, el padre común.
   * Usar el contenedor (y no cada card) es lo que hace que el stagger se lea
   * como una secuencia y no como items sueltos apareciendo al azar.
   */
  trigger?: Element | null
  start?: string
  /** Separación entre cards. */
  stagger?: number
  /** Intensidad del gesto (0.6 discreto — 1.4 protagonista). */
  intensity?: number
  /** Selector de hijos que entran después del card (título, texto, CTA). */
  inner?: string
}

/**
 * Entrada de una fila/grilla de cards con profundidad real: cada card se
 * levanta desde abajo girando ligeramente sobre su base, en secuencia.
 *
 * Es el gesto que se repite en toda la home; las secciones solo ajustan
 * `intensity` y `stagger` según cuánto peso tengan en la página.
 *
 * Pre-oculta con gsap.set() en la carga, nunca dentro del onEnter: si no, el
 * card se ve normal mientras bajas y "salta" al estado oculto al entrar.
 */
export function revealCards(items: ArrayLike<Element>, options: RevealCardsOptions = {}) {
  const list = Array.from(items) as HTMLElement[]
  if (list.length === 0)
    return

  const { gsap } = ensureGsap()

  if (prefersReducedMotion()) {
    gsap.set(list, { clearProps: 'all' })
    return
  }

  const {
    trigger = list[0].parentElement,
    start = 'top 82%',
    stagger = 0.11,
    intensity = 1,
    inner,
  } = options

  const from = {
    autoAlpha: 0,
    yPercent: 14 * intensity,
    scale: 1 - 0.05 * intensity,
    rotationX: 12 * intensity,
    transformOrigin: '50% 100%',
    transformPerspective: 1200,
  }

  gsap.set(list, from)

  const timeline = gsap.timeline({
    scrollTrigger: { trigger: trigger ?? list[0], start, once: true },
  })

  timeline.to(list, {
    autoAlpha: 1,
    yPercent: 0,
    scale: 1,
    rotationX: 0,
    duration: duration.gridItem,
    stagger,
    ease: ease.out,
    // El transform se limpia al terminar para no pelear con el parallax de
    // ScrollSmoother ni con los hover de cada card.
    clearProps: 'transform,opacity,visibility',
  })

  if (inner) {
    const children = list.flatMap(item => Array.from(item.querySelectorAll<HTMLElement>(inner)))
    if (children.length > 0) {
      gsap.set(children, { autoAlpha: 0, yPercent: 40 })
      timeline.to(children, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.7,
        stagger: stagger * 0.45,
        ease: ease.out,
        clearProps: 'transform,opacity,visibility',
      }, 0.18)
    }
  }

  return timeline
}
