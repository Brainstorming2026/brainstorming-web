import { gsap } from 'gsap'

/**
 * Engancha una sección de motion al ciclo de vida de Astro ClientRouter.
 * `setup` corre en cada `astro:page-load` (incluye la carga inicial) dentro de
 * un `gsap.context()`; ese contexto se revierte automáticamente en
 * `astro:before-swap`, así ScrollTrigger no acumula instancias fantasma al
 * navegar entre páginas.
 */
export function registerMotion(setup: () => void) {
  let ctx: gsap.Context | undefined

  const onLoad = () => {
    // Revertir antes de reinicializar evita capturar estilos de otra ejecución.
    ctx?.revert()
    ctx = gsap.context(() => {
      if (!document.querySelector('[data-solution-page]'))
        return setup()
      // Rebuild solution motion when the OS preference changes, not only on navigation.
      const media = gsap.matchMedia()
      media.add({
        motion: '(prefers-reduced-motion: no-preference)',
        reduced: '(prefers-reduced-motion: reduce)',
      }, setup)
      return () => media.revert()
    })
  }
  const onSwap = () => {
    ctx?.revert()
    ctx = undefined
  }

  document.addEventListener('astro:page-load', onLoad)
  document.addEventListener('astro:before-swap', onSwap)
}
