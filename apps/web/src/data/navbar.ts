import { resourceLinks, siteServices } from './site-navigation'

export interface NavLink {
  label: string
  href: string
  dropdown?: boolean
  children?: { label: string, href: string, complementary?: boolean }[]
}

export const navLinks: NavLink[] = [
  { label: 'Nosotros', href: '/nosotros' },
  {
    label: 'Soluciones',
    href: '/soluciones',
    dropdown: true,
    children: siteServices,
  },
  { label: 'Proyectos', href: '/proyectos' },
  {
    label: 'Recursos',
    href: '#',
    dropdown: true,
    children: resourceLinks,
  },
  { label: 'US Site', href: 'https://us.brainstorming.la/' },
]
