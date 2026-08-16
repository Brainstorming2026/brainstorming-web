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
  longitude: -77.0311,
  latitude: -12.1194,
  zoom: 15.5,
}
