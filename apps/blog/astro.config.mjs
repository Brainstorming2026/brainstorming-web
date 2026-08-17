import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'
// @ts-check
import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel'

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
  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()],
  },
})
