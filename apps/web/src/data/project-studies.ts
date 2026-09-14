import type { ImageMetadata } from 'astro'
import retygColors from '@/assets/projects/retyg/colors.png'
import retygIdentity from '@/assets/projects/retyg/hero2.png'
import { proyectosDetalle } from '@/data/proyectosDetalle'

export type StudySlug = 'aruma' | 'atsa-airlines' | 'retyg'

export interface StudyImage {
  src: ImageMetadata
  alt: string
  caption: string
}

type StudyIcon = 'magnet' | 'clapperboard' | 'megaphone' | 'panels-top-left' | 'pen-tool' | 'swatch-book' | 'search' | 'message-square'

interface StudyService {
  label: string
  icon: StudyIcon
}

export interface StudyChapter {
  id: string
  kind: 'campaign' | 'identity' | 'web'
  label: string
  title: string
  paragraphs: string[]
  images: StudyImage[]
  highlights?: (StudyService & { description: string })[]
}

interface ProjectStudy {
  client: string
  sector: string
  title: string
  summary: string
  services: StudyService[]
  accent: string
  surface: string
  heroCaption: string
  response: string
  chapters: StudyChapter[]
  next: StudySlug
}

const aruma = proyectosDetalle.aruma
const atsa = proyectosDetalle['atsa-airlines']
const retyg = proyectosDetalle.retyg

// Editorial summaries are based on the original project copy. No performance
// metrics, dates or testimonials are inferred from the creative deliverables.
export const projectStudies: Record<StudySlug, ProjectStudy> = {
  'aruma': {
    client: 'Aruma',
    sector: 'Belleza & retail',
    title: 'La belleza se vive.\nY se comparte.',
    summary: 'Una estrategia de contenido para conectar con la belleza auténtica y acercar la marca a su comunidad.',
    services: [
      { label: 'Inbound marketing', icon: 'magnet' },
      { label: 'Contenido audiovisual', icon: 'clapperboard' },
      { label: 'Pauta digital', icon: 'megaphone' },
    ],
    accent: '#bd006d',
    surface: '#fbf0f5',
    heroCaption: 'Contenido editorial · Revista digital Aruma',
    response: 'Convertimos la belleza cotidiana en el centro de la comunicación: contenido audiovisual, acciones BTL y publicaciones para redes sociales, acompañadas de pauta digital.',
    chapters: [{
      id: 'campana',
      kind: 'campaign',
      label: 'La campaña',
      title: 'Más que productos.\nMomentos para conectar.',
      paragraphs: [aruma.campania!.parrafo],
      images: aruma.campania!.imagenes.map((img, i) => ({
        src: img.src,
        alt: i === 0 ? 'Pieza de la campaña Vive un verano Aruma publicada en Facebook' : 'Contenido de Aruma para Instagram',
        caption: i === 0 ? 'Facebook · Vive un verano Aruma' : 'Instagram · Contenido de marca',
      })),
    }],
    next: 'atsa-airlines',
  },
  'atsa-airlines': {
    client: 'Atsa Airlines',
    sector: 'Turismo & aviación',
    title: 'Más razones\npara volver a volar.',
    summary: 'Contenido y experiencia digital para acercar los destinos del Perú a nuevos viajeros y clientes recurrentes.',
    services: [
      { label: 'Inbound marketing', icon: 'magnet' },
      { label: 'Contenido digital', icon: 'clapperboard' },
      { label: 'Desarrollo web', icon: 'panels-top-left' },
    ],
    accent: '#075780',
    surface: '#eef5f8',
    heroCaption: 'Comunicación digital · Destinos y experiencias',
    response: 'Articulamos una campaña centrada en la confianza del viajero y la promoción de destinos, junto con una página de contenido dedicada a descubrir Huánuco.',
    chapters: [{
      id: 'campana',
      kind: 'campaign',
      label: 'La campaña',
      title: 'Cada destino,\nuna nueva historia.',
      paragraphs: [atsa.campania!.parrafo],
      images: atsa.campania!.imagenes.map((img, i) => ({
        src: img.src,
        alt: img.alt,
        caption: ['Punta Sal · Inspiración para viajar', 'El norte · Promoción de destinos', 'Atsa · Razones para viajar'][i],
      })),
    }, {
      id: 'experiencia-web',
      kind: 'web',
      label: 'La experiencia web',
      title: 'Huánuco,\nen un solo lugar.',
      paragraphs: ['El viaje comienza antes de abordar. Por eso propusimos una pillar page por destino, empezando por Huánuco: una guía que reúne la información que el viajero necesita para conocerlo y planificar su visita.'],
      highlights: [
        { icon: 'panels-top-left', label: 'Contenido organizado', description: 'Los temas del destino conectados en una sola página, fácil de recorrer.' },
        { icon: 'search', label: 'Visibilidad en buscadores', description: 'Contenido relevante para trabajar el posicionamiento SEO del destino.' },
      ],
      images: [{ src: atsa.features![0].imagen, alt: atsa.features![0].imagenAlt, caption: 'Pillar page · Una guía para descubrir Huánuco' }],
    }],
    next: 'retyg',
  },
  'retyg': {
    client: 'Retyg SAC',
    sector: 'Ingeniería & industria',
    title: 'Solidez que se ve.\nConfianza que se construye.',
    summary: 'Identidad y presencia digital para expresar la experiencia de un aliado de la industria.',
    services: [
      { label: 'Identidad de marca', icon: 'pen-tool' },
      { label: 'Aplicaciones gráficas', icon: 'swatch-book' },
      { label: 'Desarrollo web', icon: 'panels-top-left' },
    ],
    accent: '#245872',
    surface: '#eff3f4',
    heroCaption: 'Presencia digital · Ingeniería y soluciones industriales',
    response: 'Construimos una identidad visual sobria y consistente, y la trasladamos a una web pensada para encontrar soluciones de ingeniería y contactar con un asesor.',
    chapters: [{
      id: 'identidad',
      kind: 'identity',
      label: 'La identidad',
      title: 'Una trayectoria sólida.\nUn lenguaje propio.',
      paragraphs: ['Una marca con esta trayectoria y profesionalismo necesitaba una identidad gráfica que lo reflejara. Los tonos corporativos, los elementos del logotipo y las aplicaciones construyen una presencia sobria que transmite solidez y confianza.'],
      images: [
        { src: retygIdentity, alt: 'Identidad de Retyg SAC aplicada en carpeta, hoja membretada y tarjetas', caption: 'Sistema de identidad · Papelería corporativa' },
        { src: retygColors, alt: 'Paleta de Retyg: Steel Blue, Denim, Pigment Green, Orange, Shuttle Grey y Black', caption: 'El color · Una identidad consistente' },
      ],
    }, {
      id: 'experiencia-web',
      kind: 'web',
      label: 'La experiencia web',
      title: 'Experiencia técnica.\nClaridad digital.',
      paragraphs: ['Trasladamos el manual de marca a una web pensada para quienes buscan soluciones de ingeniería: información relevante, navegación intuitiva y un camino sencillo para contactar con un asesor comercial.'],
      highlights: [
        { icon: 'swatch-book', label: 'Identidad aplicada', description: 'Un lenguaje visual coherente con la solidez y trayectoria de la empresa.' },
        { icon: 'message-square', label: 'Contacto directo', description: 'Un formulario simple para dejar los datos y solicitar una cotización.' },
      ],
      images: [{ src: retyg.features![0].imagen, alt: retyg.features![0].imagenAlt, caption: 'Diseño web · Experiencia en escritorio y móvil' }],
    }],
    next: 'aruma',
  },
}
