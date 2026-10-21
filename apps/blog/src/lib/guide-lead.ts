import type { DeliveryGuide } from '@/lib/guides'
import { getGuides } from '@/lib/guides'

// El cliente solo manda el slug; el servidor resuelve titulo/pdf reales (CMS o `data/guides.ts`).
// Nunca se confia en una URL de pdf enviada por el cliente.
export async function resolveGuideBySlug(slug: string): Promise<DeliveryGuide | null> {
  return (await getGuides()).find(g => g.slug === slug) ?? null
}
