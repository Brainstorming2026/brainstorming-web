import type { z } from 'zod'
import { CMS_API_URL, CMS_CONTENT_TOKEN, CONTENT_SOURCE } from 'astro:env/server'

/** `cms`: el contenido sale del CMS. `static`: el contenido que vive en `src/data` (mientras dura la migración). */
export const contentSource = (): 'cms' | 'static' => (CONTENT_SOURCE === 'cms' ? 'cms' : 'static')

const TIMEOUT_MS = 15_000

export class CmsError extends Error {
  constructor(message: string, readonly status?: number) {
    super(`CMS: ${message}`)
    this.name = 'CmsError'
  }
}

function baseUrl() {
  if (!CMS_API_URL)
    throw new CmsError('falta CMS_API_URL')
  return CMS_API_URL.replace(/\/$/, '')
}

/** GET autenticado y validado contra el contrato. Nunca registra el token ni lo incluye en un mensaje de error. */
export async function cmsGet<S extends z.ZodType>(path: string, schema: S, token: string | undefined = CMS_CONTENT_TOKEN): Promise<z.infer<S>> {
  if (!token)
    throw new CmsError('falta el token de acceso')
  let response: Response
  try {
    response = await fetch(`${baseUrl()}${path}`, {
      headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    })
  }
  catch (error) {
    throw new CmsError(`no se pudo conectar para ${path} (${error instanceof Error ? error.name : 'error'})`)
  }
  if (!response.ok)
    throw new CmsError(`${path} respondió ${response.status}`, response.status)
  const parsed = schema.safeParse(await response.json())
  if (!parsed.success)
    throw new CmsError(`${path} no cumple el contrato: ${parsed.error.issues.slice(0, 3).map(i => `${i.path.join('.')} ${i.message}`).join('; ')}`)
  return parsed.data
}
