export const automationAreas = [
  { name: 'Ventas', label: 'De la primera consulta a la próxima reunión.', tasks: ['Prospección y calificación de leads', 'Agendamiento de reuniones', 'Seguimiento post-reunión por WhatsApp'], metric: '+200%', result: 'reuniones mensuales', note: 'Caso AIT Capital', flow: ['Nuevo prospecto', 'Lead calificado', 'Reunión agendada'] },
  { name: 'Atención al cliente', label: 'Una respuesta a tiempo. A cualquier hora.', tasks: ['Respuestas y atención 24/7', 'Resolución de consultas frecuentes', 'Escalamiento inteligente a humanos cuando se necesita'], metric: '86%', result: 'de resolución sin intervención humana', note: 'Resultado típico', flow: ['Consulta recibida', 'Contexto identificado', 'Respuesta o escalamiento'] },
  { name: 'Marketing', label: 'Más ideas en circulación. Menos trabajo manual.', tasks: ['Generación y distribución de contenido', 'Campañas automatizadas', 'Nutrición de leads por email y WhatsApp'], metric: '25%', result: 'más velocidad en producción de contenido', note: 'Resultado típico', flow: ['Contenido creado', 'Campaña activada', 'Lead nutrido'] },
  { name: 'Operaciones', label: 'La operación avanza. Tu equipo también.', tasks: ['Reportería automática y alertas de KPIs', 'Procesamiento de documentos', 'Gestión de tareas internas'], metric: '30–50%', result: 'de reducción en tareas administrativas', note: 'Resultado típico', flow: ['Documento recibido', 'Datos procesados', 'Reporte actualizado'] },
  { name: 'Finanzas', label: 'Menos pendientes. Más claridad para decidir.', tasks: ['Seguimiento de cobranzas', 'Análisis de rentabilidad por cliente', 'Cierre mensual con menos errores'], metric: 'Menos errores.', result: 'Menos tiempo de cierre.', note: 'Resultado típico', flow: ['Cobranza pendiente', 'Seguimiento enviado', 'Cierre conciliado'] },
]

export const automationTools = ['Claude', 'ChatGPT', 'Gemini', 'Grok', 'Perplexity', 'Claude Code', 'Claude Cowork', 'n8n', 'Make', 'Zapier', 'HubSpot', 'WhatsApp Business API']

export const adoptionSteps = [
  { letter: 'A', name: 'Conciencia', english: 'Awareness', text: 'Entender por qué cambia la forma de trabajar.' },
  { letter: 'D', name: 'Deseo', english: 'Desire', text: 'Querer participar y encontrar un beneficio propio.' },
  { letter: 'K', name: 'Conocimiento', english: 'Knowledge', text: 'Aprender cómo usar la IA en el trabajo diario.' },
  { letter: 'A', name: 'Habilidad', english: 'Ability', text: 'Poner lo aprendido en práctica con acompañamiento.' },
  { letter: 'R', name: 'Refuerzo', english: 'Reinforcement', text: 'Medir la adopción y sostener los nuevos hábitos.' },
]
