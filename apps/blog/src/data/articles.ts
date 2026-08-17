import type { ImageMetadata } from 'astro'
import mandamientosCommunityManager from '@/assets/guides/mandamientos-community-manager.webp'
import card2 from '@/assets/images/hero/card2.png'
import card3 from '@/assets/images/hero/card3.png'
import card4 from '@/assets/images/hero/card4.png'
import card6 from '@/assets/images/hero/card6.png'
import turismoHiker from '@/assets/images/marketing-turismo-peru/hiker.png'
import cmInstagramPost from '@/assets/images/que-es-community-manager/img-1.png'
import cmLaptopFacebook from '@/assets/images/que-es-community-manager/img-2.png'
import influencerStreet from '@/assets/images/que-es-un-influencer/img-1.png'
import influencerMailTime from '@/assets/images/que-es-un-influencer/img-2.png'
import influencerCrowdPhones from '@/assets/images/que-es-un-influencer/img-3.png'
import landingRocket from '@/assets/images/que-es-una-landing-page/img-1.png'
import landingMockup from '@/assets/images/que-es-una-landing-page/img-2.png'

// Placeholder mientras se conecta Sanity (CMS). Cada articulo completo vive
// aca hasta que el CMS resuelva el body real via GROQ — el template en
// [slug].astro no cambia cuando eso pase, solo cambia de donde viene el dato.
//
// El body de cada seccion es una lista ordenada de bloques (parrafo, lista,
// imagen) en vez de campos fijos: el contenido real intercala imagenes en
// cualquier punto, no siempre al final. Este shape es ademas el mismo que
// va a devolver Sanity (portable text / block content), asi que migrar no
// va a requerir tocar el template.
export interface ArticleListItem {
  /** Palabra destacada en bold al inicio del item (ej. "Apasionado:"). Opcional — no toda lista la tiene. */
  label?: string
  text: string
}

export type ArticleBlock
  = | { type: 'paragraph', text: string }
    | { type: 'list', items: ArticleListItem[] }
    | { type: 'image', image: ImageMetadata }
    | { type: 'subheading', text: string }

export interface ArticleSection {
  heading: string
  blocks: ArticleBlock[]
}

export interface ArticleLeadMagnet {
  eyebrow: string
  title: string
  ctaLabel: string
  ctaHref: string
  image?: ImageMetadata
}

export interface ArticleSecondaryCta {
  title: string
  ctaLabel: string
  ctaHref: string
}

export interface Article {
  slug: string
  kicker: string
  title: string
  category: string
  heroImage: ImageMetadata
  readTime: string
  intro: string[]
  sections: ArticleSection[]
  summaryTitle: string
  summaryParagraphs: string[]
  /** No todos los articulos cierran el resumen con tagline + CTA. */
  summaryTagline?: string
  leadMagnet?: ArticleLeadMagnet
  /** Banner generico ("CONOCE NUESTRAS SOLUCIONES") — independiente del lead magnet. */
  secondaryCta?: ArticleSecondaryCta
  publishedDate: string
}

