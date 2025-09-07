"use client";

import React, { useMemo, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import {
  Rocket,
  Code2,
  Sparkles,
  MousePointer2,
  Cloud,
  Bolt,
} from "lucide-react";
import { useWindowMatchMedia } from "@/hook";

// ثبت پلاگین‌ها
gsap.registerPlugin(useGSAP, MotionPathPlugin);

type Props = {
  className?: string;
  density?: number;
  speed?: number;
  colorClass?: string;
  size?: number;
};

export function BackgroundIcons({
  className = "absolute inset-0 -z-10",
  density = 6,
  speed = 14,
  colorClass = "text-blue-400/35",
  size = 20,
}: Props) {
  const scopeRef = useRef<HTMLDivElement | null>(null);
  const iconRefs = useRef<HTMLDivElement[]>([]);
  iconRefs.current = [];
  const { reduce } = useWindowMatchMedia();

  const IconList = useMemo(
    () => [Rocket, Code2, Sparkles, MousePointer2, Cloud, Bolt],
    []
  );

  const paths = ["path-1", "path-2", "path-3", "loop-1"];

  useGSAP(
    (ctx) => {
      if (reduce) return;

      const tweens: gsap.core.Tween[] = [];

      const rnd = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      iconRefs.current.forEach((el, i) => {
        const pathId = `#${paths[i % paths.length]}`;

        const duration = rnd(speed * 0.7, speed * 1.3);

        const start = rnd(0, 1);

        gsap.set(el, { xPercent: -50, yPercent: -50 });

        const t = gsap.to(el, {
          duration,
          repeat: -1,
          ease: "none",
          motionPath: {
            path: pathId,
            align: pathId,
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
            start,
          },
        });
        tweens.push(t);
      });

      const onResize = () => {
        tweens.forEach((t) => t.kill());
        ctx.revert();
        requestAnimationFrame(() => requestAnimationFrame(() => {}));
      };
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        tweens.forEach((t) => t.kill());
      };
    },
    { scope: scopeRef }
  );

  return (
    <div
      ref={scopeRef}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          id="path-1"
          d="M 0 20 C 20 5, 40 35, 60 20 S 100 30, 100 10"
          fill="none"
          stroke="transparent"
        />

        <path
          id="path-2"
          d="M 0 55 C 20 70, 40 40, 60 60 S 100 50, 100 80"
          fill="none"
          stroke="transparent"
        />

        <path
          id="path-3"
          d="M 0 85 C 25 75, 45 90, 65 80 S 100 95, 100 70"
          fill="none"
          stroke="transparent"
        />

        <path
          id="loop-1"
          d="M 25 35 C 40 15, 60 15, 75 35 C 60 55, 40 55, 25 35 Z"
          fill="none"
          stroke="transparent"
        />
      </svg>

      {Array.from({ length: density }).map((_, i) => {
        const Icon = IconList[i % IconList.length];
        return (
          <div
            key={i}
            ref={(el) => {
              el && iconRefs.current.push(el);
            }}
            className={`absolute top-0 left-0 opacity-60 ${colorClass}`}
            style={{
              width: size,
              height: size,
              transform: "translate(-50%, -50%)",
              willChange: "transform",
              filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))",
            }}
          >
            <Icon className="w-full h-full" strokeWidth={1.75} />
          </div>
        );
      })}
    </div>
  );
}
