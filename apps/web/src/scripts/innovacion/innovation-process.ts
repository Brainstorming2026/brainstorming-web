import { ensureGsap } from '@/lib/motion/gsap-client'

class InnovationProcess extends HTMLElement {
  private dispose?: () => void

  connectedCallback() {
    this.dispose?.()
    const { gsap } = ensureGsap()
    const media = gsap.matchMedia()
    media.add('(min-width: 768px)', () => {
      const controller = new AbortController()
      const tabs = Array.from(this.querySelectorAll<HTMLButtonElement>('[data-phase]'))
      const panels = Array.from(this.querySelectorAll<HTMLDetailsElement>('[data-phase-panel]'))
      const nav = this.querySelector('.in-phase-nav')!
      let selected = 0
      let tween: gsap.core.Tween | undefined
      const select = (index: number, focus = false, animate = true) => {
        tween?.revert()
        selected = index
        tabs.forEach((tab, i) => {
          tab.setAttribute('aria-selected', String(i === index))
          tab.tabIndex = i === index ? 0 : -1
          panels[i].hidden = i !== index
        })
        if (focus)
          tabs[index].focus()
        if (animate && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
          tween = gsap.fromTo(panels[index].querySelector('.in-phase-content'), { opacity: 0.4, y: 10 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', clearProps: 'opacity,transform' })
        }
      }
      this.classList.add('in-desktop-process')
      nav.setAttribute('role', 'tablist')
      nav.setAttribute('aria-orientation', 'vertical')
      tabs.forEach((tab, i) => {
        tab.setAttribute('role', 'tab')
        tab.setAttribute('aria-controls', panels[i].id)
        panels[i].open = true
        panels[i].setAttribute('role', 'tabpanel')
        panels[i].setAttribute('aria-labelledby', tab.id)
        panels[i].tabIndex = 0
        tab.addEventListener('click', () => select(i), { signal: controller.signal })
        tab.addEventListener('keydown', (event) => {
          let next = i
          if (event.key === 'ArrowDown')
            next = (i + 1) % tabs.length
          else if (event.key === 'ArrowUp')
            next = (i - 1 + tabs.length) % tabs.length
          else if (event.key === 'Home')
            next = 0
          else if (event.key === 'End')
            next = tabs.length - 1
          else return
          event.preventDefault()
          select(next, true)
        }, { signal: controller.signal })
      })
      select(0, false, false)
      return () => {
        tween?.revert()
        controller.abort()
        this.classList.remove('in-desktop-process')
        nav.removeAttribute('role')
        nav.removeAttribute('aria-orientation')
        tabs.forEach((tab) => {
          for (const attribute of ['role', 'aria-controls', 'aria-selected', 'tabindex'])
            tab.removeAttribute(attribute)
        })
        panels.forEach((panel, i) => {
          panel.hidden = false
          panel.open = i === selected
          for (const attribute of ['role', 'aria-labelledby', 'tabindex'])
            panel.removeAttribute(attribute)
        })
      }
    }, this)
    this.dispose = () => media.revert()
  }

  disconnectedCallback() {
    this.dispose?.()
  }
}
if (!customElements.get('innovation-process'))
  customElements.define('innovation-process', InnovationProcess)
