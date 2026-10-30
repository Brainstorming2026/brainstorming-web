import { ease } from './config'
import { formatCount, parseCount } from './count-format'
import { ensureGsap } from './gsap-client'
import { prefersReducedMotion } from './reduced-motion'

/**
 * Hace que una cifra suba desde 0 hasta su valor al aparecer. El valor final queda en el HTML (sin JavaScript, o con
 * movimiento reducido, se ve tal cual); al cargar se pone en 0 y se anima al llegar al viewport, una sola vez.
 */
export function countUp(el: HTMLElement, { duration = 1.4 }: { duration?: number } = {}) {
  const parts = parseCount(el.textContent ?? '')
  if (!parts || prefersReducedMotion())
    return

  const { gsap, ScrollTrigger } = ensureGsap()
  const counter = { value: 0 }
  const render = () => {
    el.textContent = formatCount(parts, counter.value)
  }
  render()

  ScrollTrigger.create({
    trigger: el,
    start: 'top 90%',
    once: true,
    onEnter: () => gsap.to(counter, { value: parts.target, duration, ease: ease.out, onUpdate: render }),
  })
}
