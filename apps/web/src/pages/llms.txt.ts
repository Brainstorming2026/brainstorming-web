import type { APIRoute } from 'astro'
import { newProjects } from '@/data/new-projects'
import { proyectos } from '@/data/proyectos'
import { siteServices } from '@/data/site-navigation'
import { siteUrl } from '@/lib/site-urls'

export const prerender = true

/** llms.txt (llmstxt.org): a plain summary AI answer engines can read and cite. Built from site data so it never drifts. */
export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => new URL(path, site).href
  const services = siteServices
    .filter(service => !service.complementary)
    .map(service => `- [${service.label}](${url(service.href)})${service.home ? `: ${service.home.description}` : ''}`)
  const cases = [
    ...newProjects.map(project => `- [${project.client}](${url(`/proyectos/${project.slug}`)})`),
    ...proyectos.map(proyecto => `- [${proyecto.nombre}](${url(`/proyectos/${proyecto.slug}`)})`),
  ]

  const body = `# Brainstorming

> Brainstorming es una consultora estratégica para empresas en Latinoamérica y Estados Unidos. Conecta crecimiento comercial, marketing, ventas y automatización con IA con un plan de acción claro.

- Sitio: ${url('/')}
- Contacto: conversemos@brainstorming.la · +51 992 528 363 · ${url('/contacto')}
- Sitio para Estados Unidos (Growth Planning, EN/ES): ${siteUrl('us')}
- Blog de marketing, branding e IA: ${siteUrl('blog')}

## Soluciones

${services.join('\n')}

## Casos de éxito

${[...new Set(cases)].join('\n')}

## Más información

- [Nosotros](${url('/nosotros')})
- [Proyectos](${url('/proyectos')})
- [Guías prácticas gratuitas](${url('/guias-practicas-brainstorming')})
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
