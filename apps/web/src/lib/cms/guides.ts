import type { Guide } from '../../data/guides'
import { z } from 'zod'
import { PRODUCTION_FILES_ORIGIN } from '../../../../../config/sites.mjs'

const file = z.object({ url: z.url(), contentType: z.string(), sizeBytes: z.number().int().positive(), fileName: z.string().min(1) })
const publishedGuide = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  publishedAt: z.iso.datetime(),
  title: z.string().trim().min(1),
  category: z.enum(['branding', 'desarrollo-web', 'inbound-marketing', 'optimizacion', 'inbound-sales']),
  featured: z.boolean(),
  cover: file.extend({ contentType: z.enum(['image/jpeg', 'image/png', 'image/webp']) }),
  pdf: file.extend({ contentType: z.literal('application/pdf') }),
})
export const guidesResponse = z.object({ guides: z.array(publishedGuide) }).refine(
  ({ guides }) => new Set(guides.map(guide => guide.slug)).size === guides.length,
  'El catálogo contiene slugs repetidos',
)

/** Capa anticorrupción: el diseño conserva su modelo y no conoce el contrato del CMS. */
export function toGuide(guide: z.infer<typeof publishedGuide>): Guide {
  return { slug: guide.slug, title: guide.title, category: guide.category, featured: guide.featured, image: guide.cover.url, pdf: guide.pdf.url }
}

/** Solo el CDN de archivos y el Worker local explícitamente configurado. Nunca URL del visitante. */
export function assertGuideFileUrl(value: string, apiUrl: string, filesUrl = PRODUCTION_FILES_ORIGIN): void {
  const url = new URL(value)
  const api = new URL(apiUrl)
  const cdn = url.origin === new URL(filesUrl).origin
  const local = api.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(api.hostname)
    && url.origin === api.origin
  if (url.username || url.password || (!cdn && !local))
    throw new Error('CMS: URL de archivo fuera del origen autorizado')
}
