import type { ImageMetadata } from 'astro'

import logoAguaclara from '@/assets/projects-logos/proyecto-logo-aguaclara.png'
import logoAlumspazio from '@/assets/projects-logos/proyecto-logo-alumspazio.png'
import logoAruma from '@/assets/projects-logos/proyecto-logo-aruma.png'
import logoAtsa from '@/assets/projects-logos/proyecto-logo-atsa.png'
import logoBlack from '@/assets/projects-logos/proyecto-logo-gordini.png'
import logoHelena from '@/assets/projects-logos/proyecto-logo-helena.png'
import logoLatin from '@/assets/projects-logos/proyecto-logo-latinamerican.png'
import logoLimagas from '@/assets/projects-logos/proyecto-logo-limagas.png'
import logoMikio from '@/assets/projects-logos/proyecto-logo-mikio.png'
import logoMusicalma from '@/assets/projects-logos/proyecto-logo-musikalma.png'
import logoRenace from '@/assets/projects-logos/proyecto-logo-renace.png'
import logoSgs from '@/assets/projects-logos/proyecto-logo-SGS.png'
import logoStyla from '@/assets/projects-logos/proyecto-logo-styla.png'
import logoNote from '@/assets/projects-logos/proyecto-logonote.png'
import logoBeauty from '@/assets/projects/beauty/logo.png'
import logoIrwin from '@/assets/projects/irwin/logo.png'
import logoPringles from '@/assets/projects/pringles/logo.png'
import imgAguaclara from '@/assets/projects/proyecto-aguaclara.png'
import imgAlumspazio from '@/assets/projects/proyecto-alumspazio.png'

import imgAruma from '@/assets/projects/proyecto-aruma.png'
import imgAtsa from '@/assets/projects/proyecto-atsaairlines.png'
import imgBeauty from '@/assets/projects/proyecto-beauty.png'
import imgBlack from '@/assets/projects/proyecto-black.png'
import imgDewalt from '@/assets/projects/proyecto-dewalt.png'
import imgHelena from '@/assets/projects/proyecto-helena.png'
import imgIrwin from '@/assets/projects/proyecto-irwin.png'
import imgLatin from '@/assets/projects/proyecto-latin.png'
import imgLimagas from '@/assets/projects/proyecto-limagas.png'
import imgMikio from '@/assets/projects/proyecto-mikio.png'
import imgMusicalma from '@/assets/projects/proyecto-musicalma.png'
import imgNote from '@/assets/projects/proyecto-note.png'
import imgPringles from '@/assets/projects/proyecto-pringles.png'
import imgRenaceFest from '@/assets/projects/proyecto-renacefest.png'
import imgStanley from '@/assets/projects/proyecto-stanley.png'
import imgStyla from '@/assets/projects/proyecto-styla.png'
import imgWalon from '@/assets/projects/proyecto-walon.png'
import logoStanley from '@/assets/projects/stanley/logo.png'
import logoWalon from '@/assets/projects/walon/logo.png'

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
    logo: logoIrwin,
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
    categorias: ['inbound-marketing'],
    imagen: imgLimagas,
    logo: logoLimagas,
  },
  {
    slug: 'mikio-car-wash',
    nombre: 'Mikio Car Wash',
    categorias: ['branding', 'desarrollo-web', 'inbound-marketing'],
    imagen: imgMikio,
    logo: logoMikio,
  },
  {
    slug: 'musicalma',
    nombre: 'Musicalma',
    categorias: ['inbound-marketing'],
    imagen: imgMusicalma,
    logo: logoMusicalma,
  },
  {
    slug: 'note-vapor',
    nombre: 'Note Vapor',
    categorias: ['branding', 'desarrollo-web'],
    imagen: imgNote,
    logo: logoNote,
  },
  {
    slug: 'pringles',
    nombre: 'Pringles',
    categorias: ['inbound-marketing'],
    imagen: imgPringles,
    logo: logoPringles,
  },
  {
    slug: 'renace-fest',
    nombre: 'Renace Fest',
    categorias: ['inbound-marketing'],
    imagen: imgRenaceFest,
    logo: logoRenace,
  },
  {
    slug: 'stanley',
    nombre: 'Stanley',
    categorias: ['inbound-marketing'],
    imagen: imgStanley,
    logo: logoStanley,
  },
  {
    slug: 'styla',
    nombre: 'Styla',
    categorias: ['inbound-marketing'],
    imagen: imgStyla,
    logo: logoStyla,
  },
  {
    slug: 'the-beauty-trust',
    nombre: 'The Beauty Trust',
    categorias: ['branding', 'desarrollo-web'],
    imagen: imgBeauty,
    logo: logoBeauty,
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

export const categoriaIcons: Record<CategoriaTipo, string> = {
  'branding': 'expert-huella',
  'desarrollo-web': 'expert-window',
  'inbound-marketing': 'expert-iman',
}
