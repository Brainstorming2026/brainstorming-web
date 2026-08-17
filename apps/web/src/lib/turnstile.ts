import { TURNSTILE_SECRET_KEY } from 'astro:env/server'
import { captureError } from '@/lib/observability'

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

/**
 * Sin TURNSTILE_SECRET_KEY configurada se omite (dev local sin llaves) —
 * el honeypot sigue activo como unica defensa. Nunca lanza: boolean para
 * que el caller decida como fallar (fail-closed ante error de red).
 */
export async function verifyTurnstileToken(token: unknown, remoteIp?: string): Promise<boolean> {
  if (!TURNSTILE_SECRET_KEY)
    return true

  if (typeof token !== 'string' || token.length === 0 || token.length > 2048)
    return false

  const body = new URLSearchParams({ secret: TURNSTILE_SECRET_KEY, response: token })
  if (remoteIp)
    body.set('remoteip', remoteIp)

  try {
    const res = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body,
      signal: AbortSignal.timeout(10_000),
    })
    if (!res.ok)
      return false

    const data = await res.json() as { success: boolean }
    return data.success === true
  }
  catch (error) {
    captureError(error, { scope: 'turnstile' })
    return false
  }
}
