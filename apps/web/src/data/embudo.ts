export interface EmbudoPaso {
  title: string
  description: string
  channels: string
  bgClass: string
  textColor: string
}

export const embudoPasos: EmbudoPaso[] = [
  {
    title: 'DAMOS A CONOCER TU MARCA',
    description: 'Alcanzar a la mayor cantidad de usuarios para que vean y conozcan la marca.',
    channels: 'Social Media Ads, PR, Medios tradicionales. Display, Youtube, Brand days',
    bgClass: 'bg-mist-100',
    textColor: 'text-ink',
  },
  {
    title: 'GENERAMOS TRÁFICO Y RESOLVEMOS SUS DUDAS',
    description: 'Interactuar con los usuarios que están interesados para generar un vínculo emocional entre ellos y la marca.',
    channels: 'Social Media Feed, Social Media Ads, SEO, Google Search Ads, Blogs, Influencers, Mailing, Retargeting, Web/Landing.',
    bgClass: 'bg-mist-200',
    textColor: 'text-ink',
  },
  {
    title: 'CERRAMOS VENTAS',
    description: 'Convertir los leads de la fase anterior en clientes empleando mensajes más directos y con intención de venta.',
    channels: 'Social Media Ads, Google Search Ads, Google Display Ads, Mailing, Retargeting, Web/landing.',
    bgClass: 'bg-navy',
    textColor: 'text-white',
  },
  {
    title: 'FIDELIZAMOS Y GENERAMOS RECOMENDACIÓN',
    description: 'Conseguir que los consumidores que ya adquirieron el producto/servicio se vuelvan clientes habituales y recomienden el producto.',
    channels: 'Programas de lealtad, Chat en vivo/Chatbot, Mailing, CRM, feed posts, Affiliate, Community Managing',
    bgClass: 'bg-gradient-to-br from-primary to-navy',
    textColor: 'text-white',
  },
]
