import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useWindowMatchMedia } from "@/hook";
import {
  DiCss3Full,
  DiDocker,
  DiGit,
  DiJavascript1,
  DiLinux,
  DiMongodb,
  DiNodejs,
  DiPostgresql,
  DiPython,
  DiReact,
} from "react-icons/di";
import { LuArrowDownToDot, LuGithub, LuLinkedin } from "react-icons/lu";
import { BsTelegram } from "react-icons/bs";

gsap.registerPlugin(useGSAP, SplitText);

export const Intro = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLHeadingElement>(null);
  const techStackIconsRef = useRef<HTMLHeadingElement>(null);
  const goDownRef = useRef<HTMLAnchorElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const { reduce } = useWindowMatchMedia();

  useGSAP(
    () => {
      const el = headingRef.current;
      if (!el) return;

      if (reduce) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }

      const split = new SplitText(el, { type: "chars" });

      gsap.set(el, { opacity: 1 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(split.chars, {
        y: 24,
        opacity: 0,
        rotateX: -60,
        transformOrigin: "50% 100%",
        filter: "blur(12px)",
        stagger: 0.045,
        duration: 2,
      });

      return () => {
        split.revert();
      };
    },
    { scope: headingRef, revertOnUpdate: true, dependencies: [] }
  );

  useGSAP(
    () => {
      const el = skillsRef.current;
      if (!el) return;

      if (reduce) {
        gsap.set(el, { opacity: 1 });
        return;
      }

      gsap.to(el, { opacity: 1, duration: 2, ease: "power2.in" });

      const tl = gsap
        .timeline({
          repeat: -1,
          repeatDelay: 2,
          defaults: { duration: 2, ease: "none" },
        })
        .to(el, { duration: 3, scrambleText: { text: "Software Engineer" } })
        .to(
          el,
          { duration: 3, scrambleText: { text: "Front-end Developer" } },
          "+=5"
        )

        .to(
          el,
          { duration: 3, scrambleText: { text: "React Specialist" } },
          "+=5"
        )
        .to(
          el,
          { duration: 3, scrambleText: { text: "UI/UX Enthusiast" } },
          "+=5"
        )
        .to(
          el,
          { duration: 3, scrambleText: { text: "Creative Problem Solver" } },
          "+=5"
        )
        .to(el, { duration: 3, scrambleText: { text: "Linux lover" } }, "+=5");

      return () => {
        tl.kill();
      };
    },
    { scope: skillsRef, dependencies: [], revertOnUpdate: true }
  );

  useGSAP(
    () => {
      const el = descriptionRef.current;
      if (!el) return;

      if (reduce) {
        gsap.set(el, { opacity: 1 });
        return;
      }

      gsap.to(el, { opacity: 1, duration: 3, ease: "power2.in" });
    },
    { scope: descriptionRef, dependencies: [], revertOnUpdate: true }
  );

  useGSAP(
    () => {
      const el = techStackIconsRef.current;
      if (!el) return;

      if (reduce) {
        gsap.set(el, { opacity: 1 });
        return;
      }

      gsap.to(el, { opacity: 1, duration: 3, delay: 1, ease: "power2.in" });
    },
    { scope: descriptionRef, dependencies: [], revertOnUpdate: true }
  );
  useGSAP(
    () => {
      const el = goDownRef.current;
      if (!el) return;

      if (reduce) {
        gsap.set(el, { opacity: 1 });
        return;
      }

      gsap.to(el, { opacity: 1, duration: 3, ease: "power3.in" });
    },
    { scope: descriptionRef, dependencies: [], revertOnUpdate: true }
  );

  useGSAP(() => {
    const el = socialRef.current;
    if (!el) return;

    if (reduce) {
      gsap.set(el, { opacity: 1 });
      return;
    }

    gsap.to(el, { opacity: 1, duration: 3, ease: "power3.in" });
  });

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-between pt-48 pb-8 gap-4 container mx-auto px-4">
      <h1
        ref={headingRef}
        className="opacity-0 m-0 text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold drop-shadow-[0px_0px_150px_rgba(255,255,255,0.3)]"
      >
        I&apos;m <span>[ATTILA]</span>
      </h1>
      <div
        ref={socialRef}
        className="flex w-full gap-8 justify-center opacity-0 flex-wrap"
      >
        <a
          href="https://github.com/realattila"
          target="_blank"
          rel="noreferrer"
        >
          <LuGithub className="w-12 h-12 hover:animate-pulse" />
        </a>
        <a
          href="https://www.linkedin.com/in/attila-peykargalou/"
          target="_blank"
          rel="noreferrer"
        >
          <LuLinkedin className="w-12 h-12 hover:animate-pulse" />
        </a>
        <a href="http://t.me/realattila" target="_blank" rel="noreferrer">
          <BsTelegram className="w-12 h-12 hover:animate-pulse" />
        </a>
      </div>

      <h2
        className="fx-text-ember fx-motion-ember bg-linear-to-r from-blue-400/90  via-blue-200/90 to-white/90 inline-block text-transparent bg-clip-text opacity-0 text-2xl sm:text-3xl m-0"
        ref={skillsRef}
      >
        Front-End Developer
      </h2>

      <div
        ref={techStackIconsRef}
        className="flex w-full gap-4 justify-center opacity-0 flex-wrap"
      >
        <DiReact className="w-7 h-7 hover:animate-bounce" />
        <DiNodejs className="w-7 h-7 hover:animate-bounce" />
        <DiJavascript1 className="w-7 h-7 hover:animate-bounce" />
        <DiLinux className="w-7 h-7 hover:animate-bounce" />
        <DiCss3Full className="w-7 h-7 hover:animate-bounce" />
        <DiPython className="w-7 h-7 hover:animate-bounce" />
        <DiGit className="w-7 h-7 hover:animate-bounce" />
        <DiDocker className="w-7 h-7 hover:animate-bounce" />
        <DiPostgresql className="w-7 h-7 hover:animate-bounce" />
        <DiMongodb className="w-7 h-7 hover:animate-bounce" />
      </div>

      <div className="flex w-full justify-center">
        <a href="#about" className="opacity-0" ref={goDownRef}>
          <button>
            <LuArrowDownToDot className="w-14 h-14 animate-bounce" />
          </button>
        </a>
      </div>
    </div>
  );
};
