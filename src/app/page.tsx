"use client";

import {
  InteractiveCursor,
  Header,
  Background,
  Intro,
} from "./_index/components";

export default function Home() {
  return (
    <main className="relative h-[3000px] bg-[url('/home-background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <Background />
      <InteractiveCursor />
      <Header />
      <Intro />
    </main>
  );
}
