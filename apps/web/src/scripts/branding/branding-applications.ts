import { ensureGsap } from '@/lib/motion/gsap-client'

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
      if (animate && !matchMedia('(prefers-reduced-motion: reduce)').matches)
        tween = gsap.fromTo(panels[index], { opacity: 0.4, y: 12 }, { opacity: 1, y: 0, duration: 0.22, ease: 'power2.out', clearProps: 'opacity,transform' })
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
