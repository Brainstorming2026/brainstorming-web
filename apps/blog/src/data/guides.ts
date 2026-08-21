export interface Guide {
  slug: string
  title: string
  /**
   * URL absoluta al PDF, alojado en apps/web (brainstorming.la/pdfs/*) — no
   * se duplica el archivo en apps/blog. Single source of truth: ver
   * apps/web/src/data/guides.ts para el listado completo (26 guias); aca
   * solo viven las 4 que tienen lander propia en el blog.
   */
  pdf: string
}

export const guides: Guide[] = [
  { slug: 'posicionar-marca-google', title: '¡Revelado! Cómo colocar tu marca en los primeros lugares de Google… y competir con los más grandes', pdf: 'https://brainstorming.la/pdfs/posicionar-marca-google.pdf' },
  { slug: 'mandamientos-community-manager', title: '16 mandamientos para ser un buen Community Manager', pdf: 'https://brainstorming.la/pdfs/mandamientos-community-manager.pdf' },
  { slug: 'plataformas-esenciales-ecommerce', title: '¡4 plataformas esenciales para la creación de tu Ecommerce, que necesitas conocer para empezar a vender AHORA!', pdf: 'https://brainstorming.la/pdfs/plataformas-esenciales-ecommerce.pdf' },
  { slug: 'construir-pagina-web-5-pasos', title: '¡Finalmente! Cómo construir tu página web en 5 simples pasos… que hasta un niño podría aplicar', pdf: 'https://brainstorming.la/pdfs/construir-pagina-web-5-pasos.pdf' },
]
