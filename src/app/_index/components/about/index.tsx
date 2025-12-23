import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const title = titleRef.current;
      const shapes = shapesRef.current;
      const text = textRef.current;
      const container = containerRef.current;
      if (!title || !shapes || !text || !container) return;

      gsap.set([title, shapes, text], { autoAlpha: 0, y: 24 });

      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 2 },
        scrollTrigger: {
          trigger: container,
          start: "top bottom-=8",
          toggleActions: "play none none none",
        },
      });

      tl.to([title, shapes, text], {
        y: 0,
        autoAlpha: 1,
        stagger: 0.12,
      });
    },
    { scope: containerRef, revertOnUpdate: true, dependencies: [] }
  );
  return (
    <div
      ref={containerRef}
      className="h-full flex w-full flex-col relative items-center py-28 gap-16"
    >
      <h2 ref={titleRef} className="text-2xl sm:text-4xl text-white">
        About me
        <span className="text-blue-400 text-4xl sm:text-6xl px-1.5">.</span>
      </h2>
      <div className="flex w-full items-center p-4">
        <div
          className="hidden lg:flex flex-1 items-center relative justify-center"
          ref={shapesRef}
        >
          <div className="fx-about-div-gradient bg-[linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)] w-60 h-60 rounded"></div>
          <div className="bg-white w-60 opacity-10 h-6 skew-12 rotate-100 -ml-10"></div>
        </div>

        <div className="flex flex-col flex-1" ref={textRef}>
          <div className="m-0 text-white/80 flex flex-col gap-4 text-lg drop-shadow-[0px_0px_14px_rgba(255,255,255,0.3)]">
            <p>
              I’m a
              <strong className="text-white px-1">software engineer</strong>
              who loves turning complex ideas into clean, delightful web
              experiences, with seven years of hands‑on product work.
            </p>
            <p>
              I build with
              <strong className="text-white px-1">React</strong>,
              <strong className="text-white px-1">TypeScript</strong>,
              <strong className="text-white px-1">Nodejs</strong> and
              <strong className="text-white px-1">JavaScript</strong>, and I
              care deeply about fast, accessible interfaces and code that stays
              easy to evolve. I enjoy mentoring and creating calm, productive
              teams.
            </p>
            <p>
              I’m at my best when I’m
              <strong className="text-white px-1">
                crafting readable, resilient code
              </strong>
              ,<strong className="text-white px-1">collaborating</strong> with
              others, and
              <strong className="text-white px-1">learning</strong> what’s next.
            </p>
            <p>
              I value
              <strong className="text-white px-1">clear communication</strong>,
              <strong className="text-white px-1">thoughtful details</strong>,
              and shipping work that creates
              <strong className="text-white px-1">
                real, measurable impact
              </strong>
              for users and teams. I care about the full product journey from
              early discovery to
              <strong className="text-white px-1">reliable delivery</strong>,
              and I like to leave systems, processes, and people stronger than I
              found them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
