import type { APIRoute } from 'astro'
import { articles } from '@/data/articles'
import { guides } from '@/data/guides'
import { categories } from '@/data/posts'
import { siteUrl } from '@/lib/site-urls'

export const prerender = true

/** llms.txt (llmstxt.org): a plain summary AI answer engines can read and cite. Built from blog data so it never drifts. */
export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => new URL(path, site).href
  const byCategory = categories.map((category) => {
    const items = articles
      .filter(article => article.category === category.label)
      .map(article => `- [${article.title}](${url(`/${article.slug}`)})`)
    return items.length ? `## ${category.label}\n\n${category.description}\n\n${items.join('\n')}` : ''
  }).filter(Boolean)

  const body = `# Brainstorming Blog

> Blog de Brainstorming, consultora estratégica para empresas en Latinoamérica y Estados Unidos: marketing digital, branding, desarrollo web, procesos e inteligencia artificial.

- Blog: ${url('/')}
- Brainstorming (consultora): ${siteUrl('web')}
- Contacto: conversemos@brainstorming.la · ${siteUrl('web', '/contacto')}

${byCategory.join('\n\n')}

## Guías gratuitas

${guides.map(guide => `- [${guide.title}](${url(`/guias/${guide.slug}`)})`).join('\n')}
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
