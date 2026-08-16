import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://brainstorming.la',
  trailingSlash: 'never',
  output: 'static',

  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  integrations: [icon(), react()],

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