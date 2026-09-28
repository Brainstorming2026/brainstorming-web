/**
 * ScrollSmoother aplica `transform` a #smooth-content, y un elemento `fixed`
 * dentro de un ancestro transformado se ancla a ese ancestro, no al viewport:
 * un modal ahí queda centrado a mitad de página, fuera de pantalla. Los
 * overlays deben vivir directamente en el body (como Navbar y Splash).
 */
export function portalToBody<T extends HTMLElement>(el: T | null): T | null {
  if (el && el.parentElement !== document.body)
    document.body.appendChild(el)
  return el
}
