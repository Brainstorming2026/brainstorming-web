import { BLOG_URL, US_URL, WEB_URL } from 'astro:env/client'

const isDev = import.meta.env.DEV

/**
 * Base URLs of the three Brainstorming sites, for links that cross between them.
 * WEB_URL / US_URL / BLOG_URL override per environment (e.g. a Vercel preview);
 * otherwise `astro dev` targets the local dev servers (fixed ports in each
 * astro.config) and builds target production.
 */
export const siteUrls = {
  web: WEB_URL ?? (isDev ? 'http://localhost:4321' : 'https://www.brainstorming.la'),
  us: US_URL ?? (isDev ? 'http://localhost:4322' : 'https://us.brainstorming.la'),
  blog: BLOG_URL ?? (isDev ? 'http://localhost:4323' : 'https://blog.brainstorming.la'),
} as const

/** Absolute URL on another Brainstorming site: siteUrl('web', '/contacto'). */
export function siteUrl(site: keyof typeof siteUrls, path = '/') {
  return new URL(path, siteUrls[site]).toString()
}
