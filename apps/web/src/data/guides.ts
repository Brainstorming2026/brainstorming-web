import type { ImageMetadata } from 'astro'

import img1 from '@/assets/guides/8-secretos-crear-tu-logo.webp'
import img10 from '@/assets/guides/checklist-tienda-virtual.webp'
import img26 from '@/assets/guides/conseguir-clientes-en-linea.webp'
import img8 from '@/assets/guides/consejos-one-page-efectiva.webp'
import img4 from '@/assets/guides/construir-pagina-web-5-pasos.webp'
import img17 from '@/assets/guides/contenido-impactante-instagram.webp'
import img22 from '@/assets/guides/contratar-equipo-trabajo-exitoso.webp'
import img21 from '@/assets/guides/errores-marketing-digital.webp'
import img20 from '@/assets/guides/historias-instagram.webp'
import img12 from '@/assets/guides/indicadores-campana-digital.webp'
import img15 from '@/assets/guides/kpi-facebook.webp'
import img23 from '@/assets/guides/likes-no-generan-ventas.webp'
import img18 from '@/assets/guides/mandamientos-community-manager.webp'
import img2 from '@/assets/guides/medidas-imagenes-facebook.webp'
import img3 from '@/assets/guides/medidas-imagenes-instagram.webp'
import img19 from '@/assets/guides/mejorar-estrategia-redes-sociales.webp'
import img7 from '@/assets/guides/pasos-lanzamiento-ecommerce.webp'
import img13 from '@/assets/guides/plan-de-medios-perfecto.webp'
import img16 from '@/assets/guides/plantilla-buyer-persona.webp'
import img14 from '@/assets/guides/plantilla-campanas-busqueda-google.webp'
import img11 from '@/assets/guides/plantilla-publico-objetivo.webp'
import img9 from '@/assets/guides/plantillas-landing-page.webp'
import img6 from '@/assets/guides/plataformas-esenciales-ecommerce.webp'
import img5 from '@/assets/guides/posicionar-marca-google.webp'
import img24 from '@/assets/guides/preguntas-contratar-proveedor.webp'
import img25 from '@/assets/guides/prospectos-aliados-de-por-vida.webp'

export type GuideCategory
  = | 'branding'
    | 'desarrollo-web'
    | 'inbound-marketing'
    | 'optimizacion'
    | 'inbound-sales'

export interface Guide {
  slug: string
  image: ImageMetadata
  category: GuideCategory
  title: string
  /** Ruta al PDF en public/pdfs. Se sirve tal cual como href de descarga. */
  pdf: string
  featured?: boolean
}

export const categoryLabels: Record<GuideCategory, string> = {
  'branding': 'Branding',
  'desarrollo-web': 'Desarrollo web',
  'inbound-marketing': 'Inbound Marketing',
  'optimizacion': 'Optimización de Procesos y CX',
  'inbound-sales': 'Inbound Sales',
}

