"use client";

import { clsx } from "clsx";
import styles from "./styles.module.css";
import { useEffect, useRef } from "react";

import SkillBar from "./skill-bar";
import Icons from "@/components/icons";
import { useTranslation } from "@/i18n/client";

export default function HomePageAboutMe() {
  const elementRef = useRef<HTMLParagraphElement>(null);
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useTranslation("en", "pagesHome", { keyPrefix: "aboutMe" });

  const applyStyle = () => {
    skillBarsRef.current.forEach((item, _index) => {
      if (item) {
        item.style.setProperty("--progress", item.style.getPropertyValue("--skill"));
      }
    });
  };

  useEffect(() => {
    const element = elementRef.current;

    const handleScroll = () => {
      if (!element) return;
      const offset = 230;
      const rect = element.getBoundingClientRect();
      const inView =
        rect.top + offset >= 0 &&
        rect.left >= 0 &&
        rect.bottom + offset <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);

      if (inView) {
        applyStyle();
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Check initially in case the element is already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      id='#about_me'
      className='tw-flex tw-justify-center tw-min-h-[calc(100dvh-64px)] tw-py-8 tw-pt-20 tw-items-center tw-overflow-hidden'>
      <div className='tw-container tw-flex tw-flex-col tw-gap-8'>
        <div className={clsx(["tw-text-3xl sm:tw-text-5xl xl:tw-text-7xl", styles.wrapperHead])}>
          <h2 className={clsx([styles.head, styles.headAnimated])}>{t("title")}</h2>
          <span className={styles.headClone}>{t("title")}</span>
        </div>
        <div className='tw-flex tw-w-full tw-justify-center tw-mt-8 tw-px-4 tw-flex-col tw-gap-12 md:tw-gap-16'>
          <p ref={elementRef} className={clsx(["lg:tw-text-lg sm:tw-text-base xl:tw-text-xl", styles.head])}>
            {t("content")}
          </p>

          <div className='tw-grid tw-grid-cols-12 md:tw-gap-4'>
            <div className='tw-col-span-11 md:tw-col-span-6 lg:tw-col-span-5 xl:tw-col-span-4 xxl:tw-col-span-3  tw-mb-12 md:tw-mb-0 tw-relative'>
              <div className={clsx([styles.gradient, "tw-absolute -tw-z-10"])}></div>
              {/* <div className='tw-absolute tw-w-full tw-h-full tw-bg-blue-400 tw-opacity-50 -tw-left-4 -tw-top-4 -tw-z-10'></div> */}
              <div className='tw-flex tw-flex-col tw-gap-4'>
                <h4 className={clsx([styles.head, "tw-text-lg"])}>
                  <span>{t("intro.name.title")}</span> <span>{t("intro.name.content")}</span>
                </h4>
                <h4 className={clsx([styles.head, "tw-text-lg"])}>
                  {" "}
                  <span>{t("intro.expert.title")}</span> <span>{t("intro.expert.content")}</span>
                </h4>
                <h4 className={clsx([styles.head, "tw-text-lg"])}>
                  <span>{t("intro.email.title")}</span>
                  <a href='mailto:realattila@pm.me'>{t("intro.email.content")}</a>
                </h4>
                <h4 className={clsx([styles.head, "tw-text-lg tw-flex tw-items-center tw-gap-1"])}>
                  <span>{t("intro.linkedIn.title")}</span>
                  <a target='_blank' href='https://www.linkedin.com/in/attila-peykargalou/'>
                    <Icons.Linkedin width={32} height={32} className='tw-fill-blue-500' />
                  </a>
                </h4>
                <h4 className={clsx([styles.head, "tw-text-lg tw-flex tw-items-center tw-gap-1"])}>
                  <span>{t("intro.socialMedia.title")}</span>
                  <div className='tw-flex tw-gap-1 tw-items-center'>
                    <a target='_blank' href='https://www.instagram.com/realattila/'>
                      <Icons.Instagram width={36} height={36} />
                    </a>
                    <a target='_blank' href='https://t.me/realattila'>
                      <Icons.Telegram width={32} height={32} className='tw-fill-blue-500' />
                    </a>
                  </div>
                </h4>
              </div>
            </div>
            <div className='tw-col-span-11 tw-flex tw-flex-col tw-gap-12 xl:tw-col-span-8 xxl:tw-col-span-9 lg:tw-col-span-7 md:tw-col-span-6'>
              <SkillBar
                ref={(ref) => {
                  skillBarsRef.current.push(ref);
                }}
                colorClassName='before:tw-shadow-yellow-400 before:tw-bg-yellow-400'
                skillPercent={100}
                skillName={t("skills.htmlAndCss")}
              />
              <SkillBar
                ref={(ref) => {
                  skillBarsRef.current.push(ref);
                }}
                colorClassName='before:tw-shadow-blue-400 before:tw-bg-blue-400 '
                skillPercent={100}
                skillName={t("skills.javaScriptAndTypescriptAndReact")}
              />
              <SkillBar
                ref={(ref) => {
                  skillBarsRef.current.push(ref);
                }}
                colorClassName='before:tw-shadow-green-400 before:tw-bg-green-400 '
                skillPercent={70}
                skillName={t("skills.nodeJsAndExpressJsAndMongoDb")}
              />
              <SkillBar
                ref={(ref) => {
                  skillBarsRef.current.push(ref);
                }}
                colorClassName='before:tw-shadow-orange-400 before:tw-bg-orange-400 '
                skillPercent={95}
                skillName={t("skills.git")}
              />
              <SkillBar
                ref={(ref) => {
                  skillBarsRef.current.push(ref);
                }}
                colorClassName='before:tw-shadow-violet-400 before:tw-bg-violet-400 '
                skillPercent={95}
                skillName={t("skills.problemSolvingAndCreativity")}
              />
              <SkillBar
                ref={(ref) => {
                  skillBarsRef.current.push(ref);
                }}
                colorClassName='before:tw-shadow-rose-400 before:tw-bg-rose-400 '
                skillPercent={100}
                skillName={t("skills.softSkillAndTeamPlayer")}
              />
              <SkillBar
                ref={(ref) => {
                  skillBarsRef.current.push(ref);
                }}
                colorClassName='before:tw-shadow-yellow-400 before:tw-bg-yellow-400'
                skillPercent={50}
                skillName={t("skills.linuxAndDevops")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
