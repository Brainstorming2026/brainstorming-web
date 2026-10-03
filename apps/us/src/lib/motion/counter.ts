import { ease as eases } from './config'
import { ensureGsap } from './gsap-client'
import { prefersReducedMotion } from './reduced-motion'

interface CountUpOptions {
  duration?: number
  delay?: number
  ease?: string
  /** true: arranca al entrar en viewport. false: devuelve el tween para meterlo en un timeline. */
  scrollTrigger?: boolean
}

const VALUE = /^(\D*)(\d+)(\D*)$/

/**
 * Cuenta de 0 al valor escrito en el elemento ("161", "+14%", "100%"); prefijo y
 * sufijo quedan fijos. El HTML conserva el valor real, así que sin JS o con
 * reduced-motion se ve tal cual. El ancho se reserva con el valor final para que
 * el número no empuje lo que tiene al lado mientras crece.
 */
export function countUp(el: HTMLElement, options: CountUpOptions = {}) {
  const { duration = 1.8, delay = 0, ease = eases.out, scrollTrigger = true } = options
  if (prefersReducedMotion())
    return

  // Re-ejecuciones (gsap.matchMedia al cruzar breakpoint) reutilizan el DOM ya preparado.
  let ticker = el.querySelector<HTMLElement>('[data-count-ticker]')
  const final = ticker?.dataset.countFinal ?? el.textContent?.trim() ?? ''
  const match = final.match(VALUE)
  if (!match)
    return
  const [, prefix, digits, suffix] = match

  if (!ticker) {
    if (getComputedStyle(el).display === 'inline')
      el.style.display = 'inline-block'
    el.style.minWidth = `${el.getBoundingClientRect().width}px`
    ticker = document.createElement('span')
    ticker.setAttribute('aria-hidden', 'true')
    ticker.dataset.countTicker = ''
    ticker.dataset.countFinal = final
    // Screen readers get the final value once, not every intermediate digit.
    const label = document.createElement('span')
    label.className = 'sr-only'
    label.textContent = final
    el.replaceChildren(ticker, label)
  }

  const state = { value: 0 }
  const render = () => {
    ticker.textContent = `${prefix}${Math.round(state.value)}${suffix}`
  }
  // Set to 0 at load, not on enter, so the final value never flashes first.
  render()

  const { gsap } = ensureGsap()
  return gsap.to(state, {
    value: Number(digits),
    duration,
    delay,
    ease,
    onUpdate: render,
    ...(scrollTrigger && { scrollTrigger: { trigger: el, start: 'top 85%', once: true } }),
  })
}
