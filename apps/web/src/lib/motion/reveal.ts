import { ensureGsap } from './gsap-client'
import { duration, ease } from './config'
import { prefersReducedMotion } from './reduced-motion'

const CLIP_FROM: Record<'up' | 'down' | 'left' | 'right', string> = {
  up: 'inset(0% 0% 100% 0%)',
  down: 'inset(100% 0% 0% 0%)',
  left: 'inset(0% 100% 0% 0%)',
  right: 'inset(0% 0% 0% 100%)',
}
const CLIP_FULL = 'inset(0% 0% 0% 0%)'

interface RevealOptions {
  /** Lado desde el que se revela la máscara. */
  direction?: 'up' | 'down' | 'left' | 'right'
  /** 'enter': una vez, animada. 'scrub': atada 1:1 al scroll (Roadmap, Embudo). */
  mode?: 'enter' | 'scrub'
  /** Extra: parallax leve del propio elemento mientras se revela. */
  parallax?: boolean
  scrollTrigger?: Partial<GSAPScrollTriggerVars>
}

// Evita traer el tipo completo de ScrollTrigger solo para esta firma.
type GSAPScrollTriggerVars = { trigger: Element; start: string; end: string; scrub: boolean | number }

/** Revela un elemento (imagen, card, video) con clip-path. Ver RevealOptions. */
export function revealClip(el: HTMLElement, options: RevealOptions = {}) {
  const { direction = 'up', mode = 'enter', parallax = false } = options
  const { gsap } = ensureGsap()

  if (prefersReducedMotion()) {
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4 })
    return
  }

  const vars: gsap.TweenVars = {
    clipPath: CLIP_FULL,
    ease: mode === 'scrub' ? 'none' : ease.out,
    duration: mode === 'scrub' ? 1 : duration.reveal,
  }

  if (mode === 'scrub') {
    vars.scrollTrigger = {
      trigger: el,
      start: 'top 90%',
      end: 'top 10%',
      scrub: 0.6,
      ...options.scrollTrigger,
    }
  }
  else {
    vars.scrollTrigger = {
      trigger: el,
      start: 'top 85%',
      ...options.scrollTrigger,
    }
  }

  gsap.fromTo(el, { clipPath: CLIP_FROM[direction] }, vars)

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
