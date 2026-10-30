import type { Guide } from '../../data/guides'
import { assertGuideFileUrl, guidesResponse, toGuide } from './guides.ts'

interface CmsConfig { apiUrl?: string, filesUrl?: string, token?: string }

/** Módulo servidor: la credencial no se serializa con el contenido. Sin fallback ni caché de contenido retirado. */
export async function fetchGuides({ apiUrl, filesUrl, token }: CmsConfig): Promise<Guide[]> {
  if (!apiUrl || !token)
    throw new Error('CMS: faltan CMS_API_URL o CMS_CONTENT_TOKEN')
  let response: Response
  try {
    response = await fetch(`${apiUrl.replace(/\/$/, '')}/v1/content/guides`, {
      headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
      signal: AbortSignal.timeout(15_000),
      cache: 'no-store',
    })
  }
  catch {
    throw new Error('CMS: no se pudo conectar al catálogo de guías')
  }
  if (!response.ok)
    throw new Error(`CMS: el catálogo de guías respondió ${response.status}`)
  let payload: unknown
  try {
    payload = await response.json()
  }
  catch {
    throw new Error('CMS: el catálogo de guías no es JSON válido')
  }
  const result = guidesResponse.safeParse(payload)
  if (!result.success)
    throw new Error(`CMS: el catálogo de guías no cumple el contrato (${result.error.issues[0]?.path.join('.')})`)
  return result.data.guides.map((guide) => {
    assertGuideFileUrl(guide.cover.url, apiUrl, filesUrl)
    assertGuideFileUrl(guide.pdf.url, apiUrl, filesUrl)
    return toGuide(guide)
  })
}
