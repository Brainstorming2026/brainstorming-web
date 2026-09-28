import type { ImageMetadata } from 'astro'
import tresPuntoCero from '@/assets/ecosystem/3-0.png'
import eightBits from '@/assets/ecosystem/8bits.png'
import brainstorming from '@/assets/ecosystem/brainstorming.webp'
import ciSymbol from '@/assets/ecosystem/collective-symbol-lime.png'
import focusBrands from '@/assets/ecosystem/focus-brands-v2.png'
import mt from '@/assets/ecosystem/mt.png'
import reechAi from '@/assets/ecosystem/reechai.png'

export interface EcosystemMember {
  name: string
  logo: ImageMetadata
  width: number
  scale?: number
}

/**
 * Collective Intelligence: el ecosistema de firmas del que Brainstorming es parte.
 * Para sumar o quitar una firma basta con editar `members` y dejar su logo en
 * assets/ecosystem (los archivos se usan tal cual, sin procesar).
 */
export const ecosystem = {
  name: 'Collective Intelligence',
  url: 'https://www.collectiveintelligence.pe/',
  symbol: ciSymbol,
  eyebrow: 'Proud Partner of',
  text: 'Somos parte de Collective Intelligence: especialistas en marketing, tecnología y data trabajando juntos para impulsar tu negocio.',
  linkLabel: 'Visitar Collective Intelligence',
  // Mismo orden que la firma de las propuestas.
  members: [
    { name: '3.0 Consulting Group', logo: tresPuntoCero, width: 104 },
    { name: 'Brainstorming', logo: brainstorming, width: 150 },
    { name: 'Focus Brands', logo: focusBrands, width: 160 },
    { name: 'mt', logo: mt, width: 100, scale: 2.65 },
    { name: 'Reech AI', logo: reechAi, width: 180 },
    { name: '8Bits', logo: eightBits, width: 112 },
  ] satisfies EcosystemMember[],
}
