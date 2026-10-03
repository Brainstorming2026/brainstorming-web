declare global {
  interface Window {
    turnstile?: { reset: (widget?: string | HTMLElement) => void }
  }
}

type Field = HTMLInputElement | HTMLTextAreaElement

export function initContactForm() {
  const form = document.querySelector<HTMLFormElement>('#contact-form')
  const submit = document.querySelector<HTMLButtonElement>('#contact-form-submit')
  const status = document.getElementById('contact-form-status')
  if (!form || !submit || !status)
    return

  const fields = [...form.querySelectorAll<Field>('[data-error-message]')]
  const submitLabel = submit.querySelector('[data-submit-label]')
  const spinner = submit.querySelector('[data-submit-spinner]')
  const originalLabel = submitLabel?.textContent ?? ''
  const verificationError = document.getElementById('contact-verification-error')

  function validateField(field: Field) {
    field.setCustomValidity('')
    if (field instanceof HTMLInputElement && ['firstName', 'lastName', 'phone'].includes(field.name)) {
      if (field.value.trim().length < field.minLength)
        field.setCustomValidity(field.dataset.errorMessage ?? '')
    }
    if (field.name === 'privacyConsent' && field instanceof HTMLInputElement && !field.checked)
      field.setCustomValidity(field.dataset.errorMessage ?? '')

    const group = field.name === 'investment' ? fields.filter(item => item.name === 'investment') : [field]
    const valid = field.validity.valid
    group.forEach(item => item.setAttribute('aria-invalid', String(!valid)))
    const error = document.getElementById(`contact-${field.name}-error`)
    if (error) {
      error.textContent = valid ? '' : (field.dataset.errorMessage ?? '')
      error.classList.toggle('hidden', valid)
    }
    return valid
  }

  fields.forEach((field) => {
    field.addEventListener('blur', () => validateField(field))
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true')
        validateField(field)
    })
    field.addEventListener('change', () => validateField(field))
  })
  form.addEventListener('invalid', (event) => {
    const field = event.target
    if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)
      validateField(field)
  }, true)

  function renderStatus(title: string, message = '', focus = false) {
    status!.querySelector('[data-status-title]')!.textContent = title
    status!.querySelector('[data-status-message]')!.textContent = message
    status!.classList.remove('hidden')
    if (focus)
      status!.focus({ preventScroll: true })
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    if (submit.disabled)
      return
    const results = fields.map(validateField)
    if (results.includes(false) || !form.checkValidity()) {
      form.reportValidity()
      fields.find(field => !field.validity.valid)?.focus()
      return
    }

    const data = new FormData(form)
    const turnstileToken = data.get('cf-turnstile-response')
    if (typeof turnstileToken !== 'string' || !turnstileToken) {
      if (verificationError) {
        verificationError.textContent = form.dataset.verificationError ?? ''
        verificationError.classList.remove('hidden')
      }
      return
    }
    verificationError?.classList.add('hidden')
    submit.disabled = true
    form.setAttribute('aria-busy', 'true')
    spinner?.classList.remove('hidden')
    if (submitLabel)
      submitLabel.textContent = form.dataset.sendingTitle ?? originalLabel
    renderStatus(form.dataset.sendingTitle ?? '')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          firstName: String(data.get('firstName') ?? '').trim(),
          lastName: String(data.get('lastName') ?? '').trim(),
          companyEmail: String(data.get('companyEmail') ?? '').trim(),
          phone: String(data.get('phone') ?? '').trim(),
          investment: data.get('investment'),
          message: data.get('message'),
          lang: data.get('lang'),
          turnstileToken,
          privacyConsent: data.get('privacyConsent') === 'on',
          website: data.get('website'),
        }),
      })
      if (!response.ok)
        throw new Error('Contact request failed')

      form.reset()
      fields.forEach(field => field.removeAttribute('aria-invalid'))
      renderStatus(form.dataset.successTitle ?? '', form.dataset.successMessage ?? '', true)
    }
    catch {
      renderStatus(form.dataset.errorTitle ?? '', form.dataset.errorMessage ?? '', true)
    }
    finally {
      submit.disabled = false
      form.setAttribute('aria-busy', 'false')
      spinner?.classList.add('hidden')
      if (submitLabel)
        submitLabel.textContent = originalLabel
      // Single-use token: reset this widget by its container (a bare id string is read as a widget id, not the element).
      const widget = document.getElementById('contact-turnstile')
      if (widget)
        window.turnstile?.reset(widget)
    }
  })
}
