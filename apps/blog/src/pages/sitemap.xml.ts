import type { APIRoute } from 'astro'
import { articles } from '@/data/articles'
import { guides } from '@/data/guides'
import { categories } from '@/data/posts'

export const prerender = true
export const GET: APIRoute = ({ site }) => {
  const paths = ['/', ...articles.map(article => `/${article.slug}`), ...categories.map(category => `/${category.slug}`), ...guides.map(guide => `/guias/${guide.slug}`)]
  const urls = [...new Set(paths)].sort().map(path => `<url><loc>${new URL(path, site).href}</loc></url>`).join('\n')
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
