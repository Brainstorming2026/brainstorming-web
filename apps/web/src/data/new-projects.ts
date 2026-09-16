import type { ImageMetadata } from 'astro'
import aitLogo from '@/assets/projects/new/logos/ait-capital.webp'
import etnaLogo from '@/assets/projects/new/logos/etna.png'
import futuraLogo from '@/assets/projects/new/logos/futura-wealth.svg'
import nordicLogo from '@/assets/projects/new/logos/nordic.png'
import pastipanLogo from '@/assets/projects/new/logos/pastipan-alternative.png'
import senatiLogo from '@/assets/projects/new/logos/senati.svg'
import nordicAdmissions from '@/assets/projects/new/nordic/admissions.png'
import nordicEducationLevels from '@/assets/projects/new/nordic/education-levels.png'
import pastipanStorefront from '@/assets/projects/new/pastipan/storefront.png'
import senatiJourneyConcept from '@/assets/projects/new/senati/nurturing-journey-concept-v2.png'
import senatiTrainingConcept from '@/assets/projects/new/senati/technical-training-concept.png'

export const newProjectServices = {
  'smart-selling': { label: 'Smart Selling', icon: 'automation/workflow' },
  'growth-planning': { label: 'Growth Planning', icon: 'automation/chart-no-axes-combined' },
  'inbound-marketing': { label: 'Inbound Marketing', icon: 'study/magnet' },
  'branding': { label: 'Branding', icon: 'study/pen-tool' },
} as const

export type NewProjectSlug = 'ait-capital' | 'senati' | 'pastipan' | 'nordic' | 'etna' | 'futura-wealth'
export type ProjectEvidenceVisual = 'ait-impact' | 'ait-system' | 'nordic-journey' | 'futura-workspace' | 'pastipan-campaign' | 'etna-scope'
export type ProjectImageSlot = {
  id: string
  title: string
  request: string
  ratio: '16/9' | '4/3'
  source?: string
} & (
  | { src: ImageMetadata, alt: string, visual?: never }
  | { visual: ProjectEvidenceVisual, alt: string, src?: never }
  | { src?: undefined, visual?: undefined, alt?: never }
)

export interface NewProject {
  slug: NewProjectSlug
  client: string
  sector: string
  services: (keyof typeof newProjectServices)[]
  title: string
  summary: string
  accent: string
  surface: string
  logoSource: string
  logoSurface: string
  challenge: string
  response: string
  approach: { icon: string, title: string, text: string }[]
  results: {
    summary: string
    metrics?: { label: string, before?: string, value: string, note?: string }[]
    outcomes?: string[]
  }
  hero: ProjectImageSlot
  media: ProjectImageSlot[]
  next: NewProjectSlug
}

export const newProjectLogos: Record<NewProjectSlug, ImageMetadata> = {
  'ait-capital': aitLogo,
  'senati': senatiLogo,
  'pastipan': pastipanLogo,
  'nordic': nordicLogo,
  'etna': etnaLogo,
  'futura-wealth': futuraLogo,
}

