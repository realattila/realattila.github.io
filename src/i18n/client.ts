"use client";

import { useEffect, useState } from "react";
import i18next from "i18next";
import { initReactI18next, useTranslation as useTranslationOrg } from "react-i18next";
import { getOptions, i18nextNS, languages } from "./settings";

import main from "./locales/en/main.json";
import mainLayout from "./locales/en/main-layout.json";
import blogPostsEcamScript2023 from "./locales/en/blog-posts-ecam-script-2023.json";
import blogPost from "./locales/en/blog-post.json";

const runsOnServerSide = typeof window === "undefined";

// eslint-disable-next-line import/no-named-as-default-member -- bug
void i18next.use(initReactI18next).init({
  ...getOptions(),
  lng: undefined, // let detect the language on client side
  detection: {
    order: ["path", "htmlTag", "cookie", "navigator"],
  },
  preload: runsOnServerSide ? languages : [],
  resources: {
    en: {
      main,
      mainLayout,
      blogPost,
      blogPostsEcamScript2023,
    },
  },
});

export function useTranslation(
  lng = "en" as const,
  ns: (typeof i18nextNS)[number],
  options?: object & { keyPrefix?: string }
) {
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    void i18n.changeLanguage(lng);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks -- bug
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
    // eslint-disable-next-line react-hooks/rules-of-hooks -- bug
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);
    // eslint-disable-next-line react-hooks/rules-of-hooks -- bug
    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) return;
      void i18n.changeLanguage(lng);
    }, [lng, i18n]);
  }
  return ret;
}
