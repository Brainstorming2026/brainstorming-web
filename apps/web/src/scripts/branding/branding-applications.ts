import { ensureGsap } from '@/lib/motion/gsap-client'

/** Partes de cada mockup, en el orden en que deben armarse en pantalla. */
const MOCKUP_PARTS = '.br-browser-bar, .br-digital-nav, .br-digital-body > *, .br-social-card, .br-letterhead, .br-business-card'

class BrandApplications extends HTMLElement {
  private dispose?: () => void

  connectedCallback() {
    this.dispose?.()
    const { gsap } = ensureGsap()
    const controller = new AbortController()
    const tabs = Array.from(this.querySelectorAll<HTMLButtonElement>('[data-br-tab]'))
    const panels = Array.from(this.querySelectorAll<HTMLElement>('[data-br-panel]'))
    const controls = this.querySelector('.br-channel-controls')!
    let tween: gsap.core.Tween | undefined
    controls.setAttribute('role', 'tablist')
    const select = (index: number, focus = false, animate = true) => {
      tween?.revert()
      tabs.forEach((tab, i) => {
        tab.setAttribute('aria-selected', String(index === i))
        tab.tabIndex = index === i ? 0 : -1
        panels[i].hidden = index !== i
      })
      if (focus)
        tabs[index].focus()
      if (animate && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // El panel no se cruza de golpe: se arma por partes, igual que en su
        // entrada al scroll. Mantiene el gesto de la página al cambiar de tab.
        const parts = panels[index].querySelectorAll<HTMLElement>(MOCKUP_PARTS)
        tween = gsap.fromTo(
          parts.length > 0 ? parts : panels[index],
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: 'expo.out', clearProps: 'opacity,transform' },
        )
      }
    }
    tabs.forEach((tab, i) => {
      tab.setAttribute('role', 'tab')
      tab.setAttribute('aria-controls', panels[i].id)
      panels[i].setAttribute('role', 'tabpanel')
      panels[i].tabIndex = 0
      tab.addEventListener('click', event => select(i, false, event.detail > 0), { signal: controller.signal })
      tab.addEventListener('keydown', (event) => {
        let next = i
        if (event.key === 'ArrowRight')
          next = (i + 1) % tabs.length
        else if (event.key === 'ArrowLeft')
          next = (i - 1 + tabs.length) % tabs.length
        else if (event.key === 'Home')
          next = 0
        else if (event.key === 'End')
          next = tabs.length - 1
        else return
        event.preventDefault()
        select(next, true, false)
      }, { signal: controller.signal })
    })
    select(0, false, false)
    this.dispose = () => {
      tween?.revert()
      controller.abort()
    }
  }

  disconnectedCallback() {
    this.dispose?.()
  }
}
if (!customElements.get('brand-applications'))
  customElements.define('brand-applications', BrandApplications)
