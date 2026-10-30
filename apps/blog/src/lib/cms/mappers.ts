import type { ArticlePreview, PublishedArticle } from './contract'
import type { Article, ArticleBlock, ArticleLeadMagnet, ArticleSection } from '@/data/articles'
import type { Category, Post } from '@/data/posts'
import { GUIDE_LANDER_SLUGS } from '@/data/guides'
import { spanishDate } from '@/lib/editorial-seo'
import { siteUrl } from '@/lib/site-urls'
import { groupIntoSections } from './sections'

/**
 * Capa anticorrupción: traduce el modelo del CMS al que ya consumen las plantillas del blog. Las plantillas no saben
 * que existe un CMS; si el contrato cambia, se toca solo este archivo.
 */

/** Ícono por categoría (los íconos viven en el blog, no en el CMS). */
const CATEGORY_ICONS: Record<string, string> = {
  'branding': 'expert-huella',
  'desarrollo-web': 'expert-window',
  'inbound-marketing': 'expert-iman',
  'procesos': 'category-procesos',
}
const FALLBACK_ICON = 'category-procesos'

type CmsBlock = PublishedArticle['blocks'][number] | ArticlePreview['blocks'][number]
interface CmsFile { url: string }

export function toCategory(category: { slug: string, label: string, description: string }): Category {
  return { ...category, icon: CATEGORY_ICONS[category.slug] ?? FALLBACK_ICON }
}

function guideLeadMagnet(guide: { slug: string, title: string, cover: CmsFile }): ArticleLeadMagnet {
  return {
    eyebrow: 'Guía gratuita',
    title: guide.title,
    ctaLabel: 'Descargar',
    ctaHref: GUIDE_LANDER_SLUGS.has(guide.slug) ? `/guias/${guide.slug}` : siteUrl('web', '/guias-practicas-brainstorming'),
    image: guide.cover.url,
  }
}

function toBlock(block: CmsBlock): ArticleBlock | null {
  switch (block.type) {
    case 'text':
      return { type: 'rich', content: block.content }
    case 'image':
      // En una vista previa la imagen puede no estar elegida todavía: el bloque se omite en vez de romper la página.
      return block.file ? { type: 'image', image: block.file.url, alt: block.alt, caption: block.caption, wide: block.width === 'wide' } : null
    case 'quote':
      return { type: 'quote', text: block.text, attribution: block.attribution || undefined }
    case 'cta':
      return { type: 'cta', text: block.text, label: block.label, href: block.href, variant: block.variant }
    case 'guide':
      // Una guía retirada llega como null: el bloque desaparece sin dejar un hueco.
      return block.guide ? { type: 'guide', leadMagnet: guideLeadMagnet(block.guide) } : null
    case 'stats':
      return { type: 'stats', items: block.items.map(item => ({ value: item.value, label: item.label })) }
    case 'steps':
      // El título ya abrió la sección (ver `sectionHeading`): el bloque dibuja solo las tarjetas.
      return { type: 'steps', items: block.items.map(item => ({ title: item.title, text: item.text })) }
    case 'callout':
      return { type: 'callout', style: block.style, title: block.title, text: block.text }
    case 'split':
      return block.file ? { type: 'split', image: block.file.url, alt: block.alt, heading: block.heading, text: block.text, imageSide: block.imageSide } : null
  }
}

/**
 * Los bloques que traen su propio título de sección (texto, y pasos si lo tienen) abren una sección: así el título
 * es un h2 con ancla y entra en el índice. `null`: el bloque se queda en la sección actual.
 */
function sectionHeading(block: CmsBlock): string | null {
  if (block.type === 'text')
    return block.heading
  if (block.type === 'steps' && block.heading.trim())
    return block.heading
  return null
}

/** Cada bloque con título de sección abre una sección; imágenes, citas, cifras y llamadas se quedan en la actual. */
export function toSections(blocks: readonly CmsBlock[]): ArticleSection[] {
  return groupIntoSections(blocks, toBlock, sectionHeading)
}

const readTime = (minutes: number) => `Léelo en ${minutes} min.`

export function toArticle(article: PublishedArticle): Article {
  return {
    slug: article.slug,
    kicker: article.kicker,
    title: article.title,
    seoTitle: article.seoTitle ?? undefined,
    category: article.category.label,
    heroImage: article.hero.url,
    heroStyle: article.heroStyle,
    accent: article.accent,
    readTime: readTime(article.readingMinutes),
    intro: article.intro,
    sections: toSections(article.blocks),
    publishedDate: spanishDate(article.editorialDate),
    author: article.author ? { name: article.author.name, url: article.author.url ?? undefined } : undefined,
  }
}

/** Borrador: lo que falte se completa con valores neutros y se avisa aparte (`problems`). */
export function toPreviewArticle(preview: ArticlePreview): Article {
  return {
    slug: preview.slug,
    kicker: preview.kicker,
    title: preview.title || 'Sin título',
    seoTitle: preview.seoTitle ?? undefined,
    category: preview.category?.label ?? 'Sin categoría',
    heroImage: preview.hero?.url,
    heroStyle: preview.heroStyle,
    accent: preview.accent,
    readTime: readTime(preview.readingMinutes),
    intro: preview.intro,
    sections: toSections(preview.blocks),
    publishedDate: preview.editorialDate ? spanishDate(preview.editorialDate) : 'Sin fecha',
    author: preview.author ? { name: preview.author.name, url: preview.author.url ?? undefined } : undefined,
  }
}

export function toPost(article: PublishedArticle): Post {
  return {
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category.label,
    date: spanishDate(article.editorialDate),
    image: article.hero.url,
  }
}
