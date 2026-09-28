// Convierte los logos fuente de docs/Logos Clientes Brain 2026 en assets web:
//   - recorta el aire (transparente o blanco) alrededor de la marca
//   - exporta a webp con el slug como nombre de archivo
// Salida: src/assets/clientes/logos/<slug>.webp
//
// Para agregar un cliente: suelta el PNG en la carpeta docs y corre
//   node scripts/build-client-logos.mjs
// Luego (opcional) registra su nombre en src/assets/clientes/index.ts.
import { mkdir, readdir, rm } from 'node:fs/promises'
import { basename, extname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = resolve(fileURLToPath(import.meta.url), '../..')
const srcDir = resolve(root, '../../docs/Logos Clientes Brain 2026')
const outDir = resolve(root, 'src/assets/clientes/logos')

// Versiones descartadas cuando el cliente tiene más de un archivo.
const SKIP = new Set(['Amado Cacao v2.png', 'Limagas Logo.jpg'])
// Nombre de archivo -> slug, cuando no basta con normalizar el nombre.
const SLUG = {
  'Alum': 'alumspazio',
  'Bd': 'black-decker',
  'Dg': 'dg',
  'Digital F': 'digital-factoring',
  'GG': 'gg-joyeros',
  'Gsk': 'gsk',
  'JW': 'jw-marriott',
  'LS': 'lucky-strike',
  'Latin A': 'latin-american-outdoors',
  'Sbd': 'stanley-black-decker',
  'Sideperu': 'siderperu',
  'Ted Lima': 'tedx-lima',
  'Ted X': 'tedx',
}

const slugify = s => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

async function contentBox(input) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const { width: w, height: h } = info
  let x0 = w
  let y0 = h
  let x1 = -1
  let y1 = -1
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4
      const visible = data[i + 3] > 24 && Math.min(data[i], data[i + 1], data[i + 2]) < 240
      if (!visible)
        continue
      if (x < x0)
        x0 = x
      if (x > x1)
        x1 = x
      if (y < y0)
        y0 = y
      if (y > y1)
        y1 = y
    }
  }
  if (x1 < 0)
    return { left: 0, top: 0, width: w, height: h }
  return { left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 }
}

await rm(outDir, { recursive: true, force: true })
await mkdir(outDir, { recursive: true })

for (const file of (await readdir(srcDir)).sort()) {
  if (SKIP.has(file) || !/\.(?:png|jpe?g|webp)$/i.test(file))
    continue
  const stem = basename(file, extname(file))
  const slug = SLUG[stem] ?? slugify(stem)
  const input = join(srcDir, file)
  const box = await contentBox(input)
  const pad = Math.round(Math.max(box.width, box.height) * 0.02)
  const meta = await sharp(input).metadata()
  const region = {
    left: Math.max(0, box.left - pad),
    top: Math.max(0, box.top - pad),
  }
  region.width = Math.min(meta.width - region.left, box.width + pad * 2)
  region.height = Math.min(meta.height - region.top, box.height + pad * 2)
  const out = await sharp(input)
    .extract(region)
    .resize({ width: 480, height: 480, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 90, alphaQuality: 100 })
    .toFile(join(outDir, `${slug}.webp`))
  console.log(`${slug.padEnd(26)} ${out.width}x${out.height}`)
}
