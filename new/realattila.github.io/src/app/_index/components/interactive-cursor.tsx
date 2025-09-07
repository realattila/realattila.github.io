"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useIsClient, useWindowMatchMedia } from "@/hook";
import { cn } from "@/lib";

export function InteractiveCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const isClient = useIsClient();
  const { reduce } = useWindowMatchMedia();

  useGSAP(
    () => {
      const cursor = cursorRef.current!;
      const follower = followerRef.current!;

      const isCoarse = matchMedia("(pointer: coarse)").matches;
      if (isCoarse) return;

      const root = document.documentElement;
      root.classList.add("cursor-none");

      const setCursorX = gsap.quickSetter(cursor, "x", "px");
      const setCursorY = gsap.quickSetter(cursor, "y", "px");
      const setFollowerX = gsap.quickSetter(follower, "x", "px");
      const setFollowerY = gsap.quickSetter(follower, "y", "px");

      const pos = { x: innerWidth / 2, y: innerHeight / 2 };
      const followerPos = { x: pos.x, y: pos.y };

      gsap.set([cursor, follower], { x: pos.x, y: pos.y, force3D: true });

      const ease = 0.18;
      const tick = () => {
        followerPos.x += (pos.x - followerPos.x) * ease;
        followerPos.y += (pos.y - followerPos.y) * ease;
        setFollowerX(followerPos.x);
        setFollowerY(followerPos.y);
      };

      if (!reduce) gsap.ticker.add(tick);

      const onPointerMove = (e: PointerEvent) => {
        if (!e.isPrimary || e.pointerType === "touch") return;
        pos.x = e.clientX;
        pos.y = e.clientY;
        setCursorX(pos.x);
        setCursorY(pos.y);
        if (reduce) {
          setFollowerX(pos.x);
          setFollowerY(pos.y);
        }
      };

      document.addEventListener("pointermove", onPointerMove, {
        passive: true,
      });

      const isInteractive = (el: Element | null) =>
        !!el &&
        el.closest(
          "button, a, .cursor-pointer, [role='button'], input, select, textarea"
        ) !== null;

      let hoverCount = 0;
      const onPointerOver = (e: PointerEvent) => {
        if (isInteractive(e.target as Element)) {
          hoverCount++;
          if (hoverCount === 1)
            gsap.to([cursor, follower], {
              scale: 1.5,
              duration: 0.2,
              ease: "power2.out",
            });
        }
      };
      const onPointerOut = (e: PointerEvent) => {
        if (isInteractive(e.target as Element)) {
          hoverCount = Math.max(0, hoverCount - 1);
          if (hoverCount === 0)
            gsap.to([cursor, follower], {
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            });
        }
      };

      document.addEventListener("pointerover", onPointerOver, true);
      document.addEventListener("pointerout", onPointerOut, true);

      return () => {
        document.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("pointerover", onPointerOver, true);
        document.removeEventListener("pointerout", onPointerOut, true);
        if (!reduce) gsap.ticker.remove(tick);
        root.classList.remove("cursor-none");
      };
    },
    { dependencies: [], scope: undefined }
  );

  return (
    <>
      <div
        ref={cursorRef}
        className={cn([
          "hidden fixed top-0 left-0 w-3.5 h-3.5 bg-white/80 rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform",
          {
            block: isClient,
          },
        ])}
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={followerRef}
        className={cn([
          "hidden fixed top-0 left-0 w-8 h-8 border-2 border-black/80 dark:border-white/80 rounded-full mix-blend-difference pointer-events-none z-[9998] will-change-transform",
          {
            block: isClient,
          },
        ])}
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