export const articles: Article[] = [
  {
    slug: 'marketing-turismo-peru',
    kicker: 'Estrategias para una campaña de marketing',
    title: 'Estrategias para una campaña de marketing en el sector del turismo',
    category: 'Inbound Marketing',
    heroImage: card6,
    readTime: 'Léelo en 15 min.',
    intro: ['En el competitivo mundo del turismo, es fundamental contar con una sólida estrategia de marketing para destacar entre la multitud y atraer a los viajeros, por ejemplo en el año 2019, el 92% de los viajes realizados en Perú fueron por turismo interno. El público viajero fue jóvenes de la época generacional de los centennials y millennials que representan el 63% del total de viajeros. Por otro lado, aumentó el porcentaje de vacacionistas hombres y de personas solteras. Es por esa razón, que no solo conocerá las mejores estrategias y guías para realizar una campaña de marketing efectiva para una empresa del sector turístico, sino que también podrá descubrir la identificación del público objetivo hasta la creación de contenido atractivo y la utilización de canales de marketing adecuados, acompáñenos a conocer más de cómo deslumbrar a los viajeros y hacer que el nombre de tu empresa suene en el mundo del turismo.'],
    sections: [
      {
        heading: 'Sector Turismo y comunicación de marca',
        blocks: [
          { type: 'paragraph', text: 'Hasta el año 2019, Perú seguía siendo un destino atractivo tanto para turistas extranjeros como para turistas peruanos. Los principales países emisores de turistas hacia Perú incluían Estados Unidos, Chile, Ecuador, Colombia y Argentina.' },
          { type: 'paragraph', text: 'Los motores de búsqueda y los sitios web especializados eran fuentes comunes de información sobre el país donde las actividades que promocionan no solo se brindaban por medio digital, sino también por algunos canales de cable y embajadas.' },
          { type: 'paragraph', text: 'Además, las redes sociales desempeñan un papel importante en la difusión de experiencias de viaje y en la promoción de las marcas del sector turismo. Las opiniones y reseñas en línea influyen en la percepción de las marcas y en las decisiones de otros viajeros.' },
        ],
      },
      {
        heading: '¿Identificar y comprender?',
        blocks: [
          { type: 'paragraph', text: 'Antes de lanzar una campaña de marketing, es esencial comprender a quién te diriges. Realiza investigaciones de mercado para identificar los intereses, preferencias y necesidades de tu público objetivo. Esto te permitirá adaptar tus mensajes y ofertas de manera efectiva, maximizando el impacto de tu campaña.' },
          { type: 'image', image: turismoHiker },
        ],
      },
      {
        heading: 'Contenido de alto impacto',
        blocks: [
          { type: 'paragraph', text: 'El contenido es el rey en el marketing turístico. Crea contenido visualmente atractivo, como fotos y videos de alta calidad, que muestren la belleza y las experiencias que tu empresa ofrece. Además, crea contenido relevante, como guías de viaje, recomendaciones locales y artículos informativos, que brinden valor a los viajeros y los ayuden a planificar su próximo destino.' },
        ],
      },
      {
        heading: '¿Debo de tener en cuenta los canales?',
        blocks: [
          { type: 'paragraph', text: 'Sí, elige los canales de marketing adecuados para llegar a tu público objetivo. Las redes sociales, los blogs de viajes, las plataformas de reserva en línea y el email marketing son solo algunas de las opciones disponibles. Adaptar tus mensajes y contenidos a cada canal te permitirá alcanzar a los viajeros en el momento y lugar adecuados, maximizando las oportunidades de conversión.' },
        ],
      },
      {
        heading: 'Implementar estrategias de SEO y PPC',
        blocks: [
          { type: 'paragraph', text: 'El marketing digital para el sector turístico también implica el uso de estrategias de SEO (Search Engine Optimization) y PPC (Pay-Per-Click). Optimiza tu sitio web y contenido para aparecer en los resultados de búsqueda relevantes para tu empresa. Además, considera la posibilidad de utilizar publicidad de pago en motores de búsqueda y redes sociales para aumentar tu visibilidad y atraer a más viajeros interesados.' },
        ],
      },
    ],
    summaryTitle: 'En resumen',
    summaryParagraphs: [
      'El marketing turístico es clave para el éxito de cualquier empresa del sector. Al implementar estrategias efectivas y seguir guías prácticas, puedes destacar entre la competencia y atraer a los viajeros hacia tu empresa. Identifica a tu público objetivo, crea contenido atractivo, utiliza los canales de marketing adecuados y optimiza tu presencia en línea. Con estas estrategias, estarás en el camino correcto para deslumbrar a los viajeros y alcanzar el éxito en el sector turístico.',
      'En resumen, descubrir las estrategias y guías clave para realizar una campaña de marketing turístico efectiva, consta de identificar a tu público objetivo, crear contenido atractivo, utilizar canales de marketing adecuados y optimizar tu presencia en línea.',
    ],
    summaryTagline: '¡Destaca y crece! Nosotros sabemos cómo lograrlo.',
    publishedDate: '23 junio 2024',
  },
  {
    slug: 'que-es-community-manager',
    kicker: 'Inbound Marketing',
    title: '¿Cuál es el rol de un Community Manager?',
    category: 'Inbound Marketing',
    heroImage: card2,
    readTime: 'Léelo en 5 min.',
    intro: ['Tal y como construyes redes de contacto y comunidades en el mundo real, también puedes hacerlo desde los medios digitales. Todo suma cuando se trata de mejorar el reconocimiento de tu marca. Y no por comunicarse desde medios digitales, quiere decir que no existan o no sean duraderas. Las comunidades digitales tienen valor. Y, de cierta manera, esto se debe a los profesionales que a diario las coordinan y alimentan: los famosos Community Managers. Aprende qué hacen y cuál es el rol que cumplen en las empresas (y con sus audiencias). ¡Lo explicamos en este artículo!'],
    sections: [
      {
        heading: '¿Qué es un Community Manager?',
        blocks: [
          { type: 'paragraph', text: 'Un profesional capaz y responsable de construir, gestionar y administrar las comunidades online que se creen en torno a tu marca. Un Community Manager se encarga de procurar y mantener relaciones estables y duraderas con clientes potenciales y compradores recurrentes.' },
          { type: 'paragraph', text: '¿Con qué finalidad? Con la de convertirse en el principal vocero de tu marca frente a desconocidos, interesados, clientes potenciales, fans, y hasta detractores. En fin, es quien te representa frente a cualquier habitante de tu mundo online inmediato.' },
        ],
      },
      {
        heading: 'Cinco funciones claves de un Community Manager',
        blocks: [
          {
            type: 'list',
            items: [
              { label: 'Crea y gestiona', text: 'contenidos auténticos, atractivos y de calidad que reflejen la esencia de tu marca. Esa es la principal función que desarrolla un Community Manager.' },
              { label: 'Escucha', text: 'lo que habla tu audiencia. Usándolo a favor de tu marca para atraer la atención de desconocidos y consumidores.' },
              { label: 'Gestiona', text: 'las respectivas plataformas digitales en las que tu marca esté construyendo comunidades. Ofrece un perfil más humano y cercano a cada una de ellas.' },
              { label: 'Monitorea', text: 'y analiza resultados de gestión y crecimiento de comunidades. Reconociendo, a partir de ellos, lo que resulta efectivo y lo que no.' },
              { label: 'Defiende', text: 'tu marca de detractores e identifica prescriptores. ¿Quién es un prescriptor? Un fan o seguidor que logra conectarse tanto con tu marca que se suma a defenderla.' },
            ],
          },
          { type: 'image', image: cmInstagramPost },
        ],
      },
      {
        heading: '¿Qué características debe tener un Community Manager?',
        blocks: [
          { type: 'paragraph', text: 'La gestión de marcas en Internet exige tener y ejercitar habilidades sociales y técnicas específicas. Es por esta razón que, si estás descubriendo el mundo del Community Manager, ten en cuenta las siguientes características:' },
          {
            type: 'list',
            items: [
              { label: 'Apasionado', text: 'Es un entusiasta por comunicar el mensaje de tu marca. Por ello, la labor del Community Manager es ser el puente permanente que conecta a tu público con tu marca.' },
              { label: 'Ingenioso', text: 'Al momento de emitir información es astuto y sagaz. Sabe encontrar la oportunidad ideal para comunicar la personalidad de tu marca. Así que, si tu público logra distinguir tus interacciones frente a las otras marcas, tu Community Manager está cumpliendo con su trabajo.' },
              { label: 'Comunicador', text: 'Cuenta con la capacidad de transmitir valores y emociones asociados a tu marca. ¡Es su voz! Es quien escribe contenido para publicar en redes sociales y blog corporativo; responde comentarios, preguntas, críticas y quejas; envía mensajes directos. Sencillamente un Community Manager es quien busca y procura interactuar.' },
              { label: 'Organizado', text: 'Un Community sabe que su tiempo es oro. Debido a la cantidad y variedad de actividades por hacer, manejar adecuadamente el tiempo será vital.' },
              { label: 'Creativo', text: 'La inventiva de un Community Manager se ejercita a diario. Estar atento a los detalles le ayudará a producir mensajes originales y auténticos que conecten con tu público.' },
              { label: 'Flexible', text: 'Internet no duerme y, algunas veces, las marcas tampoco. Es por eso que un Community Manager es flexible al momento de asumir su responsabilidad con sus comunidades.' },
            ],
          },
          { type: 'image', image: cmLaptopFacebook },
        ],
      },
    ],
    summaryTitle: 'Conclusión',
    summaryParagraphs: [
      '¿Alcanzaste a descubrir la importancia de este perfil?',
      'Independientemente del sector comercial y tipo de marca, un Community Manager puede ser una persona con gran importancia dentro del planteamiento estratégico. A razón de que son la guía, voz y oídos que pueden cooperar en la conducción de marcas y negocios hacia su camino al éxito. ¡Es momento de hacer destacar tus comunidades digitales!',
    ],
    leadMagnet: {
      eyebrow: '¡Aprende a navegar la gran ola de datos! Compartimos una guía gratuita.',
      title: '16 mandamientos para ser un buen Community Manager',
      ctaLabel: 'Descargar',
      // Abre el modal de captura de lead real en brainstorming.la/guias — no
      // duplicamos el flujo de HubSpot + email aca, reusamos el existente.
      ctaHref: 'https://brainstorming.la/guias?abrir=mandamientos-community-manager',
      image: mandamientosCommunityManager,
    },
    publishedDate: '11 noviembre 2021',
  },
  {
    slug: 'que-es-un-influencer',
    kicker: 'Inbound Marketing',
    title: '¿Qué es un influencer?',
    category: 'Inbound Marketing',
    heroImage: card3,
    readTime: 'Léelo en 3 min.',
    intro: ['Probablemente hayas visto el término "influencer" rondando por las noticias últimamente. Pero, ¿sabes el impacto que puede tener en una marca y su audiencia?', 'Un Influencer es aquella persona que ha logrado una posición de poder en un determinado nicho de mercado. Se toma en cuenta la opinión de un Influencer porque se le considera especialista en dicho tema y su opinión es muy valorada.', 'Logra destacar e influir sobre la opinión de sus seguidores (tus clientes potenciales), debido a su credibilidad construida a través del tiempo y su permanencia en el mundo digital.'],
    sections: [
      {
        heading: '¿Qué importancia supone un influencer en las redes sociales?',
        blocks: [
          { type: 'image', image: influencerStreet },
          { type: 'paragraph', text: '¡La importancia de un Influencer radica en su credibilidad! Su opinión acerca del tema sobre el cual se posicionó como especialista, tiene suficiente validez para dar legitimidad a un producto o una marca.' },
          { type: 'paragraph', text: 'Lograr que un Influencer dé una referencia positiva sobre tus productos o tu marca, implica, entre otras cosas, que llegará más tráfico a tu web, que productos, servicios o marca, tendrán un refuerzo positivo en internet y que las conversiones irán en aumento.' },
          { type: 'paragraph', text: 'Sus seguidores se encontrarán motivados, convirtiéndose en clientes potenciales que recurrirán a tu web y estarán evaluando la posibilidad de adquirir tus productos o volcarse a tu marca. Y, para las personas indecisas, la opinión del Influencer puede marcar la diferencia en su toma de decisiones. ¡Transforma leads en clientes efectivos!' },
        ],
      },
      {
        heading: '¿Por qué conviene recurrir a un influencer?',
        blocks: [
          { type: 'paragraph', text: 'Teniendo en cuenta su poder de convencimiento, un Influencer puede ser útil al momento de:' },
          {
            type: 'list',
            items: [
              { text: 'Lanzar un producto o servicio nuevo.' },
              { text: 'Posicionar una marca en el mercado.' },
              { text: 'Fortalecer un producto o servicio en su nicho.' },
              { text: 'Dar a conocer particularidades del producto o marca.' },
              { text: 'Lograr un objetivo puntual dentro de una campaña de marketing.' },
              { text: 'Promocionar eventos de la empresa.' },
              { text: 'Reforzar los valores de la marca.' },
            ],
          },
          { type: 'image', image: influencerMailTime },
        ],
      },
      {
        heading: '¿Cómo elegir a un influencer?',
        blocks: [
          { type: 'paragraph', text: 'Si bien un Influencer puede "influenciar" en la opinión del usuario digital, no todos ellos serán aptos para la campaña de marketing que queremos lograr. Por eso es importante analizar y determinar cuál de ellos tiene afinidad con nuestra empresa o cuál es el más indicado para lograr ciertos objetivos en una marca ya establecida.' },
          { type: 'paragraph', text: 'Asegúrate de que tu Influencer cumpla con lo siguiente:' },
          {
            type: 'list',
            items: [
              { text: 'Que posea una alta capacidad para movilizar opiniones y crear reacciones en una audiencia a la que quieres llegar. De nada sirve que elijas a uno que pase desapercibido en tu público objetivo.' },
              { text: 'Que su potencial de audiencia sea alto. Decídete por un influencer con mayor volumen de seguidores en el tema deseado.' },
              { text: 'Que posea un nivel de participación activo y constante. Es importante que genere conversación en torno al tema que deseas explotar con tu marca.' },
            ],
          },
          { type: 'image', image: influencerCrowdPhones },
        ],
      },
    ],
    summaryTitle: 'Conclusión',
    summaryParagraphs: [
      'Recuerda que un Influencer genera conversación con su audiencia, crea contenido original que cautiva, seduce, y por tanto, logra el engagement esperado con su comunidad. ¡Encuentra uno que genere valor y confianza hacia tu marca!',
      'No olvides que este Influencer cuenta con seguidores que, además, también son seguidos por otros y así sucesivamente. Es decir, lograr la intervención de este tipo de personas significa lograr el "efecto bola de nieve" al servicio de tu campaña de marketing.',
    ],
    secondaryCta: {
      title: 'CONOCE NUESTRAS SOLUCIONES',
      ctaLabel: 'Ver Más',
      ctaHref: 'https://brainstorming.la/soluciones',
    },
    publishedDate: '5 noviembre 2021',
  },
  {
    slug: 'que-es-una-landing-page',
    kicker: 'Desarrollo Web, Inbound Marketing',
    title: '¿Qué es una landing page o página de aterrizaje?',
    category: 'Desarrollo Web',
    heroImage: card4,
    readTime: 'Léelo en 2 min.',
    intro: [
      'Una de las misiones del Marketing Digital es generar conversiones, ¡eso está clarísimo! Sin embargo, cumplirla requiere transitar un camino que no solo basta con tener presencia en redes y en portales.',
      'Hablamos de un recorrido que comienza con una oferta clara, consumidores específicos y algunas landing pages. No hay más. Ahora mismo, tu camino comienza, pero esta vez para conocer cómo usar una landing page en tu negocio. ¿Te apuntas?',
      'Bien sea con el propósito de generar nuevos leads, apoyar el proceso de relacionamiento con los que tienes, o enamorar a tus clientes con ofertas de recompra, una Landing Page será una de tus herramientas fundamentales.',
      'Definirla, desde una traducción llana, nos hará entenderla como una página de aterrizaje. Es decir, una página destinada que sirve de llegada para los interesados en tomar una acción.',
      'Además, una landing page es una página que existe únicamente con el propósito de capturar datos de contacto de dichos visitantes, a través de una determinada estructura. Esto le añade un poder quizás "convertidor", entre un visitante/interesado a un contacto.',
      '¿Lo vas comprendiendo? ¿Quieres seguir conociendo más detalles de las Landing Pages? Quédate y descubre cómo puede funcionarte.',
    ],
    sections: [
      {
        heading: '¿Cómo funciona una landing page?',
        blocks: [
          { type: 'paragraph', text: 'Al momento de crear una landing page, hay tres diferentes propósitos que se definen:' },
          {
            type: 'list',
            items: [
              { text: 'Producir una venta directa' },
              { text: 'Generar leads' },
              { text: 'Construir relaciones' },
            ],
          },
          { type: 'paragraph', text: 'Cualquiera que sea el tuyo, primero debes conocer cómo funcionan realmente. Imagina que estás navegando con el objetivo de encontrar información sobre un problema que quieres solucionar en tu trabajo: "Configurar una campaña de Facebook Ads para tu negocio". Mientras investigas, consigues un artículo de blog que llama tu atención, cliqueas para leer, y efectivamente, responde a tus dudas.' },
          { type: 'paragraph', text: 'Al mismo tiempo, ves una oferta descargable en esa misma página que menciona algo como esto: "5 herramientas para configurar exitosamente tus campañas de anuncios en Facebook". ¿Dudarías en darle clic?' },
          { type: 'paragraph', text: 'Es probable que no. Y, al hacerlo, "aterrizas" en una nueva página, la landing page. En esta, encuentras información detallada acerca del descargable que te llamó la atención y un formulario. El siguiente paso será completar ese formulario con los datos que solicite y obtener finalmente el recurso gratuito. ¡Así funcionan las landing pages!' },
          { type: 'image', image: landingRocket },
        ],
      },
      {
        heading: '¿Por qué es importante una landing page?',
        blocks: [
          { type: 'paragraph', text: 'Las landing pages se centran en conseguir la oportunidad perfecta para persuadir a tus visitantes más interesados. Su poder de influencia colabora en tu camino de recolección de datos y relacionamiento, con el fin de garantizar de esta manera las probabilidades de compra. Así, los esfuerzos dedicados en la fase de atracción de interesados, no será en vano.' },
        ],
      },
      {
        heading: 'Tipos de landing page',
        blocks: [
          { type: 'paragraph', text: 'Ahora que conoces qué es una landing page, cómo funciona y por qué es importante, ha llegado el momento de elegir la que mejor se adapte a tu objetivo.' },
          { type: 'subheading', text: 'Microsites' },
          { type: 'paragraph', text: 'Este es uno de los modelos más usados de landing page. Se trata de un microsite con un objetivo concreto: persuadir al usuario para que tome una acción particular. Para ello es necesario:' },
          {
            type: 'list',
            items: [
              { text: 'Dotarlo de la información necesaria.' },
              { text: 'Incluir un CTA.' },
            ],
          },
          { type: 'subheading', text: 'Páginas únicas' },
          { type: 'paragraph', text: 'Son la opción ideal en campañas de marketing donde buscas que el usuario intercambie datos de interés. Es decir, si tu objetivo es conseguir datos de tus usuarios o acciones específicas como: descargar un material o dejar su información para ser contactado. Anímate a usar una landing page de página única.' },
          { type: 'image', image: landingMockup },
        ],
      },
    ],
    summaryTitle: 'Conclusión',
    summaryParagraphs: [
      'En definitiva, ahora que ya sabes que las landing pages son esenciales dentro de tu estrategia digital, estás preparado para configurar las tuyas. Incrementa tus posibilidades de generar nuevos leads y nutrir a aquellos que ya lo sean. ¡Vamos! Apóyate en landing pages y haz que tu negocio logre los flujos de venta proyectados.',
    ],
    secondaryCta: {
      title: 'CONOCE NUESTRAS SOLUCIONES',
      ctaLabel: 'Ver Más',
      ctaHref: 'https://brainstorming.la/soluciones',
    },
    publishedDate: '5 noviembre 2021',
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug)
}
