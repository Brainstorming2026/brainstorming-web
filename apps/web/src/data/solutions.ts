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
    desc: 'Posicionamiento, personalidad e identidad visual en un Manual de Marca listo para usar.',
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
    slug: 'smart-selling',
    icon: 'expert-money',
    title: 'Smart Selling',
    desc: 'Diseña un sistema comercial que genere oportunidades, priorice prospectos y cierre de forma consistente.',
    colorClass: 'text-primary',
    glowClass: 'bg-primary',
    href: '/soluciones/smart-selling',
  },
  {
    slug: 'automatizacion-ia',
    icon: 'expert-process-cx',
    title: 'Automatización de Procesos con IA',
    desc: 'Automatiza tareas con agentes de IA conectados a tus sistemas y prepara a tu equipo para el cambio.',
    colorClass: 'text-orange',
    glowClass: 'bg-orange',
    href: '/soluciones/automatizacion-ia',
  },
  {
    slug: 'innovacion-estrategica',
    icon: 'automation/route',
    title: 'Innovación Estratégica',
    desc: 'Diseña, valida y construye el siguiente negocio de tu empresa junto al Board de Brainstorming.',
    colorClass: 'text-primary',
    glowClass: 'bg-primary',
    href: '/soluciones/innovacion-estrategica',
  },
]
