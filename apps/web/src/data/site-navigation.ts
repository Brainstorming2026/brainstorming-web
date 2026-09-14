/** Shared destinations and contextual labels for the main LATAM site. */
export const siteRoutes = {
  home: '/',
  contact: '/contacto',
  projects: '/proyectos',
  solutions: '/soluciones',
  guides: '/guias-practicas-brainstorming',
  blog: 'https://blog.brainstorming.la/',
} as const

interface SiteService {
  id: string
  label: string
  href: string
  footerLabel?: string
  complementary?: boolean
  home?: { label: string, description: string, icon: string, order: number }
}

export const siteServices: SiteService[] = [
  {
    id: 'growth-planning',
    label: 'Growth Planning',
    href: '/soluciones/growth-planning',
    home: { label: 'Growth Planning', description: 'Entiende qué está frenando tu crecimiento y define exactamente qué hacer primero.', icon: 'automation/route', order: 0 },
  },
  {
    id: 'inbound-marketing',
    label: 'Inbound Marketing',
    href: '/soluciones/inbound-marketing',
    home: { label: 'Inbound Marketing', description: 'Atrae prospectos calificados que ya están buscando lo que ofreces.', icon: 'study/magnet', order: 2 },
  },
  {
    id: 'smart-selling',
    label: 'Smart Selling',
    href: '/soluciones/smart-selling',
    home: { label: 'Smart Selling', description: 'Transforma tu proceso comercial en un sistema que vende sin depender del fundador.', icon: 'automation/workflow', order: 1 },
  },
  {
    id: 'automatizacion-ia',
    label: 'Automatización de Procesos con IA',
    href: '/soluciones/automatizacion-ia',
    footerLabel: 'Automatización con IA',
    home: { label: 'Automatización con IA', description: 'Haz que tu empresa produzca más sin contratar más.', icon: 'automation/brain-circuit', order: 3 },
  },
  {
    id: 'innovacion-estrategica',
    label: 'Innovación Estratégica',
    href: '/soluciones/innovacion-estrategica',
    home: { label: 'Innovación Estratégica', description: 'Diseña y construye el siguiente negocio antes de que lo haga tu competencia.', icon: 'automation/zap', order: 4 },
  },
  { id: 'branding', label: 'Branding', href: '/soluciones/branding', complementary: true },
]

export const resourceLinks = [
  { label: 'Blog', href: siteRoutes.blog },
  { label: 'Guías Prácticas', href: siteRoutes.guides },
]

export const siteContact = {
  location: 'Lima, Perú',
  email: 'conversemos@brainstorming.la',
  phone: '+51 992 528 363',
  whatsapp: 'https://wa.me/51992528363',
  copyright: '© 2026 Brainstorming — Collective Intelligence',
}
