export interface FooterLink {
  label: string
  href: string
}

export interface FooterRed {
  name: string
  href: string
  label: string
}

export const soluciones: FooterLink[] = [
  { label: 'Growth Planning', href: '/soluciones/growth-planning' },
  { label: 'Branding', href: '/soluciones/branding' },
  { label: 'Desarrollo Web', href: '/soluciones/desarrollo-web' },
  { label: 'Inbound Marketing', href: '/soluciones/inbound-marketing' },
  { label: 'Smart Selling', href: '/soluciones/smart-selling' },
  { label: 'Automatización de Procesos con IA', href: '/soluciones/automatizacion-ia' },
  { label: 'Innovación Estratégica', href: '/soluciones/innovacion-estrategica' },
]

export const empresa: FooterLink[] = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Contacto', href: '/contacto' },
]

export const recursos: FooterLink[] = [
  { label: 'Blog', href: '/blog' },
  { label: 'Guías Prácticas', href: '/guias' },
  { label: 'Políticas de privacidad', href: '/politica-de-privacidad' },
]

export const redes: FooterRed[] = [
  { name: 'footer-linkedln', href: 'https://www.linkedin.com/company/brainstorming-marketing-%26-communications/?originalSubdomain=pe', label: 'LinkedIn' },
  { name: 'footer-facebook', href: 'https://www.facebook.com/BrainstormingLa/', label: 'Facebook' },
  { name: 'footer-ig', href: 'https://www.instagram.com/brainstormingmkt/', label: 'Instagram' },
  { name: 'footer-yt', href: 'https://www.youtube.com/channel/UC-xpaBcv9dnpuE3adXizFcA/featured', label: 'YouTube' },
  { name: 'footer-tiktok', href: 'https://www.tiktok.com/@brainstormingmkt', label: 'TikTok' },
]
