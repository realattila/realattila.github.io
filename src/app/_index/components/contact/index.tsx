import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useWindowMatchMedia } from "@/hook";
import { useContactForm } from "@/app/_index/_hooks";
import { BsTelegram } from "react-icons/bs";
import { LuDownload, LuMail, LuPhone } from "react-icons/lu";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { reduce } = useWindowMatchMedia();
  const {
    formRef,
    isSubmitting,
    statusMessage,
    statusTone,
    handleSubmit,
  } = useContactForm();

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const q = gsap.utils.selector(container);
      const title = q(".contact-title");
      const subtitle = q(".contact-subtitle");
      const cards = q(".contact-card");
      const fields = q(".contact-field");
      const cta = q(".contact-cta");
      const orbs = q(".contact-orb");
      const introItems = [...title, ...subtitle];
      const contentItems = [...cards, ...fields, ...cta];
      const allItems = [...introItems, ...contentItems];

      if (reduce) {
        gsap.set(allItems, { autoAlpha: 1, y: 0 });
        gsap.set(orbs, { autoAlpha: 1 });
        return;
      }

      gsap.set(allItems, { autoAlpha: 0, y: 24 });
      gsap.set(orbs, { autoAlpha: 0, scale: 0.85 });

      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 1.6 },
        scrollTrigger: {
          trigger: container,
          start: "top bottom-=8",
          toggleActions: "play none none none",
        },
      });

      tl.to(title, { y: 0, autoAlpha: 1 })
        .to(subtitle, { y: 0, autoAlpha: 1 }, "-=1.1")
        .to(orbs, { autoAlpha: 1, scale: 1, stagger: 0.12 }, "-=1.2")
        .to(cards, { y: 0, autoAlpha: 1, stagger: 0.12 }, "-=1")
        .to(fields, { y: 0, autoAlpha: 1, stagger: 0.08 }, "-=1")
        .to(cta, { y: 0, autoAlpha: 1 }, "-=0.8");

      const floatTween = gsap.to(orbs, {
        y: (index) => (index % 2 === 0 ? -16 : 16),
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
      });

      return () => {
        floatTween.kill();
      };
    },
    { scope: containerRef, revertOnUpdate: true, dependencies: [reduce] }
  );

  return (
    <div
      ref={containerRef}
      className="h-full flex w-full flex-col relative items-center py-28 gap-12 px-4"
    >
      <div className="contact-orb pointer-events-none absolute -top-8 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="contact-orb pointer-events-none absolute right-0 top-20 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="contact-orb pointer-events-none absolute left-6 bottom-10 h-36 w-36 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="contact-title text-2xl sm:text-4xl text-white">
          Contact me
          <span className="text-blue-400 text-4xl sm:text-6xl px-1.5">.</span>
        </h2>
        <p className="contact-subtitle max-w-2xl text-white/70 text-base sm:text-lg">
          Let&apos;s build something bold. Drop a message or pick a direct
          channel below.
        </p>
      </div>

      <div className="relative grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="contact-card relative flex flex-col gap-6 rounded-3xl border border-white/10  p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.12)]">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-200/70">
              Ways to reach me
            </p>
            <h3 className="text-2xl sm:text-3xl text-white">
              Let&apos;s connect fast
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:realattila2@pm.me"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10  px-4 py-3 text-white/80 transition hover:border-blue-300/40 hover:bg-blue-500/10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-200 transition group-hover:bg-blue-500/30">
                  <LuMail className="h-5 w-5" />
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-sm uppercase tracking-[0.2em] text-blue-200/70">
                    Email
                  </span>
                  <span className="text-base text-white">
                    realattila2@pm.me
                  </span>
                </div>
              </div>
              <span className="text-xs text-white/50">Primary</span>
            </a>

            <a
              href="tel:+989038276860"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10  px-4 py-3 text-white/80 transition hover:border-blue-300/40 hover:bg-blue-500/10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-200 transition group-hover:bg-blue-500/30">
                  <LuPhone className="h-5 w-5" />
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-sm uppercase tracking-[0.2em] text-blue-200/70">
                    Phone
                  </span>
                  <span className="text-base text-white">+98 903 827 6860</span>
                </div>
              </div>
              <span className="text-xs text-white/50">Direct</span>
            </a>

            <a
              href="https://t.me/realattila"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10  px-4 py-3 text-white/80 transition hover:border-blue-300/40 hover:bg-blue-500/10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-200 transition group-hover:bg-blue-500/30">
                  <BsTelegram className="h-5 w-5" />
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-sm uppercase tracking-[0.2em] text-blue-200/70">
                    Telegram
                  </span>
                  <span className="text-base text-white">@realattila</span>
                </div>
              </div>
              <span className="text-xs text-white/50">Fast reply</span>
            </a>
          </div>

          <div className="contact-cta flex flex-col gap-3 pt-4">
            <p className="text-sm text-white/70">
              Want the full story? Download my resume.
            </p>
            <a
              href="https://docs.google.com/document/d/1rW7WWAk4VNXttD1xZA3yf19OUAuQEbwo/edit?usp=sharing&ouid=115184136722440252397&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-300/40 bg-blue-500/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100 transition hover:border-blue-300/70 hover:bg-blue-500/25"
            >
              <LuDownload className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>

        <div className="contact-card relative rounded-3xl border border-white/10  p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.12)]">
          <form
            ref={formRef}
            action="https://formspree.io/f/mpqakybn"
            method="POST"
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-200/70">
                Quick message
              </p>
              <h3 className="text-2xl sm:text-3xl text-white">
                Tell me about your project
              </h3>
              <p className="text-sm text-white/60">
                I respond within 24 hours for new collaborations.
              </p>
            </div>

            <label className="contact-field flex flex-col gap-2 text-sm text-white/70">
              Your email
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="rounded-2xl border border-white/10  px-4 py-3 text-base text-white placeholder:text-white/30 outline-none transition focus:border-blue-300/60 focus:ring-2 focus:ring-blue-400/40"
              />
            </label>
            <label className="contact-field flex flex-col gap-2 text-sm text-white/70">
              Your message
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about the scope, timeline, and goals."
                className="min-h-[140px] rounded-2xl border border-white/10  px-4 py-3 text-base text-white placeholder:text-white/30 outline-none transition focus:border-blue-300/60 focus:ring-2 focus:ring-blue-400/40"
              />
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="contact-field inline-flex items-center justify-center rounded-full bg-blue-500/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-blue-500/50"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
            <p
              role="status"
              className={`min-h-[1.25rem] text-sm ${
                statusTone === "success"
                  ? "text-emerald-200"
                  : statusTone === "error"
                    ? "text-rose-200"
                    : "text-white/60"
              }`}
            >
              {statusMessage}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
