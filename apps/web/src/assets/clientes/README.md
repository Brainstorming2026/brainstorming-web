# Logos de clientes

Fuente: `docs/Logos Clientes Brain 2026/` (PNG originales).
Salida: `logos/<slug>.webp`, generada con `node scripts/build-client-logos.mjs`
(recorta el aire y convierte a webp).

- El muro (`components/common/ClientWall.astro`, home y /proyectos) ordena alfabéticamente por nombre; `index.ts` la arma sola desde `logos/`.
- Agregar cliente: soltar el PNG en `docs/`, correr el script, y si el nombre no sale del slug, sumarlo a `NAMES` en `index.ts`.
- Logos dentro de un bloque de color: el script los lista al final; van en `BOXED` (se achican) hasta tener versión transparente.
- Descartados por duplicado: `Amado Cacao v2.png`, `Limagas Logo.jpg`.
- AIT Capital, Nordic, ETNA y Futura Wealth no están en la carpeta histórica; se agregan desde `data/new-projects.ts`.
- Los `customer-*.webp` que quedan los usan `Roas.astro` y `proyectosDetalle.ts`.
