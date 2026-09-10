import { ensureGsap, registerMotion, splitHeadline } from '@/lib/motion'

export function initSolutionsMapMotion() {
  registerMotion(() => {
    const section = document.getElementById('solutions-landscape')
    const journey = document.getElementById('solutions-journey')
    const headline = document.getElementById('solutions-hero-headline')
    if (!section || !journey)
      return

    const { gsap } = ensureGsap()
    const media = gsap.matchMedia()

    media.add({ motion: '(prefers-reduced-motion: no-preference)', reduced: '(prefers-reduced-motion: reduce)' }, (context) => {
      const reduced = context.conditions?.reduced
      const cards = gsap.utils.toArray<HTMLElement>('[data-solution-card]', journey)

      if (reduced) {
        gsap.set(section.querySelectorAll('[data-solutions-intro], [data-solution-copy] > *, [data-solution-visual], [data-solution-image], [data-solutions-cta]'), { clearProps: 'all' })
        return
      }

      if (headline)
        splitHeadline(headline, { by: 'lines', scrollTrigger: false })

      cards.forEach((card, index) => {
        const copy = card.querySelectorAll<HTMLElement>('[data-solution-copy] > *')
        const visual = card.querySelector<HTMLElement>('[data-solution-visual]')
        const image = card.querySelector<HTMLElement>('[data-solution-image]')
        const fromX = index % 2 === 0 ? -22 : 22
        const reveal = gsap.timeline({
          scrollTrigger: { id: `solution-reveal-${index}`, trigger: card, start: 'top 82%', once: true },
        })

        reveal.fromTo(copy, { x: fromX, autoAlpha: 0 }, {
          x: 0,
          autoAlpha: 1,
          duration: 0.52,
          stagger: 0.055,
          ease: 'power3.out',
          clearProps: 'transform,opacity,visibility',
        })

        if (visual) {
          reveal.fromTo(visual, { clipPath: 'inset(5% 5% 5% 5% round 24px)', autoAlpha: 0 }, {
            clipPath: 'inset(0% 0% 0% 0% round 0px)',
            autoAlpha: 1,
            duration: 0.7,
            ease: 'power3.out',
            clearProps: 'clipPath,opacity,visibility',
          }, 0.08)
        }

        if (image) {
          reveal.fromTo(image, { scale: 1.07 }, { scale: 1, duration: 0.9, ease: 'power2.out', clearProps: 'scale' }, 0.08)
          gsap.fromTo(image, { yPercent: -2.5 }, {
            yPercent: 2.5,
            ease: 'none',
            scrollTrigger: {
              id: `solution-depth-${index}`,
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5,
            },
          })
        }
      })

      const cta = section.querySelector<HTMLElement>('[data-solutions-cta]')
      if (cta) {
        gsap.fromTo(cta, { y: 18, autoAlpha: 0 }, {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          ease: 'power3.out',
          clearProps: 'transform,opacity,visibility',
          scrollTrigger: { trigger: cta, start: 'top 88%', once: true },
        })
      }
    })

    return () => media.revert()
  })
}
