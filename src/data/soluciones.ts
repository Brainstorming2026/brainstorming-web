export interface Solucion {
  slug: string
  icon: string
  title: string
  desc: string
  /** Clases Tailwind (texto + glow) usando los tokens de color ya definidos en global.css, según el acento que indica cada card en Figma. */
  colorClass: string
  glowClass: string
}

export const soluciones: Solucion[] = [
  {
    slug: 'branding',
    icon: 'expert-huella',
    title: 'Branding',
    desc: 'Agrega valor a tu marca construyendo una identidad gráfica y conceptual coherente',
    colorClass: 'text-navy',
    glowClass: 'bg-navy',
  },
  {
    slug: 'desarrollo-web',
    icon: 'expert-window',
    title: 'Desarrollo web',
    desc: 'Desarrolla una web que responda a tus objetivos comerciales y respire el ADN de tu marca',
    colorClass: 'text-accent',
    glowClass: 'bg-accent',
  },
  {
    slug: 'inbound-marketing',
    icon: 'expert-iman',
    title: 'Inbound Marketing',
    desc: 'Atrae prospectos, conviértelos en clientes y deléitalos con contenidos relevantes',
    colorClass: 'text-highlight',
    glowClass: 'bg-highlight',
  },
  {
    slug: 'inbound-sales',
    icon: 'expert-money',
    title: 'Inbound Sales',
    desc: 'Basa toda tu estrategia comercial en el usuario y mejora la performance de tu equipo de ventas.',
    colorClass: 'text-primary',
    glowClass: 'bg-primary',
  },
]
