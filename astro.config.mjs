import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

// @ts-check
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://brainstorming.la',
  trailingSlash: 'never',
  output: 'static',

  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()],
  },
})
