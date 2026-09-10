export interface Solution {
  slug: string
  title: string
  desc: string
  process: string
  accent: string
  tint: string
  href: string
}

export const solutions: Solution[] = [
  {
    slug: 'growth-planning',
    title: 'Growth Planning',
    desc: 'Identifica qué frena tu crecimiento y conviértelo en un roadmap priorizado y ejecutable.',
    process: 'Diagnosticar · Priorizar · Activar',
    accent: '#7d44e4',
    tint: '#f4eefe',
    href: '/soluciones/growth-planning',
  },
  {
    slug: 'branding',
    title: 'Branding',
    desc: 'Posicionamiento, personalidad e identidad visual en un Manual de Marca listo para usar.',
    process: 'Posicionar · Sistematizar · Aplicar',
    accent: '#223b79',
    tint: '#eef2f8',
    href: '/soluciones/branding',
  },
  {
    slug: 'inbound-marketing',
    title: 'Inbound Marketing',
    desc: 'Atrae prospectos, conviértelos en clientes y deléitalos con contenidos relevantes.',
    process: 'Atraer · Convertir · Fidelizar',
    accent: '#d6a900',
    tint: '#fff9df',
    href: '/soluciones/inbound-marketing',
  },
  {
    slug: 'smart-selling',
    title: 'Smart Selling',
    desc: 'Diseña un sistema comercial que genere oportunidades, priorice prospectos y cierre de forma consistente.',
    process: 'Detectar · Avanzar · Cerrar',
    accent: '#6342c8',
    tint: '#f3f0fc',
    href: '/soluciones/smart-selling',
  },
  {
    slug: 'automatizacion-ia',
    title: 'Automatización de Procesos con IA',
    desc: 'Automatiza tareas con agentes de IA conectados a tus sistemas y prepara a tu equipo para el cambio.',
    process: 'Conectar · Automatizar · Adoptar',
    accent: '#e76800',
    tint: '#fff1e6',
    href: '/soluciones/automatizacion-ia',
  },
  {
    slug: 'innovacion-estrategica',
    title: 'Innovación Estratégica',
    desc: 'Diseña, valida y construye el siguiente negocio de tu empresa junto al Board de Brainstorming.',
    process: 'Explorar · Validar · Construir',
    accent: '#7d44e4',
    tint: '#f4eefe',
    href: '/soluciones/innovacion-estrategica',
  },
]
