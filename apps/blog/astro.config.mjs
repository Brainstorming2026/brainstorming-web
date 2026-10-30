import react from '@astrojs/react'

import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

// @ts-check
import { defineConfig, envField } from 'astro/config'
import { cmsImagePatterns, defaultSiteOrigins, DEV_PORTS, loadAppEnv } from '../../config/sites.mjs'

const { isDev, env } = loadAppEnv(new URL('./', import.meta.url))

export default defineConfig({
  site: env.BLOG_URL ?? defaultSiteOrigins(isDev).blog,
  trailingSlash: 'never',
  // Fixed per app so cross-site links in dev (src/lib/site-urls.ts) always resolve.
  server: { port: DEV_PORTS.blog },
  output: 'server', // per-page `prerender = true` keeps static pages free

  adapter: vercel({
    imageService: true,
    imagesConfig: {
      sizes: [300, 480, 640, 720, 960, 1080, 1280, 1600, 1920, 2560],
      formats: ['image/avif', 'image/webp'],
    },
    maxDuration: 30,
  }),

  security: { checkOrigin: true },

  // Imágenes del CMS (R2). Solo ese host puede optimizarse; con un CMS local (CMS_API_URL en localhost), su Worker.
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
      RESEND_SUBSCRIBE_AUDIENCE_ID: envField.string({ context: 'server', access: 'secret', optional: true }),
      TURNSTILE_SITE_KEY: envField.string({ context: 'client', access: 'public', optional: true }),
      TURNSTILE_SECRET_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      WEB_URL: envField.string({ context: 'client', access: 'public', optional: true, url: true }),
      US_URL: envField.string({ context: 'client', access: 'public', optional: true, url: true }),
      CMS_API_URL: envField.string({ context: 'server', access: 'public', optional: true, url: true }),
      CMS_FILES_URL: envField.string({ context: 'server', access: 'public', optional: true, url: true }),
      CMS_CONTENT_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
      // 'cms' lee el CMS; cualquier otro valor (o ninguno) usa el contenido de src/data. Se retira al terminar la migración.
      CONTENT_SOURCE: envField.enum({ context: 'server', access: 'public', optional: true, values: ['cms', 'static'] }),
      BLOG_URL: envField.string({ context: 'client', access: 'public', optional: true, url: true }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
