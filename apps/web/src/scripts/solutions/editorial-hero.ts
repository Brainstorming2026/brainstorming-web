import { ensureGsap, registerMotion } from '@/lib/motion'
import { pointerDepth } from '@/lib/motion/pointer-depth'

registerMotion(() => {
  const hero = document.querySelector<HTMLElement>('[data-editorial-hero]')
  if (!hero)
    return

  const { gsap, SplitText } = ensureGsap()
  const media = gsap.matchMedia()

  media.add('(prefers-reduced-motion: no-preference)', () => {
    const title = hero.querySelector<HTMLElement>('[data-hero-title]')
    const story = hero.querySelector<HTMLElement>('[data-hero-story]')
    if (!title || !story)
      return

    SplitText.create(title, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit: split => gsap.from(split.lines, {
        yPercent: 105,
        duration: 0.85,
        stagger: 0.09,
        ease: 'power3.out',
      }),
    })

    gsap.from(hero.querySelectorAll('[data-hero-enter]'), {
      y: 14,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
    })

    // Finite entrance: all content remains readable without JavaScript.
    const reveal = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: { trigger: story, start: 'top 95%', once: true },
    })
    reveal.from(story, { y: 26, rotationX: -9, opacity: 0, duration: 0.85, clearProps: 'transform,opacity' })
    reveal.from(story.querySelectorAll('[data-story-shape]'), {
      ...(hero.dataset.editorialHero === 'growth'
        ? { scaleY: 0.15, transformOrigin: '50% 100%' }
        : { y: 12, opacity: 0 }),
      duration: 0.65,
      stagger: 0.13,
    }, 0.15)
    reveal.from(story.querySelectorAll('[data-story-path]'), { drawSVG: '0%', duration: 0.85 }, 0.35)
    reveal.from(story.querySelectorAll('[data-story-node]'), { opacity: 0, duration: 0.35, stagger: 0.1 }, 0.8)

    gsap.from(hero.querySelectorAll('[data-hero-fact]'), {
      y: 16,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      clearProps: 'transform,opacity',
      scrollTrigger: { trigger: hero.querySelector('.hero-facts'), start: 'top 95%', once: true },
    })
  }, hero)

  media.add('(min-width: 768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
    const stage = hero.querySelector<HTMLElement>('[data-hero-stage]')
    const position = hero.querySelector<HTMLElement>('.hero-story-position')
    if (!stage || !position)
      return

    const disposeDepth = pointerDepth(stage, position, 6)

    gsap.fromTo(hero.querySelector('[data-hero-photo]'), { scale: 1.06, yPercent: -2 }, {
      scale: 1.06,
      yPercent: 2,
      ease: 'none',
      scrollTrigger: { trigger: stage, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
    })

    return disposeDepth
  }, hero)

  return () => media.revert()
})
