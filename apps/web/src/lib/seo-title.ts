const BRAND = ' | Brainstorming'
const MAX = 60

/**
 * Case-study <title> with the client and what we did, kept under Google's ~60
 * characters: "Client: caso de A y B | Brainstorming", then fewer services, then generic.
 */
export function caseStudyTitle(client: string, services: string[]) {
  const names = services.map(service => service.trim()).filter(Boolean)
  const candidates = [
    names.length > 1 ? `${client}: caso de ${names.slice(0, -1).join(', ')} y ${names.at(-1)}${BRAND}` : '',
    names.length > 0 ? `${client}: caso de ${names[0]}${BRAND}` : '',
    `${client}: caso de éxito${BRAND}`,
  ]
  return candidates.find(title => title && title.length <= MAX) ?? `${client}${BRAND}`
}
