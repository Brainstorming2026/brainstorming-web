interface Director {
  id: string
  name: string
  role: string
  specialty: string
  summary: string
  credentials: string[]
  biography: string[]
}

export const boardIntroduction = [
  'Somos una consultora estratégica fundada sobre la convicción de que las empresas medianas de LATAM merecen el mismo nivel de pensamiento que tienen las grandes.',
  'Nuestro Board de Directores reúne cinco especialistas con trayectoria real en estrategia de crecimiento, inteligencia artificial, innovación, finanzas corporativas y neurociencia aplicada al liderazgo.',
]

export const directors: Director[] = [
  {
    id: 'manuel-acevedo',
    name: 'Manuel Acevedo',
    role: 'Fundador y Board Member — Brainstorming LATAM / Co-fundador y Board Member — Collective Intelligence',
    specialty: 'Estrategia de crecimiento',
    summary: 'Growth Marketing, IA aplicada y transformación digital para escalar empresas medianas en LATAM.',
    credentials: ['20+ años de experiencia', '80+ empresas acompañadas'],
    biography: [
      'Consultor estratégico senior. 20+ años en Growth Marketing, IA aplicada y transformación digital. Ha acompañado a más de 80 empresas medianas en LATAM a transformar y escalar sus negocios hasta 20x con tecnología, estrategia y metodologías Smart Selling y Growth Planning.',
      'Catedrático de maestría y posgrado en las principales escuelas de negocio del Perú. Conferencista ante audiencias de 500+ personas.',
    ],
  },
  {
    id: 'diego-ganoza',
    name: 'Diego Ganoza',
    role: 'CEO y Board Member — Collective Intelligence',
    specialty: 'Inteligencia artificial',
    summary: 'Transformación digital, inteligencia artificial responsable y gobernanza para LATAM.',
    credentials: ['15+ años de experiencia', 'Credenciales MIT y Kellogg'],
    biography: [
      '15+ años en transformación digital. Experiencia escalando unidades de negocio de USD $33M a $95M. Credenciales MIT y Kellogg. Autor de dos libros sobre inteligencia artificial. Especialista en IA Responsable y gobernanza para LATAM.',
    ],
  },
  {
    id: 'manuel-acevedo-riquelme',
    name: 'Manuel Acevedo Riquelme',
    role: 'Board Member — Finanzas Corporativas y Estrategia Financiera',
    specialty: 'Finanzas corporativas',
    summary: 'Planeamiento financiero, valoración de empresas y experiencia como Fractional CFO.',
    credentials: ['40+ años de experiencia', 'Ph.D. en Ciencias Económicas y Comerciales'],
    biography: [
      'Ph.D. en Ciencias Económicas y Comerciales por la Johannes Kepler Universität (Austria), con estudios de posgrado en Duke University, MBA por la Universidad del Pacífico y MBA en Administración e Innovación por EUCIM (España).',
      'Más de 40 años de experiencia en finanzas corporativas, análisis de estados financieros, planeamiento financiero, valoración de empresas y análisis financiero forense.',
      'Combina la práctica con la docencia como catedrático de posgrado en ESAN, Universidad del Pacífico y USIL, y ejerce como Fractional CFO de varias empresas — lo que le permite llevar al aula problemas financieros reales, no casos de manual.',
    ],
  },
  {
    id: 'mauricio-bock',
    name: 'Mauricio Bock',
    role: 'Board Member — Neurociencia Aplicada al Liderazgo y Gestión del Cambio',
    specialty: 'Neurociencia y liderazgo',
    summary: 'Neurociencia aplicada al liderazgo, el marketing y la educación, con experiencia en gestión del cambio.',
    credentials: ['Prácticas de liderazgo en 20+ países', 'Managing Director · Institute of Neurocoaching'],
    biography: [
      'De nacionalidad francesa, ha recorrido más de 20 países en búsqueda de las mejores prácticas en liderazgo.',
      'Máster en Neuropsicología por la Universidad de Alcalá (España), Licencié con Maîtrise en Ingeniería del Management por la Universidad de París y PhD candidato en Psicología por la Universidad de Buenos Aires (UBA).',
      'Investigador y divulgador de Neurociencia Aplicada al Liderazgo, el Marketing y la Educación. Managing Director del Institute of Neurocoaching. Ha sido Gerente Corporativo en Great Place to Work y Belcorp, y Gerente en DHL y Manpower.',
    ],
  },
  {
    id: 'jimena-ramirez-vinatea',
    name: 'Jimena Ramírez Vinatea',
    role: 'Board Member — Innovación Estratégica y Desarrollo de Nuevos Negocios',
    specialty: 'Innovación estratégica',
    summary: 'Innovación, marketing y desarrollo de nuevos negocios con experiencia en portafolios de tres marcas globales.',
    credentials: ['17+ años de experiencia', 'MBA · IE Business School'],
    biography: [
      'Más de 17 años de experiencia en innovación, marketing y desarrollo de nuevos negocios. MBA por IE Business School (España), certificada como Innovation Manager por el Global Innovation Management Institute, titulada en Administración y Contabilidad por la Universidad del Pacífico (5.° puesto de promoción) y formada en Inteligencia Artificial Agéntica por MIT Professional Education (2026).',
      'Desarrolló su carrera en Corporación Belcorp liderando estrategias de innovación y portafolios de producto para tres marcas globales. Entre sus logros: lanzamientos que superaron estimados de venta hasta en 217%, gestión de más de 20 proyectos anuales y portafolios con 90% de desempeño superior frente a la competencia.',
      'Docente de Design Thinking e Innovación Tecnológica en la Universidad del Pacífico.',
    ],
  },
]
