import { TURNSTILE_SECRET_KEY } from 'astro:env/server'
import { captureError } from '@/lib/observability'

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

/**
 * Verifica el token de Turnstile contra Cloudflare. Nunca lanza: devuelve
 * boolean para que el caller decida como responder.
 *
 * Sin TURNSTILE_SECRET_KEY solo se omite en desarrollo (dev local sin llaves).
 * En produccion falla cerrado: una variable de entorno olvidada en el deploy
 * no debe dejar los formularios sin proteccion en silencio.
 */
export async function verifyTurnstileToken(token: unknown, remoteIp?: string): Promise<boolean> {
  if (!TURNSTILE_SECRET_KEY) {
    if (import.meta.env.PROD)
      captureError(new Error('TURNSTILE_SECRET_KEY no configurada en produccion'), { scope: 'turnstile' })
    return !import.meta.env.PROD
  }

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
