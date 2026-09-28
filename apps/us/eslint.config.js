import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  astro: true,
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
    commaDangle: 'never',
    braceStyle: 'stroustrup',
    arrowParens: true,
  },
})
