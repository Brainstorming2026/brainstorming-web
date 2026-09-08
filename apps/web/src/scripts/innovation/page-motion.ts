import { ensureGsap } from '@/lib/motion/gsap-client'
import { registerMotion } from '@/lib/motion/lifecycle'

registerMotion(() => {
  const root = document.getElementById('innovation-page')
  if (!root)
    return
  const { gsap, SplitText } = ensureGsap()
  const media = gsap.matchMedia()
  media.add('(prefers-reduced-motion: no-preference)', () => {
    const title = root.querySelector('h1')!
    SplitText.create(title, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit: split => gsap.fromTo(split.lines, { yPercent: 100 }, { yPercent: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' }),
    })
    gsap.fromTo('.in-hero-statement, .in-hero-description, .in-hero-actions', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, delay: 0.25, ease: 'power2.out', clearProps: 'opacity,transform' })
    gsap.fromTo('.in-hero-visual', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', clearProps: 'opacity,transform' })
    root.querySelectorAll<HTMLElement>('[data-in-heading]').forEach((element) => {
      SplitText.create(element, {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit: split => gsap.fromTo(split.lines, { yPercent: 100 }, { yPercent: 0, duration: 0.75, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 90%', once: true } }),
      })
    })
    root.querySelectorAll('.in-director, .in-benefits li').forEach((element) => {
      gsap.fromTo(element, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out', clearProps: 'opacity,transform', scrollTrigger: { trigger: element, start: 'top 94%', once: true } })
    })
  }, root)
})
