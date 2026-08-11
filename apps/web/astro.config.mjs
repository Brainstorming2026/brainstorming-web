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
    // maplibre-gl resolves its worker script relative to its own module URL at
    // runtime; Vite's dep pre-bundling drops that file, so exclude it and let
    // it load straight from node_modules where the worker sits alongside it.
    optimizeDeps: {
      exclude: ['maplibre-gl'],
    },
  },
})