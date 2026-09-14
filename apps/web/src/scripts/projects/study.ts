import { ensureGsap, registerMotion, revealClip, splitHeadline } from '@/lib/motion'
import { ease } from '@/lib/motion/config'

// Reuse the site's headline masks and image reveals. The shared lifecycle
// reverts animation state on navigation; matchMedia handles OS preferences.
registerMotion(() => {
  const root = document.querySelector<HTMLElement>('.project-study')
  if (!root)
    return

  const { gsap } = ensureGsap()
  const media = gsap.matchMedia()

  media.add('(prefers-reduced-motion: no-preference)', () => {
    root.querySelectorAll<HTMLElement>('[data-study-heading]').forEach((heading) => {
      splitHeadline(heading, { by: 'lines', scrollTrigger: heading.tagName !== 'H1' })
    })

    gsap.fromTo(root.querySelectorAll('.study-client, .study-intro, .study-services li'), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: ease.out, clearProps: 'opacity,transform' })

    root.querySelectorAll<HTMLElement>('[data-study-image]').forEach((frame) => {
      revealClip(frame, { direction: frame.closest('.study-web') ? 'left' : 'up', scrollTrigger: { start: 'top 94%' } })
    })

    root.querySelectorAll<HTMLElement>('[data-study-reveal]').forEach((element) => {
      gsap.fromTo(element, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.65, ease: ease.out, clearProps: 'opacity,transform', scrollTrigger: { trigger: element, start: 'top 92%', once: true } })
    })
  }, root)
})
