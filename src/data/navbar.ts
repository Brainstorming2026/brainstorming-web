export interface NavLink {
  label: string
  href: string
  dropdown?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Soluciones', href: '/#embudo', dropdown: true },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Recursos', href: '#', dropdown: true },
  { label: 'Trabaja con Nosotros', href: '#' },
  { label: 'US Site', href: '#' },
]
