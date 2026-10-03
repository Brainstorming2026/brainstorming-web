import type { APIRoute } from 'astro'
import { articles } from '@/data/articles'
import { excerpt, publicationDate } from '@/lib/editorial-seo'

export const prerender = true
const xml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
export const GET: APIRoute = ({ site }) => {
  const items = [...articles].sort((a, b) => (publicationDate(b.publishedDate) ?? '').localeCompare(publicationDate(a.publishedDate) ?? '')).map((article) => {
    const url = new URL(`/${article.slug}`, site).href
    const date = publicationDate(article.publishedDate)
    return `<item><title>${xml(article.title)}</title><link>${xml(url)}</link><guid isPermaLink="true">${xml(url)}</guid><description>${xml(excerpt(article.intro.join(' '), 300))}</description><category>${xml(article.category)}</category>${date ? `<pubDate>${new Date(`${date}T00:00:00-05:00`).toUTCString()}</pubDate>` : ''}</item>`
  }).join('\n')
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Brainstorming Blog</title><link>${site!.href}</link><description>Marketing, branding, desarrollo web e inteligencia artificial.</description><language>es</language>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
