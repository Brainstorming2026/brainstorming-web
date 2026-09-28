import { revealCards } from '@/lib/motion/card-reveal'
import { ensureGsap } from '@/lib/motion/gsap-client'
import { registerMotion } from '@/lib/motion/lifecycle'
import { revealWindow } from '@/lib/motion/reveal'

/** Partes de cada mockup, en el orden en que deben armarse en pantalla. */
const MOCKUP_PARTS = '.br-browser-bar, .br-digital-nav, .br-digital-body > *, .br-social-card, .br-letterhead, .br-business-card'

registerMotion(() => {
  const root = document.getElementById('branding-page')
  if (!root)
    return
  const { gsap, SplitText } = ensureGsap()
  const media = gsap.matchMedia()

  media.add('(prefers-reduced-motion: no-preference)', () => {
    SplitText.create(root.querySelector('h1')!, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit: split => gsap.fromTo(split.lines, { yPercent: 100 }, { yPercent: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' }),
    })
    gsap.fromTo('.br-hero-heading > div', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.25, ease: 'power2.out', clearProps: 'opacity,transform' })

    // La foto del hero se abre como ventana, igual que en las otras soluciones.
    const heroImage = root.querySelector<HTMLElement>('.br-hero-image')
    if (heroImage)
      revealWindow(heroImage, { direction: 'left', zoom: 1.08, start: 'top 95%' })

    root.querySelectorAll<HTMLElement>('[data-br-heading]').forEach((element) => {
      SplitText.create(element, {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit: split => gsap.fromTo(split.lines, { yPercent: 100 }, { yPercent: 0, duration: 0.75, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 90%', once: true } }),
      })
    })

    // Cascada en lugar del fade corto anterior: mismo gesto que la home.
    const dimensions = root.querySelector<HTMLElement>('.br-dimensions')
    if (dimensions)
      revealCards(dimensions.querySelectorAll('article'), { trigger: dimensions, intensity: 1.1, stagger: 0.12, inner: 'h3, p' })

    const benefits = root.querySelector<HTMLElement>('.br-benefits')
    if (benefits) {
      revealCards(benefits.querySelectorAll('li'), { trigger: benefits, intensity: 1, stagger: 0.1 })
      gsap.from(benefits.querySelectorAll('.br-benefit-icon'), {
        scale: 0.6,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.8)',
        scrollTrigger: { trigger: benefits, start: 'top 80%', once: true },
      })
    }

    const foundationIntro = root.querySelector<HTMLElement>('.br-foundation-intro')
    if (foundationIntro) {
      gsap.from(foundationIntro.children, {
        autoAlpha: 0,
        yPercent: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: 'expo.out',
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: { trigger: foundationIntro, start: 'top 88%', once: true },
      })
    }

    // El manual se lee como un índice que se escribe solo.
    const manualVisual = root.querySelector<HTMLElement>('.br-manual-visual')
    if (manualVisual)
      revealWindow(manualVisual, { direction: 'right', zoom: 1.08, start: 'top 84%' })

    const chapters = root.querySelector<HTMLElement>('.br-chapters')
    if (chapters)
      revealCards(chapters.children, { trigger: chapters, intensity: 0.9, stagger: 0.09 })

    const deliverables = root.querySelectorAll<HTMLElement>('.br-deliverable')
    if (deliverables.length > 0)
      revealCards(deliverables, { trigger: deliverables[0].parentElement, intensity: 0.95, stagger: 0.1 })

    // Las aplicaciones de marca son la pieza más rica de la página y hasta
    // ahora entraban planas: el stage se abre como ventana y el mockup visible
    // se arma por partes.
    const stage = root.querySelector<HTMLElement>('.br-application-stage')
    const controls = root.querySelector<HTMLElement>('.br-channel-controls')
    if (stage) {
      const timeline = gsap.timeline({ scrollTrigger: { trigger: stage, start: 'top 82%', once: true } })
      if (controls) {
        timeline.from(controls.children, {
          autoAlpha: 0,
          yPercent: 60,
          duration: 0.6,
          stagger: 0.08,
          ease: 'expo.out',
          clearProps: 'transform,opacity,visibility',
        }, 0)
      }
      timeline.fromTo(
        stage,
        { clipPath: 'inset(0% 0% 100% 0% round 12px)' },
        { clipPath: 'inset(0% 0% 0% 0% round 12px)', duration: 1.1, ease: 'expo.out' },
        0.15,
      )
      const visible = stage.querySelector<HTMLElement>('[data-br-panel]:not([hidden])') ?? stage.querySelector<HTMLElement>('[data-br-panel]')
      const parts = visible?.querySelectorAll<HTMLElement>(MOCKUP_PARTS)
      if (parts && parts.length > 0) {
        timeline.from(parts, {
          autoAlpha: 0,
          yPercent: 18,
          duration: 0.7,
          stagger: 0.09,
          ease: 'expo.out',
          clearProps: 'transform,opacity,visibility',
        }, 0.45)
      }
      // Las rayas del membrete se dibujan: sugieren texto apareciendo.
      const lines = stage.querySelectorAll<HTMLElement>('.br-letter-lines i')
      if (lines.length > 0)
        timeline.from(lines, { scaleX: 0, transformOrigin: '0% 50%', duration: 0.5, stagger: 0.08, ease: 'power3.out' }, 0.75)
    }
  }, root)
})
