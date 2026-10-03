/**
 * The Brainstorming entity, identical in web, blog and us. One shared @id lets
 * search and AI answer engines merge the three domains into a single brand.
 * Keep this file in sync across apps/{web,blog,us}/src/data/organization.ts.
 */
export const ORGANIZATION_ID = 'https://www.brainstorming.la/#organization'

export const organization = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  'name': 'Brainstorming',
  'url': 'https://www.brainstorming.la/',
  'logo': {
    '@type': 'ImageObject',
    'url': 'https://www.brainstorming.la/brainstorming-icon-file.png',
  },
  'description': 'Consultora estratégica especializada en crecimiento comercial, automatización con IA e innovación para empresas en Latinoamérica y Estados Unidos.',
  'email': 'conversemos@brainstorming.la',
  'telephone': '+51 992 528 363',
  'foundingLocation': { '@type': 'Place', 'name': 'Perú' },
  'areaServed': ['Latinoamérica', 'Estados Unidos'],
  'knowsAbout': ['Growth Planning', 'Inbound Marketing', 'Smart Selling', 'Automatización con IA', 'Innovación Estratégica', 'Branding'],
  'sameAs': [
    'https://www.linkedin.com/company/brainstorming-marketing-%26-communications/',
    'https://www.facebook.com/BrainstormingLa/',
    'https://www.instagram.com/brainstormingmkt/',
    'https://www.youtube.com/channel/UC-xpaBcv9dnpuE3adXizFcA',
    'https://www.tiktok.com/@brainstormingmkt',
  ],
} as const
