import { ensureGsap } from '@/lib/motion/gsap-client'
import { registerMotion } from '@/lib/motion/lifecycle'

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
    root.querySelectorAll<HTMLElement>('[data-br-heading]').forEach((element) => {
      SplitText.create(element, {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit: split => gsap.fromTo(split.lines, { yPercent: 100 }, { yPercent: 0, duration: 0.75, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 90%', once: true } }),
      })
    })
    root.querySelectorAll('.br-dimensions article, .br-benefits li').forEach((element) => {
      gsap.fromTo(element, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', clearProps: 'opacity,transform', scrollTrigger: { trigger: element, start: 'top 94%', once: true } })
    })
  }, root)
})
