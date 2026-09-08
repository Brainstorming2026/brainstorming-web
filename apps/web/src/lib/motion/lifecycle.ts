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
    ctx = gsap.context(setup)
  }
  const onSwap = () => {
    ctx?.revert()
    ctx = undefined
  }

  document.addEventListener('astro:page-load', onLoad)
  document.addEventListener('astro:before-swap', onSwap)
}
