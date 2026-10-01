/**
 * Cifras de casos publicadas en varias páginas (home, /proyectos, Smart Selling).
 * Viven solo aquí: cada texto que las menciona las importa, así una corrección
 * del cliente se hace en un único lugar.
 */
export const aitSales = {
  before: 'S/ 100K',
  after: 'S/ 1.1M',
  months: 6,
  /** Para redacción ("en seis meses"). */
  monthsWord: 'seis',
  /** Para `alt` y lectores de pantalla. */
  spoken: 'de S/ 100 mil a S/ 1.1 millones',
} as const

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)

/** La presentación muestra ventas mensuales de junio y diciembre de 2024. */
export const aitSalesHeadline = `Ventas mensuales de ${aitSales.before} a ${aitSales.after} en ${aitSales.months} meses`
export const aitSalesPeriod = `${aitSales.months} meses`
export const aitSalesPeriodWord = `${aitSales.monthsWord} meses`
export const aitSalesPeriodTitle = capitalize(aitSalesPeriodWord)
