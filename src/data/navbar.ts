export interface NavLink {
  label: string
  href: string
  dropdown?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Soluciones', href: '#embudo' },
  { label: 'Cómo funciona', href: '#roadmap' },
  { label: 'Expertos', href: '#expertos' },
  { label: 'Clientes', href: '#clientes' },
]
