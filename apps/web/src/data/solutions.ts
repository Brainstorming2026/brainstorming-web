export interface Solution {
  slug: string
  icon: string
  title: string
  desc: string
  /** Tailwind classes (text + glow) using the color tokens already defined in global.css, matching each card's accent in Figma. */
  colorClass: string
  glowClass: string
  /** Set once the dedicated solution page exists; falls back to an in-page anchor otherwise. */
  href?: string
}

export const solutions: Solution[] = [
  {
    slug: 'branding',
    icon: 'expert-huella',
    title: 'Branding',
    desc: 'Agrega valor a tu marca construyendo una identidad gráfica y conceptual coherente',
    colorClass: 'text-navy',
    glowClass: 'bg-navy',
    href: '/soluciones/branding',
  },
  {
    slug: 'desarrollo-web',
    icon: 'expert-window',
    title: 'Desarrollo web',
    desc: 'Desarrolla una web que responda a tus objetivos comerciales y respire el ADN de tu marca',
    colorClass: 'text-accent',
    glowClass: 'bg-accent',
    href: '/soluciones/desarrollo-web',
  },
  {
    slug: 'inbound-marketing',
    icon: 'expert-iman',
    title: 'Inbound Marketing',
    desc: 'Atrae prospectos, conviértelos en clientes y deléitalos con contenidos relevantes',
    colorClass: 'text-highlight',
    glowClass: 'bg-highlight',
    href: '/soluciones/inbound-marketing',
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
