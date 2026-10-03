interface TurnstileRenderOptions {
  sitekey: string
  action?: string
  size?: 'normal' | 'flexible' | 'compact'
  theme?: 'light' | 'dark' | 'auto'
}

export interface TurnstileApi {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string
  reset: (widget?: string | HTMLElement) => void
  remove: (widget: string | HTMLElement) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

/** Waits for the async api.js to expose `window.turnstile`; resolves undefined on timeout so forms never block. */
function whenTurnstileReady(timeoutMs = 6000): Promise<TurnstileApi | undefined> {
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

// Container → widget id ('' while api.js is still loading).
const widgets = new Map<HTMLElement, string>()

/**
 * Renders every `[data-turnstile]` on the current page. ClientRouter swaps the DOM
 * without reloading, and implicit `.cf-turnstile` rendering only scans the first
 * load, so widgets are rendered explicitly on each `astro:page-load`.
 */
export function mountTurnstiles() {
  document.querySelectorAll<HTMLElement>('[data-turnstile]').forEach((el) => {
    const { sitekey, action, size, theme } = el.dataset
    if (!sitekey || widgets.has(el))
      return
    widgets.set(el, '')
    void whenTurnstileReady().then((api) => {
      if (!api || !el.isConnected) {
        widgets.delete(el)
        return
      }
      widgets.set(el, api.render(el, {
        sitekey,
        action,
        size: (size as TurnstileRenderOptions['size']) ?? 'flexible',
        theme: theme as TurnstileRenderOptions['theme'],
      }))
    })
  })
}

/** Removes the current page's widgets before ClientRouter swaps the DOM. */
export function unmountTurnstiles() {
  widgets.forEach((id) => {
    if (id)
      window.turnstile?.remove(id)
  })
  widgets.clear()
}

/** Tokens are single-use: resets only the widget inside `form` (a bare reset() hits the first widget on the page). */
export function resetTurnstileIn(form: HTMLElement) {
  const el = form.querySelector<HTMLElement>('[data-turnstile]')
  const id = el && widgets.get(el)
  if (id)
    window.turnstile?.reset(id)
}
