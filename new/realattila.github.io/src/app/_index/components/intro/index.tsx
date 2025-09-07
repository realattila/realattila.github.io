import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useWindowMatchMedia } from "@/hook";

gsap.registerPlugin(useGSAP, SplitText);

export const Intro = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLHeadingElement>(null);

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
        .to(el, { duration: 3, scrambleText: { text: "Front-End Developer" } })
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

  return (
    <section
      id="intro"
      className="relative pt-60 w-full flex flex-col items-center justify-center sm:gap-12 container mx-auto px-4"
    >
      <h1
        ref={headingRef}
        className="opacity-0 m-0 text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold drop-shadow-[0px_0px_150px_rgba(255,255,255,0.3)]"
      >
        I&apos;m <span>[ATTILA]</span>
      </h1>
      <h2
        className="bg-gradient-to-r from-blue-300/90  via-blue-100/90 to-white/90 inline-block text-transparent bg-clip-text opacity-0 text-2xl sm:text-3xl m-0"
        ref={skillsRef}
      >
        Front-End Developer
      </h2>
      <p
        ref={descriptionRef}
        className="m-0 text-white/60 text-center text-lg drop-shadow-[0px_0px_14px_rgba(255,255,255,0.3)] opacity-0"
      >
        I craft modern, responsive web interfaces that feel fast, accessible,
        and effortless. Using React, Next.js, and TypeScript, I focus on clean,
        semantic code, strong performance, and close collaboration with design
        to turn ideas into clear interaction patterns and maintainable, scalable
        systems.
      </p>
    </section>
  );
};
