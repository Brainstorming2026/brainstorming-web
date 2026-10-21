import type { Guide } from '@/data/guides'
import { CMS_API_URL, CMS_FILES_URL } from 'astro:env/server'
import { GUIDE_LANDER_SLUGS, guides as staticGuides } from '@/data/guides'
import { cmsGet, contentSource } from '@/lib/cms/client'
import { guidesResponse } from '@/lib/cms/contract'
import { guideCoverEmailUrl } from '@/lib/email/assets'
import { PRODUCTION_FILES_ORIGIN } from '../../../../config/sites.mjs'

export interface DeliveryGuide extends Guide { coverUrl: string }

function assertFileUrl(value: string) {
  const url = new URL(value)
  const api = new URL(CMS_API_URL ?? '')
  const cdn = url.origin === new URL(CMS_FILES_URL ?? PRODUCTION_FILES_ORIGIN).origin
  const local = api.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(api.hostname) && url.origin === api.origin
  if (url.username || url.password || (!cdn && !local))
    throw new Error('CMS: archivo de guía fuera del origen autorizado')
}

/** Las cuatro landings se conservan; títulos, PDF y portada de entrega siguen la revisión publicada. Sin fallback. */
export async function getGuides(): Promise<DeliveryGuide[]> {
  if (contentSource() !== 'cms')
    return staticGuides.map(guide => ({ ...guide, coverUrl: guideCoverEmailUrl(guide.slug) }))
  const { guides } = await cmsGet('/v1/content/guides', guidesResponse)
  return guides.filter(guide => GUIDE_LANDER_SLUGS.has(guide.slug)).map((guide) => {
    assertFileUrl(guide.pdf.url)
    assertFileUrl(guide.cover.url)
    if (guide.pdf.contentType !== 'application/pdf' || !['image/png', 'image/webp', 'image/jpeg'].includes(guide.cover.contentType))
      throw new Error('CMS: tipo de archivo de guía inválido')
    return { slug: guide.slug, title: guide.title, pdf: guide.pdf.url, coverUrl: guide.cover.url }
  })
}
