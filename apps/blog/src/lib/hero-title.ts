/**
 * Tamaño del título de la portada según su largo: un título corto luce grande, uno de dos líneas largas se achica para
 * no ocupar media pantalla. Devuelve clases completas de Tailwind (así el compilador las detecta). `narrow`: el título
 * comparte la fila con una imagen (portada dividida), así que va un paso más chico.
 */
export type TitleLayout = 'wide' | 'narrow'

const SIZES = {
  wide: {
    short: 'text-[1.875rem] sm:text-4xl lg:text-5xl',
    medium: 'text-[1.625rem] sm:text-3xl lg:text-[2.5rem]',
    long: 'text-2xl sm:text-[1.75rem] lg:text-4xl',
  },
  narrow: {
    short: 'text-[1.875rem] sm:text-4xl lg:text-[2.5rem]',
    medium: 'text-[1.625rem] sm:text-3xl lg:text-4xl',
    long: 'text-2xl sm:text-[1.75rem] lg:text-3xl',
  },
} as const

export function heroTitleClass(title: string, layout: TitleLayout = 'wide'): string {
  const length = title.trim().length
  const size = length <= 60 ? 'short' : length <= 110 ? 'medium' : 'long'
  return SIZES[layout][size]
}
