import { ensureGsap, registerMotion } from '@/lib/motion'

export function initBoardMotion() {
  registerMotion(() => {
    const board = document.getElementById('board-of-directors')
    if (!board)
      return

    const { gsap, ScrollTrigger } = ensureGsap()
    const media = gsap.matchMedia()
    const controller = new AbortController()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      board.querySelectorAll<HTMLElement>('[data-board-reveal]').forEach((block) => {
        gsap.fromTo(block, { y: 18, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: block, start: 'top 94%', once: true },
        })
      })

      gsap.fromTo(board.querySelectorAll('.board-plane'), { y: 10 }, {
        y: 0,
        duration: 0.65,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: { trigger: board, start: 'top 85%', once: true },
      })
    })

    // Native disclosures retain keyboard support and work without JavaScript.
    // Refresh measurements after their height changes, including during scroll.
    board.querySelectorAll<HTMLDetailsElement>('details').forEach((details) => {
      details.addEventListener('toggle', () => ScrollTrigger.refresh(), { signal: controller.signal })
    })

    return () => {
      controller.abort()
      media.revert()
    }
  })
}
