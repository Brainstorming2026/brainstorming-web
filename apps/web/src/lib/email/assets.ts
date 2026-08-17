// Assets de email como URLs publicas absolutas (public/email/*.png).
// Nunca base64: Gmail, Outlook y la mayoria de webmail bloquean imagenes
// data-URI embebidas en el HTML del correo por antispam — funcionan en un
// preview de navegador pero se rompen (icono roto) en el correo real.
const EMAIL_ASSETS_BASE = 'https://brainstorming.la/email'

export const BRAINSTORMING_LOGO_URL = `${EMAIL_ASSETS_BASE}/logo.png`

export const SOCIAL_ICON_URLS: Record<string, string> = {
  'footer-linkedln': `${EMAIL_ASSETS_BASE}/footer-linkedln.png`,
  'footer-facebook': `${EMAIL_ASSETS_BASE}/footer-facebook.png`,
  'footer-ig': `${EMAIL_ASSETS_BASE}/footer-ig.png`,
  'footer-yt': `${EMAIL_ASSETS_BASE}/footer-yt.png`,
  'footer-tiktok': `${EMAIL_ASSETS_BASE}/footer-tiktok.png`,
}
