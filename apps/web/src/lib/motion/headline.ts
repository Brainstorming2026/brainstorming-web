import { duration, ease } from './config'
import { ensureGsap } from './gsap-client'
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
 * stagger y ease-out fuerte. Con prefers-reduced-motion se muestra sin transición.
 */
export function splitHeadline(el: HTMLElement, options: SplitHeadlineOptions = {}) {
  const { by = 'words', scrollTrigger = true, onComplete } = options
  const { gsap, SplitText } = ensureGsap()

  if (prefersReducedMotion()) {
    gsap.set(el, { clearProps: 'opacity,transform' })
    onComplete?.()
    return
  }

  // Re-split lines after fonts load or the available width changes.
  return SplitText.create(el, {
    type: by,
    mask: by,
    autoSplit: true,
    onSplit: split => gsap.fromTo(
      by === 'words' ? split.words : split.lines,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: duration.headlineWord,
        stagger: duration.headlineStagger,
        ease: ease.out,
        onComplete,
        ...(scrollTrigger && {
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        }),
      },
    ),
  })
}
