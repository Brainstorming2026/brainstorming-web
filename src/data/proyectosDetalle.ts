import type { ImageMetadata } from 'astro'

import logoAguaclara from '@/assets/clientes/customer-aguaclara.webp'
import logoAlumspazio from '@/assets/clientes/customer-alumspazio.webp'
import logoAruma from '@/assets/projects/aruma/logo.png'

import heroBgAguaclara from '@/assets/projects/aguaclara/bg.png'
import bgWebAguaclara from '@/assets/projects/aguaclara/bg-web.png'
import heroImgAguaclara from '@/assets/projects/aguaclara/hero.png'
import ig1Aguaclara from '@/assets/projects/aguaclara/ig1.png'
import ig2Aguaclara from '@/assets/projects/aguaclara/ig2.png'
import ig3Aguaclara from '@/assets/projects/aguaclara/ig3.png'
import webImgAguaclara from '@/assets/projects/aguaclara/web.png'

import heroBgAlumspazio from '@/assets/projects/alumspazio/bg.png'
import heroImgAlumspazio from '@/assets/projects/alumspazio/hero.png'
import webImgAlumspazio from '@/assets/projects/alumspazio/web.png'
import bgWebAlumspazio from '@/assets/projects/alumspazio/webbg.png'

import campaign1Aruma from '@/assets/projects/aruma/campaign.png'
import campaign2Aruma from '@/assets/projects/aruma/campaign2.png'
import heroBgAruma from '@/assets/projects/aruma/bg.png'
import heroImgAruma from '@/assets/projects/aruma/hero.png'

import logoAtsa from '@/assets/clientes/customer-atsaairlines.webp'
import bgWebAtsa from '@/assets/projects/atsa/bg-web.png'
import heroBgAtsa from '@/assets/projects/atsa/bg.png'
import heroImgAtsa from '@/assets/projects/atsa/hero.png'
import ig1Atsa from '@/assets/projects/atsa/ig1.png'
import ig2Atsa from '@/assets/projects/atsa/ig2.png'
import ig3Atsa from '@/assets/projects/atsa/ig3.png'
import webImgAtsa from '@/assets/projects/atsa/web.png'

export interface ProyectoCampania {
  heading: string
  parrafo: string
  colorFondo: string
  waveIcon?: string
  imagenes: { src: ImageMetadata, alt: string, maxWidth?: number }[]
}

export interface ProyectoFeature {
  icon: string
  label: string
  heading: string
  parrafos: string[]
  imagen: ImageMetadata
  imagenAlt: string
  bgImagen: ImageMetadata
  imagenLado?: 'izquierda' | 'derecha'
}

export interface ProyectoDetalle {
  logo: ImageMetadata
  heroBg: ImageMetadata
  heroImg: ImageMetadata
  heroImgAlt: string
  descripcion: string
  campania?: ProyectoCampania
  features?: ProyectoFeature[]
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
        { src: ig1Aguaclara, alt: 'Publicación de Instagram Aguaclara 1', maxWidth: 420 },
        { src: ig2Aguaclara, alt: 'Publicación de Instagram Aguaclara 2', maxWidth: 420 },
        { src: ig3Aguaclara, alt: 'Publicación de Instagram Aguaclara 3', maxWidth: 420 },
      ],
    },
    features: [
      {
        icon: 'expert-window',
        label: 'Desarrollo web',
        heading: 'Renovación de su página web',
        parrafos: [
          `Un paso necesario para potenciar la marca consistió en la renovación de su página Web con
          un estilo más moderno, llamativo y funcional. Los valores de Aguaclara permanecieron
          centrales, pero su forma se acercó más a las expectativas de sus usuarios en esta era
          digital.`,
        ],
        imagen: webImgAguaclara,
        imagenAlt: 'Renovación de la página web de Aguaclara en desktop y móvil',
        bgImagen: bgWebAguaclara,
        imagenLado: 'izquierda',
      },
    ],
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
    features: [
      {
        icon: 'expert-window',
        label: 'Desarrollo web',
        heading: 'Desarrollo integral de su sitio Web',
        parrafos: [
          `El cliente necesitaba que su Web sea fácil de usar, intuitiva para sus usuarios. Algo
          esencial que requerían era que la calidad de la página sea tanto visual como funcional.
          Debía informar de manera rápida y fácil al cliente acerca de los productos y sus
          cualidades. Una vez que el cliente identificara su necesidad, la Web debía proporcionar la
          facilidad de contacto para que el lead pueda ser captado con rapidez.`,
          `Combinando las sensibilidades visuales del Manual de Identidad de Marca con aspectos
          funcionales de la experiencia del usuario, desarrollamos una Web efectiva y atractiva a la
          vez.`,
        ],
        imagen: webImgAlumspazio,
        imagenAlt: 'Renovación de la página web de Alum Spazio en desktop y móvil',
        bgImagen: bgWebAlumspazio,
        imagenLado: 'izquierda',
      },
    ],
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
      waveIcon: 'aruma-up',
      imagenes: [
        { src: campaign1Aruma, alt: 'Facebook', maxWidth: 850 },
        { src: campaign2Aruma, alt: 'Instagram', maxWidth: 360 },
      ],
    },
  },

  'atsa-airlines': {
    logo: logoAtsa,
    heroBg: heroBgAtsa,
    heroImg: heroImgAtsa,
    heroImgAlt: 'Publicaciones de Instagram de Atsa Airlines',
    descripcion: `Atsa Airlines es una aerolínea 100% peruana que apuesta por destinos nacionales
      importantes para su público objetivo, ya sea por necesidades laborales, familiares o de
      turismo. Necesitaban mejorar el posicionamiento de marca en sus canales e incrementar sus
      ventas, potenciando los destinos más importantes para ellos.`,
    campania: {
      heading: 'Campaña de Inbound Marketing para atraer y retener clientes',
      parrafo: `Desarrollamos una campaña para fidelizar a sus clientes dando a conocer su compromiso con
        el viajero recurrente y reforzando la seguridad en sus procesos (especialmente por el
        contexto del COVID 19). Para atraer nuevos clientes, promocionamos con fuerza sus vuelos
        comerciales activos.`,
      colorFondo: '#d1d3d4',
      imagenes: [
        { src: ig1Atsa, alt: 'Publicación de Instagram Atsa Airlines: Aterriza en Punta Sal', maxWidth: 300 },
        { src: ig2Atsa, alt: 'Publicación de Instagram Atsa Airlines: El Norte te espera', maxWidth: 300 },
        { src: ig3Atsa, alt: 'Publicación de Instagram Atsa Airlines: Razones para viajar con Atsa Airlines', maxWidth: 300 },
      ],
    },
    features: [
      {
        icon: 'expert-window',
        label: 'Desarrollo web',
        heading: 'Desarrollo de Pillar Page para su página web',
        parrafos: [
          `Propusimos la creación de un pillar page por cada uno de sus destinos, empezando con
          Huánuco, uno de sus destinos con mayor potencial comercial. Este pillar page cubre todos
          los aspectos principales del tema, es una guía articulada en una única página de manera
          estructurada para cada uno de los aspectos y necesidades de los usuarios. Con esto
          logramos posicionamiento SEO y tráfico de contenido relevante.`,
        ],
        imagen: webImgAtsa,
        imagenAlt: 'Pillar page de Huánuco para Atsa Airlines',
        bgImagen: bgWebAtsa,
        imagenLado: 'izquierda',
      },
    ],
  },
}
