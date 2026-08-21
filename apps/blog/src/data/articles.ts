import type { ImageMetadata } from 'astro'
import mandamientosCommunityManager from '@/assets/guides/mandamientos-community-manager.webp'
import card2 from '@/assets/images/hero/card2.png'
import card3 from '@/assets/images/hero/card3.png'
import card4 from '@/assets/images/hero/card4.png'
import card6 from '@/assets/images/hero/card6.png'
import card7 from '@/assets/images/hero/card7.png'
import card1 from '@/assets/images/hero/card1.png'
import card8 from '@/assets/images/hero/card8.png'
import turismoHiker from '@/assets/images/marketing-turismo-peru/hiker.png'
import cmInstagramPost from '@/assets/images/que-es-community-manager/img-1.png'
import cmLaptopFacebook from '@/assets/images/que-es-community-manager/img-2.png'
import influencerStreet from '@/assets/images/que-es-un-influencer/img-1.png'
import influencerMailTime from '@/assets/images/que-es-un-influencer/img-2.png'
import influencerCrowdPhones from '@/assets/images/que-es-un-influencer/img-3.png'
import landingRocket from '@/assets/images/que-es-una-landing-page/img-1.png'
import landingMockup from '@/assets/images/que-es-una-landing-page/img-2.png'
import desafiosInvestigacionMercado from '@/assets/images/desafios-investigacion-de-mercado/img-1.png'
import chatbotsMarketingIa from '@/assets/images/chatbots-marketing-ia/img-1.png'
import paginaWebLeadMagnet from '@/assets/guides/construir-pagina-web-5-pasos.webp'
import paginaWebDisponibilidad from '@/assets/images/necesito-una-pagina-web/img-1.png'
import paginaWebFidelizar from '@/assets/images/necesito-una-pagina-web/img-2.png'
import paginaWebAdwords from '@/assets/images/necesito-una-pagina-web/img-3.png'
import paginaWebHero from '@/assets/images/necesito-una-pagina-web/img-4.png'
import card10 from '@/assets/images/hero/card10.png'
import posicionarMarcaGoogleLeadMagnet from '@/assets/guides/posicionar-marca-google.webp'
import consejosPaginaWebMovil from '@/assets/images/consejos-pagina-web-efectiva/img-1.png'
import consejosPaginaWebNavegacion from '@/assets/images/consejos-pagina-web-efectiva/img-2.png'
import consejosPaginaWebContenidos from '@/assets/images/consejos-pagina-web-efectiva/img-3.png'
import card11 from '@/assets/images/hero/card11.png'
import plataformasEcommerceLeadMagnet from '@/assets/guides/plataformas-esenciales-ecommerce.webp'
import ecommerceClasificacion from '@/assets/images/que-es-un-ecommerce/img-1.png'
import ecommercePasos from '@/assets/images/que-es-un-ecommerce/img-2.png'

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
  /** No todos los articulos cierran con un bloque de resumen. */
  summaryTitle?: string
  summaryParagraphs?: string[]
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
      ctaHref: '/guias/mandamientos-community-manager',
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
  {
    slug: 'desafios-investigacion-de-mercado',
    kicker: 'Investigación de Mercado',
    title: 'DESCIFRANDO LOS DESAFÍOS DE LA INVESTIGACIÓN DE MERCADO',
    category: 'Procesos',
    heroImage: card8,
    readTime: 'Léelo en 15 min.',
    intro: [
      'Los misterios de la investigación de mercado pueden resultar desalentadores para los profesionales del marketing. Requiere un conocimiento profundo del consumidor, del sector y de la competencia, todos ellos elementos basados en datos que deben recopilarse, analizarse e interpretarse para desarrollar un plan de marketing de éxito. Pero hay retos comunes a los que se enfrentan muchos profesionales del marketing cuando llevan a cabo sus investigaciones. Para garantizar que se recogen datos precisos y se utilizan para crear estrategias eficaces, es esencial comprender estos posibles escollos antes de embarcarse en una investigación de mercado.',
    ],
    sections: [
      {
        heading: 'Nivel 1: Definición de objetivos y preguntas de investigación',
        blocks: [
          { type: 'paragraph', text: 'El primer desafío radica en la definición clara de los objetivos y las preguntas de investigación. Es fundamental tener en cuenta los aspectos clave que deseamos analizar y formular preguntas específicas para obtener los datos necesarios. Sin una estructura bien definida, los resultados de la investigación pueden ser vagos o poco útiles para nuestras estrategias de marketing.' },
        ],
      },
      {
        heading: 'Nivel 2: La selección de la muestra adecuada para la investigación de mercado',
        blocks: [
          { type: 'paragraph', text: 'El tamaño y la composición de la muestra son cruciales para obtener resultados representativos. Sin embargo, seleccionar una muestra adecuada puede resultar complicado. Es esencial identificar el grupo objetivo con precisión y utilizar métodos de muestreo adecuados para evitar sesgos y obtener datos confiables.' },
          { type: 'image', image: desafiosInvestigacionMercado },
        ],
      },
      {
        heading: 'Nivel 3: Recopilación y análisis de datos para la investigación de mercado',
        blocks: [
          { type: 'paragraph', text: 'La recopilación y el análisis de datos son procesos fundamentales en la investigación de mercado. Sin embargo, pueden surgir desafíos en términos de la precisión de la información recopilada, la calidad de los datos y la interpretación correcta de los resultados. Es importante utilizar métodos adecuados de recopilación de datos y contar con herramientas de análisis confiables para obtener insights significativos.' },
        ],
      },
      {
        heading: 'Nivel final: La interpretación y aplicación de los resultados',
        blocks: [
          { type: 'paragraph', text: 'Una vez obtenidos los resultados, el desafío reside en interpretarlos de manera correcta y relevante para nuestras estrategias de marketing. La información puede ser compleja y requiere una comprensión profunda de los datos y del contexto en el que se aplicarán. Es esencial utilizar un enfoque analítico y crítico para extraer los insights adecuados y tomar decisiones informadas.' },
        ],
      },
    ],
    summaryTitle: 'En resumen',
    summaryParagraphs: [
      'La investigación de mercado en el área de marketing presenta desafíos que deben ser abordados de manera efectiva para obtener resultados de calidad. Desde la definición de objetivos y preguntas de investigación, hasta la selección de muestras adecuadas y el análisis e interpretación correcta de los datos, cada etapa requiere atención y cuidado. Al superar estos desafíos, los profesionales del marketing podrán aprovechar al máximo la investigación de mercado y utilizarla como una herramienta poderosa para impulsar sus estrategias y obtener una ventaja competitiva.',
      'Desvelar los secretos de la investigación de mercado es la clave del éxito de una estrategia de marketing. Desde la determinación de los objetivos de la investigación y la formulación de preguntas pertinentes, hasta la selección de muestras representativas y la realización de análisis de datos precisos, cada paso es fundamental. Supera estos obstáculos y obtén información valiosísima que guiará tus campañas de marketing.',
    ],
    summaryTagline: '¿Deseas superar los desafíos de investigación de mercado con los profesionales?',
    publishedDate: '22 junio 2023',
  },
  {
    slug: 'chatbots-marketing-ia',
    kicker: 'Inteligencia Artificial',
    title: 'AHORRA RECURSOS CON INTELIGENCIA ARTIFICIAL EN EL MARKETING: Cómo los chatbots y asistentes virtuales con IA están transformando las empresas',
    category: 'Inbound Marketing',
    heroImage: card1,
    readTime: 'Léelo en 8 min.',
    intro: [
      'En la era digital actual, las empresas están buscando constantemente nuevas formas de interactuar con sus clientes y brindarles una experiencia excepcional. En este sentido, los chatbots y los asistentes virtuales con inteligencia artificial (IA) se han convertido en herramientas indispensables para el marketing y las empresas. En este artículo, explicaremos cómo estos avances tecnológicos están revolucionando la forma en que las empresas se comunican con sus clientes, mejoran la satisfacción del cliente y optimizan sus estrategias de marketing.',
    ],
    sections: [
      {
        heading: 'La evolución de los chatbots y asistentes virtuales con inteligencia artificial',
        blocks: [
          { type: 'paragraph', text: 'Los chatbots y los asistentes virtuales con inteligencia artificial han recorrido un largo camino en los últimos años. Gracias a los avances en la tecnología de IA, estos sistemas son capaces de comprender y responder de manera efectiva a las consultas de los usuarios, incluso en lenguaje natural. Esto ha permitido que las empresas los utilicen en una variedad de aplicaciones, desde atención al cliente hasta generación de leads y ventas.' },
          { type: 'subheading', text: 'Beneficios de la IA: Su uso y productividad' },
          { type: 'paragraph', text: 'Estas herramientas de inteligencia artificial han demostrado ser altamente beneficiosas en diversos aspectos, como la reducción del tiempo de espera de respuesta, el rastreo de pedidos en las compras y la mejora de la atención al cliente.' },
          { type: 'paragraph', text: 'Uno de los principales beneficios de los chatbots es la rapidez en la atención al cliente. Los usuarios ya no tienen que esperar largos periodos de tiempo en una línea telefónica o en una sala de espera virtual para obtener respuestas a sus preguntas. Los chatbots pueden proporcionar respuestas instantáneas las 24 horas del día, los 7 días de la semana, lo que mejora la satisfacción del cliente y agiliza el proceso de atención.' },
          { type: 'image', image: chatbotsMarketingIa },
          { type: 'paragraph', text: 'Otro beneficio clave es la capacidad de los chatbots para rastrear pedidos en las compras. Los clientes pueden obtener actualizaciones rápidas y precisas sobre el estado de sus pedidos simplemente interactuando con un chatbot. Esto evita la necesidad de llamar o enviar correos electrónicos al servicio de atención al cliente y permite a los usuarios obtener información en tiempo real sobre la ubicación y el progreso de sus productos.' },
        ],
      },
      {
        heading: '¿Cómo logramos las mejores experiencias con inteligencia artificial?',
        blocks: [
          { type: 'paragraph', text: 'Uno de los principales beneficios de los chatbots y asistentes virtuales es su capacidad para proporcionar una experiencia personalizada y eficiente a los clientes. Estos sistemas pueden ofrecer respuestas rápidas a consultas comunes, guiar a los clientes a través de procesos de compra y brindar recomendaciones basadas en las preferencias del usuario. Al mejorar la experiencia del cliente, las empresas pueden aumentar la satisfacción y fidelidad de sus clientes.' },
          { type: 'paragraph', text: 'Además, los chatbots y asistentes virtuales pueden ser utilizados como herramientas de autogestión. Los clientes pueden resolver problemas y obtener información sin la intervención de un agente humano. Esto no solo reduce el costo operativo para las empresas, sino que también brinda a los clientes la autonomía de resolver sus propios problemas de manera rápida y eficiente.' },
          { type: 'paragraph', text: 'Otro aspecto importante es la capacidad de los chatbots para recopilar datos y analizar el comportamiento de los clientes. Al interactuar con los usuarios, los chatbots pueden recopilar información relevante que puede ser utilizada para mejorar la personalización de los servicios y ofrecer recomendaciones más precisas. Esto permite a las empresas comprender mejor a sus clientes y adaptar sus estrategias de marketing y ventas de acuerdo con las necesidades y preferencias individuales.' },
          { type: 'subheading', text: 'La automatización de tareas y optimización del tiempo' },
          { type: 'paragraph', text: 'Los chatbots y asistentes virtuales pueden ayudar a las empresas a automatizar tareas rutinarias y repetitivas, liberando tiempo y recursos para que el personal se enfoque en actividades de mayor valor. Estos sistemas pueden realizar tareas como la programación de citas, la recopilación de información del cliente y el seguimiento de solicitudes, todo de forma automatizada y eficiente. Esta automatización no solo ahorra tiempo, sino que también reduce los errores humanos y mejora la productividad.' },
          { type: 'subheading', text: 'Nutrición de Leads y mejora de las estrategias de marketing' },
          { type: 'paragraph', text: 'Los chatbots y asistentes virtuales con IA también son poderosas herramientas para la nutrición de Leads y la optimización de las estrategias de marketing. Estos sistemas pueden interactuar con los visitantes del sitio web, brindar información relevante sobre productos o servicios, y así ir nutriendo la conversación y alimentando el interés del prospecto frío hasta llevarlo a un punto donde un ejecutivo comercial (humano) pueda tomar esa conversación y buscar el cierre de la venta.' },
          { type: 'paragraph', text: '¿Te imaginas cuánto tiempo y recursos podrás ahorrar al hacer que un chatbot con IA haga el trabajo sucio y tus ejecutivos sólo atiendan a los Leads más calificados? Además, al analizar los datos recopilados, el tipo de información que más interesa, el tiempo de cualificación y demás, las empresas pueden obtener información valiosa sobre los intereses y comportamientos de los clientes, lo que les permite personalizar y perfeccionar sus estrategias de marketing.' },
        ],
      },
    ],
    summaryTitle: 'En resumen',
    summaryParagraphs: [
      'Los chatbots y asistentes virtuales con inteligencia artificial están transformando el marketing y las empresas. Estas innovadoras herramientas mejoran la experiencia del cliente, automatizan tareas y optimizan el tiempo. Además, son eficaces para la generación de leads y la personalización de estrategias de marketing.',
    ],
    summaryTagline: '¡Revoluciona tu negocio y aprende mucho más del marketing y la IA!',
    publishedDate: '11 julio 2024',
  },
  {
    slug: 'necesito-pagina-web-para-mi-empresa',
    kicker: 'Desarrollo Web',
    title: '¿Necesito una página web para mi empresa? Sí, te explicamos por qué',
    category: 'Desarrollo Web',
    heroImage: paginaWebHero,
    readTime: 'Léelo en 5 min.',
    intro: [
      'Hoy en día es frecuente recurrir a Internet para conocer las diferentes opciones del mercado. Así, podemos obtener un panorama más amplio antes de adquirir un producto. ¡Eso es exactamente lo que harán tus clientes potenciales!',
      'Cuando utilizamos Google esperamos encontrar la respuesta que buscamos y, si bien es frecuente recurrir a las redes sociales, en general, las páginas webs ofrecen una mayor información, mucho más completa e integral.',
      'Es por eso que si una empresa busca visibilidad y con ella aumentar sus ventas, necesita de una página web. Esta plataforma es el medio ideal donde se manifestará la esencia misma de la empresa y sus productos. Y bien, ¿por qué crear una?',
    ],
    sections: [
      {
        heading: '8 Razones por las que necesitas una página web',
        blocks: [
          { type: 'paragraph', text: 'Si todavía tienes dudas sobre los beneficios que brindaría una página web a tu empresa, estas razones te convencerán para que tengas la tuya:' },
          { type: 'subheading', text: '1. VISIBILIDAD:' },
          { type: 'paragraph', text: 'Esta es la más importante. La página web es la vitrina de tu empresa y allí estás presente todo el tiempo. En ella, los clientes potenciales y los actuales tienen la posibilidad de encontrar toda la información actualizada, enterarse de promociones y ver los productos. Además, una página web bien diseñada pone en jerarquía a la empresa. La gran influencia visual que recibe el usuario (cliente potencial) es a veces determinante para decidirse por una u otra marca.' },
          { type: 'subheading', text: '2. DISPONIBILIDAD LAS 24 HORAS:' },
          { type: 'paragraph', text: 'Con una página web, la empresa está presente las 24 horas del día, todo el año. Puede ser consultada por el usuario en cualquier horario sin que sea necesario que alguien de la empresa esté conectado. El cliente potencial podrá revisar los productos, visualizar la información de la empresa y decidir cuándo ponerse en contacto. ¡Manténla actualizada!' },
          { type: 'image', image: paginaWebDisponibilidad },
          { type: 'subheading', text: '3. AMPLÍA EL ABANICO DE POSIBILIDADES:' },
          { type: 'paragraph', text: 'Gracias a una página web tu marca puede tener presencia en todo el mundo. Y, por tanto, las posibilidades comerciales de tu empresa crecen. Además, podrás interactuar con los clientes potenciales, conociendo sus expectativas, percepciones y dudas. En definitiva, contar con un sitio web te brindará una nueva perspectiva desde donde mejorar tu empresa o hacer innovaciones.' },
          { type: 'subheading', text: '4. ATRAER NUEVOS CLIENTES:' },
          { type: 'paragraph', text: 'La página web da la posibilidad de que la empresa sea encontrada en los motores de búsqueda. Así, lograrás captar nuevos prospectos que se interesen en tus productos o servicios. ¡Ponle énfasis al diseño web y optimiza tus contenidos para atraerlos!' },
          { type: 'subheading', text: '5. INCREMENTO EN LAS VENTAS:' },
          { type: 'paragraph', text: 'Al atraer nuevas miradas sobre tus productos, las posibilidades de incrementar las ventas se multiplican. La página web te permite interactuar con clientes potenciales, quienes pueden conocerte y establecer una relación de antemano. Además, podrás facilitar el proceso de compra y recompra.' },
          { type: 'subheading', text: '6. FIDELIZAR A LOS CLIENTES EXISTENTES:' },
          { type: 'paragraph', text: 'Si tus técnicas de marketing y branding de marca son ingeniosas, no solamente conseguirás más clientes sino que tus clientes actuales te seguirán siendo "fieles" a lo que les ofreces. ¡Potencia la experiencia que tendrán con tu marca!' },
          { type: 'image', image: paginaWebFidelizar },
          { type: 'subheading', text: '7. OBTENER DATOS DE CONTACTO:' },
          { type: 'paragraph', text: 'Toda página web (bien implementada) tiene un lugar donde contactarse a través de mails. Al recibir estos correos, estarás también recopilando los datos de tus posibles clientes. Si eres astuto, los utilizarás para enviarles novedades, descuentos y promociones vigentes. Lo mismo sucede si los clientes potenciales dejan sus datos en el formulario de contacto que incluyas en tu web.' },
          { type: 'subheading', text: '8. REFUERZA TU CAMPAÑA PUBLICITARIA:' },
          { type: 'paragraph', text: 'La campaña publicitaria te permite llegar al público que realmente está interesado o necesita tus productos. Gracias a ella incrementarás tu visibilidad de marca y posibilidades de venta. ¿Cómo? A través de los motores de búsqueda, como Google. Por ejemplo, puedes aprovechar la herramienta de "Google Adwords" y utilizar técnicas de SEO. Esas prácticas harán que te posiciones en los primeros lugares de los buscadores. ¡También puedes incluir el uso de redes sociales!' },
          { type: 'image', image: paginaWebAdwords },
        ],
      },
    ],
    summaryTitle: 'Conclusión',
    summaryParagraphs: [
      'Las estadísticas dicen que se crean 600 páginas webs por minuto. Esto demuestra la gran incidencia que tiene internet en la vida de las personas. Hoy en día, es totalmente habitual buscar en Google todo aquello que no conocemos o necesitamos adquirir. ¡Tus clientes potenciales lo están haciendo ahora mismo!',
      'Esta actitud frente a lo digital representa una nueva filosofía de vida. Demuestra que una página web es fundamental para que las empresas crezcan desde el punto de vista comercial y se proyecten en otros niveles. ¡Conecta con tu audiencia de la forma que necesitas!',
    ],
    leadMagnet: {
      eyebrow: '¡Aprende a navegar la gran ola de datos! Compartimos una guía gratuita.',
      title: '¡Finalmente! Cómo construir tu página web en 5 simples pasos... que hasta un niño podría aplicar',
      ctaLabel: 'Descargar',
      ctaHref: '/guias/construir-pagina-web-5-pasos',
      image: paginaWebLeadMagnet,
    },
    publishedDate: '15 enero 2021',
  },
  {
    slug: 'consejos-pagina-web-efectiva',
    kicker: 'Desarrollo Web',
    title: '10 Consejos para construir una página web efectiva',
    category: 'Desarrollo Web',
    heroImage: card10,
    readTime: 'Léelo en 4 min.',
    intro: [
      'Si bien es necesario contar con una página web, no debemos obviar los detalles que la hacen efectiva. Por ejemplo, que tenga un diseño atractivo y funcional. Además, es necesario que se posicione en los primeros lugares de los motores de búsqueda. ¿Sabes qué otros aspectos debes tener en cuenta? ¡Te contamos!',
    ],
    sections: [
      {
        heading: '1. Tu página web debe ser visible en móviles',
        blocks: [
          { type: 'paragraph', text: 'Está demostrado que la mayoría de las personas hacen sus búsquedas desde sus móviles. Por ello, toda página web debe tener un diseño y una interface que se adapte a las características de un dispositivo móvil. Cerca del 90% de compradores acude a sus móviles para buscar los productos que necesitan. Por eso, no dejes de analizar cómo funciona tu web y cómo se ve en un celular.' },
          { type: 'image', image: consejosPaginaWebMovil },
        ],
      },
      {
        heading: '2. Elige un dominio simple de recordar',
        blocks: [
          { type: 'paragraph', text: 'El nombre que le des será la identidad de la página web, por tanto, si es sencillo, fácil de recordar y relacionado con la marca, se posicionará con mayor facilidad en los buscadores.' },
        ],
      },
      {
        heading: '3. Otorga una pestaña visible para "contacto"',
        blocks: [
          { type: 'paragraph', text: 'Toda página web, que sea efectiva, tiene un enlace o formulario que conduce a contactar a la empresa. Ya sea por mail, por teléfono o videollamada. Un formulario de contacto debe ubicarse estratégicamente entre el contenido de tu web. Procura que sea visible y de acceso inmediato.' },
        ],
      },
      {
        heading: '4. Simplifica la navegación',
        blocks: [
          { type: 'paragraph', text: 'Los especialistas en el tema aseguran que una navegación lógica y simple le permitirá al usuario encontrar con facilidad lo que busca. Aconsejan 5 pestañas superiores con sus correspondientes etiquetas y cada una de ellas con un regreso a la página de inicio (home). El hecho de que sea fácil de navegar hace que el usuario permanezca mucho más tiempo en la página web.' },
          { type: 'image', image: consejosPaginaWebNavegacion },
        ],
      },
      {
        heading: '5. Utiliza fotos reales y de buena calidad',
        blocks: [
          { type: 'paragraph', text: 'Las imágenes son fundamentales porque transmiten mucha información sobre la empresa. Pueden ser utilizadas para dar confianza, para guiar al usuario en su recorrido por la página web o para que conozcan al personal que hace posible que la empresa exista.' },
        ],
      },
      {
        heading: '6. Busca un diseño estético',
        blocks: [
          { type: 'paragraph', text: 'Todo debe complementarse: contenidos de calidad, usabilidad y un diseño que mantenga una estética atractiva con jerarquías visuales que brinden organización. Cuando la estética es recargada, la página web se vuelve confusa y es muy probable que el usuario no permanezca mucho tiempo en ella.' },
        ],
      },
      {
        heading: '7. Aporta valor a la página web con contenidos',
        blocks: [
          { type: 'paragraph', text: 'Es fundamental que la página web contenga un blog con contenidos valiosos y actualizados que permitan a los visitantes interactuar con comentarios. También es aconsejable socializar dichos contenidos en redes sociales.' },
          { type: 'image', image: consejosPaginaWebContenidos },
        ],
      },
      {
        heading: '8. CALL TO ACTION',
        blocks: [
          { type: 'paragraph', text: 'Conocida como CTA y traducida como "llamada a la acción", es un enlace que atrae clientes potenciales, llevándolos a concretar la compra de tus productos. En ese enlace, el cliente encontrará una landing page que lo persuada de interactuar con la empresa y lograr una conversión.' },
        ],
      },
      {
        heading: '9. No descuides la velocidad de carga de la página web',
        blocks: [
          { type: 'paragraph', text: 'Un estudio realizado por SOASTA (subsidiaria estadounidense de Akamai Technologies, especializada en brindar servicios para probar webs y sus aplicaciones) demostró que cerca del 90% de los usuarios dijo tener una asociación negativa con las webs que presentaban demoras de cargas o links fallidos. Por eso, cuida estos aspectos en tu web.' },
        ],
      },
      {
        heading: '10. Logra testimonios',
        blocks: [
          { type: 'paragraph', text: 'Pide a tus clientes que manifiesten los motivos por los cuales te eligieron, su experiencia con tu empresa y solicita su permiso para publicarlos en la página web. Generalmente, los clientes potenciales leen estos testimonios que les garantizan la calidad de tus productos.' },
        ],
      },
    ],
    summaryTitle: 'Conclusión',
    summaryParagraphs: [
      'En suma, si esperas que tu página web sea efectiva y genere rentabilidad a tu empresa, aprende a "invitar a la acción". ¡Conecta con tus usuarios y clientes potenciales! Perfecciona el arte del convencimiento a través de estos consejos y logra convertir tus leads en clientes satisfechos. Demuéstrales que pueden confiar en ti.',
    ],
    leadMagnet: {
      eyebrow: '¡Aprende a navegar la gran ola de datos! Compartimos una guía gratuita.',
      title: '¡Revelado! Cómo colocar tu marca en los primeros lugares de Google… y competir con los más grandes',
      ctaLabel: 'Descargar',
      ctaHref: '/guias/posicionar-marca-google',
      image: posicionarMarcaGoogleLeadMagnet,
    },
    publishedDate: '15 enero 2021',
  },
  {
    slug: 'que-es-un-ecommerce',
    kicker: 'Desarrollo Web',
    title: '¿Qué es un ecommerce? Aprende lo básico',
    category: 'Desarrollo Web',
    heroImage: card11,
    readTime: 'Léelo en 4 min.',
    intro: [
      'El ecommerce, o "comercio electrónico", se refiere a los negocios o ventas que se realizan a través de Internet. Por ello, resulta útil contar con una plataforma de este tipo como parte de nuestras estrategias de marketing.',
      'Así, podremos concretar actividades de manera práctica y rápida. Por ejemplo, promocionar y vender nuestros productos o servicios. Además, se pueden incorporar distintos medios de pago.',
      'Actualmente, el ecommerce es uno de los medios predilectos de compra a nivel mundial.',
    ],
    sections: [
      {
        heading: '¿Cómo se clasifican los ecommerce?',
        blocks: [
          { type: 'paragraph', text: 'Este intercambio que permite el ecommerce de bienes y servicios se clasifica según el destinatario al que está dirigido:' },
          {
            type: 'list',
            items: [
              { label: 'B2C', text: 'es la forma más tradicional de e-commerce que va desde la empresa al usuario. El intercambio incluye productos o servicios como en "Amazon". B2C es la sigla de Business to Consumer.' },
              { label: 'B2B', text: 'se concreta entre empresas y conlleva un nivel muy competitivo de transacción. Suele darse cuando se externaliza algún sector de la empresa. B2B es la sigla de Business to Business.' },
              { label: 'C2C', text: 'se establece entre consumidores, donde uno vende y el otro compra originando una venta directa o una subasta. C2C es la sigla de Consumer to Consumer.' },
              { label: 'C2B', text: 'cuando el consumidor le vende a la empresa, como sucede en una casa de empeños o compra de valores como oro, plata, etc. C2B es la sigla de Consumer to Business.' },
            ],
          },
          { type: 'image', image: ecommerceClasificacion },
        ],
      },
      {
        heading: '¿Qué beneficios ofrece un ecommerce?',
        blocks: [
          { type: 'paragraph', text: 'Son muchas las ventajas que ofrece un ecommerce. La más destacada es la eliminación de las limitaciones de tiempo y distancia. ¡Conoce más!' },
          {
            type: 'list',
            items: [
              { text: 'Comodidad al hacer transacciones de compra y venta desde un smartphone, laptop o cualquier dispositivo móvil.' },
              { text: 'Reducción de costos en logística. Puedes contar con una tienda física o solo una virtual, de todas manera, un e-commerce atrae clientes potenciales.' },
              { text: 'Reducción de costos para el cliente. Ofrece la posibilidad de adquirir promociones y descuentos que muchas empresas otorgan solamente de forma online. Además, los usuarios pueden consultar vía internet los precios en diferentes comercios, sin la necesidad de salir de casa.' },
              { text: '¡Puedes comenzar una empresa desde cero! Solo necesitas habilitar tu plataforma e-commerce para empezar a ofertar tus productos y conectar con miles de clientes potenciales. Además, podrás trabajar en tu negocio desde cualquier lugar mientras tengas conexión a Internet.' },
            ],
          },
        ],
      },
      {
        heading: 'Cuáles son los pasos necesarios para tener mi ecommerce',
        blocks: [
          { type: 'paragraph', text: 'Si ya tienes tu idea de negocio online o si eres dueño de una empresa y quieres ampliarla con un Ecommerce, lo que necesitas para concretarlo es:' },
          {
            type: 'list',
            items: [
              { text: 'Página web con un buen servidor para su alojamiento: este es un punto fundamental para que tengas un buen funcionamiento del carrito de compras.' },
              { text: 'Interfaz sencilla para el ecommerce: es la herramienta propia de la tienda online y cuanto más simple mejor.' },
              { text: 'Un catálogo con tus productos: es lo que los clientes utilizarán para realizar sus compras, por tanto, debe ser visualmente atractivo y muy funcional.' },
              { text: 'Procesamiento de pagos: es la forma en que los usuarios realizarán sus pagos, por tanto tiene que ser seguro para que ambas partes salgan beneficiadas con la transacción. Existen diferentes plataformas para ello.' },
              { text: 'Envío de productos: este tema también tiene que ser considerado dentro de la plataforma para informarles de antemano a los clientes potenciales.' },
            ],
          },
          { type: 'image', image: ecommercePasos },
        ],
      },
    ],
    summaryTitle: 'Conclusión',
    summaryParagraphs: [
      'Como puedes ver, contar con un e-commerce es muy necesario para incrementar tus oportunidades de venta. Anímate a crear el tuyo y disfruta de los beneficios que tendrás en poco tiempo. ¿Te interesó el tema?',
    ],
    leadMagnet: {
      eyebrow: '¡Aprende a navegar la gran ola de datos! Compartimos una infografía.',
      title: '¡4 plataformas esenciales para la creación de tu Ecommerce, que necesitas conocer para empezar a vender AHORA!',
      ctaLabel: 'Descargar',
      ctaHref: '/guias/plataformas-esenciales-ecommerce',
      image: plataformasEcommerceLeadMagnet,
    },
    publishedDate: '15 enero 2021',
  },
  {
    slug: 'estrategia-de-marca-confianza',
    kicker: 'Branding, Estrategia',
    title: '¿La estrategia de tu marca no genera la confianza que esperabas?',
    category: 'Branding',
    heroImage: card7,
    readTime: 'Léelo en 5 min.',
    intro: [
      'Piensa en la relación entre marca y usuario como si fuera una relación amorosa.',
    ],
    sections: [
      {
        heading: 'Luego de una larga y productiva conversación, llegamos a la conclusión que debemos tomar en cuenta 5 puntos bastante relevantes:',
        blocks: [
          {
            type: 'list',
            items: [
              { label: 'Conoce a tu audiencia', text: 'La manera más fácil que yo encuentro de entender lo que significa «conocer a tu audiencia» es pensar en la relación entre marca y usuario como si fuera una relación amorosa, en todas sus etapas. El primer cruce de miradas es el inicio. Luego tengo que saber qué le gusta, que le emociona, lo que ama hacer y lo que odia. Sólo así podré generar conversaciones que le interesen, que resuenen en un plano emocional y no transaccional. Luego, podremos tender puentes para estrechar esos lazos. Sólo así crearás una «relación» sólida que haga que esa persona te compre y se vuelva fiel a ti. Mejor aún, luego te recomendará porque ama tu marca y quiere que sus amigos también disfruten con su marca favorita.' },
              { label: 'Sé coherente', text: 'Conocer a tu audiencia es importante, pero también lo es conocerte a ti mismo. Saber qué aporte brindas como marca al mundo de los demás. Tu personalidad, tu corazón, tu ADN, tu voz y tu propósito, no se pueden fingir. Y, nuevamente, para tener una relación sana (en tu vida personal con tu esposa o en tu trabajo con tus consumidores), debes ser honesto y fiel a quien eres y a tu propósito. Toda esta cultura empieza en las cabezas y se debe contagiar hacia abajo a toda la organización. Pero ojo que no se contagia con un memorandum o un email. Es un trabajo constante para realmente enamorar primero a tus colaboradores y cuando todos tengan clara su razón de existir en la organización, podrán recién convencer a los consumidores a que se casen con la marca.' },
              { label: 'Sé transparente', text: 'La honestidad no es una virtud, es una obligación. En cualquier tipo de relación, la comunicación transparente, clara y directa evitará conflictos, y creará credibilidad porque tu interlocutor sabrá desde el inicio qué puedes aportar a la relación y qué no. ¿Nos vamos a equivocar? Seguramente sí, porque en toda relación nos equivocamos. Somos humanos. Pero cuando te equivoques, admite y resuelve. Es bueno aplaudir los logros, pero es más valioso trabajar para corregir los errores y levantarse juntos, marca y usuario; pareja de esposos; padres e hijos; trabajando codo a codo para siempre mejorar, para siempre crecer. Un paso a la vez, pero siempre para adelante. recuerda: una crítica es un regalo.' },
              { label: 'Sé humano', text: 'La mayoría de las ventas se dan porque el consumidor siente una relación de confianza con la marca. En mi opinión, la mejor manera de generar una relación es mostrando el lado humano de nuestra empresa. Darle cara a los colaboradores que trabajan en ella. Apareciendo en los distintos canales y dando consejos y recomendaciones. Pero también, haciendo que tus clientes aparezcan y opinen sobre ti y cómo los haces sentir (no sólo sobre el servicio o producto). Cuando un cliente conoce tu marca y el nombre de al menos un colaborador que trabaja dentro y lo considera alguien cercano (porque lo ayudó más allá del plano transaccional), has ganado la batalla más difícil para lograr la Lealtad de ese cliente.' },
              { label: 'Sé valioso', text: 'Sabías que hay un estudio de Havas Media que se llama «Meaningful Brands» que dice que el día de mañana 75% de las marcas en el mundo podrían desaparecer y a nadie le importaría? Entonces, ¿qué debemos hacer para que nuestra marca se vuelva valiosa para las personas? Tu marca debe poner foco en entregar valor en cada punto de contacto con sus usuarios. Desde la experiencia del usuario, enfocarse en ayudar y no vender, entregar contenidos de valor y tener una extraordinaria atención a los clientes. El Geek Squad de Best Buy te ayudaba a instalar en tu casa los aparatos de tecnología los hayas comprado o no en Best Buy. Eso es aportar un valor adicional en la mente de los consumidores. Ayuda primero y serás percibido como valioso.' },
            ],
          },
          { type: 'paragraph', text: '#Ubuntu' },
        ],
      },
    ],
    publishedDate: '18 marzo 2024',
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug)
}
