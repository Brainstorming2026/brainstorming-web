import { ease, tempo } from './config'
import { ensureGsap } from './gsap-client'

/** Una capa dentro de cada item: qué elemento(s) animar, desde dónde y cuándo. */
export interface SequenceLayer {
  /** Elemento(s) de la capa dentro del item. Sin resultado, la capa se omite en ese item. */
  select: (item: HTMLElement) => Element | Element[] | null
  /**
   * Estado inicial. Se aplica con gsap.set() al cargar, nunca en el onEnter.
   * Como función, puede variar por item (ej. entrar desde el lado en que está).
   */
  from: gsap.TweenVars | ((item: HTMLElement, index: number) => gsap.TweenVars)
  /** Estado final. Por defecto, el opuesto natural de `from` (autoAlpha 1, x/y 0, scale 1…). */
  to?: gsap.TweenVars
  /** Retraso de la capa respecto al inicio de su item, en segundos. */
  at?: number
  duration?: number
  /** Separación entre elementos de la misma capa (ej. título y texto). */
  stagger?: number
  /** Propiedades a limpiar al terminar. Por defecto, las que se animaron. */
  clearProps?: string
}

interface RevealSequenceOptions {
  /** Elemento cuyo cruce dispara la secuencia completa. */
  trigger: Element | null
  start?: string
  /** Separación entre items. */
  stagger?: number
}

const NEUTRAL: Record<string, number | string> = {
  autoAlpha: 1,
  opacity: 1,
  x: 0,
  y: 0,
  xPercent: 0,
  yPercent: 0,
  scale: 1,
  scaleX: 1,
  scaleY: 1,
  rotate: 0,
  filter: 'blur(0px)',
}

// Nombres que GSAP acepta en clearProps para cada propiedad animada.
const CLEAR: Record<string, string> = {
  autoAlpha: 'opacity,visibility',
  x: 'transform',
  y: 'transform',
  xPercent: 'transform',
  yPercent: 'transform',
  scale: 'transform',
  scaleX: 'transform',
  scaleY: 'transform',
  rotate: 'transform',
}

function neutralOf(from: gsap.TweenVars): gsap.TweenVars {
  const to: gsap.TweenVars = {}
  for (const key of Object.keys(from)) {
    if (key in NEUTRAL)
      to[key] = NEUTRAL[key]
  }
  return to
}

function clearOf(from: gsap.TweenVars) {
  return [...new Set(Object.keys(from).map(key => CLEAR[key] ?? key))].join(',')
}

/**
 * Entrada coreografiada de una grilla: cada item se arma por capas (ej.
 * ilustración → línea → título → texto) y los items llegan uno tras otro, todo
 * en UN timeline. Así la sección se lee como una secuencia y no como capas
 * apareciendo a destiempo con triggers distintos.
 *
 * Llamar dentro de un gsap.matchMedia() sin reduced-motion. Pre-oculta todo al
 * cargar (gsap.set), así no hay parpadeo al entrar al viewport.
 */
export function revealSequence(items: HTMLElement[], layers: SequenceLayer[], options: RevealSequenceOptions) {
  const { gsap } = ensureGsap()
  const { trigger, start = 'top 80%', stagger = 0.1 } = options
  if (items.length === 0 || !trigger)
    return

  const resolved = items.map(item => layers.map((layer) => {
    const found = layer.select(item)
    return found === null ? [] : Array.isArray(found) ? found : [found]
  }))

  const fromOf = (layer: SequenceLayer, item: HTMLElement, index: number) =>
    typeof layer.from === 'function' ? layer.from(item, index) : layer.from

  resolved.forEach((item, itemIndex) => {
    layers.forEach((layer, layerIndex) => {
      if (item[layerIndex].length > 0)
        gsap.set(item[layerIndex], fromOf(layer, items[itemIndex], itemIndex))
    })
  })

  const timeline = gsap.timeline({ scrollTrigger: { trigger, start, once: true } })
  resolved.forEach((item, itemIndex) => {
    layers.forEach((layer, layerIndex) => {
      const targets = item[layerIndex]
      if (targets.length === 0)
        return
      const from = fromOf(layer, items[itemIndex], itemIndex)
      timeline.to(targets, {
        ...(layer.to ?? neutralOf(from)),
        duration: (layer.duration ?? 0.9) * tempo,
        stagger: (layer.stagger ?? 0) * tempo,
        ease: ease.out,
        clearProps: layer.clearProps ?? clearOf(from),
      }, (itemIndex * stagger + (layer.at ?? 0)) * tempo)
    })
  })
  return timeline
}
