import { duration, ease } from './config'
import { ensureGsap } from './gsap-client'
import { prefersReducedMotion } from './reduced-motion'

const CLIP_FROM: Record<'up' | 'down' | 'left' | 'right', string> = {
  up: 'inset(0% 0% 100% 0%)',
  down: 'inset(100% 0% 0% 0%)',
  left: 'inset(0% 100% 0% 0%)',
  right: 'inset(0% 0% 0% 100%)',
}
const CLIP_FULL = 'inset(0% 0% 0% 0%)'

// Desplazamiento acompañando al clip-path — el clip solo no se percibe bien
// a duraciones lentas; sumarle movimiento + escala lo hace leerse como una
// entrada real, no un simple fundido.
const OFFSET_FROM: Record<'up' | 'down' | 'left' | 'right', gsap.TweenVars> = {
  up: { y: 48 },
  down: { y: -48 },
  left: { x: -48 },
  right: { x: 48 },
}

interface RevealOptions {
  /** Lado desde el que se revela la máscara. */
  direction?: 'up' | 'down' | 'left' | 'right'
  /** 'enter': una vez, animada. 'scrub': atada 1:1 al scroll (Roadmap, Embudo). */
  mode?: 'enter' | 'scrub'
  /** Extra: parallax leve del propio elemento mientras se revela. */
  parallax?: boolean
  /** `false`: dispara de inmediato sin ScrollTrigger — usar en elementos above-the-fold que ya están en viewport al cargar (hero, headers), donde depender de la posición de scroll puede sentirse tarde o inconsistente. */
  scrollTrigger?: false | Partial<GSAPScrollTriggerVars>
}

// Evita traer el tipo completo de ScrollTrigger solo para esta firma.
interface GSAPScrollTriggerVars { trigger: Element, start: string, end: string, scrub: boolean | number }

/** Revela un elemento (imagen, card, video) con clip-path + movimiento + escala. Ver RevealOptions. */
export function revealClip(el: HTMLElement, options: RevealOptions = {}) {
  const { direction = 'up', mode = 'enter', parallax = false } = options
  const { gsap } = ensureGsap()

  if (prefersReducedMotion()) {
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4 })
    return
  }

  const isScrub = mode === 'scrub'
  const vars: gsap.TweenVars = {
    clipPath: CLIP_FULL,
    ...(isScrub ? {} : { x: 0, y: 0, scale: 1 }),
    ease: isScrub ? 'none' : ease.out,
    duration: isScrub ? 1 : duration.reveal,
  }

  if (isScrub) {
    vars.scrollTrigger = {
      trigger: el,
      start: 'top 90%',
      end: 'top 10%',
      scrub: 0.6,
      ...options.scrollTrigger,
    }
  }
  else if (options.scrollTrigger !== false) {
    vars.scrollTrigger = {
      trigger: el,
      start: 'top 85%',
      ...options.scrollTrigger,
    }
  }

  gsap.fromTo(
    el,
    { clipPath: CLIP_FROM[direction], scale: isScrub ? 1 : 0.96, ...(isScrub ? {} : OFFSET_FROM[direction]) },
    vars,
  )

  if (parallax) {
    gsap.fromTo(
      el,
      { yPercent: mode === 'scrub' ? 0 : -6 },
      {
        yPercent: mode === 'scrub' ? -8 : 0,
        ease: ease.inOut,
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
      },
    )
  }
}

/** Dibuja una línea/barra (scaleX 0→1) — firma visual bajo un titular o card. */
export function drawLine(el: HTMLElement, { delay = 0, scrollTrigger = false }: { delay?: number, scrollTrigger?: boolean } = {}) {
  const { gsap } = ensureGsap()

  if (prefersReducedMotion()) {
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.3, delay })
    return
  }

  gsap.fromTo(
    el,
    { scaleX: 0, transformOrigin: '0% 50%' },
    {
      scaleX: 1,
      duration: 0.5,
      ease: ease.out,
      delay,
      ...(scrollTrigger && { scrollTrigger: { trigger: el, start: 'top 90%' } }),
    },
  )
}

/** Revela un video/media circular desde el centro (Hero, Roas). */
export function revealCircle(el: HTMLElement, { delay = 0, scrollTrigger = false }: { delay?: number, scrollTrigger?: boolean } = {}) {
  const { gsap } = ensureGsap()

  if (prefersReducedMotion()) {
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4, delay })
    return
  }

  gsap.fromTo(
    el,
    { clipPath: 'circle(0% at 50% 50%)', scale: 1.04 },
    {
      clipPath: 'circle(75% at 50% 50%)',
      scale: 1,
      duration: duration.reveal,
      ease: ease.out,
      delay,
      ...(scrollTrigger && { scrollTrigger: { trigger: el, start: 'top 80%' } }),
    },
  )
}
