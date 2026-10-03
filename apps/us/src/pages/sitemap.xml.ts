import type { APIRoute } from 'astro'

export const prerender = true

// Two locale versions of one page; each entry lists both so Google pairs them (hreflang in sitemap).
const pages = ['/']

export const GET: APIRoute = ({ site }) => {
  const href = (path: string, lang: 'en' | 'es') => new URL(lang === 'es' ? `/es${path === '/' ? '' : path}` : path, site).href
  const urls = pages.flatMap(path => (['en', 'es'] as const).map(lang => `  <url>
    <loc>${href(path, lang)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${href(path, 'en')}" />
    <xhtml:link rel="alternate" hreflang="es" href="${href(path, 'es')}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${href(path, 'en')}" />
  </url>`))

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
