import type { ArticlePreview, PublishedArticle } from './contract'
import type { Article, ArticleBlock, ArticleLeadMagnet, ArticleSection } from '@/data/articles'
import type { Category, Post } from '@/data/posts'
import { GUIDE_LANDER_SLUGS } from '@/data/guides'
import { spanishDate } from '@/lib/editorial-seo'
import { siteUrl } from '@/lib/site-urls'

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
  }
}

/** Cada bloque de texto abre una sección con su subtítulo; imágenes, citas y llamadas se quedan en la sección actual. */
export function toSections(blocks: readonly CmsBlock[]): ArticleSection[] {
  const sections: ArticleSection[] = []
  for (const block of blocks) {
    const mapped = toBlock(block)
    if (!mapped)
      continue
    if (block.type === 'text' || sections.length === 0)
      sections.push({ heading: block.type === 'text' ? block.heading : '', blocks: [] })
    sections.at(-1)!.blocks.push(mapped)
  }
  return sections
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
