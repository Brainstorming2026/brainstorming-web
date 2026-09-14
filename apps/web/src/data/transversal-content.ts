import { siteRoutes } from './site-navigation'

/** Approved copy: Section 11, Camino B. Keep editorial wording intact. */
export const conversationCta = {
  title: '¿Listo para escalar tu proyecto?',
  label: 'CONVERSEMOS',
  href: siteRoutes.contact,
} as const

export const homeContent = {
  title: 'Brainstorming — Consultora estratégica',
  hero: {
    title: 'Tu empresa ya tiene lo que necesita para crecer. Lo que falta es saber exactamente qué hacer primero.',
    subtitle: 'Somos una consultora estratégica especializada en crecimiento comercial, automatización con IA e innovación. Trabajamos con equipos directivos de empresas medianas en LATAM para transformar negocios con metodología, tecnología y criterio — no con promesas.',
  },
  problems: {
    title: '¿Tu empresa está en alguna de estas situaciones?',
    items: [
      { icon: 'automation/chart-no-axes-combined', text: 'Vendes, pero de forma impredecible. Los resultados fluctúan y no tienes control sobre las variables que los mueven.' },
      { icon: 'automation/users-round', text: 'Tu equipo comercial trabaja mucho pero los números no reflejan el esfuerzo. El proceso depende de personas, no de un sistema.' },
      { icon: 'automation/brain-circuit', text: 'Escuchas hablar de inteligencia artificial en todos lados, pero no tienes claro qué implementar ni por dónde empezar.' },
      { icon: 'automation/sliders-horizontal', text: 'Tomas decisiones por intuición porque no tienes la data ordenada ni los procesos documentados.' },
      { icon: 'automation/route', text: 'Sabes que tu empresa tiene potencial para crecer más, pero no tienes un plan claro ni priorizado de cómo hacerlo.' },
    ],
    closing: 'Si alguna de estas te suena familiar, trabajemos juntos.',
  },
  results: {
    title: 'No hablamos de estrategia. La ejecutamos.',
    items: [
      { slug: 'ait-capital', client: 'AIT Capital', text: 'De S/ 100K a S/ 1.5M en facturación — en 4 meses.' },
      { slug: 'senati', client: 'SENATI', text: 'S/ 10M adicionales por mes reactivando una base de 350,000 personas.' },
      { slug: 'nordic', client: 'Nordic International School', text: 'Flujo de leads automatizado con mejora sustancial en ratio de conversión a matrícula.' },
    ],
    action: { label: 'VER TODOS LOS PROYECTOS', href: siteRoutes.projects },
  },
  services: {
    title: '¿Por dónde quieres empezar?',
    action: { label: 'VER TODOS LOS SERVICIOS', href: siteRoutes.solutions },
  },
} as const

export const aboutContent = {
  title: 'Estrategia sin ejecución es teoría. Ejecución sin estrategia es ruido.',
  introduction: {
    title: '¿Quiénes somos?',
    paragraphs: [
      'Somos una consultora estratégica que combina diagnóstico profundo, metodologías propias y tecnología de punta para ayudar a empresas medianas de LATAM a crecer de forma inteligente y sostenible.',
      'No somos una agencia de marketing. No somos una empresa de software. Somos el socio estratégico que se sienta con el equipo directivo, entiende el negocio desde adentro y define — junto a ellos — qué hacer, en qué orden y por qué.',
    ],
  },
  methodology: {
    title: '¿Cómo lo hacemos?',
    subtitle: 'Nuestra metodología',
    opening: 'Cada proyecto empieza con la misma pregunta: ¿cuál es el problema real?',
    paragraphs: [
      'No llegamos con soluciones prefabricadas. Llegamos con frameworks probados, herramientas de diagnóstico y la capacidad de escuchar lo que el mercado dice — incluyendo lo que los clientes del cliente no se atreven a decirle en una reunión formal.',
      'A partir de ahí, priorizamos. Usamos la Matriz Impacto-Esfuerzo como filtro central: no todo lo que parece urgente es importante, y no todo lo importante requiere una gran inversión. La estrategia es elegir qué no hacer tanto como elegir qué sí.',
      'Y luego ejecutamos. O acompañamos la ejecución. Porque un diagnóstico sin implementación es un informe que nadie usa.',
    ],
  },
  principles: {
    title: 'Nuestros principios',
    items: [
      { icon: 'automation/route', title: 'Primero la estrategia.', text: 'Las herramientas y los canales se eligen después de entender el negocio, no antes.' },
      { icon: 'automation/scan-search', title: 'La data, no la intuición.', text: 'Cada decisión importante se ancla en lo que dicen los clientes reales, los números reales y el mercado real.' },
      { icon: 'automation/chart-column-increasing', title: 'Resultados medibles.', text: 'Si no podemos medir el impacto de lo que hacemos, no deberíamos estar haciéndolo.' },
      { icon: 'automation/message-square', title: 'Honestidad sobre comodidad.', text: 'Preferimos decirte lo que necesitas escuchar, no lo que quieres oír.' },
    ],
  },
  board: {
    title: 'Board of Directors',
    caption: 'El nivel de pensamiento que merece tu negocio.',
    paragraphs: ['Nuestro Board reúne cinco especialistas con trayectoria comprobada en las disciplinas que más impactan el crecimiento de una empresa hoy: estrategia comercial, inteligencia artificial, innovación, finanzas y neurociencia del liderazgo.'],
  },
  reasons: {
    title: '¿Por qué nosotros?',
    items: [
      { title: 'Metodologías propias, no frameworks genéricos.', text: 'Smart Selling y Growth Planning son metodologías desarrolladas y refinadas en más de 80 proyectos reales con empresas medianas de LATAM. No son adaptaciones de libros — son sistemas que hemos probado, fallado, ajustado y vuelto a probar hasta que funcionan.' },
      { title: 'Resultados con número, no con diapositivas.', text: 'AIT Capital pasó de S/ 100K a S/ 1.5M en 4 meses. SENATI generó S/ 10M adicionales por mes. Esos números son reales, están documentados y son el estándar con el que medimos nuestro trabajo.' },
      { title: 'Board senior en cada proyecto.', text: 'No tercerizamos el pensamiento estratégico a consultores junior. Los directores del Board participan activamente en cada compromiso. Tu empresa recibe atención del nivel que merece.' },
    ],
  },
  projectsAction: { label: 'VER PROYECTOS', href: siteRoutes.projects },
} as const
