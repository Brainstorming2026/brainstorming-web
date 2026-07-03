import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://brainstorming.la',
  trailingSlash: 'never',

  // Sitio estático (SSG). No requiere adapter.
  output: 'static',

  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },

  // Iconos locales personalizados desde src/icons/ (sin sets externos).
  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()],
  },
})
