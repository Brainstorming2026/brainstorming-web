import type { Article } from '@/data/articles'
import type { Category, Post } from '@/data/posts'
import { articles as staticArticles } from '@/data/articles'
import { allPosts as staticAllPosts, categories as staticCategories, featuredPost as staticFeatured, popularPosts as staticPopular, quickPosts as staticQuick, relatedPosts as staticRelated } from '@/data/posts'
import { CmsError, cmsGet, contentSource } from '@/lib/cms/client'
import { articlesResponse, categoriesResponse } from '@/lib/cms/contract'
import { toArticle, toCategory, toPost } from '@/lib/cms/mappers'

/**
 * Único punto por el que las páginas leen el contenido del blog. Hoy hay dos orígenes: el CMS y `src/data`
 * (mientras dura la migración, `CONTENT_SOURCE`). Las plantillas no saben cuál se usa.
 *
 * Con el CMS, un fallo (red, token, contrato) rompe el build a propósito: publicar con contenido viejo o vacío es peor
 * que no publicar.
 */
export interface BlogContent {
  readonly source: 'cms' | 'static'
  readonly articles: readonly Article[]
  readonly categories: readonly Category[]
  /** Solo falta con un CMS sin artículos en desarrollo: el build de producción se cancela antes. */
  readonly featuredPost: Post | undefined
  readonly quickPosts: readonly Post[]
  readonly popularPosts: readonly Post[]
  readonly relatedPosts: readonly Post[]
  /** Todos los artículos publicados como tarjetas, del más reciente al más antiguo. */
  readonly allPosts: readonly Post[]
}

/** Las listas de la portada se arman por recencia: destacado = el último; rápidos = los 3 siguientes; populares = los 4 últimos. */
export function homeLists(posts: readonly Post[]) {
  const [featured, ...rest] = posts
  // Publicar un blog vacío es peor que no publicar. En desarrollo un CMS sin artículos es normal (y la vista previa debe funcionar).
  if (!featured && import.meta.env.PROD)
    throw new CmsError('el CMS no tiene artículos publicados: se cancela el build para no publicar un blog vacío')
  return {
    featuredPost: featured,
    quickPosts: rest.slice(0, 3),
    popularPosts: posts.slice(0, 4),
    relatedPosts: rest.slice(3, 6),
  }
}

async function fromCms(): Promise<BlogContent> {
  const [{ articles: published }, { categories: cmsCategories }] = await Promise.all([
    cmsGet('/v1/content/articles', articlesResponse),
    cmsGet('/v1/content/categories', categoriesResponse),
  ])
  // Más reciente primero; a igual fecha editorial, el orden de publicación.
  const sorted = [...published].sort((a, b) => b.editorialDate.localeCompare(a.editorialDate) || b.publishedAt.localeCompare(a.publishedAt))
  const posts = sorted.map(toPost)
  return { source: 'cms', articles: sorted.map(toArticle), categories: cmsCategories.map(toCategory), allPosts: posts, ...homeLists(posts) }
}

function fromStatic(): BlogContent {
  return {
    source: 'static',
    articles: staticArticles,
    categories: staticCategories,
    featuredPost: staticFeatured,
    quickPosts: staticQuick,
    popularPosts: staticPopular,
    relatedPosts: staticRelated,
    allPosts: staticAllPosts,
  }
}

// Las páginas importan listas ya resueltas; el contenido se lee una sola vez al cargar el módulo (build).
// eslint-disable-next-line antfu/no-top-level-await
const content: BlogContent = contentSource() === 'cms' ? await fromCms() : fromStatic()

export const { articles, categories, featuredPost, quickPosts, popularPosts, relatedPosts, allPosts } = content
export const contentOrigin = content.source

export function getArticleBySlug(slug: string | undefined): Article | undefined {
  return content.articles.find(article => article.slug === slug)
}

export function getCategoryBySlug(slug: string | undefined): Category | undefined {
  return categories.find(category => category.slug === slug)
}
