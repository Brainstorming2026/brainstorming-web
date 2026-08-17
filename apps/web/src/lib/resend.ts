import { CORREO_FROM, CORREO_REPLY_TO, CORREO_TIPO, RESEND_API_KEY } from 'astro:env/server'
import { Resend } from 'resend'

// Unico proveedor de correo soportado por ahora. `CORREO_TIPO` queda declarado
// para el dia que se agregue un segundo proveedor; hoy solo valida config.
if (CORREO_TIPO !== 'resend') {
  throw new Error(`CORREO_TIPO="${CORREO_TIPO}" no soportado — solo "resend" esta implementado`)
}

// Cliente unico, instanciado una vez. Nunca hacer `new Resend()` en una ruta.
export const resend = new Resend(RESEND_API_KEY)

// Remitente de todos los correos salientes. Un solo dominio de envio verificado
// en Resend (free tier: 1 dominio), compartido por brainstorming.la y us.brainstorming.la.
export const EMAIL_FROM = CORREO_FROM

// Bandeja interna del equipo — recibe la notificacion de cada lead nuevo
// (contacto o guia). El `replyTo` de esa notificacion se setea al email del
// lead en cada ruta, para que el equipo responda con un click.
export const EMAIL_INTERNAL_TO = CORREO_REPLY_TO
