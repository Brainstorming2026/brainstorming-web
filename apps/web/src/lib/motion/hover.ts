import { ensureGsap } from './gsap-client'
import { pointerDepth } from './pointer-depth'

/**
 * Inclina cada elemento hacia el cursor (3D sutil). Envuelve pointerDepth para
 * el caso más común: una lista de cards donde el área que escucha y la
 * superficie que gira son el mismo elemento.
 *
 * Llamar SOLO dentro de un matchMedia con `(hover: hover) and (pointer: fine)`
 * y sin reduced-motion. Devuelve el cleanup de todos los listeners.
 */
export function tiltCards(items: ArrayLike<Element>, amplitude = 5) {
  const cleanups = Array.from(items).map(item => pointerDepth(item as HTMLElement, item as HTMLElement, amplitude))
  return () => cleanups.forEach(cleanup => cleanup())
}

/**
 * Botón magnético: el elemento se desplaza hacia el cursor mientras está
 * encima y vuelve a su sitio al salir. `strength` es la fracción de la
 * distancia al centro que recorre (0.25 ≈ acompaña sin despegarse).
 */
export function magnetic(el: HTMLElement, strength = 0.25) {
  const { gsap } = ensureGsap()
  const moveX = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
  const moveY = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })
  const controller = new AbortController()
  const options = { signal: controller.signal }

  const move = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse')
      return
    const bounds = el.getBoundingClientRect()
    moveX((event.clientX - (bounds.left + bounds.width / 2)) * strength)
    moveY((event.clientY - (bounds.top + bounds.height / 2)) * strength)
  }
  const reset = () => {
    moveX(0)
    moveY(0)
  }

  el.addEventListener('pointermove', move, options)
  el.addEventListener('pointerleave', reset, options)
  el.addEventListener('pointercancel', reset, options)
  el.addEventListener('blur', reset, options)

  return () => {
    controller.abort()
    gsap.set(el, { x: 0, y: 0 })
  }
}
