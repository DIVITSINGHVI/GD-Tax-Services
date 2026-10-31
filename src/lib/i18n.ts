import type { L, Lang } from "./content";

/**
 * The site is English-only for now. Components still read copy through `t()` and `lang`,
 * so another language can be added later by extending `Lang` in `content.ts`
 * and making this hook return the visitor's chosen language.
 */
const lang: Lang = "en";
const t = (value: L) => value[lang];

export function useLang() {
  return { lang, t };
}
