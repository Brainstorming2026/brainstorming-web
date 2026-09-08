import { ensureGsap } from '@/lib/motion/gsap-client'

class AutomationTools extends HTMLElement {
  private cleanup?: () => void

  connectedCallback() {
    this.cleanup?.()
    const { gsap } = ensureGsap()
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      this.classList.add('is-moving')
      const controller = new AbortController()
      const button = this.querySelector<HTMLButtonElement>('[data-carousel-toggle]')!
      const label = this.querySelector<HTMLElement>('[data-carousel-label]')!
      const track = this.querySelector<HTMLElement>('.ai-tools-track')!
      const tween = gsap.to(track, { xPercent: -50, duration: 48, ease: 'none', repeat: -1, paused: true })
      let userPaused = false
      let hovering = false
      let focused = false
      let visible = false
      const update = () => tween.paused(userPaused || hovering || focused || !visible || document.hidden)
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
        update()
      })
      observer.observe(this)
      const options = { signal: controller.signal }
      this.addEventListener('pointerenter', (event) => {
        hovering = event.pointerType === 'mouse'
        update()
      }, options)
      this.addEventListener('pointerleave', () => {
        hovering = false
        update()
      }, options)
      this.addEventListener('focusin', () => {
        focused = true
        update()
      }, options)
      this.addEventListener('focusout', (event) => {
        focused = event.relatedTarget instanceof Node && this.contains(event.relatedTarget)
        update()
      }, options)
      document.addEventListener('visibilitychange', update, options)
      button.addEventListener('click', () => {
        userPaused = !userPaused
        this.classList.toggle('is-paused', userPaused)
        button.setAttribute('aria-label', userPaused ? 'Reanudar carrusel' : 'Pausar carrusel')
        label.textContent = userPaused ? 'Reanudar' : 'Pausar'
        update()
      }, options)
      return () => {
        controller.abort()
        observer.disconnect()
        this.classList.remove('is-moving', 'is-paused')
        button.setAttribute('aria-label', 'Pausar carrusel')
        label.textContent = 'Pausar'
      }
    }, this)
    this.cleanup = () => media.revert()
  }

  disconnectedCallback() {
    this.cleanup?.()
  }
}
if (!customElements.get('automation-tools'))
  customElements.define('automation-tools', AutomationTools)
