import type { Guide } from '@/data/guides'
import { getGuides } from '@/lib/guides'

// El cliente solo manda el slug; el servidor resuelve titulo/pdf reales desde
// la fuente publicada. Los errores del CMS se propagan: nunca se entrega un PDF anterior.
export async function resolveGuideBySlug(slug: string): Promise<Guide | null> {
  return (await getGuides()).find(g => g.slug === slug) ?? null
}
