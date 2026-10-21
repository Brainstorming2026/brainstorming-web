import { z } from 'zod'

/**
 * Lo que el blog espera de `GET /v1/content/*` y del endpoint de vista previa. Se valida al leer: si el CMS cambia
 * su contrato sin avisar, el build falla con un mensaje claro en vez de publicar páginas rotas.
 */
const file = z.object({ url: z.url(), contentType: z.string(), sizeBytes: z.number().int(), fileName: z.string() })

const mark = z.discriminatedUnion('type', [
  z.object({ type: z.literal('bold') }),
  z.object({ type: z.literal('italic') }),
  z.object({ type: z.literal('link'), attrs: z.object({ href: z.string() }) }),
])
const inline = z.discriminatedUnion('type', [
  z.object({ type: z.literal('text'), text: z.string(), marks: z.array(mark).optional() }),
  z.object({ type: z.literal('hardBreak') }),
])
const paragraph = z.object({ type: z.literal('paragraph'), content: z.array(inline).optional() })
const heading = z.object({ type: z.literal('heading'), attrs: z.object({ level: z.literal(3) }), content: z.array(inline).optional() })
const list = z.object({
  type: z.enum(['bulletList', 'orderedList']),
  content: z.array(z.object({ type: z.literal('listItem'), content: z.array(paragraph) })),
})
export const richTextSchema = z.object({ type: z.literal('doc'), content: z.array(z.union([paragraph, heading, list])) })
export type RichText = z.infer<typeof richTextSchema>
export type RichBlock = RichText['content'][number]
export type InlineNode = z.infer<typeof inline>
export type Mark = z.infer<typeof mark>

const guideRef = z.object({ slug: z.string(), title: z.string(), cover: file, pdf: file })

const textBlock = z.object({ type: z.literal('text'), heading: z.string(), content: richTextSchema })
const quoteBlock = z.object({ type: z.literal('quote'), text: z.string(), attribution: z.string() })
const ctaBlock = z.object({ type: z.literal('cta'), text: z.string(), label: z.string(), href: z.string(), variant: z.enum(['primary', 'secondary']) })
function imageBlock<F extends z.ZodType>(f: F) {
  return z.object({ type: z.literal('image'), file: f, alt: z.string(), caption: z.string(), width: z.enum(['content', 'wide']) })
}
const guideBlock = z.object({ type: z.literal('guide'), guide: guideRef.nullable() })

const category = z.object({ slug: z.string(), label: z.string(), description: z.string() })
const author = z.object({ name: z.string(), url: z.string().nullable() })

export const publishedArticleSchema = z.object({
  slug: z.string(),
  publishedAt: z.string(),
  editorialDate: z.string(),
  title: z.string(),
  kicker: z.string(),
  seoTitle: z.string().nullable(),
  excerpt: z.string(),
  readingMinutes: z.number().int(),
  category,
  author: author.nullable(),
  hero: file,
  intro: z.array(z.string()),
  blocks: z.array(z.discriminatedUnion('type', [textBlock, imageBlock(file), quoteBlock, ctaBlock, guideBlock])),
})
export type PublishedArticle = z.infer<typeof publishedArticleSchema>

export const publishedGuideSchema = z.object({
  slug: z.string(),
  publishedAt: z.string(),
  title: z.string(),
  category: z.string(),
  featured: z.boolean(),
  cover: file,
  pdf: file,
})
export type PublishedGuide = z.infer<typeof publishedGuideSchema>

export const articlesResponse = z.object({ articles: z.array(publishedArticleSchema) })
export const guidesResponse = z.object({ guides: z.array(publishedGuideSchema) })
export const categoriesResponse = z.object({ categories: z.array(category) })

/** Borrador: puede estar incompleto, así que categoría, imagen principal y archivos de imagen pueden faltar. */
export const articlePreviewSchema = z.object({
  slug: z.string(),
  status: z.enum(['draft', 'published', 'changed']),
  editorialDate: z.string().nullable(),
  title: z.string(),
  kicker: z.string(),
  seoTitle: z.string().nullable(),
  excerpt: z.string(),
  readingMinutes: z.number().int(),
  category: category.nullable(),
  author: author.nullable(),
  hero: file.nullable(),
  intro: z.array(z.string()),
  blocks: z.array(z.discriminatedUnion('type', [textBlock, imageBlock(file.nullable()), quoteBlock, ctaBlock, guideBlock])),
  problems: z.array(z.object({ field: z.string(), message: z.string() })),
})
export type ArticlePreview = z.infer<typeof articlePreviewSchema>

export const guidePreviewSchema = z.object({
  slug: z.string(),
  status: z.enum(['draft', 'published', 'changed']),
  title: z.string(),
  category: z.string().nullable(),
  featured: z.boolean(),
  cover: file.nullable(),
  pdf: file.nullable(),
  problems: z.array(z.object({ field: z.string(), message: z.string() })),
})
