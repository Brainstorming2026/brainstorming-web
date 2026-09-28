export interface OfficeLocation {
  name: string
  address: string
  longitude: number
  latitude: number
  zoom: number
}

export const officeLocation: OfficeLocation = {
  name: 'Brainstorming',
  address: 'San Fernando 165, Miraflores, Lima',
  // Pin de Google Maps de la ficha "San Fernando 165" (clic derecho → coordenadas).
  // https://maps.app.goo.gl/EH2DfyQYymEW831E7
  longitude: -77.026722,
  latitude: -12.130415,
  zoom: 15.5,
}
