import type { ImageMetadata } from 'astro'
import step01 from '@/assets/marketing/process/step-01-analysis.png'
import step02 from '@/assets/marketing/process/step-02-buyer-persona.png'
import step03 from '@/assets/marketing/process/step-03-customer-journey.png'
import step04 from '@/assets/marketing/process/step-04-content-strategy.png'
import step05 from '@/assets/marketing/process/step-05-automation.png'
import step06 from '@/assets/marketing/process/step-06-sem.png'
import step07 from '@/assets/marketing/process/step-07-seo.png'
import step08 from '@/assets/marketing/process/step-08-analytics.png'
import step09 from '@/assets/marketing/process/step-09-optimization.png'
import step10 from '@/assets/marketing/process/step-10-generative-ai.png'

export interface ProcessStep {
  icon: string
  text: string
}

export interface MarketingStep {
  number: string
  icon: ImageMetadata
  title: string
  description: string

}

export interface MarketingBenefit {
  title: string
  description: string
}

export const marketingSteps: MarketingStep[] = [
  {
    number: '01',
    icon: step01,
    title: 'Análisis de Usuarios y Objetivos',
    description: 'Levantamos información de tu empresa y mercado para crear una estrategia de comunicación alineada con tus objetivos de negocio reales.',
  },
  {
    number: '02',
    icon: step02,
    title: 'Buyer Persona y Mapa de Empatía',
    description: 'Construimos una representación profunda de tu cliente ideal: qué piensa, qué siente, qué necesita y qué le frena para comprar.',
  },
  {
    number: '03',
    icon: step03,
    title: 'Customer Journey',
    description: 'Mapeamos todos los puntos de contacto entre tu marca y tu cliente, para estar presentes con el mensaje correcto en cada momento del proceso de decisión.',
  },
  {
    number: '04',
    icon: step04,
    title: 'Estrategia de Contenidos',
    description: 'Diseñamos el plan editorial completo: qué comunicar, en qué formato, en qué canal y con qué frecuencia — alineado con el buyer journey.',
  },
  {
    number: '05',
    icon: step05,
    title: 'Creación + Automatización de Contenido',
    description: 'Producimos el contenido e implementamos flujos de nutrición automatizados por email y WhatsApp con IA: triggers de comportamiento, lead scoring y secuencias personalizadas.',

  },
  {
    number: '06',
    icon: step06,
    title: 'Tracción de Tráfico — SEM',
    description: 'Search Engine Marketing para captar demanda activa: personas que ya están buscando lo que tú ofreces.',
  },
  {
    number: '07',
    icon: step07,
    title: 'Atracción Orgánica — SEO',
    description: 'Artículos optimizados, estructura técnica correcta, backlinks estratégicos. El tráfico que no para cuando dejas de pagar.',
  },
  {
    number: '08',
    icon: step08,
    title: 'Analítica y Reporting',
    description: 'Dashboards de KPIs claros. En el mundo digital, todo es medible — y lo que se mide, se puede mejorar.',
  },
  {
    number: '09',
    icon: step09,
    title: 'Análisis de Resultados y Ajuste',
    description: 'Decisiones basadas en evidencia, no en intuición. Ajustamos lo que no funciona y escalamos lo que sí.',
  },
  {
    number: '10',
    icon: step10,
    title: 'IA Generativa Aplicada al Contenido',
    description: 'Integramos herramientas de IA generativa (Claude, ChatGPT, Gemini) en el flujo de producción. Más velocidad, más volumen, misma voz de marca.',
  },
]

export const marketingBenefits: MarketingBenefit[] = [
  { title: 'Demanda predecible', description: 'Un flujo predecible de leads calificados que llegan solos.' },
  { title: 'Autoridad de marca', description: 'Posicionamiento como referente en tu mercado.' },
  { title: 'Menor costo de adquisición', description: 'Reducción del costo de adquisición de clientes.' },
  { title: 'Ventas más ágiles', description: 'Ciclos de venta más cortos: el prospecto llega ya educado.' },
  { title: 'Presencia permanente', description: 'Presencia orgánica que trabaja para ti las 24 horas.' },
]
