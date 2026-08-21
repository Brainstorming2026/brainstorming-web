const EMAIL_ASSETS_BASE = 'https://brainstorming.la/email'

export const BRAINSTORMING_LOGO_URL = `${EMAIL_ASSETS_BASE}/logo.png`

export const SOCIAL_ICON_URLS: Record<string, string> = {
  'footer-linkedln': `${EMAIL_ASSETS_BASE}/footer-linkedln.png`,
  'footer-facebook': `${EMAIL_ASSETS_BASE}/footer-facebook.png`,
  'footer-ig': `${EMAIL_ASSETS_BASE}/footer-ig.png`,
  'footer-yt': `${EMAIL_ASSETS_BASE}/footer-yt.png`,
  'footer-tiktok': `${EMAIL_ASSETS_BASE}/footer-tiktok.png`,
}

// Portada de cada guia, generada 1:1 desde src/assets/guides/<slug>.webp
// (ver public/email/guides/*.png) — el nombre de archivo siempre coincide
// con el slug, asi que no hace falta mapear cada guia a mano.
export function guideCoverEmailUrl(slug: string): string {
  return `${EMAIL_ASSETS_BASE}/guides/${slug}.png`
}
