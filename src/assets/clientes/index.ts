import customerAguaclara from './customer-aguaclara.webp'
import customerAlumspazio from './customer-alumspazio.webp'
import customerAmadocacao from './customer-amadocacao.webp'
import customerAruma from './customer-aruma.webp'
import customerAtsaairlines from './customer-atsaairlines.webp'
import customerBeauty from './customer-beauty.webp'
import customerDigital from './customer-digital.webp'
import customerGodini from './customer-godini.webp'
import customerGris from './customer-gris.webp'
import customerHelena from './customer-helena.webp'
import customerLatinamerican from './customer-latinamerican.webp'
import customerLawash from './customer-lawash.webp'
import customerLimagas from './customer-limagas.webp'
import customerLorenzee from './customer-lorenzee.webp'
import customerMikio from './customer-mikio.webp'
import customerMoneda from './customer-moneda.webp'
import customerMusicalma from './customer-musicalma.webp'
import customerNote from './customer-note.webp'
import customerOrquidea from './customer-orquidea.webp'
import customerPringles from './customer-pringles.webp'
import customerRenace from './customer-renace.webp'
import customerRetyg from './customer-retyg.webp'
import customerRua from './customer-rua.webp'
import customerSgs from './customer-sgs.webp'
import customerSiemens from './customer-siemens.webp'
import customerSonqo from './customer-sonqo.webp'
import customerStanley from './customer-stanley.webp'
import customerVendefactura from './customer-vendefactura.webp'
import customerWalon from './customer-walon.webp'

import type { ImageMetadata } from 'astro'

export interface ClienteLogo {
  slug: string
  image: ImageMetadata
}

export const clienteLogos: ClienteLogo[] = [
  { slug: 'aguaclara', image: customerAguaclara },
  { slug: 'alumspazio', image: customerAlumspazio },
  { slug: 'amadocacao', image: customerAmadocacao },
  { slug: 'aruma', image: customerAruma },
  { slug: 'atsaairlines', image: customerAtsaairlines },
  { slug: 'digital', image: customerDigital },
  { slug: 'godini', image: customerGodini },
  { slug: 'gris', image: customerGris },
  { slug: 'helena', image: customerHelena },
  { slug: 'latinamerican', image: customerLatinamerican },
  { slug: 'lawash', image: customerLawash },
  { slug: 'limagas', image: customerLimagas },
  { slug: 'lorenzee', image: customerLorenzee },
  { slug: 'mikio', image: customerMikio },
  { slug: 'moneda', image: customerMoneda },
  { slug: 'musicalma', image: customerMusicalma },
  { slug: 'note', image: customerNote },
  { slug: 'orquidea', image: customerOrquidea },
  { slug: 'pringles', image: customerPringles },
  { slug: 'renace', image: customerRenace },
  { slug: 'retyg', image: customerRetyg },
  { slug: 'rua', image: customerRua },
  { slug: 'sgs', image: customerSgs },
  { slug: 'siemens', image: customerSiemens },
  { slug: 'sonqo', image: customerSonqo },
  { slug: 'stanley', image: customerStanley },
  { slug: 'vendefactura', image: customerVendefactura },
  { slug: 'walon', image: customerWalon },
  { slug: 'beauty', image: customerBeauty },
]
