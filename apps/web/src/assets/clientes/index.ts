import type { ImageMetadata } from 'astro'

import customerAlumspazio from './customer-alumspazio.webp'
import customerAmadocacao from './customer-amadocacao.webp'
import customerAruma from './customer-aruma.webp'
import customerAtsaairlines from './customer-atsaairlines.webp'
import customerBeauty from './customer-beauty.webp'
import customerDigital from './customer-digital.webp'
import customerGodini from './customer-godini.webp'
import customerLatinamerican from './customer-latinamerican.webp'
import customerLawash from './customer-lawash.webp'
import customerLimagas from './customer-limagas.webp'
import customerLorenzee from './customer-lorenzee.webp'
import customerMikio from './customer-mikio.webp'
import customerSocgeo from './customer-moneda.webp'
import customerMusicalma from './customer-musicalma.webp'
import customerNote from './customer-note.webp'
import customerOrquidea from './customer-orquidea.webp'
import customerPringles from './customer-pringles.webp'
import customerRenace from './customer-renace.webp'
import customerRua from './customer-rua.webp'
import customerSiemens from './customer-siemens.webp'
import customerSonqo from './customer-sonqo.webp'
import customerStanley from './customer-stanley.webp'
import customerStyla from './customer-styla.png'
import customerSubasta from './customer-subasta.png'
import customerVendefactura from './customer-vendefactura.webp'
import customerWalon from './customer-walon.webp'
import officialAguaclara from './official/aguaclara.png'
import officialGrin from './official/grin.png'
import officialHelena from './official/helena.png'
import officialRetyg from './official/retyg.svg'
import officialSgs from './official/sgs.png'

export interface ClienteLogo {
  slug: string
  name: string
  image: ImageMetadata
  source: 'official' | 'portfolio'
  className?: string
}

export const clienteLogos: ClienteLogo[] = [
  { slug: 'aguaclara', name: 'Aguaclara', image: officialAguaclara, source: 'official' },
  { slug: 'alumspazio', name: 'Alumspazio', image: customerAlumspazio, source: 'portfolio' },
  { slug: 'amado-cacao', name: 'Amado Cacao', image: customerAmadocacao, source: 'portfolio' },
  { slug: 'aruma', name: 'Aruma', image: customerAruma, source: 'portfolio' },
  { slug: 'atsa-airlines', name: 'ATSA Airlines', image: customerAtsaairlines, source: 'portfolio' },
  { slug: 'digital-factoring', name: 'Digital Factoring', image: customerDigital, source: 'portfolio' },
  { slug: 'grin', name: 'Grin', image: officialGrin, source: 'official', className: 'max-w-[125px]' },
  { slug: 'gordini', name: 'Gordini', image: customerGodini, source: 'portfolio' },
  { slug: 'helena', name: 'Helena', image: officialHelena, source: 'official' },
  { slug: 'latin-american-outdoors', name: 'Latin American Outdoors', image: customerLatinamerican, source: 'portfolio' },
  { slug: 'limagas', name: 'Limagas', image: customerLimagas, source: 'portfolio' },
  { slug: 'lorenzee-link', name: 'Lorenzee Link', image: customerLorenzee, source: 'portfolio' },
  { slug: 'mikio', name: 'Mikio Car Wash', image: customerMikio, source: 'portfolio' },
  { slug: 'musicalma', name: 'Musicalma', image: customerMusicalma, source: 'portfolio' },
  { slug: 'note-vapor', name: 'Note Vapor', image: customerNote, source: 'portfolio' },
  { slug: 'orquidea', name: 'Orquídea Mezzanine Fund', image: customerOrquidea, source: 'portfolio' },
  { slug: 'pringles', name: 'Pringles', image: customerPringles, source: 'portfolio' },
  { slug: 'renace-fest', name: 'Renace Fest', image: customerRenace, source: 'portfolio' },
  { slug: 'retyg', name: 'Retyg', image: officialRetyg, source: 'official' },
  { slug: 'rua', name: 'RUA', image: customerRua, source: 'portfolio' },
  { slug: 'siemens', name: 'Siemens', image: customerSiemens, source: 'portfolio' },
  { slug: 'stanley-black-decker', name: 'Stanley Black & Decker', image: customerStanley, source: 'portfolio' },
  { slug: 'sgs', name: 'SGS', image: officialSgs, source: 'official' },
  { slug: 'sociedad-geografica-lima', name: 'Sociedad Geográfica de Lima', image: customerSocgeo, source: 'portfolio' },
  { slug: 'sonqo', name: 'Sonqo', image: customerSonqo, source: 'portfolio' },
  { slug: 'styla', name: 'Styla', image: customerStyla, source: 'portfolio', className: 'invert' },
  { slug: 'subasta-tus-facturas', name: 'Subasta tus Facturas', image: customerSubasta, source: 'portfolio', className: 'invert' },
  { slug: 'the-beauty-trust', name: 'The Beauty Trust', image: customerBeauty, source: 'portfolio' },
  { slug: 'vende-tu-factura', name: 'Vende tu Factura', image: customerVendefactura, source: 'portfolio' },
  { slug: 'walon', name: 'Walon', image: customerWalon, source: 'portfolio' },
  { slug: 'la-wash', name: 'La Wash', image: customerLawash, source: 'portfolio' },
]
