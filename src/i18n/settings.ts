export const fallbackLng = "en";
export const languages = [fallbackLng] as const;
export const defaultNS = "translation";
export const i18nextNS = ["main"] as const;
export type i18nextResources = Record<keyof typeof languages, Record<keyof typeof i18nextNS, any>>;

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
