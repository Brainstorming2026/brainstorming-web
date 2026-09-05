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
    slug: 'growth-planning',
    icon: 'expert-growth-planning',
    title: 'Growth Planning',
    desc: 'Identifica qué frena tu crecimiento y conviértelo en un roadmap priorizado y ejecutable.',
    colorClass: 'text-primary',
    glowClass: 'bg-primary',
    href: '/soluciones/growth-planning',
  },
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
    colorClass: 'text-[#e62a4b]',
    glowClass: 'bg-[#e62a4b]',
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
    href: '/soluciones/inbound-sales',
  },
  {
    slug: 'optimizacion-procesos',
    icon: 'expert-process-cx',
    title: 'Optimización de Procesos y CX',
    desc: 'Ordena tus procesos y diseña experiencias que eleven la eficiencia y el valor para el cliente.',
    colorClass: 'text-orange',
    glowClass: 'bg-orange',
    href: '/soluciones/optimizacion-procesos',
  },
]
