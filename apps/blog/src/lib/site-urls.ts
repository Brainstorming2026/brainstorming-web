import { BLOG_URL, US_URL, WEB_URL } from 'astro:env/client'
import { defaultSiteOrigins } from '../../../../config/sites.mjs'

const defaults = defaultSiteOrigins(import.meta.env.DEV)

/**
 * Base URLs of the three Brainstorming sites, for links that cross between them.
 * WEB_URL / US_URL / BLOG_URL override per environment (e.g. a Vercel preview);
 * otherwise `astro dev` targets the local dev servers and builds target production
 * (ports and origins live in config/sites.mjs).
 */
export const siteUrls = {
  web: WEB_URL ?? defaults.web,
  us: US_URL ?? defaults.us,
  blog: BLOG_URL ?? defaults.blog,
} as const

/** Absolute URL on another Brainstorming site: siteUrl('web', '/contacto'). */
export function siteUrl(site: keyof typeof siteUrls, path = '/') {
  return new URL(path, siteUrls[site]).toString()
}
