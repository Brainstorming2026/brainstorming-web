import type { ImageMetadata } from 'astro'

import { newProjectLogos } from '@/data/new-projects'

// Logos procesados por `scripts/build-client-logos.mjs` (recortados, webp).
// El slug es el nombre del archivo: para sumar un cliente basta con generar su
// logo y, si el nombre no se deduce del slug, registrarlo en NAMES.
const files = import.meta.glob<{ default: ImageMetadata }>('./logos/*.webp', { eager: true })

export interface ClienteLogo {
  slug: string
  name: string
  image: ImageMetadata
  /** Ancho en px que iguala el peso visual entre logos anchos y cuadrados. */
  width: number
  className?: string
}

// Nombre visible cuando difiere del slug ("Title Case" del slug por defecto).
const NAMES: Record<string, string> = {
  'amado-cacao': 'Amado Cacao',
  'atsa': 'ATSA Airlines',
  'black-decker': 'Black+Decker',
  'dewalt': 'DeWalt',
  'dg': 'DG',
  'esan': 'ESAN',
  'ferreyros': 'Ferreyros CAT',
  'gg-joyeros': 'G&G Joyeros',
  'gsk': 'GSK',
  'jw-marriott': 'JW Marriott',
  'lorenzetti': 'Lorenzetti Ink',
  'mi-banco': 'mibanco',
  'mikio': 'Mikio Car Wash',
  'note': 'Note Vapor',
  'orquidea': 'Orquídea Mezzanine Fund',
  'pall-mall': 'Pall Mall',
  'siderperu': 'Siderperú',
  'stanley-black-decker': 'Stanley Black & Decker',
  'tedx': 'TEDx',
  'tedx-lima': 'TEDxLima',
  'usaid': 'USAID',
}

// Proyectos recientes que aún no están en la carpeta de logos histórica.
const RECENT: Record<string, { name: string, className?: string }> = {
  'ait-capital': { name: 'AIT Capital' },
  'nordic': { name: 'Nordic International School' },
  'etna': { name: 'ETNA' },
  'futura-wealth': { name: 'Futura Wealth Management', className: 'rounded bg-[#182b38] p-2' },
}

// Área visual objetivo (px²). Con ancho = √(área · proporción) un wordmark
// de 6:1 y un isotipo cuadrado pesan parecido en la grilla.
const AREA = 4200
const MAX_WIDTH = 108

function visualWidth({ width, height }: ImageMetadata) {
  return Math.round(Math.min(MAX_WIDTH, Math.sqrt(AREA * (width / height))))
}

const titleCase = (slug: string) => slug.replace(/(^|-)(\w)/g, (_, sep, c) => `${sep ? ' ' : ''}${c.toUpperCase()}`)

const fromFolder = Object.entries(files).map(([path, mod]): ClienteLogo => {
  const slug = path.slice(path.lastIndexOf('/') + 1, -'.webp'.length)
  return { slug, name: NAMES[slug] ?? titleCase(slug), image: mod.default, width: visualWidth(mod.default) }
})

const recent = Object.entries(RECENT)
  .filter(([slug]) => !fromFolder.some(c => c.slug === slug))
  .map(([slug, { name, className }]): ClienteLogo => {
    const image = newProjectLogos[slug as keyof typeof newProjectLogos]
    return { slug, name, image, width: visualWidth(image), className }
  })

export const clienteLogos: ClienteLogo[] = [...fromFolder, ...recent]
  .sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }))
