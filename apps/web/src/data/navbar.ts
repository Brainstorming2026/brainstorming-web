export interface NavLink {
  label: string
  href: string
  dropdown?: boolean
  children?: { label: string, href: string }[]
}

export const navLinks: NavLink[] = [
  { label: 'Nosotros', href: '/nosotros' },
  {
    label: 'Soluciones',
    href: '/soluciones',
    dropdown: true,
    children: [
      { label: 'Growth Planning', href: '/soluciones/growth-planning' },
      { label: 'Branding', href: '/soluciones/branding' },
      { label: 'Inbound Marketing', href: '/soluciones/inbound-marketing' },
      { label: 'Smart Selling', href: '/soluciones/smart-selling' },
      { label: 'Automatización de Procesos con IA', href: '/soluciones/automatizacion-ia' },
      { label: 'Innovación Estratégica', href: '/soluciones/innovacion-estrategica' },
    ],
  },
  { label: 'Proyectos', href: '/proyectos' },
  {
    label: 'Recursos',
    href: '#',
    dropdown: true,
    children: [
      { label: 'Blog', href: 'https://blog.brainstorming.la/' },
      { label: 'Guías Prácticas', href: '/guias' },
    ],
  },
  { label: 'Trabaja con Nosotros', href: '#' },
  { label: 'US Site', href: 'https://us.brainstorming.la/' },
]
