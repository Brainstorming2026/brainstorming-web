import en from './en'
import es from './es'

/**
 * en = source of truth for the shape (namespaces + keys) — it's the live,
 * unprefixed locale for this site. If es is missing a namespace or key,
 * TypeScript errors HERE at build time.
 */
type DeepMirror<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly DeepMirror<U>[]
    : { [K in keyof T]: DeepMirror<T[K]> }

// If es/ doesn't match the shape of en/ → TypeScript errors HERE.
const _esParity: DeepMirror<typeof en> = es
void _esParity

export const dictionaries = { en, es } as const
export type Language = keyof typeof dictionaries
export type Namespace = keyof typeof en
