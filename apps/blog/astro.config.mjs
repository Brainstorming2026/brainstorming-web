import react from '@astrojs/react'

import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'
// @ts-check
import { defineConfig, envField } from 'astro/config'

export default defineConfig({
  site: 'https://blog.brainstorming.la',
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

  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CORREO_TIPO: envField.string({ context: 'server', access: 'secret', optional: true }),
      CORREO_FROM: envField.string({ context: 'server', access: 'secret', optional: true }),
      CORREO_REPLY_TO: envField.string({ context: 'server', access: 'secret', optional: true }),
      // Opcional: si se define, los suscriptores se agregan a esa Audience de
      // Resend (lista con dedupe + unsubscribe). Sin ella, el form sigue
      // funcionando (solo se pierde el registro en la audiencia).
      RESEND_SUBSCRIBE_AUDIENCE_ID: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
