export interface TurnstileApi {
  render: (container: HTMLElement, options: { sitekey: string, action?: string, size?: 'normal' | 'flexible' | 'compact' }) => string
  reset: (widget?: string | HTMLElement) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

/**
 * Espera a que api.js (carga async) exponga `window.turnstile`. Resuelve
 * `undefined` si no aparece a tiempo, para no bloquear el formulario.
 */
export function whenTurnstileReady(timeoutMs = 6000): Promise<TurnstileApi | undefined> {
  return new Promise((resolve) => {
    const started = Date.now()
    const check = () => {
      if (window.turnstile)
        return resolve(window.turnstile)
      if (Date.now() - started > timeoutMs)
        return resolve(undefined)
      setTimeout(check, 100)
    }
    check()
  })
}
