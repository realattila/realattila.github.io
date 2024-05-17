import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions, i18nextNS } from "./settings";

import main from "./locales/en/main.json";
import mainLayout from "./locales/en/main-layout.json";
import blogPostsEcamScript2023 from "./locales/en/blog-posts-ecam-script-2023.json";
import blogPost from "./locales/en/blog-post.json";
import pagesHome from "./locales/en/pages-home.json";

const initI18next = async (lng: string | undefined, ns: string | undefined) => {
  const i18nInstance = createInstance({
    resources: {
      en: {
        main,
        mainLayout,
        blogPost,
        blogPostsEcamScript2023,
        pagesHome,
      },
    },
  });
  await i18nInstance.use(initReactI18next).init(getOptions(lng, ns));
  return i18nInstance;
};

export async function serverTranslation(
  lng = "en" as const,
  ns: (typeof i18nextNS)[number],
  options?: object & { keyPrefix?: string }
) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options?.keyPrefix),
    i18n: i18nextInstance,
  };
}
