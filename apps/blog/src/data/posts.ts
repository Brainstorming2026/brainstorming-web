import type { ImageMetadata } from 'astro'
import card1 from '@/assets/images/hero/card1.png'
import card10 from '@/assets/images/hero/card10.png'
import card11 from '@/assets/images/hero/card11.png'
import card2 from '@/assets/images/hero/card2.png'
import card3 from '@/assets/images/hero/card3.png'
import card4 from '@/assets/images/hero/card4.png'
import card5 from '@/assets/images/hero/card5.png'
import card6 from '@/assets/images/hero/card6.png'
import card7 from '@/assets/images/hero/card7.png'
import card8 from '@/assets/images/hero/card8.png'
import card9 from '@/assets/images/hero/card9.png'

// Placeholder mientras se conecta Sanity (CMS). Misma forma que tendran los
// posts reales — cuando se conecte el CMS, cada seccion de la home pasa a
// resolver su query GROQ en vez de este array, sin tocar los componentes.
export interface Post {
  slug: string
  title: string
  excerpt: string
  category: string
  date?: string
  image?: ImageMetadata
}

export const featuredPost: Post = {
  slug: 'chatbots-marketing-ia',
  title: 'AHORRA RECURSOS CON INTELIGENCIA ARTIFICIAL EN EL MARKETING: Cómo los chatbots y asistentes virtuales con IA están transformando las empresas',
  excerpt: 'La evolución de los chatbots y asistentes virtuales...',
  category: 'Inbound Marketing',
  date: '11 julio 2024',
  image: card1,
}

export const quickPosts: Post[] = [
  {
    slug: 'que-es-community-manager',
    title: '¿Cuál es el rol de un Community Manager?',
    excerpt: '¿Qué es un Community Manager? Un profesional capaz y responsable de construir, gestionar y administrar las',
    category: 'Inbound Marketing',
    image: card2,
  },
  {
    slug: 'que-es-un-influencer',
    title: '¿Qué es un influencer?',
    excerpt: '¿Qué importancia supone un influencer en las redes sociales? ¡La importancia de un Influencer radica en',
    category: 'Inbound Marketing',
    image: card3,
  },
  {
    slug: 'que-es-una-landing-page',
    title: '¿Qué es una landing page o página de aterrizaje?',
    excerpt: '¿Cómo funciona una landing page? Al momento de crear una landing page, hay tres diferentes propósitos',
    category: 'Desarrollo Web',
    image: card4,
  },
]

export const popularPosts: Post[] = [
  {
    slug: 'chatbots-marketing-ia',
    title: 'AHORRA RECURSOS CON INTELIGENCIA ARTIFICIAL EN EL MARKETING: Cómo los chatbots y asistentes virtuales con IA están transformando las empresas',
    excerpt: 'La evolución de los chatbots y asistentes virtuales con inteligencia artificial. Los chatbots y...',
    category: 'Inbound Marketing',
    image: card5,
  },
  {
    slug: 'marketing-turismo-peru',
    title: 'ESTRATEGIAS PARA UNA CAMPAÑA DE MARKETING EN EL SECTOR DEL TURISMO',
    excerpt: 'Sector Turismo y comunicación de marca. Hasta el año 2019, Perú seguía siendo un...',
    category: 'Inbound Marketing',
    image: card6,
  },
  {
    slug: 'estrategia-de-marca-confianza',
    title: '¿La estrategia de tu marca no genera la confianza que esperabas?',
    excerpt: 'Luego de una larga y productiva conversación, llegamos a la conclusión que debemos tomar...',
    category: 'Branding',
    image: card7,
  },
  {
    slug: 'desafios-investigacion-de-mercado',
    title: 'DESCIFRANDO LOS DESAFÍOS DE LA INVESTIGACIÓN DE MERCADO',
    excerpt: 'Nivel 1: Definición de objetivos y preguntas de investigación. El primer desafío radica...',
    category: 'Procesos',
    image: card8,
  },
]

export const relatedPosts: Post[] = [
  {
    slug: 'necesito-pagina-web-para-mi-empresa',
    title: '¿Necesito una página web para mi empresa? Sí, te explicamos por qué',
    excerpt: '8 Razones por las que necesitas una página web. Si todavía tienes dudas sobre los',
    category: 'Desarrollo Web',
    image: card9,
  },
  {
    slug: 'consejos-pagina-web-efectiva',
    title: '10 Consejos para construir una página web efectiva',
    excerpt: '1. Tu página web debe ser visible en móviles. Está demostrado que la mayoría de',
    category: 'Desarrollo Web',
    image: card10,
  },
  {
    slug: 'que-es-un-ecommerce',
    title: '¿Qué es un ecommerce? Aprende lo básico',
    excerpt: '¿Cómo se clasifican los ecommerce? Este intercambio que permite el ecommerce de bienes y servicios',
    category: 'Desarrollo Web',
    image: card11,
  },
]

// Union de todos los posts listados en la home, para resolver "relacionados"
// en la pagina de articulo por categoria. Dedupe por slug (algunos posts
// aparecen en mas de una seccion, ej. el destacado tambien esta en populares).
export const allPosts: Post[] = [featuredPost, ...quickPosts, ...popularPosts, ...relatedPosts]
  .filter((post, index, list) => list.findIndex(p => p.slug === post.slug) === index)

export interface Category {
  label: string
  icon: string
}

export const categories: Category[] = [
  { label: 'Branding', icon: 'expert-huella' },
  { label: 'Desarrollo Web', icon: 'expert-window' },
  { label: 'Inbound Marketing', icon: 'expert-iman' },
  { label: 'Procesos', icon: 'category-procesos' },
]
