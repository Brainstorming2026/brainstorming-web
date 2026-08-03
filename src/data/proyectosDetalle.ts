import type { ImageMetadata } from 'astro'

import logoAguaclara from '@/assets/clientes/customer-aguaclara.webp'
import logoAlumspazio from '@/assets/clientes/customer-alumspazio.webp'
import logoAruma from '@/assets/clientes/customer-aruma.webp'

import heroBgAguaclara from '@/assets/projects/aguaclara/bg.png'
import heroImgAguaclara from '@/assets/projects/aguaclara/hero.png'
import ig1Aguaclara from '@/assets/projects/aguaclara/ig1.png'
import ig2Aguaclara from '@/assets/projects/aguaclara/ig2.png'
import ig3Aguaclara from '@/assets/projects/aguaclara/ig3.png'

import heroBgAlumspazio from '@/assets/projects/alumspazio/bg.png'
import heroImgAlumspazio from '@/assets/projects/alumspazio/hero.png'

import heroBgAruma from '@/assets/projects/aruma/bg.png'
import heroImgAruma from '@/assets/projects/aruma/hero.png'
import campaign1Aruma from '@/assets/projects/aruma/campaign.png'
import campaign2Aruma from '@/assets/projects/aruma/campaign2.png'

export interface ProyectoCampania {
  heading: string
  parrafo: string
  colorFondo: string
  imagenes: { src: ImageMetadata, alt: string }[]
}

export interface ProyectoDetalle {
  logo: ImageMetadata
  heroBg: ImageMetadata
  heroImg: ImageMetadata
  heroImgAlt: string
  descripcion: string
  campania?: ProyectoCampania
}

export const proyectosDetalle: Record<string, ProyectoDetalle> = {
  aguaclara: {
    logo: logoAguaclara,
    heroBg: heroBgAguaclara,
    heroImg: heroImgAguaclara,
    heroImgAlt: 'Publicaciones de Instagram de Aguaclara con descuentos promocionales',
    descripcion: `Aguaclara Swimwear es una empresa dedicada al diseño, fabricación y comercialización de
      prendas de baño de lujo para damas. Sus diseños se inspiran en raíces culturales y
      naturales amazónicas. Necesitaban atraer más clientes a su página web, la cual necesitaba
      una renovación completa.`,
    campania: {
      heading: 'Campaña de Inbound Marketing para atraer clientes',
      parrafo: `Con el objetivo principal de mejorar el reconocimiento de marca, empleamos una estrategia
        multicanal, considerando redes sociales, mailing y Web para estar presentes en los lugares
        importantes para sus usuarios. El mensaje: moda de lujo inspirada en la exuberancia
        Amazónica y equilibrada con sensualidad y elegancia.`,
      colorFondo: '#c2b49a',
      imagenes: [
        { src: ig1Aguaclara, alt: 'Publicación de Instagram Aguaclara 1' },
        { src: ig2Aguaclara, alt: 'Publicación de Instagram Aguaclara 2' },
        { src: ig3Aguaclara, alt: 'Publicación de Instagram Aguaclara 3' },
      ],
    },
  },

  alumspazio: {
    logo: logoAlumspazio,
    heroBg: heroBgAlumspazio,
    heroImg: heroImgAlumspazio,
    heroImgAlt: 'Sitio web de Alum Spazio en desktop y móvil',
    descripcion: `Alum Spazio es una empresa dedicada a la comercialización de productos para construcción,
      diseño de interior, arquitectura y remodelación. Necesitaban desarrollar una web, renovar
      su manual de marca, mejorar su reconocimiento de marca y obtener una imagen que evocara
      confort.`,
  },

  aruma: {
    logo: logoAruma,
    heroBg: heroBgAruma,
    heroImg: heroImgAruma,
    heroImgAlt: 'Portadas de la revista digital Aruma',
    descripcion: `Aruma es una tienda de belleza especializada, la primera en su tipo en el Perú. Busca
      potenciar la belleza auténtica de todos brindando una experiencia única en la búsqueda de
      los mejores productos de belleza. Necesitaban una estrategia digital que vaya más allá del
      discurso de ventas, necesitaban conectar con su audiencia.`,
    campania: {
      heading: 'Campaña de Inbound Marketing para atraer clientes',
      parrafo: `Enfocamos la campaña en potenciar las emociones positivas de los usuarios respecto a su
        belleza personal y resaltando la diversión que acompaña el sentirte hermosa. Realizamos un
        registro audiovisual de productos y generamos acciones BTL. Manejamos sus redes sociales
        (Facebook e Instagram), diseñamos y publicamos los contenidos, invirtiendo tácticamente en
        pauta digital.`,
      colorFondo: '#7f1757',
      imagenes: [
        { src: campaign1Aruma, alt: 'Publicación de campaña Aruma 1' },
        { src: campaign2Aruma, alt: 'Publicación de campaña Aruma 2' },
      ],
    },
  },
}
