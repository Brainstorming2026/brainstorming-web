import type { Guide } from '@/data/guides'
import { guides } from '@/data/guides'

// El cliente solo manda el slug; el servidor resuelve titulo/pdf reales desde
// `data/guides.ts`. Nunca se confia en una URL de pdf enviada por el cliente.
export function resolveGuideBySlug(slug: string): Guide | null {
  return guides.find(g => g.slug === slug) ?? null
}
