import type { ImageMetadata } from 'astro'
import benchmarkIcon from '@/assets/growth-planning/stage-benchmark.png'
import businessIcon from '@/assets/growth-planning/stage-business.png'
import positioningIcon from '@/assets/growth-planning/stage-positioning.png'
import preworkIcon from '@/assets/growth-planning/stage-prework.png'
import priorityIcon from '@/assets/growth-planning/stage-priority.png'
import roadmapIcon from '@/assets/growth-planning/stage-roadmap.png'
import stakeholdersIcon from '@/assets/growth-planning/stage-stakeholders.png'

export interface GrowthStage {
  number: string
  shortLabel: string
  title: string
  description: string
  icon: ImageMetadata
}

export interface GrowthBenefit {
  title: string
  description: string
  metric: string
}

export const growthStages: GrowthStage[] = [
  {
    number: '00',
    shortLabel: 'Preparación',
    title: 'Pre-Work',
    description: 'El cliente completa un cuestionario de objetivos, comparte acceso a plataformas clave, material comercial y estructura organizacional. Llegamos a la primera sesión con contexto, no empezando desde cero.',
    icon: preworkIcon,
  },
  {
    number: '01',
    shortLabel: 'Negocio',
    title: 'Autoconocimiento del Negocio',
    description: 'Sesiones colaborativas con el equipo directivo para entender el negocio desde adentro: propuesta de valor real, modelo de ingresos, canales, cuellos de botella y supuestos que a veces no lo son.',
    icon: businessIcon,
  },
  {
    number: '02',
    shortLabel: 'Stakeholders',
    title: 'Research con Stakeholders',
    description: 'Entrevistas en profundidad con clientes actuales, ex-clientes, prospectos que no compraron y miembros clave del equipo. Lo que la gente dice en privado, sin presión, es siempre distinto de lo que aparece en las reuniones. Ese contraste es oro puro para la estrategia.',
    icon: stakeholdersIcon,
  },
  {
    number: '03',
    shortLabel: 'Mercado',
    title: 'Benchmark e Investigación de Mercado',
    description: 'Analizamos el entorno competitivo: qué hacen los competidores directos e indirectos, qué tendencias mueven el mercado y qué oportunidades existen que la empresa todavía no está aprovechando.',
    icon: benchmarkIcon,
  },
  {
    number: '04',
    shortLabel: 'Posición',
    title: 'Propuesta de Valor y Posicionamiento',
    description: 'Definimos el diferencial real: qué hace única a la empresa, para quién y cómo comunicarlo con claridad. Positioning statement, Golden Circle y propuesta de valor única.',
    icon: positioningIcon,
  },
  {
    number: '05',
    shortLabel: 'Prioridad',
    title: 'Priorización Estratégica',
    description: 'Generamos el listado exhaustivo de iniciativas posibles y las priorizamos usando la Matriz Impacto-Esfuerzo. Qué hacer primero, qué puede esperar y qué conviene descartar.',
    icon: priorityIcon,
  },
  {
    number: '06',
    shortLabel: 'Roadmap',
    title: 'Plan de Proyecto y Próximos Pasos',
    description: 'Roadmap de 90–180 días con acciones ordenadas, responsables, hitos y quick wins para los primeros 30 días. Presentación ejecutiva al equipo directivo para cerrar alineados.',
    icon: roadmapIcon,
  },
]

export const growthBenefits: GrowthBenefit[] = [
  {
    metric: '01',
    title: 'Claridad real',
    description: 'Entiende qué está frenando el crecimiento, desde adentro y desde afuera.',
  },
  {
    metric: '02',
    title: 'Impacto primero',
    description: 'Un plan priorizado por impacto real, no por la urgencia del momento.',
  },
  {
    metric: '03',
    title: 'Un equipo alineado',
    description: 'El equipo directivo trabaja alrededor de las mismas prioridades.',
  },
  {
    metric: '04',
    title: 'Voz del cliente',
    description: 'Decisiones basadas en lo que dicen tus clientes, no en suposiciones.',
  },
  {
    metric: '05',
    title: 'Acción inmediata',
    description: 'Quick wins para los primeros 30 días y un roadmap claro para los siguientes 6 meses.',
  },
]
