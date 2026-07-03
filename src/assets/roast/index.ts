import roastAlumspazio from './roast-alumspazio.webp'
import roastBrainstorming from './roast-brainstorming.webp'
import roastGris from './roast-gris.webp'
import roastHelena from './roast-helena.webp'
import roastSiemens from './roast-siemens.webp'

import type { ImageMetadata } from 'astro'

export interface RoasLogo {
  slug: string
  image: ImageMetadata
}

export const roasLogos: RoasLogo[] = [
  { slug: 'roast-brainstorming', image: roastBrainstorming },
  { slug: 'roast-siemens', image: roastSiemens },
  { slug: 'roast-gris', image: roastGris },
  { slug: 'roast-alumspazio', image: roastAlumspazio },
  { slug: 'roast-helena', image: roastHelena },
]