// Results and claims supplied by the agency. Official sites are used only for
// logo provenance, not as evidence of campaign performance. No figures inferred.
export const newProjects: NewProject[] = [
  {
    slug: 'ait-capital',
    client: 'AIT Capital',
    sector: 'Finanzas / Inversiones',
    services: [
      'smart-selling',
    ],
    title: 'Del seguimiento manual\na un sistema comercial.',
    summary: 'Proceso, CRM e inteligencia artificial para convertir oportunidades en reuniones y cierres.',
    accent: '#101556',
    surface: '#f0f2f8',
    logoSource: 'https://ait.com.pe/',
    logoSurface: '#ffffff',
    challenge: 'Flujo comercial 100% manual: sin proceso definido, sin CRM, sin automatización. El equipo de ventas dependía de la memoria y el seguimiento personal para cada prospecto. Las oportunidades se perdían entre las grietas.',
    response: 'Mapeamos y ordenamos el proceso comercial completo. Implementamos CRM con flujos de nutrición automatizados por email y WhatsApp. Integramos IA para prospección, calificación de leads y seguimiento post-reunión, transformando un proceso artesanal en un sistema que trabaja solo.',
    approach: [
      {
        icon: 'automation/route',
        title: 'Ordenar el proceso',
        text: 'Mapeo del flujo comercial completo y definición de las etapas de seguimiento.',
      },
      {
        icon: 'automation/workflow',
        title: 'Conectar y automatizar',
        text: 'CRM con nutrición por email y WhatsApp para mantener el contacto con cada prospecto.',
      },
      {
        icon: 'automation/brain-circuit',
        title: 'Integrar inteligencia artificial',
        text: 'IA aplicada a la prospección, la calificación de leads y el seguimiento post-reunión.',
      },
    ],
    results: {
      summary: 'De 10 a 30 reuniones calificadas por mes y de 1 a 11 cierres mensuales. La facturación pasó de S/ 100K a S/ 1.5M en 4 meses.',
      metrics: [
        {
          label: 'Reuniones calificadas por mes',
          before: '10',
          value: '30',
        },
        {
          label: 'Cierres mensuales',
          before: '1',
          value: '11',
        },
        {
          label: 'Facturación',
          before: 'S/ 100K',
          value: 'S/ 1.5M',
          note: 'Evolución en 4 meses',
        },
      ],
    },
    hero: {
      id: 'ait-portada',
      title: 'Evolución de la facturación en cuatro meses',
      request: '',
      ratio: '16/9',
      visual: 'ait-impact',
      alt: 'Comparación de facturación: de S/ 100 mil a S/ 1.5 millones en cuatro meses.',
      source: 'Documento original del proyecto, página 22.',
    },
    media: [
      {
        id: 'ait-crm',
        title: 'Un sistema de seguimiento, de la oportunidad al cierre',
        request: '',
        ratio: '4/3',
        visual: 'ait-system',
        alt: 'Esquema del sistema comercial de AIT Capital: prospección, calificación, reunión y seguimiento.',
        source: 'Esquema explicativo basado en el alcance documentado del proyecto.',
      },
    ],
    next: 'senati',
  },
  {
    slug: 'senati',
    client: 'SENATI',
    sector: 'Educación Técnica',
    services: [
      'smart-selling',
      'inbound-marketing',
    ],
    title: 'Reactivar el interés.\nAcercar la matrícula.',
    summary: 'Nutrición automatizada y captación sistematizada para acompañar a los prospectos hacia la matrícula.',
    accent: '#103fbd',
    surface: '#edf3fc',
    logoSource: 'https://www.senati.edu.pe/',
    logoSurface: '#ffffff',
    challenge: '70% de los leads se quedaban atascados en alguna etapa del funnel sin avanzar. Una base dormida de 350,000 personas que la institución no sabía cómo reactivar. Captación de leads manual y sin sistematización.',
    response: 'Implementamos lead nurturing automatizado con mensajes personalizados por etapa del funnel, para mover prospectos de forma consistente hacia la matrícula. En paralelo, automatizamos el proceso de captación de nuevos leads con flujos inteligentes de atracción y conversión.',
    approach: [
      {
        icon: 'study/search',
        title: 'Identificar el punto de abandono',
        text: 'Trabajo sobre los prospectos detenidos en el funnel y la base dormida de la institución.',
      },
      {
        icon: 'study/message-square',
        title: 'Personalizar cada contacto',
        text: 'Mensajes de nutrición adaptados a la etapa del prospecto para acompañar su avance.',
      },
      {
        icon: 'study/magnet',
        title: 'Sistematizar la captación',
        text: 'Flujos automatizados de atracción y conversión para incorporar nuevos leads.',
      },
    ],
    results: {
      summary: '20% de reactivación de la base dormida de 350,000 personas. 30% de conversión a matrícula. S/ 10M adicionales de ingresos por mes.',
      metrics: [
        {
          label: 'Reactivación de la base dormida',
          value: '20%',
          note: 'Base de 350,000 personas',
        },
        {
          label: 'Conversión a matrícula',
          value: '30%',
        },
        {
          label: 'Ingresos adicionales por mes',
          value: 'S/ 10M',
        },
      ],
    },
    hero: {
      id: 'senati-portada',
      title: 'La formación técnica como siguiente oportunidad',
      request: '',
      ratio: '16/9',
      src: senatiTrainingConcept,
      alt: 'Escena conceptual de formación técnica con estudiantes adultos en un taller de mecatrónica.',
    },
    media: [
      {
        id: 'senati-nutricion',
        title: 'Un recorrido para acompañar el interés hasta la matrícula',
        request: '',
        ratio: '16/9',
        src: senatiJourneyConcept,
        alt: 'Ilustración del recorrido: captación, segmentación, contacto por etapa, seguimiento y matrícula.',
      },
    ],
    next: 'pastipan',
  },
  {
    slug: 'pastipan',
    client: 'Pastipan',
    sector: 'Alimentos / Panadería Industrial',
    services: [
      'growth-planning',
      'inbound-marketing',
    ],
    title: 'Una dirección clara\npara el siguiente crecimiento.',
    summary: 'Investigación y planificación estratégica para definir dónde crecer, cómo diferenciarse y qué priorizar.',
    accent: '#b91f2a',
    surface: '#fff2ef',
    logoSource: 'https://pastipan.com.pe/',
    logoSurface: '#ffffff',
    challenge: 'La marca necesitaba una reorientación estratégica completa: tenía producto y operación, pero sin claridad sobre hacia dónde crecer, cómo diferenciarse y qué hacer primero.',
    response: 'Investigamos la relación de distintas generaciones con la marca y encontramos una tensión útil: los públicos mayores recordaban Pastipan con cariño, mientras que para los jóvenes había perdido presencia. Ese hallazgo dio origen a Newstalgia, una dirección estratégica que recupera la memoria de la marca con un lenguaje renovado para sus canales y contenidos.',
    approach: [
      {
        icon: 'study/search',
        title: 'Entender a las personas y al mercado',
        text: 'Etnografía de consumidores y clientes, análisis de mercado y benchmark competitivo.',
      },
      {
        icon: 'automation/target',
        title: 'Convertir el hallazgo en una idea',
        text: 'Newstalgia conectó el recuerdo afectivo de la marca con un lenguaje vigente para nuevas audiencias.',
      },
      {
        icon: 'automation/route',
        title: 'Llevar la estrategia a los canales',
        text: 'La dirección de comunicación se tradujo en una presencia renovada para web, tienda y redes sociales.',
      },
    ],
    results: {
      summary: 'Reorientación estratégica completa con identidad de marca renovada, posicionamiento claro y plan de acción priorizado por impacto.',
      outcomes: [
        'Identidad de marca renovada',
        'Posicionamiento claro',
        'Plan de acción priorizado por impacto',
      ],
    },
    hero: {
      id: 'pastipan-portada',
      title: 'La experiencia Pastipan, del punto de venta al canal digital',
      request: '',
      ratio: '16/9',
      src: pastipanStorefront,
      alt: 'Sitio web de Pastipan con una vista panorámica de una de sus tiendas.',
      source: 'Presentación Inbound 2026, página 51.',
    },
    media: [
      {
        id: 'pastipan-estrategia',
        title: 'Newstalgia aplicada a contenidos de marca',
        request: '',
        ratio: '4/3',
        visual: 'pastipan-campaign',
        alt: 'Newstalgia: hallazgo de investigación y tres piezas reales de Pastipan sobre encuentro, producto y experiencia.',
        source: 'Presentación Inbound 2026, página 51.',
      },
    ],
    next: 'nordic',
  },
  {
    slug: 'nordic',
    client: 'Nordic International School',
    sector: 'Educación / Colegios',
    services: [
      'growth-planning',
      'smart-selling',
      'inbound-marketing',
    ],
    title: 'Una propuesta que conecta.\nUn proceso que acompaña.',
    summary: 'Estrategia de comunicación y un sistema comercial para acompañar el interés de las familias hasta la matrícula.',
    accent: '#345f88',
    surface: '#f0f5fa',
    logoSource: 'https://nordic-school.edu.pe/',
    logoSurface: '#ffffff',
    challenge: 'La marca necesitaba una reorientación estratégica de comunicación: tiene un gran producto y operación, pero sin claridad sobre cómo diferenciarse y qué hacer primero. Además, requería un flujo de captación de leads sistematizado porque perdía prospectos por falta de seguimiento estructurado y con mayor visibilidad.',
    response: 'Ejecutamos un Growth Planning completo: investigación profunda con etnografía de consumidores y clientes, análisis de mercado y benchmark competitivo, definición de propuesta de valor diferenciada y mapeo de las nuevas rutas estratégicas. Entregamos un roadmap priorizado con quick wins y visión de mediano plazo. Luego, ordenamos el proceso comercial completo, implementamos tecnología de CRM y automatizamos los flujos de seguimiento y nutrición de leads. Primero orden, luego automatización, luego escala. El equipo pasó de gestionar leads a mano a operar un sistema que califica y avanza prospectos solo.',
    approach: [
      {
        icon: 'study/search',
        title: 'Investigar y posicionar',
        text: 'Etnografía, análisis de mercado y benchmark para definir una propuesta de valor diferenciada.',
      },
      {
        icon: 'automation/route',
        title: 'Trazar las prioridades',
        text: 'Nuevas rutas estratégicas y un roadmap que combina quick wins con visión de mediano plazo.',
      },
      {
        icon: 'automation/workflow',
        title: 'Sistematizar el seguimiento',
        text: 'Proceso comercial, CRM y nutrición automatizada para dar continuidad al interés de las familias.',
      },
    ],
    results: {
      summary: 'Posicionamiento claro y plan de acción priorizado por impacto. Además, un flujo de captación estructurado y automatizado, con mejora significativa en el ratio de conversión de leads a matrículas.',
      outcomes: [
        'Posicionamiento y prioridades definidos',
        'Captación estructurada y automatizada',
        'Mejora en la conversión a matrículas',
      ],
    },
    hero: {
      id: 'nordic-portada',
      title: 'Una propuesta educativa convertida en invitación',
      request: '',
      ratio: '16/9',
      src: nordicAdmissions,
      alt: 'Pieza de admisión 2026–2027 de Nordic International School con invitación a una visita guiada.',
      source: 'Campaña de admisión de Nordic International School.',
    },
    media: [
      {
        id: 'nordic-estrategia',
        title: 'Propuesta de valor y comunicación',
        request: '',
        ratio: '4/3',
        src: nordicEducationLevels,
        alt: 'Página de Nordic International School que presenta sus niveles inicial, primaria y secundaria.',
        source: 'Comunicación de los niveles educativos de Nordic International School.',
      },
      {
        id: 'nordic-crm',
        title: 'Del interés de la familia al proceso de admisión',
        request: '',
        ratio: '4/3',
        visual: 'nordic-journey',
        alt: 'Recorrido explicativo del proceso: interés, visita, seguimiento, admisión y matrícula.',
        source: 'Recorrido explicativo de las etapas de admisión.',
      },
    ],
    next: 'etna',
  },
  {
    slug: 'etna',
    client: 'Baterías ETNA',
    sector: 'Manufactura / Automotriz',
    services: [
      'branding',
    ],
    title: 'Una marca renovada.\nCada línea, una identidad.',
    summary: 'Investigación y branding para expresar la calidad del producto y diferenciar cada línea de la marca.',
    accent: '#07578b',
    surface: '#edf5f9',
    logoSource: 'https://www.etna.com.pe/',
    logoSurface: '#ffffff',
    challenge: 'Imagen corporativa desactualizada que no reflejaba la calidad del producto ni conectaba con el consumidor moderno. Las distintas líneas de producto carecían de identidad visual diferenciada.',
    response: 'Investigación de la categoría y benchmark competitivo exhaustivo. A partir de ahí, desarrollamos propuestas de branding diferenciadas para cada línea de producto de la marca, con paleta de colores, tipografía, tono y aplicaciones visuales definidas por segmento.',
    approach: [
      {
        icon: 'study/search',
        title: 'Investigar la categoría',
        text: 'Análisis de la categoría y benchmark competitivo como base de las decisiones de marca.',
      },
      {
        icon: 'study/pen-tool',
        title: 'Diferenciar cada línea',
        text: 'Propuestas de branding específicas para los distintos segmentos y líneas de producto.',
      },
      {
        icon: 'study/swatch-book',
        title: 'Construir un sistema visual',
        text: 'Paleta de colores, tipografía, tono y aplicaciones definidos por segmento.',
      },
    ],
    results: {
      summary: 'Renovación completa de imagen corporativa y de cada línea de producto, con identidad visual coherente, moderna y diferenciada por categoría.',
      outcomes: [
        'Imagen corporativa renovada',
        'Identidad diferenciada por línea',
        'Coherencia visual por categoría',
      ],
    },
    hero: {
      id: 'etna-portada',
      title: 'Estrategia de identidad y diferenciación por línea',
      request: '',
      ratio: '16/9',
      visual: 'etna-scope',
      alt: 'Síntesis del alcance de branding de ETNA: investigación, identidad y coherencia entre líneas.',
      source: 'Síntesis del alcance del proyecto. Las aplicaciones de identidad no están incluidas en esta muestra.',
    },
    media: [],
    next: 'futura-wealth',
  },
  {
    slug: 'futura-wealth',
    client: 'Futura Wealth Management',
    sector: 'Finanzas / Gestión Patrimonial',
    services: [
      'smart-selling',
    ],
    title: 'Menos tareas operativas.\nMás foco en cada cliente.',
    summary: 'Orden comercial y automatización para que los asesores se concentren en clientes potenciales calificados.',
    accent: '#805615',
    surface: '#faf4e9',
    logoSource: 'https://futura1.net/',
    logoSurface: '#182b38',
    challenge: 'Captación de clientes y proceso comercial 100% manual. Sin CRM, sin flujos definidos, sin automatización. Los asesores perdían tiempo en tareas operativas en lugar de estar frente a clientes potenciales.',
    response: 'Mapeamos el proceso comercial As-Is, identificamos los cuellos de botella e implementamos tecnología con flujos automatizados de prospección, nutrición y seguimiento. Orden primero, automatización después, escala sostenible al final.',
    approach: [
      {
        icon: 'automation/route',
        title: 'Mapear el proceso actual',
        text: 'Análisis As-Is e identificación de los cuellos de botella en la operación comercial.',
      },
      {
        icon: 'automation/workflow',
        title: 'Automatizar el recorrido',
        text: 'Tecnología y flujos conectados de prospección, nutrición y seguimiento.',
      },
      {
        icon: 'automation/target',
        title: 'Enfocar el trabajo comercial',
        text: 'Un pipeline orientado a clientes potenciales altamente calificados.',
      },
    ],
    results: {
      summary: 'Un proceso comercial ordenado, con etapas visibles y una estructura de onboarding que permite al equipo concentrarse en el seguimiento de oportunidades.',
      outcomes: [
        'Pipeline comercial centralizado',
        'Reuniones y siguientes acciones visibles',
        'Onboarding y capacitación estructurados',
      ],
    },
    hero: {
      id: 'futura-portada',
      title: 'Seguimiento comercial en un solo espacio',
      request: '',
      ratio: '16/9',
      visual: 'futura-workspace',
      alt: 'Espacio real de Futura en Monday con módulos de CRM, onboarding y capacitación.',
      source: 'Detalle del espacio de trabajo de Futura en Monday. Recorte de la captura original.',
    },
    media: [],
    next: 'ait-capital',
  },
]
