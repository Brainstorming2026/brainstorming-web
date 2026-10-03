import type { APIRoute } from 'astro'
import { newProjects } from '@/data/new-projects'

export const prerender = true
const files = Object.keys(import.meta.glob('./**/*.astro'))
// Non-indexable or redirecting routes never belong in the sitemap.
const excluded = new Set(['/404', '/blog'])
const routes = files.filter(file => !file.includes('[')).map((file) => {
  const path = file.replace(/^\.\//, '/').replace(/\.astro$/, '').replace(/\/index$/, '')
  return path || '/'
}).filter(path => !excluded.has(path))
export const GET: APIRoute = ({ site }) => {
  const paths = [...new Set([...routes, ...newProjects.map(project => `/proyectos/${project.slug}`)])].sort()
  const urls = paths.map(path => `<url><loc>${new URL(path, site).href}</loc></url>`).join('\n')
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
