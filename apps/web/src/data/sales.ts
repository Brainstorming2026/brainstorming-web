import type { ProcessStep } from './marketing'

export const salesSteps: ProcessStep[] = [
  { icon: 'sales-step-1', text: 'Empatizamos con tu equipo de ventas para entender su trabajo.' },
  { icon: 'sales-step-2', text: 'Capacitamos a tu equipo de ventas para que entienda a tu consumidor.' },
  { icon: 'sales-step-3', text: 'Capacitamos a tu equipo de ventas en atender los canales de adquisición de clientes.' },
  { icon: 'sales-step-4', text: 'Diseñamos un proceso de ventas optimizado y alineado con tu empresa y producto.' },
  { icon: 'sales-step-5', text: 'Implementamos tecnología para aumentar la eficiencia de tu equipo de ventas (CRM y software de ventas).' },
  { icon: 'sales-step-6', text: 'Configuramos las herramientas para que puedas hacer seguimiento de tu equipo de ventas y su performance.' },
]

export const salesBenefits = {
  left: [
    'Generar un proceso de ventas amigable para tu cliente.',
    'Reducir tu costo de adquisición de clientes.',
    'Mejorar la motivación en tu equipo de ventas.',
  ],
  right: [
    'Acortar tu ciclo de cierre de ventas.',
    'Aumentar tus tasas de conversión.',
    'Identificar oportunidades de mejora fácilmente.',
  ],
}
