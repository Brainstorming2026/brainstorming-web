import { HUBSPOT_ACCESS_TOKEN } from 'astro:env/server'
import { captureError } from '@/lib/observability'

const BASE_URL = 'https://api.hubapi.com/crm/v3/objects/contacts'

export interface HubspotContact {
  email: string
  firstname?: string
  phone?: string
  /** Fuente del lead: 'contacto' | 'guia-practica'. Propiedad custom en HubSpot. */
  lead_source: string
  /** Solo para leads de guias — que guia descargo. Propiedad custom en HubSpot. */
  guide_title?: string
  message?: string
}

/**
 * Crea el contacto en HubSpot; si ya existe (409), actualiza sus propiedades.
 * Nunca lanza: devuelve boolean para que el caller decida como fallar.
 */
export async function upsertContact(contact: HubspotContact): Promise<boolean> {
  const properties = Object.fromEntries(
    Object.entries(contact).filter(([, v]) => v !== undefined),
  )

  const createRes = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ properties }),
  })

  if (createRes.ok)
    return true

  // 409 = el contacto ya existe (dedupe por email) → actualizar en vez de crear.
  if (createRes.status === 409) {
    const updateRes = await fetch(`${BASE_URL}/${encodeURIComponent(contact.email)}?idProperty=email`, {
      method: 'PATCH',
      headers: {
        'authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({ properties }),
    })
    if (!updateRes.ok) {
      captureError(new Error('HubSpot update failed'), {
        scope: 'hubspot',
        extra: { status: updateRes.status, body: await updateRes.text() },
      })
    }
    return updateRes.ok
  }

  captureError(new Error('HubSpot create failed'), {
    scope: 'hubspot',
    extra: { status: createRes.status, body: await createRes.text() },
  })
  return false
}
