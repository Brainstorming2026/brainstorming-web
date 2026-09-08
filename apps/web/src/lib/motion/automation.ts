import { ensureGsap } from './gsap-client'

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
    root.querySelectorAll('.ai-benefits li').forEach((item) => {
      gsap.from(item, { y: 18, autoAlpha: 0, duration: 0.65, ease: 'power2.out', scrollTrigger: { trigger: item, start: 'top 92%', once: true } })
    })
  }, root)

  media.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
    gsap.fromTo('.ai-adoption-photo img', { scale: 1.09, yPercent: -3 }, { scale: 1.02, yPercent: 0, ease: 'none', scrollTrigger: { trigger: '.ai-adoption-photo', start: 'top bottom', end: 'bottom top', scrub: 1 } })
  }, root)
}
