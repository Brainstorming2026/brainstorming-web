import { revealCards } from './card-reveal'
import { ensureGsap } from './gsap-client'
import { revealWindow } from './reveal'

export function initAutomationMotion() {
  const root = document.getElementById('automation-page')
  if (!root)
    return
  const { gsap, SplitText } = ensureGsap()
  const media = gsap.matchMedia()

  media.add('(prefers-reduced-motion: no-preference)', () => {
    const headline = root.querySelector('h1')
    if (headline) {
      SplitText.create(headline, {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit: split => gsap.from(split.lines, { yPercent: 105, duration: 1, stagger: 0.1, ease: 'power3.out' }),
      })
    }
    gsap.from('.ai-hero-aside', { y: 20, autoAlpha: 0, duration: 0.8, delay: 0.3, ease: 'power2.out' })
    const flow = gsap.timeline({ scrollTrigger: { trigger: '.ai-flow', start: 'top 94%', once: true } })
    flow.from('.ai-flow-node', { y: 18, autoAlpha: 0, stagger: 0.22, duration: 0.7, ease: 'power3.out' })
      .from('.ai-flow-line path', { drawSVG: '0%', duration: 0.75, stagger: 0.2, ease: 'power2.inOut' }, 0.15)
    root.querySelectorAll<HTMLElement>('[data-ai-reveal]').forEach((element) => {
      SplitText.create(element, {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit: split => gsap.from(split.lines, { yPercent: 105, duration: 0.85, stagger: 0.09, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 90%', once: true } }),
      })
    })
    gsap.from('.ai-quadrant', { autoAlpha: 0, y: 15, stagger: 0.1, duration: 0.65, ease: 'power2.out', scrollTrigger: { trigger: '.ai-map', start: 'top 85%', once: true } })
    gsap.from('.ai-adkar-step', { autoAlpha: 0, y: 22, stagger: 0.09, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: '.ai-adkar', start: 'top 88%', once: true } })
    // Cascada agrupada en lugar de un trigger por item: se lee como secuencia.
    const benefits = root.querySelector<HTMLElement>('.ai-benefits')
    if (benefits) {
      revealCards(benefits.querySelectorAll('li'), { trigger: benefits, intensity: 1, stagger: 0.1 })
      gsap.from(benefits.querySelectorAll('.ai-benefit-icon'), {
        scale: 0.6,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.8)',
        scrollTrigger: { trigger: benefits, start: 'top 80%', once: true },
      })
    }

    // Intro y diagnóstico no tenían ninguna entrada.
    const introColumns = root.querySelector<HTMLElement>('.ai-intro-columns')
    if (introColumns)
      revealCards(introColumns.children, { trigger: introColumns, intensity: 1, stagger: 0.13 })

    const deliverables = root.querySelectorAll<HTMLElement>('.ai-deliverable')
    if (deliverables.length > 0)
      revealCards(deliverables, { trigger: deliverables[0].parentElement, intensity: 1, stagger: 0.11 })

    // Los ejes de la matriz se trazan ANTES de que caigan los cuadrantes: el
    // plano existe primero, después lo que va encima.
    const map = root.querySelector<HTMLElement>('.ai-map')
    if (map) {
      const axisX = map.querySelector<HTMLElement>('.ai-axis-x')
      const axisY = map.querySelector<HTMLElement>('.ai-axis-y')
      const axes = gsap.timeline({ scrollTrigger: { trigger: map, start: 'top 88%', once: true } })
      if (axisX)
        axes.from(axisX, { scaleX: 0, transformOrigin: '0% 50%', duration: 0.7, ease: 'power3.out' }, 0)
      if (axisY)
        axes.from(axisY, { scaleY: 0, transformOrigin: '50% 100%', duration: 0.7, ease: 'power3.out' }, 0.1)
    }

    // AutomationEvidence: los 4 pasos entran mientras el riel los va uniendo.
    const evidenceFlow = root.querySelector<HTMLElement>('.evidence-flow')
    if (evidenceFlow) {
      const rail = evidenceFlow.querySelector<HTMLElement>('[data-evidence-rail]')
      if (rail) {
        gsap.fromTo(rail, { scaleX: 0 }, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: evidenceFlow, start: 'top 82%', end: 'bottom 75%', scrub: 0.7 },
        })
      }
      revealCards(evidenceFlow.querySelectorAll('li'), { trigger: evidenceFlow, intensity: 1, stagger: 0.14, inner: 'h3, p' })
    }

    const evidenceNote = root.querySelector<HTMLElement>('.automation-evidence__note')
    if (evidenceNote) {
      gsap.from(evidenceNote, {
        autoAlpha: 0,
        yPercent: 20,
        duration: 0.8,
        ease: 'expo.out',
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: { trigger: evidenceNote, start: 'top 92%', once: true },
      })
    }

    // Las letras del ADKAR se montan una por una.
    const adkar = root.querySelector<HTMLElement>('.ai-adkar')
    if (adkar) {
      gsap.from(adkar.querySelectorAll('.ai-adkar-letter'), {
        autoAlpha: 0,
        yPercent: 45,
        scale: 0.8,
        duration: 0.55,
        stagger: 0.09,
        ease: 'back.out(1.7)',
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: { trigger: adkar, start: 'top 86%', once: true },
      })
    }

    // Paneles de agentes y carrusel de herramientas: entrada al scroll. El
    // cambio de tab ya lo animan sus propios web components.
    for (const selector of ['.ai-agent-panel', '.ai-tools-viewport']) {
      const block = root.querySelector<HTMLElement>(selector)
      if (block)
        revealWindow(block, { direction: 'up', zoom: 1, start: 'top 86%' })
    }
  }, root)

  media.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
    gsap.fromTo('.ai-adoption-photo img', { scale: 1.09, yPercent: -3 }, { scale: 1.02, yPercent: 0, ease: 'none', scrollTrigger: { trigger: '.ai-adoption-photo', start: 'top bottom', end: 'bottom top', scrub: 1 } })
  }, root)
}
