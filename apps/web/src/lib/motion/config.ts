/** Tokens de movimiento compartidos por todos los helpers de motion/. */

/** Eases GSAP (timelines JS). expo.out ≈ cubic-bezier(0.16, 1, 0.3, 1). */
export const ease = {
  /** Entradas: arranca rápido, se asienta con fuerza. */
  out: 'expo.out',
  /** Movimiento en pantalla (scrub, parallax). */
  inOut: 'power2.inOut',
  /** Flourish puntual (CTA, check icons) — overshoot sutil. */
  back: 'back.out(1.4)',
} as const

/** Equivalente CSS, solo para el fallback de prefers-reduced-motion (opacity-only). */
export const cssEase = 'cubic-bezier(0.16, 1, 0.3, 1)'

export const duration = {
  headlineWord: 0.8,
  headlineStagger: 0.03,
  reveal: 0.9,
  /** Entrada individual de un card/logo en una grilla (staggerGrid). */
  gridItem: 1.2,
  cardStagger: 0.14,
  flourish: 0.5,
} as const

export const scrollTriggerDefaults = {
  start: 'top 80%',
  toggleActions: 'play none none none',
} as const
