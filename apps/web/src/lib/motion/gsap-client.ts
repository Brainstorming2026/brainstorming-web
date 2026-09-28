import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

let registered = false

/** Registra los plugins GSAP una sola vez, sin importar cuántas secciones lo llamen. */
export function ensureGsap() {
  if (!registered) {
    // ScrollSmoother requiere ScrollTrigger registrado antes que él.
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, DrawSVGPlugin)
    registered = true
  }
  return { gsap, ScrollTrigger, ScrollSmoother, SplitText, DrawSVGPlugin }
}
