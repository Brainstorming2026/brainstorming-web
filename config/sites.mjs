import { readFileSync } from 'node:fs'
import process from 'node:process'
import { parseEnv } from 'node:util'

/**
 * Fuente única de puertos y orígenes de los tres sitios. La importan los astro.config.mjs
 * y los site-urls.ts de cada app: nada de esto se repite como string en el resto del código.
 * Un entorno distinto (preview de Vercel, staging) lo sobrescribe con WEB_URL / US_URL / BLOG_URL.
 */
export const DEV_PORTS = { web: 4321, us: 4322, blog: 4323 }

export const PRODUCTION_ORIGINS = {
  web: 'https://www.brainstorming.la',
  us: 'https://us.brainstorming.la',
  blog: 'https://blog.brainstorming.la',
}

/** Origen público de los archivos del CMS (R2) en producción. */
export const PRODUCTION_FILES_ORIGIN = 'https://files.brainstorming.la'

/** @param {boolean} isDev @returns {{ web: string, us: string, blog: string }} */
export function defaultSiteOrigins(isDev) {
  return isDev
    ? {
        web: `http://localhost:${DEV_PORTS.web}`,
        us: `http://localhost:${DEV_PORTS.us}`,
        blog: `http://localhost:${DEV_PORTS.blog}`,
      }
    : PRODUCTION_ORIGINS
}

/**
 * Astro evalúa el config antes de cargar los .env: se leen aquí con la misma precedencia
 * (proceso > .env.<modo>.local > .env.<modo> > .env.local > .env).
 * @param {URL} appDir directorio de la app, con barra final
 */
export function loadAppEnv(appDir) {
  const isDev = process.argv.includes('dev')
  const mode = isDev ? 'development' : 'production'
  const read = (name) => {
    try {
      return parseEnv(readFileSync(new URL(name, appDir), 'utf8'))
    }
    catch {
      return {}
    }
  }
  const files = ['.env', '.env.local', `.env.${mode}`, `.env.${mode}.local`]
  const env = { ...Object.assign({}, ...files.map(read)), ...process.env }
  return { isDev, mode, env }
}

/**
 * Hosts de imágenes del CMS que Astro puede optimizar: el origen de archivos del entorno
 * y, solo con un CMS local, el Worker de desarrollo (host y puerto salen de CMS_API_URL).
 */
export function cmsImagePatterns(env) {
  const patterns = []
  const files = parseOrigin(env.CMS_FILES_URL) ?? new URL(PRODUCTION_FILES_ORIGIN)
  patterns.push(toPattern(files))
  const api = parseOrigin(env.CMS_API_URL)
  if (api && isLocalHttp(api))
    patterns.push(toPattern(api))
  return patterns
}

function parseOrigin(value) {
  try {
    return value ? new URL(value) : null
  }
  catch {
    return null
  }
}

function isLocalHttp(url) {
  return url.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(url.hostname)
}

function toPattern(url) {
  return { protocol: url.protocol.slice(0, -1), hostname: url.hostname, ...(url.port ? { port: url.port } : {}) }
}
