import { resetTurnstileIn } from '@/lib/turnstile-client'

export function wireGuideLeadForm(form: HTMLFormElement | null, slug: string): void {
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
    const turnstileToken = data.get('cf-turnstile-response')
    // Si la pagina monto el widget, sin token el servidor rechazaria el envio.
    if (form.querySelector('[data-turnstile]') && (typeof turnstileToken !== 'string' || !turnstileToken)) {
      document.dispatchEvent(new CustomEvent('form-status', {
        detail: { state: 'error', title: 'Verificación pendiente', message: 'Espera unos segundos y vuelve a intentar.' },
      }))
      return
    }

    submitBtn.disabled = true
    document.dispatchEvent(new CustomEvent('form-status', { detail: { state: 'loading' } }))

    try {
      const res = await fetch('/api/guide-lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          nombre: data.get('nombre'),
          email: data.get('email'),
          telefono: [data.get('codigoArea'), data.get('telefono')].filter(Boolean).join(' ') || undefined,
          empresa: data.get('empresa') || undefined,
          slug,
          suscribirse: data.get('suscribirse') === 'on',
          website: data.get('website'),
          turnstileToken,
        }),
      })

      if (res.ok) {
        form.reset()
        document.dispatchEvent(new CustomEvent('form-status', {
          detail: { state: 'success', title: '¡Enviado!', message: 'Revisa tu correo, ahí te mandamos la guía.' },
        }))
      }
      else {
        document.dispatchEvent(new CustomEvent('form-status', {
          detail: { state: 'error', title: 'No se pudo procesar', message: 'Intenta de nuevo en unos minutos.' },
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
      // El token es de un solo uso: se pide uno nuevo tras cada intento.
      resetTurnstileIn(form)
    }
  })
}
