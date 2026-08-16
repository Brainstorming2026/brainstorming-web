/** true si el usuario pide menos movimiento — todos los helpers deben respetarlo. */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
