import { ensureGsap } from './gsap-client'
import { prefersReducedMotion } from './reduced-motion'

interface CountUpOptions {
  /** Valor final. Si se omite, se parsea del `textContent` actual del elemento. */
  to?: number
  /** Duración en segundos. Medio-lento a propósito: el número "sube", no salta. */
  duration?: number
  /** Decimales a mostrar. Por defecto 0 si `to` es entero. */
  decimals?: number
  /** Texto fijo antes / después del número (ej. '+', ' días', '%'). */
  prefix?: string
  suffix?: string
  /** Separador de miles ('' = ninguno). */
  separator?: string
  /** Dispara al entrar en viewport (default) o de inmediato. */
  scrollTrigger?: boolean
  start?: string
}

const NUMERIC = /-?[\d.,]+/

/**
 * Anima un contador numérico de 0 → `to` cuando entra en pantalla. Usa un proxy
 * y `onUpdate` (sin plugin). Con prefers-reduced-motion escribe el valor final
 * al instante. El elemento debe contener SOLO el número (envuélvelo en su propio
 * `<span>` si va acompañado de texto).
 */
export function countUp(el: HTMLElement, options: CountUpOptions = {}) {
  const parsed = Number.parseFloat((el.textContent?.match(NUMERIC)?.[0] ?? '0').replace(/,/g, '')) || 0
  const {
    to = parsed,
    duration = 2,
    decimals = Number.isInteger(to) ? 0 : 1,
    prefix = '',
    suffix = '',
    separator = '',
    scrollTrigger = true,
    start = 'top 85%',
  } = options

  const format = (value: number) => {
    let body = value.toFixed(decimals)
    if (separator)
      body = body.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    return `${prefix}${body}${suffix}`
  }

  // Pre-set del estado inicial YA, en cuanto carga la página — nunca dentro del
  // onEnter — para que el número no "salte" de su valor final a 0 al hacer scroll.
  if (prefersReducedMotion()) {
    el.textContent = format(to)
    return
  }

  const { gsap } = ensureGsap()
  const proxy = { value: 0 }
  el.textContent = format(0)

  gsap.to(proxy, {
    value: to,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      el.textContent = format(proxy.value)
    },
    ...(scrollTrigger && {
      scrollTrigger: { trigger: el, start, once: true },
    }),
  })
}
