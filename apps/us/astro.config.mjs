import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

// @ts-check
import { defineConfig, envField } from 'astro/config'

import react from '@astrojs/react'
import vercel from '@astrojs/vercel'

export default defineConfig({
  site: 'https://us.brainstorming.la',
  trailingSlash: 'never',
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

  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  integrations: [icon(), react()],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },

  env: {
    schema: {
      HUBSPOT_ACCESS_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true}),
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CORREO_TIPO: envField.string({ context: 'server', access: 'secret', optional: true }),
      CORREO_FROM: envField.string({ context: 'server', access: 'secret', optional: true }),
      CORREO_REPLY_TO: envField.string({ context: 'server', access: 'secret', optional: true }),
      PUBLIC_TURNSTILE_SITE_KEY: envField.string({ context: 'client', access: 'public', optional: true }),
      TURNSTILE_SECRET_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
