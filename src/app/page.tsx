import AboutMe from "@/components/pages/main/about-me";
import GlowMouse from "@/components/pages/main/glow-mouse";
import Hero from "@/components/pages/main/hero";

export default function Home() {
  return (
    <div className='tw-overflow-hidden tw-relative'>
      <Hero />
      <AboutMe />
      <GlowMouse />
    </div>
  );
}
