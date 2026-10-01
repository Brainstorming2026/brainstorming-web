import { ensureGsap, registerMotion, revealClip, splitHeadline } from '@/lib/motion'
import { duration, ease } from '@/lib/motion/config'
import { pointerDepth } from '@/lib/motion/pointer-depth'

// Motion of the case-study template (Aruma, Atsa Airlines, Retyg, the new
// cases, and every project migrated to it). Everything lives here so each
// study inherits it without touching its page.
//
// Rhythm: this is editorial, read-once content, so entrances are slower than UI
// motion (1.2–1.8s, strong ease-out) and text arrives through a light blur that
// sharpens as it settles: it reads as focus, not as a fade.
//
// Layers per media frame, so transforms never fight:
//   frame  → clip-path reveal (enter)
//   img    → scale settle (enter) + yPercent parallax (scrub)
//   figure → depth offset / recede (scrub)
// Initial states are set at load (fromTo / gsap.set), never inside onEnter.

const SLOW = 'expo.out'
const FOCUS_FROM = { autoAlpha: 0, filter: 'blur(8px)' }
const FOCUS_TO = { autoAlpha: 1, filter: 'blur(0px)' }

registerMotion(() => {
  const root = document.querySelector<HTMLElement>('.project-study')
  if (!root)
    return

  const { gsap, SplitText } = ensureGsap()
  const media = gsap.matchMedia()
  const all = <T extends Element = HTMLElement>(selector: string, scope: ParentNode = root) => Array.from(scope.querySelectorAll<T>(selector))
  const once = (trigger: Element, start = 'top 85%') => ({ trigger, start, once: true })
  const heroFrame = root.querySelector<HTMLElement>('.study-hero-stage [data-study-image]')
  const heroVideo = root.querySelector<HTMLElement>('[data-study-video]')
  const contextBlock = root.querySelector<HTMLElement>('.study-context')
  const chapterHeads = all('.study-chapter-heading')

  /**
   * Split `el` into lines and animate them with `build`. With autoSplit the
   * lines are rebuilt on resize/font load; returning the tween lets SplitText
   * keep its progress across re-splits.
   */
  const byLines = (el: HTMLElement, mask: boolean, build: (lines: Element[]) => gsap.core.Animation) =>
    SplitText.create(el, { type: 'lines', ...(mask && { mask: 'lines' }), autoSplit: true, onSplit: split => build(split.lines) })

  media.add('(prefers-reduced-motion: no-preference)', () => {
    // Headings with their own choreography below are skipped here.
    all('[data-study-heading]')
      .filter(heading => !heading.closest('.study-context, .study-chapter-heading'))
      .forEach(heading => splitHeadline(heading, { by: 'lines', scrollTrigger: heading.tagName !== 'H1' }))

    // ── Cover ────────────────────────────────────────────────────────────
    const services = all('.study-services li')
    const serviceIcons = services.map(item => item.querySelector('svg')).filter(Boolean)
    gsap.timeline({ defaults: { ease: SLOW } })
      .fromTo(all('.study-client, .study-intro > *'), { ...FOCUS_FROM, y: 16 }, { ...FOCUS_TO, y: 0, duration: 1.2, stagger: 0.09, clearProps: 'opacity,visibility,transform,filter' }, 0.2)
      .fromTo(services, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.1, clearProps: 'opacity,visibility,transform' }, 0.55)
      .fromTo(serviceIcons, { scale: 0.7, rotation: -24 }, { scale: 1, rotation: 0, duration: 1.1, stagger: 0.1, ease: ease.back, clearProps: 'transform' }, 0.6)

    // ── Hero: still image ────────────────────────────────────────────────
    if (heroFrame) {
      const radius = getComputedStyle(heroFrame).borderTopLeftRadius || '0px'
      const heroImage = heroFrame.querySelector('img')
      gsap.fromTo(heroFrame, { clipPath: `inset(10% 8% 10% 8% round ${radius})` }, { clipPath: `inset(0% 0% 0% 0% round ${radius})`, duration: 1.8, delay: 0.3, ease: SLOW, clearProps: 'clipPath' })
      if (heroImage) {
        gsap.fromTo(heroImage, { scale: 1.16 }, { scale: 1, duration: 2.2, delay: 0.3, ease: SLOW })
        gsap.to(heroImage, { yPercent: 7, ease: 'none', scrollTrigger: { trigger: heroFrame, start: 'top top', end: 'bottom top', scrub: 0.8 } })
      }
    }

    // ── Hero: video ──────────────────────────────────────────────────────
    // The card opens like a window, the poster settles inside it, and only
    // then the play control focuses in: the invitation arrives last.
    const stage = heroVideo?.querySelector<HTMLElement>('.project-video')
    if (heroVideo && stage) {
      const radius = getComputedStyle(stage).borderTopLeftRadius || '24px'
      const poster = stage.querySelector('img')
      const ring = stage.querySelector('.project-video-ring')
      const caption = heroVideo.querySelector('figcaption')
      gsap.timeline({ delay: 0.3, defaults: { ease: SLOW } })
        .fromTo(stage, { clipPath: `inset(12% 10% 12% 10% round ${radius})` }, { clipPath: `inset(0% 0% 0% 0% round ${radius})`, duration: 1.8, clearProps: 'clipPath' })
        .fromTo(poster, { scale: 1.18 }, { scale: 1, duration: 2.4 }, 0)
        .fromTo(ring, { ...FOCUS_FROM, scale: 0.85 }, { ...FOCUS_TO, scale: 1, duration: 1.1, ease: ease.back, clearProps: 'opacity,visibility,filter,scale' }, 1)
        .fromTo(caption, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.9, clearProps: 'opacity,visibility,transform' }, 1.2)

      // On the way out the card recedes and the poster drifts: depth, not a cut.
      gsap.timeline({ scrollTrigger: { trigger: stage, start: 'top top', end: 'bottom top', scrub: 0.9 } })
        .to(stage, { scale: 0.94, ease: 'none' }, 0)
        .to(poster, { yPercent: 8, ease: 'none' }, 0)
    }

    // ── Context: vertical, calm ─────────────────────────────────────────
    // Heading lines rise through their masks; each copy block follows with its
    // title and then its paragraph line by line, sharpening as it lands.
    if (contextBlock) {
      const heading = contextBlock.querySelector<HTMLElement>('[data-study-heading]')
      const eyebrow = contextBlock.querySelector('.study-eyebrow')
      const tracking = eyebrow ? getComputedStyle(eyebrow).letterSpacing : 'normal'
      gsap.fromTo(eyebrow, { autoAlpha: 0, letterSpacing: '0.4em' }, { autoAlpha: 1, letterSpacing: tracking, duration: 1.6, ease: SLOW, clearProps: 'opacity,visibility,letterSpacing', scrollTrigger: once(contextBlock) })
      if (heading) {
        byLines(heading, true, lines => gsap.fromTo(lines, { yPercent: 110 }, { yPercent: 0, duration: 1.5, stagger: 0.14, ease: SLOW, delay: 0.15, scrollTrigger: once(heading) }))
      }
      all(':scope > div', contextBlock.querySelector('.study-context-copy') ?? root).forEach((block, index) => {
        const title = block.querySelector('h3')
        const text = block.querySelector<HTMLElement>('p')
        gsap.fromTo(title, { ...FOCUS_FROM, y: 14 }, { ...FOCUS_TO, y: 0, duration: 1.2, delay: 0.25 + index * 0.1, ease: SLOW, clearProps: 'opacity,visibility,transform,filter', scrollTrigger: once(block) })
        if (text)
          byLines(text, false, lines => gsap.fromTo(lines, { ...FOCUS_FROM, y: 16 }, { ...FOCUS_TO, y: 0, duration: 1.3, stagger: 0.07, delay: 0.4 + index * 0.1, ease: SLOW, clearProps: 'filter', scrollTrigger: once(block) }))
      })
    }

    // ── Chapters: horizontal, converging ────────────────────────────────
    // The title wipes in from the left through its line masks while the copy
    // drifts in from the right, line by line. Both meet in the gutter.
    chapterHeads.forEach((head) => {
      const label = head.querySelector('.study-section-label')
      const icon = label?.querySelector('svg') ?? null
      const heading = head.querySelector<HTMLElement>('[data-study-heading]')
      const paragraphs = all<HTMLElement>('.study-chapter-copy p', head)

      gsap.timeline({ scrollTrigger: once(head) })
        .fromTo(label, { autoAlpha: 0, x: -28 }, { autoAlpha: 1, x: 0, duration: 1.2, ease: SLOW, clearProps: 'opacity,visibility,transform' })
        .fromTo(icon, { scale: 0.7, rotation: -40 }, { scale: 1, rotation: 0, duration: 1.2, ease: ease.back, clearProps: 'transform' }, 0.1)

      if (heading)
        byLines(heading, true, lines => gsap.fromTo(lines, { xPercent: -104 }, { xPercent: 0, duration: 1.6, stagger: 0.13, ease: SLOW, delay: 0.15, scrollTrigger: once(head) }))
      paragraphs.forEach((paragraph, index) => {
        byLines(paragraph, false, lines => gsap.fromTo(lines, { ...FOCUS_FROM, x: 72 }, { ...FOCUS_TO, x: 0, duration: 1.5, stagger: 0.08, delay: 0.35 + index * 0.15, ease: SLOW, clearProps: 'filter', scrollTrigger: once(head) }))
      })
    })

    // ── Media frames below the fold ─────────────────────────────────────
    all('[data-study-image]').filter(frame => frame !== heroFrame).forEach((frame) => {
      const side = frame.closest('.study-web') ? 'left' : 'up'
      revealClip(frame, { direction: side, scrollTrigger: { start: 'top 90%' } })
      const image = frame.querySelector('img')
      if (image) {
        gsap.fromTo(image, { scale: 1.16 }, { scale: 1.04, duration: duration.reveal + 0.5, ease: SLOW, scrollTrigger: once(frame, 'top 90%') })
        gsap.fromTo(image, { yPercent: -3 }, { yPercent: 3, ease: 'none', scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: 1 } })
      }
      const caption = frame.parentElement?.querySelector(':scope > figcaption')
      if (caption)
        gsap.fromTo(caption, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.9, delay: 0.5, ease: SLOW, clearProps: 'opacity,visibility,transform', scrollTrigger: once(frame, 'top 90%') })
    })

    // ── Remaining copy blocks (web chapter, new-case steps) ─────────────
    all('[data-study-reveal]')
      .filter(element => !element.closest('.study-context, .study-chapter-heading'))
      .forEach((element) => {
        const parts = element.children.length > 1 && element.tagName !== 'LI' ? Array.from(element.children) : [element]
        gsap.fromTo(parts, { ...FOCUS_FROM, y: 18 }, { ...FOCUS_TO, y: 0, duration: 1.2, stagger: 0.1, ease: SLOW, clearProps: 'opacity,visibility,transform,filter', scrollTrigger: once(element, 'top 90%') })
      })

    // Section labels outside chapter headings (web chapter).
    all('.study-section-label').filter(label => !label.closest('.study-chapter-heading')).forEach((label) => {
      gsap.timeline({ scrollTrigger: once(label, 'top 90%') })
        .fromTo(label, { autoAlpha: 0, x: -20 }, { autoAlpha: 1, x: 0, duration: 1.1, ease: SLOW, clearProps: 'opacity,visibility,transform' })
        .fromTo(label.querySelector('svg'), { scale: 0.7, rotation: -40 }, { scale: 1, rotation: 0, duration: 1.1, ease: ease.back, clearProps: 'transform' }, 0.1)
    })

    // Index of chapters.
    const index = root.querySelector('.study-index')
    if (index)
      gsap.fromTo(all(':scope > span, :scope > div > a', index), { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.08, ease: SLOW, clearProps: 'opacity,visibility,transform', scrollTrigger: once(index, 'top 92%') })

    // Next project: image drifts inside its frame.
    const nextImage = root.querySelector('.study-next-image img')
    if (nextImage)
      gsap.fromTo(nextImage, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: nextImage.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1 } })
  }, root)

  // Depth: in two-image galleries the second figure travels faster than the
  // first, so the pair reads as layered rather than flat.
  media.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
    all('.study-gallery--2 > .study-media:nth-child(2)').forEach((figure) => {
      gsap.fromTo(figure, { y: 48 }, { y: -48, ease: 'none', scrollTrigger: { trigger: figure.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1.2 } })
    })
  }, root)

  media.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
    const cleanups: (() => void)[] = []

    // The play control leans toward the cursor across the whole poster, with
    // eased follow (quickTo) so it trails the pointer instead of snapping.
    const stage = heroVideo?.querySelector<HTMLElement>('.project-video')
    const ring = stage?.querySelector<HTMLElement>('.project-video-ring')
    if (stage && ring) {
      const moveX = gsap.quickTo(ring, 'x', { duration: 0.9, ease: 'power3.out' })
      const moveY = gsap.quickTo(ring, 'y', { duration: 0.9, ease: 'power3.out' })
      const controller = new AbortController()
      stage.addEventListener('pointermove', (event) => {
        const bounds = stage.getBoundingClientRect()
        moveX((event.clientX - bounds.left - bounds.width / 2) * 0.12)
        moveY((event.clientY - bounds.top - bounds.height / 2) * 0.12)
      }, { signal: controller.signal })
      stage.addEventListener('pointerleave', () => {
        moveX(0)
        moveY(0)
      }, { signal: controller.signal })
      cleanups.push(() => controller.abort())
    }

    // The next-project preview tilts toward the cursor.
    const link = root.querySelector<HTMLElement>('.study-next-link')
    const preview = root.querySelector<HTMLElement>('.study-next-image')
    if (link && preview)
      cleanups.push(pointerDepth(link, preview, 6))

    return () => cleanups.forEach(cleanup => cleanup())
  }, root)
})
