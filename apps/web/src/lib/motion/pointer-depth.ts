import { ensureGsap } from './gsap-client'

/** Call inside a fine-pointer, no-reduced-motion GSAP context. */
export function pointerDepth(area: HTMLElement, surface: HTMLElement, amplitude = 4) {
  const { gsap } = ensureGsap()
  gsap.set(surface, { transformPerspective: 1200 })
  const rotationX = gsap.quickTo(surface, 'rotationX', { duration: 0.45, ease: 'power3.out' })
  const rotationY = gsap.quickTo(surface, 'rotationY', { duration: 0.45, ease: 'power3.out' })
  let bounds = area.getBoundingClientRect()
  const measure = () => {
    bounds = area.getBoundingClientRect()
  }
  const reset = () => {
    rotationX(0)
    rotationY(0)
  }
  const move = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse' || area.contains(document.activeElement))
      return
    const x = gsap.utils.clamp(-0.5, 0.5, (event.clientX - bounds.left) / bounds.width - 0.5)
    const y = gsap.utils.clamp(-0.5, 0.5, (event.clientY - bounds.top) / bounds.height - 0.5)
    rotationX(-y * amplitude)
    rotationY(x * amplitude)
  }
  const controller = new AbortController()
  const options = { signal: controller.signal }
  area.addEventListener('pointerenter', measure, options)
  area.addEventListener('pointermove', move, options)
  area.addEventListener('pointerleave', reset, options)
  area.addEventListener('pointercancel', reset, options)
  area.addEventListener('focusin', reset, options)
  window.addEventListener('scroll', measure, { ...options, passive: true })
  window.addEventListener('resize', measure, { ...options, passive: true })
  return () => controller.abort()
}
