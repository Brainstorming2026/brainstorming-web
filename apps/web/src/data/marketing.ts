export interface ProcessStep {
  icon: string
  text: string
}

export const marketingSteps: ProcessStep[] = [
  { icon: 'marketing-step-1', text: 'Recopilación de Información' },
  { icon: 'marketing-step-2', text: 'Estudio de los usuarios de tu marca' },
  { icon: 'marketing-step-3', text: 'Análisis tu Negocio y Estrategia de Marca' },
  { icon: 'marketing-step-4', text: 'Logo e Identidad Gráfica' },
  { icon: 'marketing-step-5', text: 'Estilo de Contenido' },
  { icon: 'marketing-step-6', text: 'Línea Gráfica y Aplicaciones' },
]

export const marketingBenefits = {
  left: [
    'Alinear tu cultura, estrategia y productos con tus consumidores.',
    'Ser percibido de por el cliente de la misma manera en todos tus canales.',
    'Crear confianza con tu público conectando de forma positiva con él.',
  ],
  right: [
    'Atraer nuevos clientes y generar valor financiero.',
    'Permitir a tu equipo de desarrollo de contenido mayor agilidad y calidad.',
    'Identificar tu propuesta de valor y comunicar.',
  ],
}
