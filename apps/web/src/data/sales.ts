import type { ImageMetadata } from 'astro'
import aitCapitalLogo from '@/assets/smart-selling/logos/ait-capital.png'
import senatiLogo from '@/assets/smart-selling/logos/senati.svg'
import diagnosisIcon from '@/assets/smart-selling/process/step-01-diagnosis.png'
import idealCustomerIcon from '@/assets/smart-selling/process/step-02-ideal-customer.png'
import toBeProcessIcon from '@/assets/smart-selling/process/step-03-to-be-process.png'
import crmAiIcon from '@/assets/smart-selling/process/step-04-crm-ai.png'
import playbooksIcon from '@/assets/smart-selling/process/step-05-playbooks.png'
import adoptionIcon from '@/assets/smart-selling/process/step-06-adoption.png'

export interface SalesStep {
  number: string
  icon: ImageMetadata
  title: string
  description: string
}

export interface SalesBenefit {
  title: string
  description: string
}

export interface SalesCaseStudy {
  client: string
  context: string
  logo: ImageMetadata
  logoAlt: string
  accent: 'ait' | 'senati'
  metrics: { value: string, label: string }[]
}

export const salesSteps: SalesStep[] = [
  {
    number: '01',
    icon: diagnosisIcon,
    title: 'Diagnóstico As-Is',
    description: 'Mapeamos el proceso actual para detectar cuellos de botella, tiempos muertos y los puntos donde las oportunidades se enfrían o desaparecen.',
  },
  {
    number: '02',
    icon: idealCustomerIcon,
    title: 'Definición del Cliente Ideal',
    description: 'Usamos data real para identificar quién compra más, paga mejor y permanece. Así construimos el perfil con mayor probabilidad de cierre.',
  },
  {
    number: '03',
    icon: toBeProcessIcon,
    title: 'Diseño del Proceso To-Be',
    description: 'Rediseñamos el pipeline, sus criterios de avance, responsables, tiempos y triggers para que cualquier persona del equipo pueda seguirlo.',
  },
  {
    number: '04',
    icon: crmAiIcon,
    title: 'CRM + Automatización con IA',
    description: 'Conectamos CRM, email, WhatsApp, lead scoring, agendamiento automático y dashboards para dar seguimiento en tiempo real.',
  },
  {
    number: '05',
    icon: playbooksIcon,
    title: 'Playbooks por Etapa',
    description: 'Definimos qué decir, cuándo y cómo en cada conversación comercial. Menos improvisación y más conversiones consistentes.',
  },
  {
    number: '06',
    icon: adoptionIcon,
    title: 'Entrenamiento y Adopción',
    description: 'Entrenamos al equipo, acompañamos la adopción y afinamos el sistema para convertirlo en una forma de trabajo cotidiana.',
  },
]

export const salesBenefits: SalesBenefit[] = [
  {
    title: 'Prospectos mejor calificados',
    description: 'Más reuniones con oportunidades reales y menos tiempo persiguiendo leads fríos.',
  },
  {
    title: 'Ciclos de venta más cortos',
    description: 'Cada etapa tiene un objetivo, un responsable y una siguiente acción clara.',
  },
  {
    title: 'Escala sin inflar el equipo',
    description: 'La automatización absorbe tareas repetitivas sin perder el trato humano.',
  },
  {
    title: 'Un equipo autónomo',
    description: 'Los playbooks reducen la dependencia del fundador para avanzar y cerrar.',
  },
  {
    title: 'Resultados predecibles',
    description: 'Pipeline, actividad y conversión visibles para decidir con anticipación.',
  },
]

export const salesCaseStudies: SalesCaseStudy[] = [
  {
    client: 'AIT Capital',
    context: 'Un sistema comercial rediseñado para multiplicar reuniones, cierres y facturación en cuatro meses.',
    logo: aitCapitalLogo,
    logoAlt: 'AIT Capital',
    accent: 'ait',
    metrics: [
      { value: '10 → 30', label: 'reuniones por mes' },
      { value: '1 → 11', label: 'cierres' },
      { value: 'S/ 100K → S/ 1.5M', label: 'facturación en 4 meses' },
    ],
  },
  {
    client: 'SENATI',
    context: 'Reactivación inteligente de una base dormida para convertir atención acumulada en nuevas matrículas.',
    logo: senatiLogo,
    logoAlt: 'SENATI',
    accent: 'senati',
    metrics: [
      { value: '350K', label: 'personas en la base' },
      { value: '20%', label: 'base dormida reactivada' },
      { value: '30%', label: 'conversión a matrícula' },
    ],
  },
]
