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

import logoDecker from '@/assets/projects/decker/logo.png'
import heroBgDecker from '@/assets/projects/decker/bg.png'
import heroImgDecker from '@/assets/projects/decker/hero.png'
import ig1Decker from '@/assets/projects/decker/ig1.png'
import ig2Decker from '@/assets/projects/decker/ig2.png'
import ig3Decker from '@/assets/projects/decker/ig3.png'

import logoDewalt from '@/assets/projects/dewalt/logo.png'
import heroBgDewalt from '@/assets/projects/dewalt/bg.png'
import heroImgDewalt from '@/assets/projects/dewalt/hero.png'
import ig1Dewalt from '@/assets/projects/dewalt/ig1.png'
import ig2Dewalt from '@/assets/projects/dewalt/ig2.png'

import logoDfactoring from '@/assets/projects/digitalfactoring/logo.png'
import heroBgDfactoring from '@/assets/projects/digitalfactoring/bg.png'
import webImgDfactoring from '@/assets/projects/digitalfactoring/web.png'
import bgWebDfactoring from '@/assets/projects/digitalfactoring/bg-web.png'

import logoDholding from '@/assets/projects/digitalholding/logo.png'
import heroBgDholding from '@/assets/projects/digitalholding/bg.png'
import heroImgDholding from '@/assets/projects/digitalholding/hero.png'
import webImgDholding from '@/assets/projects/digitalholding/web.png'
import bgWebDholding from '@/assets/projects/digitalholding/bg-web.png'


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
      waveIcon: 'aruma-up',
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

  'black-decker': {
    logo: logoDecker,
    heroBg: heroBgDecker,
    heroImg: heroImgDecker,
    heroImgAlt: 'Publicaciones de Instagram de Black & Decker',
    descripcion: `BLACK+DECKER es una empresa multinacional que fabrica productos de calidad tanto para el hogar como para profesionales. Necesitaban atraer más clientes al negocio y mejorar su reconocimiento de marca reforzando su posicionamiento sólido en territorio nacional.`,
    campania: {
      heading: 'Campaña de Inbound Marketing para atraer clientes y generar leads',
      parrafo: `Esta marca va dirigida a un público casual que desea realizar arreglos DIY (hazlo tú mismo) en sus hogares. Reforzamos su concepto creativo de solución fácil, por ejemplo pasar de un momento de desorden a uno de felicidad. Desarrollamos contenidos orgánicos y pagados para Facebook, mailings dirigidos a la base de datos que armamos gracias a los anuncios para conseguir leads y landing pages donde los usuarios registraban sus datos. También manejamos su inversión en pauta digital, tanto en redes sociales como en Google.`,
      colorFondo: '#E75225',
      waveIcon: 'aruma-up',
      imagenes: [
        { src: ig1Decker, alt: 'Publicación de Black+Decker: Esmeril Angular + 5 Discos', maxWidth: 300 },
        { src: ig2Decker, alt: 'Publicación de Black+Decker: Caladora 420W + Martillo Madera', maxWidth: 300 },
        { src: ig3Decker, alt: 'Publicación de Black+Decker: Cyber Day - Llegan promociones', maxWidth: 300 },
      ],
    },
  },

  dewalt: {
    logo: logoDewalt,
    heroBg: heroBgDewalt,
    heroImg: heroImgDewalt,
    heroImgAlt: 'Publicaciones de Instagram de DeWALT',
    descripcion: `DEWALT es una marca global de herramientas motorizadas para las industrias de la construcción y la carpintería. Su core target son los profesionales industriales. Necesitaban afianzar su posicionamiento de marca y generar más conversiones en el canal digital de e-commerce a través de sus sellers locales.`,
    campania: {
      heading: 'Campaña de Inbound Marketing para generar conversiones',
      parrafo: `Generamos campañas recurrentes de anuncios en formato carrusel para mejorar las ventas por el canal e-commerce. Fueron un éxito comercial ya que el usuario puede elegir la herramienta que necesita como si fuese un mini catálogo. Para generar leads desarrollamos campañas integrales con formularios en landing pages para expandir nuestra base de datos. Reforzamos el posicionamiento de marca en territorio local con contenidos gráficos y videos, utilizando la pauta digital estratégicamente para lograr un alcance masivo. Además, realizamos registros audiovisuales dinámicos de productos y acciones BTL.`,
      colorFondo: '#F5A623',
      waveIcon: 'aruma-up',
      imagenes: [
        { src: ig1Dewalt, alt: 'Publicación de DeWALT: Poder y Duración Sin Cable', maxWidth: 420 },
        { src: ig2Dewalt, alt: 'Publicación de DeWALT: Stanley Cyber Days', maxWidth: 300 },
      ],
    },
  },

  'digital-factoring': {
    logo: logoDfactoring,
    heroBg: heroBgDfactoring,
    heroImg: heroBgDfactoring,
    heroImgAlt: 'Sitio web de Digital Factoring en desktop y móvil',
    descripcion: `Digital Factoring es una empresa fundada en el 2020 que se encarga de simplificar la financiación de facturas y recibos por honorarios de manera rápida, simple, flexible y 100% digital. Necesitaban una Página Web informativa y visualmente atractiva para poder captar leads calificados y convertirlos en clientes.`,
    features: [
      {
        icon: 'expert-window',
        label: 'Desarrollo web',
        heading: 'Desarrollo integral de su Ecommerce',
        parrafos: [
          `¿Cómo hablarle a un público objetivo especializado que sabe lo que busca? Con simplicidad, funcionalidad y un sitio Web muy intuitivo para usar. El diseño lo mantuvimos minimalista, enfatizando la información y dosificándola en pedazos digeribles para el visitante. Esta combinación estética y funcional refleja la solidez, solvencia y fortaleza de la empresa en el rubro financiero. Como necesitaban captar leads para convertir en clientes, creamos un formulario para que los usuarios ingresen sus datos para poder cotizar. Además, añadimos un botón de WhatsApp para consultas directas de prospectos.`,
        ],
        imagen: webImgDfactoring,
        imagenAlt: 'Desarrollo web de Digital Factoring en desktop y móvil',
        bgImagen: bgWebDfactoring,
        imagenLado: 'izquierda',
      },
    ],
  },

  'digital-holding': {
    logo: logoDholding,
    heroBg: heroBgDholding,
    heroImg: heroImgDholding,
    heroImgAlt: 'Sitio web de Digital Holding en desktop y móvil',
    descripcion: `Digital Holding es una empresa que permite a las MIPYMES cubrir de distintas maneras sus necesidades de financiamiento, mediante el uso de diversos servicios especializados. Requerían un manual de marca que transmita la seriedad del sector financiero pero que también inspire con un estilo ágil y dinámico. Además, necesitaban una página web atractiva que refleje esos valores para captar leads calificados.`,
    features: [
      {
        icon: 'expert-window',
        label: 'Desarrollo web',
        heading: 'Desarrollo integral de su sitio Web',
        parrafos: [
          `Digital Holding necesitaba una página web atractiva, informativa y amigable. Con la base del User Experience (UX) como piedra angular para el diseño y desarrollo, creamos un sitio Web funcional e intuitivo, con información clara y un estilo llamativo sin perder el tono corporativo que la marca requería. Así, logramos que la web transmita modernidad y que la empresa es un holding financiero sólido e innovador.`,
        ],
        imagen: webImgDholding,
        imagenAlt: 'Desarrollo web de Digital Holding en desktop y móvil',
        bgImagen: bgWebDholding,
        imagenLado: 'izquierda',
      },
    ],
  },
}
