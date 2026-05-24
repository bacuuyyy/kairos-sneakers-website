import { ArrowUpRight, Play } from "lucide-react";
import heroSneaker from "@/assets/hero-sneaker.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden gradient-hero pt-32 text-white">
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Soft glow */}
      <div aria-hidden className="absolute -right-40 top-20 h-[40rem] w-[40rem] rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-12 lg:grid-cols-12 lg:gap-6 lg:pb-32 lg:pt-24">
        <div className="z-10 flex flex-col justify-center lg:col-span-6">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Drop 04 · Spring / 26
          </div>
          <h1 className="text-balance font-display text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Step into <br />
            the <span className="gradient-accent-text italic">future</span> <br />
            of motion.
          </h1>
          <p className="mt-8 max-w-md text-balance text-base text-white/65 md:text-lg">
            Engineered silhouettes built for the streets of tomorrow. Premium materials, zero compromise — crafted in limited runs.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-accent hover:shadow-[0_0_40px_-5px_oklch(0.88_0.18_95/0.6)]"
            >
              Shop the drop
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-medium backdrop-blur transition-all duration-300 hover:bg-white/10">
              <Play className="h-3.5 w-3.5 fill-current" /> Watch film
            </button>
          </div>

          <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { k: "180k+", v: "Members" },
              { k: "4.9", v: "Rated craft" },
              { k: "32", v: "Countries" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-medium">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/50">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="absolute inset-0 -z-10 mx-auto h-[28rem] w-[28rem] translate-y-10 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl lg:h-[36rem] lg:w-[36rem]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 font-display text-[14rem] font-bold leading-none text-white/[0.04] md:text-[20rem]">
            K01
          </div>
          <img
            src={heroSneaker}
            alt="Kairos K01 signature sneaker — white and black colorway"
            width={1024}
            height={1024}
            className="relative z-10 mx-auto w-full max-w-2xl animate-float drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)]"
          />

          {/* Floating spec cards */}
          <div className="glass-dark absolute right-2 top-8 hidden rounded-2xl p-4 text-xs shadow-premium md:block">
            <div className="text-white/50">Model</div>
            <div className="font-display text-base">K01 — Chromaflux</div>
          </div>
          <div className="glass-dark absolute bottom-6 left-2 hidden rounded-2xl p-4 text-xs shadow-premium md:block">
            <div className="text-white/50">From</div>
            <div className="font-display text-base">$248 USD</div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative border-y border-white/10 bg-white/[0.02] py-5">
        <div className="flex w-max marquee gap-16 whitespace-nowrap text-sm font-medium uppercase tracking-[0.3em] text-white/40">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16">
              {["Free shipping worldwide", "◆", "Carbon-neutral delivery", "◆", "Lifetime craftsmanship", "◆", "Members-only drops", "◆", "Limited 500 pairs", "◆"].map((t, j) => (
                <span key={j}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
