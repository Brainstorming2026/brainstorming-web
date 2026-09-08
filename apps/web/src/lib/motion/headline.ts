import { ensureGsap } from './gsap-client'
import { duration, ease } from './config'
import { prefersReducedMotion } from './reduced-motion'

interface SplitHeadlineOptions {
  /** Unidad de split. 'words' para titulares cortos, 'lines' para párrafos. */
  by?: 'words' | 'lines'
  /** Dispara con scroll (default) o de inmediato (hero, above the fold). */
  scrollTrigger?: boolean
  onComplete?: () => void
}

/**
 * Revela un titular con máscara: cada palabra/línea entra desde abajo dentro
 * de un contenedor overflow-hidden generado por SplitText (`mask`), con
 * stagger y ease-out fuerte. Con prefers-reduced-motion cae a un fade simple.
 */
export function splitHeadline(el: HTMLElement, options: SplitHeadlineOptions = {}) {
  const { by = 'words', scrollTrigger = true, onComplete } = options
  const { gsap, SplitText } = ensureGsap()

  if (prefersReducedMotion()) {
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4, onComplete })
    return
  }

  const split = new SplitText(el, { type: by, mask: by })
  const targets = by === 'words' ? split.words : split.lines

  // El contenedor permanece visible; solo se animan los hijos del split.
  gsap.set(el, { opacity: 1 })

  // `fromTo` (no `from`): con ScrollTrigger, `from` deja `immediateRender:false`
  // y el titular se ve completo hasta cruzar el trigger, ahí SALTA a oculto y
  // recién anima. `fromTo` fija el estado inicial en la carga.
  gsap.fromTo(
    targets,
    { yPercent: 100, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      duration: duration.headlineWord,
      stagger: duration.headlineStagger,
      ease: ease.out,
      onComplete,
      ...(scrollTrigger && {
        scrollTrigger: { trigger: el, start: 'top 85%' },
      }),
    },
  )

  return split
}
