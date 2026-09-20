import { ensureGsap } from './gsap-client'
import { prefersReducedMotion } from './reduced-motion'

interface ParallaxOptions {
  /**
   * Desplazamiento en % de la propia altura del elemento a lo largo de todo su
   * paso por el viewport. Positivo = va más lento que el scroll (se hunde,
   * lectura de "fondo"); negativo = va más rápido (se adelanta, "primer plano").
   */
  distance?: number
  /** Escala inicial. >1 da aire para moverse sin descubrir bordes. */
  scaleFrom?: number
  /** Elemento que define el rango de scroll. Por defecto, el padre del elemento. */
  trigger?: Element | null
  /** Suavizado del scrub en segundos. */
  scrub?: number
}

/**
 * Parallax atado 1:1 al scroll. Es el fallback universal de `data-speed`:
 * `data-speed` solo existe cuando ScrollSmoother está activo (desktop), esto
 * funciona en cualquier contexto y es lo que se usa para los movimientos que
 * deben verse también en móvil.
 *
 * El elemento debe vivir dentro de un contenedor con `overflow: hidden` si
 * `scaleFrom` > 1, o se verá desbordar.
 */
export function parallax(el: HTMLElement, options: ParallaxOptions = {}) {
  if (prefersReducedMotion())
    return

  const { distance = 12, scaleFrom = 1, trigger = el.parentElement, scrub = 0.8 } = options
  const { gsap } = ensureGsap()

  gsap.fromTo(
    el,
    { yPercent: -distance / 2, scale: scaleFrom },
    {
      yPercent: distance / 2,
      scale: scaleFrom,
      ease: 'none',
      scrollTrigger: {
        trigger: trigger ?? el,
        start: 'top bottom',
        end: 'bottom top',
        scrub,
      },
    },
  )
}
