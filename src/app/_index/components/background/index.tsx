"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Code, Braces, GitMerge, Binary } from "lucide-react";
import { useWindowMatchMedia } from "@/hook";

gsap.registerPlugin(useGSAP, MotionPathPlugin);

const PATHS: Array<Array<{ x: number; y: number }>> = [
  [
    { x: 5, y: 5 },
    { x: 30, y: 10 },
    { x: 10, y: -50 },
    { x: 10, y: 40 },
  ],
  [
    { x: -15, y: -10 },
    { x: 25, y: -40 },
    { x: 55, y: -5 },
    { x: 10, y: 35 },
  ],
  [
    { x: -20, y: 20 },
    { x: -40, y: -15 },
    { x: 15, y: -35 },
    { x: 45, y: 10 },
  ],
  [
    { x: 5, y: 5 },
    { x: -25, y: 30 },
    { x: 35, y: 40 },
    { x: 55, y: -5 },
  ],
  [
    { x: 10, y: -20 },
    { x: 45, y: -10 },
    { x: 25, y: 30 },
    { x: -15, y: 15 },
  ],
  [
    { x: -30, y: 0 },
    { x: -10, y: -35 },
    { x: 30, y: -25 },
    { x: 40, y: 10 },
  ],
  [
    { x: -10, y: -15 },
    { x: -35, y: 20 },
    { x: 15, y: 50 },
    { x: 35, y: 5 },
  ],
  [
    { x: 20, y: 15 },
    { x: 50, y: 0 },
    { x: 25, y: -45 },
    { x: -5, y: -20 },
  ],
  [
    { x: -25, y: 5 },
    { x: -45, y: 30 },
    { x: 0, y: 40 },
    { x: 35, y: 15 },
  ],
  [
    { x: 5, y: 5 },
    { x: 35, y: -25 },
    { x: 10, y: -55 },
    { x: -20, y: -10 },
  ],
];

function makeTimeline(el: SVGSVGElement, seed = 0) {
  gsap.set(el, {
    transformOrigin: "50% 50%",
    willChange: "transform",
    force3D: true,
  });

  const order = gsap.utils.shuffle(PATHS.slice()); // ترتیب متفاوت برای هر المنت
  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    yoyoEase: true,
    repeatDelay: 0.15,
    defaults: { duration: 10, ease: "sine.inOut" },
  });

  const pick = gsap.utils.wrap([0.15, 0.5, 0.3, 0.25]);
  const spin = gsap.utils.wrap([45, 60, 30, 75]);
  const scal = gsap.utils.wrap([1.02, 0.98, 1.01, 1.03]);

  order.forEach((path, i) => {
    tl.to(el, {
      autoAlpha: pick(i + seed),
      rotation: `+=${spin(i + seed)}`,
      scale: scal(i + seed),
      motionPath: {
        path,
        curviness: 1.35,
        autoRotate: false, // اگر می‌خوای در راستای مسیر بچرخه → true
        alignOrigin: [0.5, 0.5],
      },
    });
  });

  // شروع تصادفی + کمی تفاوت سرعت برای طبیعی‌تر شدن
  tl.timeScale(gsap.utils.random(0.85, 1.1)).progress(Math.random());
  return tl;
}

export const Background = () => {
  const codeRef = useRef<SVGSVGElement | null>(null);
  const bracesRef = useRef<SVGSVGElement | null>(null);
  const binaryRef = useRef<SVGSVGElement | null>(null);
  const gitMergeRef = useRef<SVGSVGElement | null>(null);
  const { reduce } = useWindowMatchMedia();

  useGSAP(() => {
    if (reduce) {
      if (codeRef.current)
        gsap.set(codeRef.current, {
          autoAlpha: 0.3,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
        });
      if (bracesRef.current)
        gsap.set(bracesRef.current, {
          autoAlpha: 0.3,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
        });
      return;
    }

    const tls: gsap.core.Timeline[] = [];
    if (codeRef.current) tls.push(makeTimeline(codeRef.current, 0));
    if (bracesRef.current) tls.push(makeTimeline(bracesRef.current, 7));
    if (binaryRef.current) tls.push(makeTimeline(binaryRef.current, 7));

    if (gitMergeRef.current) tls.push(makeTimeline(gitMergeRef.current, 7));

    return () => tls.forEach((t) => t.kill());
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none bg-white/80 dark:bg-black/90 backdrop-blur-3xl">
      <div className="relative w-full h-full overflow-hidden">
        <Code
          ref={codeRef}
          width={32}
          height={32}
          className="absolute left-[10dvw] top-[15dvh] text-primary/70 opacity-25"
        />

        <Braces
          ref={bracesRef}
          width={32}
          height={32}
          className="absolute left-[80dvw] top-[50dvh] text-primary/70 opacity-25"
        />
        <Binary
          width={32}
          height={32}
          ref={binaryRef}
          className="absolute left-[60dvw] top-[40dvh] text-primary/70 opacity-25"
        />

        <GitMerge
          width={32}
          height={32}
          ref={gitMergeRef}
          className="absolute left-[30dvw] top-[60dvh] text-primary/70 opacity-25"
        />
      </div>
    </div>
  );
};
