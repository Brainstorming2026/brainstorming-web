import { ensureGsap } from './gsap-client'

/**
 * Deja fijo un elemento mientras se recorre su contenedor (columna lateral
 * "sticky"). `position: sticky` no funciona dentro de #smooth-content porque
 * ScrollSmoother lo mueve con `transform` y el scroll nativo nunca lo activa;
 * un pin de ScrollTrigger sí, con o sin smoother.
 *
 * Marca el elemento con `data-stick="<top en px>"`. Solo desktop (lg): en
 * móvil las columnas se apilan y no hay nada que fijar.
 *
 * Debe correr DESPUÉS de que el smoother exista (ScrollTrigger decide el tipo
 * de pin al crearse); por eso el componente `Stick` va tras `SmoothScroll`.
 */
export function stickAll() {
  const { gsap, ScrollTrigger } = ensureGsap()
  const media = gsap.matchMedia()

  media.add('(min-width: 1024px)', () => {
    document.querySelectorAll<HTMLElement>('[data-stick]').forEach((el) => {
      const top = Number.parseInt(el.dataset.stick ?? '112', 10) || 112
      const container = el.parentElement
      if (!container)
        return
      ScrollTrigger.create({
        trigger: el,
        start: `top top+=${top}`,
        endTrigger: container,
        // Termina cuando el borde inferior del elemento toca el del contenedor.
        end: () => `bottom top+=${top + el.offsetHeight}`,
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
      })
    })
  })
}
