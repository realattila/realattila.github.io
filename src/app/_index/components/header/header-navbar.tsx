/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
"use client";

import React, { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { useSafeUrlHash } from "@/hook";
import { cn } from "@/lib";
import { HEADER_ITEMS } from "./items";

export function NavHoverLockA11y() {
  const hash = useSafeUrlHash();
  const containerRef = useRef<HTMLElement | null>(null);
  const menubarRef = useRef<HTMLUListElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const btnRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const lockedIndex = useMemo(() => {
    const clean = (hash || "").replace("#", "");
    const idx = HEADER_ITEMS.findIndex((i) => i.id === clean);
    return idx !== -1 ? idx : 0;
  }, [hash]);

  const moveIndicatorTo = (el: HTMLElement | null, immediate = false) => {
    if (!containerRef.current || !indicatorRef.current || !el) return;

    const x = (el as HTMLElement).offsetLeft;
    const w = (el as HTMLElement).offsetWidth;

    gsap.to(indicatorRef.current, {
      x,
      width: w,
      duration: immediate ? 0 : 0.35,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      moveIndicatorTo(btnRefs.current[lockedIndex] as HTMLElement, true);
    }, containerRef);
    return () => ctx.revert();
  }, [lockedIndex]);

  useLayoutEffect(() => {
    moveIndicatorTo(btnRefs.current[lockedIndex] as HTMLElement);
  }, [lockedIndex]);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(() => {
      moveIndicatorTo(btnRefs.current[lockedIndex] as HTMLElement, true);
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [lockedIndex]);

  const previewAt = (idx: number) => {
    moveIndicatorTo(btnRefs.current[idx] as HTMLElement);
  };

  const handlePointerLeaveMenubar: React.PointerEventHandler<
    HTMLUListElement
  > = () => {
    moveIndicatorTo(btnRefs.current[lockedIndex] as HTMLElement);
  };

  return (
    <nav
      ref={containerRef as React.RefObject<HTMLElement>}
      aria-label="Main navigation"
      className="relative"
    >
      <div
        ref={indicatorRef}
        aria-hidden="true"
        className="absolute inset-y-0 left-0 rounded-lg bg-primary/20 pointer-events-none"
        style={{ width: 0, transform: "translateX(0px)" }}
      />

      <ul
        ref={menubarRef}
        onPointerLeave={handlePointerLeaveMenubar}
        className="relative flex gap-4 list-none m-0 p-0"
      >
        {HEADER_ITEMS.map((item, idx) => (
          <li key={item.id} role="none" className="m-0 p-2">
            <a
              ref={(el) => {
                btnRefs.current[idx] = el;
              }}
              href={item.href}
              aria-current={idx === lockedIndex ? "page" : undefined}
              onPointerEnter={() => previewAt(idx)}
              onFocus={() => previewAt(idx)}
              className={cn([
                "block text-center px-3 py-2 rounded-md select-none transition-colors text-sm md:text-base outline-none",
                idx === lockedIndex
                  ? "text-white"
                  : "hover:text-white focus:text-white focus-visible:ring-2 focus-visible:ring-blue-500/60",
              ])}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
