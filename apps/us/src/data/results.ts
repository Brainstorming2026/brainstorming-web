import alumspazio from '@/assets/results/alumspazio.webp'
import grin from '@/assets/results/grin.webp'
import senati from '@/assets/results/senati.webp'
import stanley from '@/assets/results/stanley-black-decker.webp'
import viveParacas from '@/assets/results/3.png'

/** Source: approved PDF. Values and brands are shared by EN and ES. */
export const executionResults = [
  { id: 'alumspazio', name: 'AlumSpazio', logo: alumspazio, value: '161', metric: 'roas' },
  { id: 'grin', name: 'Grin', logo: grin, value: '76', metric: 'roas' },
  { id: 'senati', name: 'SENATI', logo: senati, value: '+14%', metric: 'grossRevenue' },
  { id: 'viveParacas', name: 'Vive Paracas', logo: viveParacas, value: '41', metric: 'roas' },
  { id: 'stanley', name: 'Stanley Black & Decker', logo: stanley, value: '100%', metric: 'annualLeads' },
] as const
