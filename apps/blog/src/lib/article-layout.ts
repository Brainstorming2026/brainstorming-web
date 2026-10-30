import type { ArticleBlock } from '@/data/articles'

/**
 * Ancho de cada bloque dentro del artículo: la lectura va en una columna angosta (720 px) y lo visual, más ancho.
 * Es la única regla de anchos: el cuerpo la consulta, ningún bloque decide por su cuenta.
 */
export type BlockWidth = 'narrow' | 'wide'

export function blockWidth(block: ArticleBlock): BlockWidth {
  switch (block.type) {
    case 'image':
      return block.wide ? 'wide' : 'narrow'
    case 'stats':
    case 'steps':
    case 'split':
      return 'wide'
    case 'paragraph':
    case 'subheading':
    case 'list':
    case 'rich':
    case 'quote':
    case 'cta':
    case 'guide':
    case 'callout':
      return 'narrow'
    default:
      return assertNever(block)
  }
}

function assertNever(value: never): never {
  throw new Error(`Bloque sin ancho definido: ${JSON.stringify(value)}`)
}
