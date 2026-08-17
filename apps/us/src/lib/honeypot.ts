// Campo oculto `website` en el form (CSS-hidden, tabindex=-1, autocomplete=off).
// Humanos lo dejan vacio; bots simples lo rellenan.
export function isHoneypotTriggered(value: unknown): boolean {
  return typeof value === 'string' && value.trim().length > 0
}
