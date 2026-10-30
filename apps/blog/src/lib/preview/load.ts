import type { z } from 'zod'
import { CmsError, cmsGet } from '@/lib/cms/client'

export type PreviewResult<T> = { ok: true, data: T } | { ok: false, reason: 'invalid' | 'not-found' | 'unavailable' }

/**
 * Lee un borrador con el token del enlace de vista previa (no con el token del build). Distingue "enlace no válido o
 * vencido" de "el CMS no responde" para decirle a la persona qué hacer.
 */
export async function loadPreview<S extends z.ZodType>(path: string, schema: S, token: string | null): Promise<PreviewResult<z.infer<S>>> {
  if (!token)
    return { ok: false, reason: 'invalid' }
  try {
    return { ok: true, data: await cmsGet(path, schema, token) }
  }
  catch (error) {
    if (error instanceof CmsError && error.status === 401)
      return { ok: false, reason: 'invalid' }
    if (error instanceof CmsError && error.status === 404)
      return { ok: false, reason: 'not-found' }
    console.error('[preview]', error instanceof Error ? error.message : error)
    return { ok: false, reason: 'unavailable' }
  }
}

export const PREVIEW_MESSAGES = {
  'invalid': 'El enlace de vista previa no es válido o ya venció. Vuelve al editor y pulsa «Vista previa» otra vez.',
  'not-found': 'Este contenido ya no existe.',
  'unavailable': 'No pudimos conectar con el CMS. Inténtalo de nuevo en un momento.',
} as const

/** Un borrador es privado: sin caché, sin buscadores y sin filtrar el token por el encabezado Referer. */
export function privatePreviewHeaders(response: ResponseInit & { headers: Headers }) {
  response.headers.set('Cache-Control', 'private, no-store')
  response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  response.headers.set('Referrer-Policy', 'no-referrer')
}
