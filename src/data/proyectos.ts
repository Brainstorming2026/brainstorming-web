import type { ImageMetadata } from 'astro'

import logoAguaclara from '@/assets/projects-logos/proyecto-logo-aguaclara.png'
import logoAlumspazio from '@/assets/projects-logos/proyecto-logo-alumspazio.png'
import logoAruma from '@/assets/projects-logos/proyecto-logo-aruma.png'
import logoAtsa from '@/assets/projects-logos/proyecto-logo-atsa.png'
import logoDfactoring from '@/assets/projects-logos/proyecto-logo-digitalfactoring.png'
import logoBlack from '@/assets/projects-logos/proyecto-logo-gordini.png'
import logoHelena from '@/assets/projects-logos/proyecto-logo-helena.png'
import logoLatin from '@/assets/projects-logos/proyecto-logo-latinamerican.png'
import logoDholding from '@/assets/projects-logos/proyecto-logo-lorenzee.png'
import logoLimagas from '@/assets/projects-logos/proyecto-logo-limagas.png'
import logoMikio from '@/assets/projects-logos/proyecto-logo-mikio.png'
import logoMusicalma from '@/assets/projects-logos/proyecto-logo-musikalma.png'
import logoSgs from '@/assets/projects-logos/proyecto-logo-SGS.png'
import logoWalon from '@/assets/projects-logos/proyecto-logo-walon.png'
import logoNote from '@/assets/projects-logos/proyecto-logonote.png'

import imgAguaclara from '@/assets/projects/proyecto-aguaclara.png'
import imgAlumspazio from '@/assets/projects/proyecto-alumspazio.png'
import imgAruma from '@/assets/projects/proyecto-aruma.png'
import imgAtsa from '@/assets/projects/proyecto-atsaairlines.png'
import imgBlack from '@/assets/projects/proyecto-black.png'
import imgDewalt from '@/assets/projects/proyecto-dewalt.png'
import imgDfactoring from '@/assets/projects/proyecto-digitalfactory.png'
import imgDholding from '@/assets/projects/proyecto-digitalholding.png'
import imgHelena from '@/assets/projects/proyecto-helena.png'
import imgIrwin from '@/assets/projects/proyecto-irwin.png'
import imgLatin from '@/assets/projects/proyecto-latin.png'
import imgLimagas from '@/assets/projects/proyecto-limagas.png'
import imgMikio from '@/assets/projects/proyecto-mikio.png'
import imgMusicalma from '@/assets/projects/proyecto-musicalma.png'
import imgNote from '@/assets/projects/proyecto-note.png'
import imgPringles from '@/assets/projects/proyecto-pringles.png'
import imgStanley from '@/assets/projects/proyecto-stanley.png'
import imgWalon from '@/assets/projects/proyecto-walon.png'

export type CategoriaTipo = 'branding' | 'desarrollo-web' | 'inbound-marketing'

export interface Proyecto {
  slug: string
  nombre: string
  categorias: CategoriaTipo[]
  imagen: ImageMetadata
  logo: ImageMetadata
}

export const proyectos: Proyecto[] = [
  {
    slug: 'aguaclara',
    nombre: 'Aguaclara',
    categorias: ['desarrollo-web', 'inbound-marketing'],
    imagen: imgAguaclara,
    logo: logoAguaclara,
  },
  {
    slug: 'alumspazio',
    nombre: 'Alumspazio',
    categorias: ['branding', 'desarrollo-web'],
    imagen: imgAlumspazio,
    logo: logoAlumspazio,
  },
  {
    slug: 'aruma',
    nombre: 'Aruma',
    categorias: ['inbound-marketing'],
    imagen: imgAruma,
    logo: logoAruma,
  },
  {
    slug: 'atsa-airlines',
    nombre: 'Atsa Airlines',
    categorias: ['inbound-marketing'],
    imagen: imgAtsa,
    logo: logoAtsa,
  },
  {
    slug: 'black-decker',
    nombre: 'Black & Decker',
    categorias: ['inbound-marketing'],
    imagen: imgBlack,
    logo: logoBlack,
  },
  {
    slug: 'dewalt',
    nombre: 'DeWALT',
    categorias: ['inbound-marketing'],
    imagen: imgDewalt,
    logo: logoSgs,
  },
  {
    slug: 'digital-factoring',
    nombre: 'Digital Factoring',
    categorias: ['desarrollo-web'],
    imagen: imgDfactoring,
    logo: logoDfactoring,
  },
  {
    slug: 'digital-holding',
    nombre: 'Digital Holding',
    categorias: ['desarrollo-web'],
    imagen: imgDholding,
    logo: logoDholding,
  },
  {
    slug: 'helena-chocolatier',
    nombre: 'Helena Chocolatier',
    categorias: ['desarrollo-web', 'inbound-marketing'],
    imagen: imgHelena,
    logo: logoHelena,
  },
  {
    slug: 'irwin',
    nombre: 'Irwin',
    categorias: ['inbound-marketing'],
    imagen: imgIrwin,
    logo: logoHelena,
  },
  {
    slug: 'latin-american-outdoors',
    nombre: 'Latin American Outdoors',
    categorias: ['branding', 'desarrollo-web'],
    imagen: imgLatin,
    logo: logoLatin,
  },
  {
    slug: 'limagas',
    nombre: 'Limagas',
    categorias: ['branding', 'desarrollo-web'],
    imagen: imgLimagas,
    logo: logoLimagas,
  },
  {
    slug: 'mikio-car-wash',
    nombre: 'Mikio Car Wash',
    categorias: ['inbound-marketing'],
    imagen: imgMikio,
    logo: logoMikio,
  },
  {
    slug: 'musicalma',
    nombre: 'Musicalma',
    categorias: ['branding', 'desarrollo-web'],
    imagen: imgMusicalma,
    logo: logoMusicalma,
  },
  {
    slug: 'note-vapor',
    nombre: 'Note Vapor',
    categorias: ['inbound-marketing'],
    imagen: imgNote,
    logo: logoNote,
  },
  {
    slug: 'pringles',
    nombre: 'Pringles',
    categorias: ['branding', 'desarrollo-web'],
    imagen: imgPringles,
    logo: logoSgs,
  },
  {
    slug: 'stanley',
    nombre: 'Stanley',
    categorias: ['inbound-marketing'],
    imagen: imgStanley,
    logo: logoSgs,
  },
  {
    slug: 'walon',
    nombre: 'Walon',
    categorias: ['inbound-marketing'],
    imagen: imgWalon,
    logo: logoWalon,
  },
]

export const categoriaLabels: Record<CategoriaTipo, string> = {
  'branding': 'Branding',
  'desarrollo-web': 'Desarrollo Web',
  'inbound-marketing': 'Inbound Marketing',
}
