import { defaultLang } from './config'
import { dictionaries, type Language, type Namespace } from './dictionaries'

/** Language from pathname: "/es/…" → es, else default (en, unprefixed). */
export function getLang(url: URL): Language {
  const [, seg] = url.pathname.split('/')
  return seg === 'es' ? 'es' : (defaultLang as Language)
}

/** Locale-prefixed path: en → "/", es → "/es/…". */
export function localizePath(path: string, lang: Language): string {
  if (lang === defaultLang)
    return path
  return path === '/' ? `/${lang}` : `/${lang}${path}`
}

/** Typed access: autocompletion + build error on missing key. */
export function useTranslations<N extends Namespace>(lang: Language, ns: N) {
  return dictionaries[lang][ns]
}
