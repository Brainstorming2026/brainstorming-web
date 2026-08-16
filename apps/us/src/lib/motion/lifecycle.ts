import { gsap } from 'gsap'

/**
 * Registra una sección de motion. A diferencia de `web` (que usa
 * ClientRouter con navegación SPA entre páginas y necesita limpiar
 * ScrollTrigger en cada transición), `us` es un one-pager estático: el
 * script corre una sola vez, no hay `astro:page-load` que esperar.
 */
export function registerMotion(setup: () => void) {
  gsap.context(setup)
}
