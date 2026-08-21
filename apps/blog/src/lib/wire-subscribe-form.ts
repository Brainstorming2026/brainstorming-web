// Wiring compartido por los 4 forms de suscripcion del blog (footer, modal,
// newsletter de home, newsletter de categoria) — mismo fetch, mismo feedback
// minimo (solo cambia el label del boton, sin agregar elementos nuevos al
// diseño ya aprobado).
export function wireSubscribeForm(form: HTMLFormElement | null, source: string): void {
  if (!form)
    return

  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]')
  const originalLabel = submitBtn?.textContent ?? 'Suscribirme'

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

    submitBtn.disabled = true
    submitBtn.textContent = 'Enviando...'

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email: data.get('email'),
          topics: topics.length > 0 ? topics : undefined,
          website: data.get('website'),
          source,
        }),
      })

      submitBtn.textContent = res.ok ? '¡Listo!' : 'Error, reintenta'
      if (res.ok)
        form.reset()
    }
    catch {
      submitBtn.textContent = 'Error, reintenta'
    }
    finally {
      setTimeout(() => {
        submitBtn.disabled = false
        submitBtn.textContent = originalLabel
      }, 2200)
    }
  })
}
