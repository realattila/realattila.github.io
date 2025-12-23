"use client";

import { useEffect, useRef } from "react";
import {
  InteractiveCursor,
  Header,
  Background,
  Intro,
  About,
  Experience,
} from "./_index/components";
import { Contact } from "./_index/components/contact";
import { HEADER_ITEMS } from "./_index/components/header/items";

export default function Home() {
  const activeIdRef = useRef<string>("");

  useEffect(() => {
    const sectionIds = HEADER_ITEMS.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (!visible.length) return;

        const topEntry = visible.reduce((best, entry) =>
          entry.intersectionRatio > best.intersectionRatio ? entry : best
        );
        const id = (topEntry.target as HTMLElement).id;
        if (!id || id === activeIdRef.current) return;

        activeIdRef.current = id;
        const nextHash = `#${id}`;
        if (window.location.hash !== nextHash) {
          window.history.replaceState(null, "", nextHash);
          window.dispatchEvent(new HashChangeEvent("hashchange"));
        }
      },
      { threshold: [0.5, 0.75] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative bg-[url('/home-background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <Background />
      <InteractiveCursor />
      <Header />
      <section id="intro" className="h-dvh">
        <Intro />
      </section>
      <section id="about" className="w-full">
        <About />
      </section>
      <section id="experience" className="w-full">
        <Experience />
      </section>
      <section id="contact" className="w-full">
        <Contact />
      </section>
    </main>
  );
}