// TODO: plantilla-publico-objetivo, plantilla-campanas-busqueda-google y
// plantilla-buyer-persona aun no tienen PDF propio en public/pdfs — pautan
// temporalmente a un PDF existente hasta que Manuel confirme el mapeo real.
export const guides: Guide[] = [
  { slug: '8-secretos-crear-tu-logo', image: img1, category: 'branding', title: '8 secretos que tu diseñador nunca te dirá al momento de crear tu logo (el #6 lo aplicó Coca Cola)', pdf: '/pdfs/8-secretos-crear-tu-logo.pdf', featured: true },
  { slug: 'medidas-imagenes-facebook', image: img2, category: 'branding', title: 'Medidas de imágenes en Facebook', pdf: '/pdfs/medidas-imagenes-facebook.pdf' },
  { slug: 'medidas-imagenes-instagram', image: img3, category: 'branding', title: 'Medidas de imágenes en Instagram', pdf: '/pdfs/medidas-imagenes-instagram.pdf' },
  { slug: 'construir-pagina-web-5-pasos', image: img4, category: 'desarrollo-web', title: '¡Finalmente! Cómo construir tu página web en 5 simples pasos… que hasta un niño podría aplicar', pdf: '/pdfs/construir-pagina-web-5-pasos.pdf' },
  { slug: 'posicionar-marca-google', image: img5, category: 'desarrollo-web', title: '¡Revelado! Cómo colocar tu marca en los primeros lugares de Google… y competir con los más grandes', pdf: '/pdfs/posicionar-marca-google.pdf' },
  { slug: 'plataformas-esenciales-ecommerce', image: img6, category: 'desarrollo-web', title: '¡4 plataformas esenciales para la creación de tu Ecommerce, que necesitas conocer para empezar a vender AHORA!', pdf: '/pdfs/plataformas-esenciales-ecommerce.pdf' },
  { slug: 'pasos-lanzamiento-ecommerce', image: img7, category: 'desarrollo-web', title: '8 pasos cruciales a tener en cuenta para el lanzamiento de tu Ecommerce… ¡sin morir en el intento!', pdf: '/pdfs/pasos-lanzamiento-ecommerce.pdf', featured: true },
  { slug: 'consejos-one-page-efectiva', image: img8, category: 'desarrollo-web', title: '8 consejos fundamentales para desarrollar una One Page efectiva, que tus usuarios amarán', pdf: '/pdfs/consejos-one-page-efectiva.pdf' },
  { slug: 'plantillas-landing-page', image: img9, category: 'desarrollo-web', title: '15 Plantillas gratuitas para crear una landing page', pdf: '/pdfs/plantillas-landing-page.pdf' },
  { slug: 'checklist-tienda-virtual', image: img10, category: 'desarrollo-web', title: 'Checklist de 10 elementos indispensables en tu tienda virtual', pdf: '/pdfs/checklist-tienda-virtual.pdf' },
  { slug: 'plantilla-publico-objetivo', image: img11, category: 'inbound-marketing', title: 'Plantilla que te ayudará a definir tu público objetivo', pdf: '/pdfs/8-secretos-crear-tu-logo.pdf' },
  { slug: 'indicadores-campana-digital', image: img12, category: 'inbound-marketing', title: '¡7 indicadores esenciales que NO debes ignorar, si quieres garantizar el éxito de tu campaña digital!', pdf: '/pdfs/indicadores-campana-digital.pdf' },
  { slug: 'plan-de-medios-perfecto', image: img13, category: 'inbound-marketing', title: '¿Cómo elaborar un plan de medios perfecto?', pdf: '/pdfs/plan-de-medios-perfecto.pdf', featured: true },
  { slug: 'plantilla-campanas-busqueda-google', image: img14, category: 'inbound-marketing', title: 'Plantilla para organizar tus campañas en la red de búsqueda de Google', pdf: '/pdfs/pasos-lanzamiento-ecommerce.pdf' },
  { slug: 'kpi-facebook', image: img15, category: 'inbound-marketing', title: 'Los KPI más importantes de Facebook', pdf: '/pdfs/kpi-facebook.pdf' },
  { slug: 'plantilla-buyer-persona', image: img16, category: 'inbound-marketing', title: 'Plantilla para crear un Buyer Persona', pdf: '/pdfs/consejos-one-page-efectiva.pdf' },
  { slug: 'contenido-impactante-instagram', image: img17, category: 'inbound-marketing', title: '¡5 tips para crear contenido impactante en Instagram, que te harán generar miles de leads!', pdf: '/pdfs/contenido-impactante-instagram.pdf' },
  { slug: 'mandamientos-community-manager', image: img18, category: 'inbound-marketing', title: '16 mandamientos para ser un buen Community Manager', pdf: '/pdfs/mandamientos-community-manager.pdf' },
  { slug: 'mejorar-estrategia-redes-sociales', image: img19, category: 'inbound-marketing', title: '5 tips para mejorar tu estrategia en redes sociales', pdf: '/pdfs/mejorar-estrategia-redes-sociales.pdf' },
  { slug: 'historias-instagram', image: img20, category: 'inbound-marketing', title: '7 ideas para inspirar tus historias de Instagram', pdf: '/pdfs/historias-instagram.pdf' },
  { slug: 'errores-marketing-digital', image: img21, category: 'inbound-marketing', title: '5 errores en el Marketing Digital, que debes dejar de cometer AHORA', pdf: '/pdfs/errores-marketing-digital.pdf' },
  { slug: 'contratar-equipo-trabajo-exitoso', image: img22, category: 'inbound-marketing', title: 'La receta infalible de Google para contratar un equipo de trabajo exitoso', pdf: '/pdfs/contratar-equipo-trabajo-exitoso.pdf' },
  { slug: 'likes-no-generan-ventas', image: img23, category: 'inbound-marketing', title: '¿Necesitas más likes en tus post para generar más ventas, cierto? ¡FALSO!', pdf: '/pdfs/likes-no-generan-ventas.pdf' },
  { slug: 'preguntas-contratar-proveedor', image: img24, category: 'inbound-marketing', title: 'Impactante reporte revela 5 preguntas que deberías realizar antes de contratar a un proveedor de servicios digitales', pdf: '/pdfs/preguntas-contratar-proveedor.pdf' },
  { slug: 'prospectos-aliados-de-por-vida', image: img25, category: 'inbound-sales', title: '7 infalibles pasos para hacer de tus prospectos un aliado de por vida', pdf: '/pdfs/prospectos-aliados-de-por-vida.pdf' },
  { slug: 'conseguir-clientes-en-linea', image: img26, category: 'inbound-sales', title: '5 sencillos pasos para conseguir más clientes en línea, ¡que harán estallar tus ventas!', pdf: '/pdfs/conseguir-clientes-en-linea.pdf' },
]
