import react from '@astrojs/react'

import vercel from '@astrojs/vercel'

import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'
// @ts-check
import { defineConfig, envField } from 'astro/config'
import { cmsImagePatterns, defaultSiteOrigins, DEV_PORTS, loadAppEnv } from '../../config/sites.mjs'

// Configuración pública únicamente: los secretos los carga astro:env/server.
const { isDev, env } = loadAppEnv(new URL('./', import.meta.url))

export default defineConfig({
  site: env.WEB_URL ?? defaultSiteOrigins(isDev).web,
  trailingSlash: 'never',
  // Fixed per app so cross-site links in dev (src/lib/site-urls.ts) always resolve.
  server: { port: DEV_PORTS.web },
  output: 'server',

  redirects: {
    '/guias': {
      status: 301,
      destination: '/guias-practicas-brainstorming',
    },
    '/soluciones/desarrollo-web': {
      status: 301,
      destination: '/soluciones/inbound-marketing#desarrollo-web',
    },
    // Retired slugs: real 301s at the edge instead of prerendered meta-refresh pages.
    '/soluciones/inbound-sales': {
      status: 301,
      destination: '/soluciones/smart-selling',
    },
    '/soluciones/optimizacion-procesos': {
      status: 301,
      destination: '/soluciones/automatizacion-ia',
    },
  },

  adapter: vercel({
    imageService: true,
    imagesConfig: {
      sizes: [300, 480, 640, 720, 960, 1080, 1280, 1600, 1920, 2560],
      formats: ['image/avif', 'image/webp'],
    },
    maxDuration: 30,
  }),

  security: { checkOrigin: true },

  image: {
    remotePatterns: cmsImagePatterns(env),
  },

  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  integrations: [icon(), react()],

  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CORREO_TIPO: envField.string({ context: 'server', access: 'secret', optional: true }),
      CORREO_FROM: envField.string({ context: 'server', access: 'secret', optional: true }),
      CORREO_REPLY_TO: envField.string({ context: 'server', access: 'secret', optional: true }),
      TURNSTILE_SITE_KEY: envField.string({ context: 'client', access: 'public', optional: true }),
      TURNSTILE_SECRET_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      WEB_URL: envField.string({ context: 'client', access: 'public', optional: true, url: true }),
      US_URL: envField.string({ context: 'client', access: 'public', optional: true, url: true }),
      BLOG_URL: envField.string({ context: 'client', access: 'public', optional: true, url: true }),
      CMS_API_URL: envField.string({ context: 'server', access: 'public', optional: true, url: true }),
      CMS_FILES_URL: envField.string({ context: 'server', access: 'public', optional: true, url: true }),
      CMS_CONTENT_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTENT_SOURCE: envField.enum({ context: 'server', access: 'public', optional: true, values: ['cms', 'static'] }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['maplibre-gl'],
    },
    worker: {
      format: 'es',
    },
  },
})
