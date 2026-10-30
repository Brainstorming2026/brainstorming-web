import { ensureGsap } from './gsap-client'

/**
 * Barra de progreso de lectura: `scaleX` 0→1 atada al scroll de toda la página. Es información, no decoración, así que
 * sigue funcionando con `prefers-reduced-motion` (sin suavizado: avanza exactamente con el dedo o la rueda).
 */
export function scrollProgress(bar: HTMLElement) {
  const { gsap } = ensureGsap()
  gsap.set(bar, { scaleX: 0, transformOrigin: '0% 50%' })
  gsap.to(bar, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: { start: 0, end: 'max', scrub: true },
  })
}
