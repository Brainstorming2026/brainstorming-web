import { resourceLinks, siteServices } from './site-navigation'

export interface FooterLink {
  label: string
  href: string
  complementary?: boolean
}

export interface FooterRed {
  name: string
  href: string
  label: string
}

export const soluciones: FooterLink[] = siteServices.map(service => ({
  label: service.footerLabel ?? service.label,
  href: service.href,
  complementary: service.complementary,
}))

export const empresa: FooterLink[] = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Contacto', href: '/contacto' },
]

export const recursos: FooterLink[] = [
  ...resourceLinks,
  { label: 'Políticas de privacidad', href: '/politica-de-privacidad' },
]

export const redes: FooterRed[] = [
  { name: 'footer-linkedln', href: 'https://www.linkedin.com/company/brainstorming-marketing-%26-communications/?originalSubdomain=pe', label: 'LinkedIn' },
  { name: 'footer-facebook', href: 'https://www.facebook.com/BrainstormingLa/', label: 'Facebook' },
  { name: 'footer-ig', href: 'https://www.instagram.com/brainstormingmkt/', label: 'Instagram' },
  { name: 'footer-yt', href: 'https://www.youtube.com/channel/UC-xpaBcv9dnpuE3adXizFcA/featured', label: 'YouTube' },
  { name: 'footer-tiktok', href: 'https://www.tiktok.com/@brainstormingmkt', label: 'TikTok' },
]
