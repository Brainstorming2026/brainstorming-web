import type { ImageMetadata } from 'astro'
import aitLogo from '@/assets/projects/new/logos/ait-capital.webp'
import etnaLogo from '@/assets/projects/new/logos/etna.png'
import futuraLogo from '@/assets/projects/new/logos/futura-wealth.svg'
import nordicLogo from '@/assets/projects/new/logos/nordic.png'
import pastipanLogo from '@/assets/projects/new/logos/pastipan-alternative.png'
import senatiLogo from '@/assets/projects/new/logos/senati.svg'

export const newProjectServices = {
  'smart-selling': { label: 'Smart Selling', icon: 'automation/workflow' },
  'growth-planning': { label: 'Growth Planning', icon: 'automation/chart-no-axes-combined' },
  'inbound-marketing': { label: 'Inbound Marketing', icon: 'study/magnet' },
  'branding': { label: 'Branding', icon: 'study/pen-tool' },
} as const

export type NewProjectSlug = 'ait-capital' | 'senati' | 'pastipan' | 'nordic' | 'etna' | 'futura-wealth'
export type ProjectImageSlot = {
  id: string
  title: string
  request: string
  ratio: '16/9' | '4/3'
} & ({ src: ImageMetadata, alt: string } | { src?: undefined, alt?: never })

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
      title: 'Equipo comercial y operación de AIT Capital',
      request: 'Solicitar una fotografía horizontal del equipo comercial o una composición de la operación de la empresa. Sin datos visibles de clientes.',
      ratio: '16/9',
    },
    media: [
      {
        id: 'ait-crm',
        title: 'CRM y flujos de seguimiento',
        request: 'Solicitar una captura del pipeline implementado y del flujo email / WhatsApp. Anonimizar nombres, teléfonos, correos y montos confidenciales.',
        ratio: '4/3',
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
      title: 'Aprendizaje técnico en SENATI',
      request: 'Solicitar una fotografía horizontal de estudiantes en un taller o laboratorio real, con autorización de uso de imagen.',
      ratio: '16/9',
    },
    media: [
      {
        id: 'senati-nutricion',
        title: 'Recorrido del prospecto hacia la matrícula',
        request: 'Solicitar capturas de mensajes y del flujo de nutrición por etapa. Mostrar piezas reales de la campaña y ocultar datos personales.',
        ratio: '4/3',
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
    ],
    title: 'Una dirección clara\npara el siguiente crecimiento.',
    summary: 'Investigación y planificación estratégica para definir dónde crecer, cómo diferenciarse y qué priorizar.',
    accent: '#b91f2a',
    surface: '#fff2ef',
    logoSource: 'https://pastipan.com.pe/',
    logoSurface: '#ffffff',
    challenge: 'La marca necesitaba una reorientación estratégica completa: tenía producto y operación, pero sin claridad sobre hacia dónde crecer, cómo diferenciarse y qué hacer primero.',
    response: 'Ejecutamos un Growth Planning completo: investigación profunda con etnografía de consumidores y clientes, análisis de mercado y benchmark competitivo, definición de propuesta de valor diferenciada y mapeo de las nuevas rutas estratégicas. Entregamos un roadmap priorizado con quick wins y visión de mediano plazo.',
    approach: [
      {
        icon: 'study/search',
        title: 'Entender a las personas y al mercado',
        text: 'Etnografía de consumidores y clientes, análisis de mercado y benchmark competitivo.',
      },
      {
        icon: 'automation/target',
        title: 'Definir la diferencia',
        text: 'Una propuesta de valor diferenciada y nuevas rutas estratégicas para la marca.',
      },
      {
        icon: 'automation/route',
        title: 'Priorizar la acción',
        text: 'Un roadmap con quick wins y una visión de mediano plazo, priorizado por impacto.',
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
      title: 'El producto y la experiencia Pastipan',
      request: 'Solicitar fotografía horizontal de productos en una tienda o en su contexto de consumo. Preferir una imagen de marca, no una foto genérica de panadería.',
      ratio: '16/9',
    },
    media: [
      {
        id: 'pastipan-estrategia',
        title: 'Investigación y roadmap estratégico',
        request: 'Solicitar una composición de hallazgos de investigación y roadmap priorizado. Usar extractos autorizados sin información comercial confidencial.',
        ratio: '4/3',
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
      title: 'La experiencia educativa de Nordic',
      request: 'Solicitar una fotografía horizontal del campus o de una actividad educativa. Si aparecen menores, usar únicamente material con autorización de uso de imagen.',
      ratio: '16/9',
    },
    media: [
      {
        id: 'nordic-estrategia',
        title: 'Propuesta de valor y comunicación',
        request: 'Solicitar piezas de comunicación o extractos de la propuesta de valor trabajada para el colegio.',
        ratio: '4/3',
      },
      {
        id: 'nordic-crm',
        title: 'Proceso de admisión y seguimiento',
        request: 'Solicitar una captura del CRM o del flujo de admisión implementado. Ocultar todos los datos de estudiantes y familias.',
        ratio: '4/3',
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
      title: 'Familia de productos con la nueva identidad',
      request: 'Solicitar una composición horizontal de las líneas de baterías con el branding desarrollado. Confirmar que corresponde al trabajo de la agencia.',
      ratio: '16/9',
    },
    media: [
      {
        id: 'etna-identidad',
        title: 'Evolución de la identidad de marca',
        request: 'Solicitar artes aprobados de la identidad anterior y la propuesta final para compararlas. No usar el logo actual como supuesto rediseño sin confirmación.',
        ratio: '4/3',
      },
      {
        id: 'etna-aplicaciones',
        title: 'Aplicaciones por línea de producto',
        request: 'Solicitar mockups o fotografías de etiquetas, empaques y piezas comerciales de las líneas trabajadas.',
        ratio: '4/3',
      },
    ],
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
      summary: 'Mayor volumen de leads calificados en el pipeline, clientes potenciales ultra calificados y mejora medible en la tasa de cierre.',
      outcomes: [
        'Mayor volumen de leads calificados',
        'Prospectos altamente calificados',
        'Mejora en la tasa de cierre',
      ],
    },
    hero: {
      id: 'futura-portada',
      title: 'Asesoría patrimonial y equipo Futura',
      request: 'Solicitar una fotografía horizontal del equipo o de una reunión de asesoría. Usar una escena real autorizada, sin documentos financieros legibles.',
      ratio: '16/9',
    },
    media: [
      {
        id: 'futura-proceso',
        title: 'Pipeline y automatización comercial',
        request: 'Solicitar captura del pipeline y esquema del flujo implementado. Anonimizar nombres, patrimonios, correos y cualquier información de clientes.',
        ratio: '4/3',
      },
    ],
    next: 'ait-capital',
  },
]
