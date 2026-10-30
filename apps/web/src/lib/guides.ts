import { CMS_API_URL, CMS_CONTENT_TOKEN, CMS_FILES_URL, CONTENT_SOURCE } from 'astro:env/server'
import { guides as staticGuides } from '@/data/guides'
import { fetchGuides } from '@/lib/cms/transport'

/** Catálogo en el build; entrega bajo petición contra la misma fuente publicada. */
export async function getGuides() {
  if (CONTENT_SOURCE !== 'cms')
    return staticGuides
  return fetchGuides({ apiUrl: CMS_API_URL, filesUrl: CMS_FILES_URL, token: CMS_CONTENT_TOKEN })
}
