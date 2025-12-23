import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useWindowMatchMedia } from "@/hook";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const experienceItems = [
  {
    role: "Front-End Team Lead",
    company: "Payping.ir",
    location: "Tehran, Iran",
    period: "Oct 2023 – Present",
    highlights: [
      "Led the rewrite and improvement of all front-end projects and the design system using React for a more scalable, maintainable codebase.",
      "Reduced the PWA size by 4% with code splitting, performance work, and a streamlined Git process.",
    ],
    tags: [
      "React",
      "Javascript",
      "Typescript",
      "Next.js",
      "Nodejs",
      "Git",
      "Docker",
      "Python",
    ],
  },
  {
    role: "Senior Front-End Developer",
    company: "Deltafx.com",
    location: "Mashhad, Iran",
    period: "Sep 2021 – Aug 2023",
    highlights: [
      "Led and built React/TypeScript applications that grew CRM users by 120%, adding 1,200 new customers and $3k revenue.",
      "Researched blockchain and smart contract concepts and built an automated USDT payment system with Node.js, saving 15% of accounting time.",
    ],
    tags: [
      "React",
      "Javascript",
      "Typescript",
      "Nodejs",
      "Nestjs",
      "MongoDB",
      "Git",
      "Docker",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Ferdowsi.cloud",
    location: "Mashhad, Iran",
    period: "Dec 2020 – Sep 2021",
    highlights: [
      "Migrated a large JavaScript codebase to TypeScript, improving stability and cutting bug-fix time by 20%.",
      "Redesigned the customer portal with designers to improve UX and increase cloud service use by 43%.",
    ],
    tags: [
      "React",
      "Javascript",
      "Typescript",
      "Next.js",
      "Nodejs",
      "Git",
      "Docker",
    ],
  },
  {
    role: "Co-Founder & Front-End Developer",
    company: "Motabare.ir",
    location: "Mashhad, Iran",
    period: "Jun 2021 – Jul 2022",
    highlights: [
      "Co-founded an e-commerce platform, improving page speed and SEO to grow organic traffic by 150%.",
      "Designed accessible UI flows and partnered with back-end developers to build scalable services.",
    ],
    tags: [
      "React",
      "Javascript",
      "Typescript",
      "Next.js",
      "Nodejs",
      "Git",
      "Docker",
    ],
  },
  {
    role: "Front-End Developer",
    company: "PDFCO.ir",
    location: "Gorgan, Iran",
    period: "Apr 2018 – Nov 2020",
    highlights: [
      "Built map features with React-Leaflet and ensured responsive, cross-device layouts.",
      "Co-developed a Trello-like task manager in React that reduced coordination time by 40%.",
    ],
    tags: ["React", "Javascript", "Nodejs", "Git"],
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const { reduce } = useWindowMatchMedia();

  useGSAP(
    () => {
      const title = titleRef.current;
      const subtitle = subtitleRef.current;
      const container = containerRef.current;
      if (!title || !subtitle || !container) return;

      const q = gsap.utils.selector(container);
      const cards = q(".experience-card");
      const dots = q(".experience-dot");
      const line = q(".experience-line");

      if (reduce) {
        gsap.set([title, subtitle, ...cards], { autoAlpha: 1, y: 0 });
        gsap.set(dots, { autoAlpha: 1, scale: 1 });
        gsap.set(line, { scaleY: 1, autoAlpha: 1 });
        return;
      }

      gsap.set([title, subtitle, ...cards], { autoAlpha: 0, y: 24 });
      gsap.set(dots, { autoAlpha: 0, scale: 0 });
      gsap.set(line, { scaleY: 0, transformOrigin: "top", autoAlpha: 1 });

      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 1.6 },
        scrollTrigger: {
          trigger: container,
          start: "top bottom-=8",
          toggleActions: "play none none none",
        },
      });

      tl.to([title, subtitle], { y: 0, autoAlpha: 1, stagger: 0.08 })
        .to(line, { scaleY: 1, duration: 1.4 }, "-=1")
        .to(dots, { autoAlpha: 1, scale: 1, stagger: 0.12 }, "-=0.9")
        .to(cards, { autoAlpha: 1, y: 0, stagger: 0.15 }, "-=1.1");
    },
    { scope: containerRef, revertOnUpdate: true, dependencies: [reduce] }
  );
  return (
    <div
      ref={containerRef}
      className="h-full flex w-full flex-col relative items-center py-28 gap-12 px-4"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 ref={titleRef} className="text-2xl sm:text-4xl text-white">
          Experience
          <span className="text-blue-400 text-4xl sm:text-6xl px-1.5">.</span>
        </h2>
        <p
          ref={subtitleRef}
          className="experience-subtitle max-w-2xl text-white/70 text-base sm:text-lg"
        >
          A timeline of impact-focused roles, products, and systems I helped
          scale.
        </p>
      </div>

      <div className="relative w-full max-w-5xl">
        <div className="experience-line absolute left-4 sm:left-1/2 top-0 h-full w-px bg-gradient-to-b from-blue-400/80 via-blue-200/40 to-transparent" />
        <div className="flex flex-col gap-10">
          {experienceItems.map((item, index) => {
            const isRight = index % 2 === 1;
            return (
              <div
                key={`${item.company}-${item.period}`}
                className={`relative flex w-full flex-col sm:items-center ${
                  isRight ? "sm:justify-end" : "sm:justify-start"
                }`}
              >
                <span className="experience-dot absolute left-4 top-7 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(147,197,253,0.9)] sm:left-1/2" />
                <div
                  className={`w-full sm:w-[calc(50%-2.5rem)] ${
                    isRight ? "sm:ml-auto" : "sm:mr-auto"
                  }`}
                >
                  <div className="experience-card group rounded-2xl p-6 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-blue-200/70">
                          {item.period}
                        </p>
                        <h3 className="text-xl sm:text-2xl text-white mt-2">
                          {item.role}
                        </h3>
                        <p className="text-white/70 mt-1">
                          {item.company} · {item.location}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-blue-300/30 bg-blue-500/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-blue-100/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ul className="mt-4 flex flex-col gap-3 text-sm sm:text-base text-white/80">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 leading-relaxed"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500/80" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
