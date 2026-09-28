import { revealCards } from '@/lib/motion/card-reveal'
import { ensureGsap } from '@/lib/motion/gsap-client'
import { registerMotion } from '@/lib/motion/lifecycle'

registerMotion(() => {
  const root = document.getElementById('innovation-page')
  if (!root)
    return
  const { gsap, SplitText } = ensureGsap()
  const media = gsap.matchMedia()

  media.add('(prefers-reduced-motion: no-preference)', () => {
    root.querySelectorAll<HTMLElement>('[data-in-heading]').forEach((element) => {
      SplitText.create(element, {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit: split => gsap.fromTo(split.lines, { yPercent: 100 }, { yPercent: 0, duration: 0.75, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 90%', once: true } }),
      })
    })

    // Antes solo se animaban los titulares: el resto de la página entraba sin
    // ningún gesto. Cada bloque pasa a la misma cascada que la home.
    const intro = root.querySelector<HTMLElement>('.in-intro-columns')
    if (intro)
      revealCards(intro.children, { trigger: intro, intensity: 1, stagger: 0.13 })

    const introEnd = root.querySelector<HTMLElement>('.in-intro-end')
    if (introEnd) {
      gsap.from(introEnd, {
        autoAlpha: 0,
        yPercent: 25,
        duration: 0.85,
        ease: 'expo.out',
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: { trigger: introEnd, start: 'top 90%', once: true },
      })
    }

    // Oportunidades es donde más se gana: es el grid con más peso de la página.
    const opportunities = root.querySelector<HTMLElement>('.in-opportunities-grid')
    if (opportunities)
      revealCards(opportunities.children, { trigger: opportunities, intensity: 1.2, stagger: 0.12, inner: 'h3, p' })

    // Los criterios se leen como un checklist que se va marcando.
    const criteria = root.querySelector<HTMLElement>('.in-validation-criteria')
    if (criteria) {
      revealCards(criteria.children, { trigger: criteria, intensity: 0.95, stagger: 0.12 })
      gsap.from(criteria.querySelectorAll('.in-icon'), {
        scale: 0.6,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.12,
        ease: 'back.out(1.8)',
        scrollTrigger: { trigger: criteria, start: 'top 82%', once: true },
      })
    }

    const board = root.querySelector<HTMLElement>('.in-board-list')
    if (board) {
      revealCards(board.querySelectorAll('.in-director'), { trigger: board, intensity: 1.05, stagger: 0.12 })
      gsap.from(board.querySelectorAll('.in-director-icon'), {
        scale: 0.65,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'back.out(1.7)',
        scrollTrigger: { trigger: board, start: 'top 82%', once: true },
      })
    }

    const boardNote = root.querySelector<HTMLElement>('.in-board-note')
    if (boardNote) {
      gsap.from(boardNote, {
        autoAlpha: 0,
        yPercent: 22,
        duration: 0.8,
        ease: 'expo.out',
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: { trigger: boardNote, start: 'top 92%', once: true },
      })
    }

    const benefits = root.querySelector<HTMLElement>('.in-benefits')
    if (benefits) {
      revealCards(benefits.querySelectorAll('li'), { trigger: benefits, intensity: 1, stagger: 0.1 })
      gsap.from(benefits.querySelectorAll('.in-benefit-icon, .in-icon'), {
        scale: 0.6,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: 'back.out(1.8)',
        scrollTrigger: { trigger: benefits, start: 'top 80%', once: true },
      })
    }

    // Las fases: el número entra antes que el contenido, como un capítulo.
    const phases = root.querySelector<HTMLElement>('.in-process')
    if (phases) {
      gsap.from(phases.querySelectorAll('.in-phase-number'), {
        autoAlpha: 0,
        yPercent: 50,
        duration: 0.6,
        stagger: 0.1,
        ease: 'expo.out',
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: { trigger: phases, start: 'top 84%', once: true },
      })
      const panels = phases.querySelector<HTMLElement>('.in-phase-panels')
      if (panels) {
        gsap.from(panels, {
          autoAlpha: 0,
          yPercent: 12,
          duration: 0.9,
          ease: 'expo.out',
          clearProps: 'transform,opacity,visibility',
          scrollTrigger: { trigger: panels, start: 'top 88%', once: true },
        })
      }
    }

    const cta = root.querySelector<HTMLElement>('.in-cta')
    if (cta) {
      gsap.from(cta.children, {
        autoAlpha: 0,
        yPercent: 35,
        duration: 0.8,
        stagger: 0.11,
        ease: 'expo.out',
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: { trigger: cta, start: 'top 88%', once: true },
      })
    }
  }, root)
})
