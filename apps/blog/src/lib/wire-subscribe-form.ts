import { resetTurnstileIn } from '@/lib/turnstile-client'

export function wireSubscribeForm(form: HTMLFormElement | null, source: string): void {
  // Called on every astro:page-load; never wire the same form twice.
  if (!form || form.dataset.wired !== undefined)
    return
  form.dataset.wired = ''

  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]')

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    if (!submitBtn)
      return

    const data = new FormData(form)
    const topics = data.getAll('topics').map(String)
    const turnstileToken = data.get('cf-turnstile-response')

    submitBtn.disabled = true
    document.dispatchEvent(new CustomEvent('form-status', { detail: { state: 'loading' } }))

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email: data.get('email'),
          topics: topics.length > 0 ? topics : undefined,
          website: data.get('website'),
          turnstileToken,
          source,
        }),
      })

      if (res.ok) {
        form.reset()
        document.dispatchEvent(new CustomEvent('form-status', {
          detail: { state: 'success', title: '¡Listo!', message: 'Revisa tu correo, te acabamos de escribir.' },
        }))
      }
      else {
        document.dispatchEvent(new CustomEvent('form-status', {
          detail: { state: 'error', title: 'No se pudo suscribir', message: 'Intenta de nuevo en unos minutos.' },
        }))
      }
    }
    catch {
      document.dispatchEvent(new CustomEvent('form-status', {
        detail: { state: 'error', title: 'Revisa tu conexión', message: 'No pudimos enviar tu solicitud.' },
      }))
    }
    finally {
      submitBtn.disabled = false
      resetTurnstileIn(form)
    }
  })
}
