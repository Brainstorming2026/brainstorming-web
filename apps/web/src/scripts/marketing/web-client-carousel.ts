import { ensureGsap, registerMotion } from '@/lib/motion'

registerMotion(() => {
  const root = document.querySelector<HTMLElement>('[data-web-clients]')
  if (!root)
    return
  const viewport = root.querySelector<HTMLElement>('[data-carousel-viewport]')
  const original = root.querySelector<HTMLElement>('[data-carousel-list="original"]')
  const copy = root.querySelector<HTMLElement>('[data-carousel-list="copy"]')
  const controls = root.querySelector<HTMLElement>('[data-carousel-controls]')
  const previous = root.querySelector<HTMLButtonElement>('[data-carousel-previous]')
  const next = root.querySelector<HTMLButtonElement>('[data-carousel-next]')
  const pause = root.querySelector<HTMLButtonElement>('[data-carousel-pause]')
  if (!viewport || !original || !copy || !controls || !previous || !next || !pause)
    return

  const { gsap } = ensureGsap()
  const media = gsap.matchMedia()
  media.add({
    reduced: '(prefers-reduced-motion: reduce)',
    motion: '(prefers-reduced-motion: no-preference)',
  }, (context) => {
    const reduced = Boolean(context.conditions?.reduced)
    let loop: gsap.core.Tween | undefined
    let stepTween: gsap.core.Tween | undefined
    let paused = false
    let hovered = false
    let focused = false
    let visible = false
    let distance = 0
    copy.hidden = reduced
    controls.hidden = false
    pause.hidden = reduced

    const update = () => {
      pause.setAttribute('aria-pressed', String(paused))
      pause.setAttribute('aria-label', paused ? 'Reanudar carrusel de clientes' : 'Pausar carrusel de clientes')
      root.querySelector('[data-pause-icon]')?.toggleAttribute('hidden', paused)
      root.querySelector('[data-play-icon]')?.toggleAttribute('hidden', !paused)
      loop?.paused(paused || hovered || focused || !visible || document.hidden)
    }
    const rebuild = () => {
      loop?.kill()
      stepTween?.kill()
      distance = original.offsetWidth
      if (reduced || !distance)
        return
      const progress = (viewport.scrollLeft % distance) / distance
      loop = gsap.fromTo(viewport, { scrollLeft: 0 }, {
        scrollLeft: distance,
        duration: distance / 28,
        repeat: -1,
        ease: 'none',
        paused: true,
      })
      loop.progress(progress)
      update()
    }
    const toggle = () => {
      paused = !paused
      if (distance)
        loop?.progress((viewport.scrollLeft % distance) / distance)
      update()
    }
    const move = (direction: number, keyboard: boolean) => {
      paused = true
      update()
      stepTween?.kill()
      const max = reduced ? Math.max(0, original.offsetWidth - viewport.clientWidth) : distance
      const amount = original.firstElementChild?.getBoundingClientRect().width ?? 200
      const target = direction > 0 && viewport.scrollLeft >= max - 1
        ? 0
        : direction < 0 && viewport.scrollLeft <= 1
          ? max
          : gsap.utils.clamp(0, max, viewport.scrollLeft + direction * amount)
      stepTween = gsap.to(viewport, { scrollLeft: target, duration: reduced || keyboard ? 0 : 0.24, ease: 'power2.inOut' })
    }
    const backward = (event: MouseEvent) => move(-1, event.detail === 0)
    const forward = (event: MouseEvent) => move(1, event.detail === 0)
    const enter = (event: PointerEvent) => {
      hovered = event.pointerType === 'mouse'
      update()
    }
    const leave = () => {
      hovered = false
      update()
    }
    const focusIn = () => {
      focused = true
      update()
    }
    const focusOut = (event: FocusEvent) => {
      focused = event.relatedTarget instanceof Node && viewport.contains(event.relatedTarget)
      update()
    }
    const interact = () => {
      paused = true
      stepTween?.kill()
      update()
    }

    pause.addEventListener('click', toggle)
    previous.addEventListener('click', backward)
    next.addEventListener('click', forward)
    viewport.addEventListener('pointerenter', enter)
    viewport.addEventListener('pointerleave', leave)
    viewport.addEventListener('focusin', focusIn)
    viewport.addEventListener('focusout', focusOut)
    viewport.addEventListener('pointerdown', interact)
    viewport.addEventListener('wheel', interact, { passive: true })
    document.addEventListener('visibilitychange', update)

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      update()
    }, { threshold: 0.05 })
    const resizeObserver = new ResizeObserver(rebuild)
    visibilityObserver.observe(viewport)
    resizeObserver.observe(original)
    rebuild()
    update()

    return () => {
      loop?.kill()
      stepTween?.kill()
      visibilityObserver.disconnect()
      resizeObserver.disconnect()
      pause.removeEventListener('click', toggle)
      previous.removeEventListener('click', backward)
      next.removeEventListener('click', forward)
      viewport.removeEventListener('pointerenter', enter)
      viewport.removeEventListener('pointerleave', leave)
      viewport.removeEventListener('focusin', focusIn)
      viewport.removeEventListener('focusout', focusOut)
      viewport.removeEventListener('pointerdown', interact)
      viewport.removeEventListener('wheel', interact)
      document.removeEventListener('visibilitychange', update)
      copy.hidden = true
      controls.hidden = true
      viewport.scrollLeft = 0
    }
  }, root)

  return () => media.revert()
})
