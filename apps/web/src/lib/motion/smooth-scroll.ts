import { ensureGsap } from './gsap-client'

/** Altura del navbar fijo (h-20). Se usa como offset al saltar a un ancla. */
const NAV_OFFSET = 80

/** Instancia viva de ScrollSmoother, o undefined si el breakpoint no la activa. */
let current: ScrollSmoother | undefined

/** Acceso de solo lectura para el resto de módulos (pausa durante el splash, etc.). */
export function getSmoother() {
  return current
}

/**
 * Scroll con inercia en todo el sitio. Solo desktop con puntero fino: en táctil
 * el scroll nativo ya es suave y el smoothing añade lag percibido. Se desactiva
 * entero con prefers-reduced-motion.
 *
 * Además activa `effects: true`, que es lo que hace funcionar los `data-speed`
 * y `data-lag` declarados en el markup de cada sección (parallax por elemento).
 *
 * Devuelve un cleanup: mata el smoother y restaura el scroll nativo.
 */
export function initSmoothScroll() {
  const { gsap, ScrollSmoother, ScrollTrigger } = ensureGsap()
  const root = document.documentElement
  const media = gsap.matchMedia()

  media.add('(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
    const wrapper = document.getElementById('smooth-wrapper')
    const content = document.getElementById('smooth-content')
    if (!wrapper || !content)
      return

    const smoother = ScrollSmoother.create({
      wrapper,
      content,
      // 1.1s para "alcanzar" el scroll real: presente pero sin sensación de lag.
      smooth: 1.1,
      effects: true,
      // El scroll táctil se deja nativo aunque el breakpoint sea ancho (híbridos).
      smoothTouch: false,
      ignoreMobileResize: true,
    })
    current = smoother
    // Desactiva el `scroll-behavior: smooth` de CSS: peleaba con el smoother.
    root.classList.add('has-smooth-scroll')

    // El splash bloquea el scroll con `body overflow:hidden`, que no aplica
    // cuando el scroll lo maneja el smoother. Se pausa hasta que el splash cierre.
    if (root.classList.contains('bs-splash-active')) {
      smoother.paused(true)
      document.addEventListener('bs:splash-done', () => smoother.paused(false), { once: true })
    }

    // Las anclas nativas (#servicios) no funcionan dentro del contenedor
    // transformado; se redirigen al scrollTo del smoother.
    const onAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0)
        return
      const anchor = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href^="#"]')
      const hash = anchor?.getAttribute('href')
      if (!anchor || !hash || hash === '#')
        return
      const target = document.querySelector(hash)
      if (!target)
        return
      event.preventDefault()
      smoother.scrollTo(target, true, `top ${NAV_OFFSET}px`)
    }
    document.addEventListener('click', onAnchorClick)

    // Las imágenes lazy cambian la altura del documento después del primer paint.
    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)

    return () => {
      document.removeEventListener('click', onAnchorClick)
      window.removeEventListener('load', onLoad)
      root.classList.remove('has-smooth-scroll')
      smoother.kill()
      current = undefined
    }
  })

  return () => {
    media.revert()
    current = undefined
  }
}
