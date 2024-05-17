"use client";

import TypingEffect from "@/components/common/animations/typing-effect";
import PathDrawingAnimation from "./title-path-drawn";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/i18n/client";

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
    <section>
      <div className='tw-flex tw-flex-col tw-gap-8 tw-w-full tw-items-center tw-mt-8 lg:tw-mt-16'>
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
    </section>
  );
}
