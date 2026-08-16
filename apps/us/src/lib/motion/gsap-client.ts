import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

let registered = false

/** Registra los plugins GSAP una sola vez, sin importar cuántas secciones lo llamen. */
export function ensureGsap() {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin)
    registered = true
  }
  return { gsap, ScrollTrigger, SplitText, DrawSVGPlugin }
}
