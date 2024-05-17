"use client";

import TypingEffect from "@/components/common/animations/typing-effect";
import PathDrawingAnimation from "./title-path-drawn";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/i18n/client";
import styles from "./styles.module.css";

export default function MainPageHero() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const [afterInitialPage, setAfterInitialPage] = useState(false);
  const [, setDocumentWidth] = useState(window.innerWidth);
  const { t } = useTranslation("en", "pagesHome", { keyPrefix: "hero" });

  useEffect(() => {
    const handleResize = () => {
      setDocumentWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setAfterInitialPage(true);
  }, []);

  return (
    <section className='tw-h-[calc(100dvh-64px)] tw-flex tw-justify-center tw-items-center tw-relative'>
      <div className='tw-flex tw-flex-col tw-gap-8 tw-w-full tw-items-center '>
        <div className='tw-relative '>
          {afterInitialPage ? (
            <div className='tw-p-3 tw-absolute'>
              <PathDrawingAnimation width={(h1Ref.current?.getBoundingClientRect().width || 1) * 0.95} />
            </div>
          ) : null}

          <h1
            className='tw-w-fit tw-text-5xl sm:tw-text-7xl xl:tw-text-9xl tw-font-medium'
            style={{ visibility: "hidden" }}
            ref={h1Ref}>
            {t("title")}
          </h1>
        </div>

        <h2 className='tw-w-fit tw-text-3xl sm:tw-text-5xl xl:tw-text-7xl'>
          <TypingEffect speed={0.1} text={t("description")} repeat />
        </h2>
      </div>

      <div className='tw-absolute tw-left-0 tw-top-0 tw-w-full tw-h-full tw-overflow-hidden'>
        <svg
          className={styles.spinner}
          width='100%'
          height='100%'
          viewBox='0 0 66 66'
          xmlns='http://www.w3.org/2000/svg'>
          <circle fill='transparent' stroke-width='2' cx='60' cy='33' r='30' stroke='url(#gradient)'></circle>
          <svg
            className={styles.dot}
            width='5px'
            height='5px'
            viewBox='0 0 66 66'
            xmlns='http://www.w3.org/2000/svg'
            x='37'
            y='1.2'>
            <circle className='tw-fill-sky-300' cx='33' cy='33' r='8'></circle>
          </svg>
          {/* <svg
            className={styles.dot}
            width='5px'
            height='5px'
            viewBox='00 0 66 66'
            xmlns='http://www.w3.org/2000/svg'
            x='36'
            y='60'>
            <circle className='tw-fill-sky-300' cx='33' cy='33' r='8'></circle>
          </svg> */}
        </svg>
      </div>
    </section>
  );
}
