import { aitSales, aitSalesHeadline, aitSalesPeriod } from './case-metrics'
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
      { icon: 'automation/chart-no-axes-combined', title: 'Ventas impredecibles', text: 'Vendes, pero de forma impredecible. Los resultados fluctúan y no tienes control sobre las variables que los mueven.' },
      { icon: 'automation/users-round', title: 'Un equipo sin sistema', text: 'Tu equipo comercial trabaja mucho pero los números no reflejan el esfuerzo. El proceso depende de personas, no de un sistema.' },
      { icon: 'automation/bot', title: 'IA sin dirección', text: 'Escuchas hablar de inteligencia artificial en todos lados, pero no tienes claro qué implementar ni por dónde empezar.' },
      { icon: 'automation/sliders-horizontal', title: 'Decisiones sin datos', text: 'Tomas decisiones por intuición porque no tienes la data ordenada ni los procesos documentados.' },
      { icon: 'automation/route', title: 'Crecimiento sin un plan', text: 'Sabes que tu empresa tiene potencial para crecer más, pero no tienes un plan claro ni priorizado de cómo hacerlo.' },
    ],
    closing: 'Si alguna de estas te suena familiar, trabajemos juntos.',
    /** Tramo de `closing` que se subraya al entrar. */
    closingHighlight: 'trabajemos juntos',
  },
  results: {
    title: 'No hablamos de estrategia. La ejecutamos.',
    items: [
      { slug: 'ait-capital', client: 'AIT Capital', text: `${aitSalesHeadline}, con un sistema comercial que trabaja solo.` },
      { slug: 'senati', client: 'SENATI', text: 'S/ 10M adicionales por mes al reactivar con nutrición automatizada una base dormida de 350,000 personas.' },
      { slug: 'futura-wealth', client: 'Futura Wealth Management', text: 'Orden comercial y automatización para que los asesores se concentren en clientes potenciales calificados.' },
    ],
    /** Frase del sitio US. `stat` va como cifra; `text` completa la oración. */
    proof: {
      eyebrow: 'Del plan a la ejecución',
      stat: 4,
      total: 5,
      text: 'clientes que llevaron el Growth Plan nos han contratado para la ejecución de su plan de proyectos.',
    },
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
      'Somos el socio estratégico que se sienta con el equipo directivo, entiende el negocio desde adentro y define — junto a ellos — qué hacer, en qué orden y por qué.',
    ],
    /**
     * Las dos negaciones del briefing (§11.2). Van en su propio campo, no
     * dentro del párrafo, porque el contraste ES el mensaje: se descartan en
     * pantalla antes de que aterrice lo que sí somos.
     */
    contrast: ['una agencia de marketing', 'una empresa de software'],
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
      { title: 'Resultados con número, no con diapositivas.', text: `AIT Capital pasó de ${aitSales.before} a ${aitSales.after} en ventas mensuales en ${aitSalesPeriod}. SENATI registró S/ 10M adicionales por mes. Medimos cada proyecto por sus resultados.` },
      { title: 'Board senior en cada proyecto.', text: 'No tercerizamos el pensamiento estratégico a consultores junior. Los directores del Board participan activamente en cada compromiso. Tu empresa recibe atención del nivel que merece.' },
    ],
  },
  projectsAction: { label: 'VER PROYECTOS', href: siteRoutes.projects },
} as const
