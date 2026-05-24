import brandImg from "@/assets/brand-story.jpg";

export function BrandStory() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={brandImg}
              alt="Artisan crafting a Kairos sneaker by hand"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          <div className="glass-dark absolute -bottom-6 -right-4 hidden max-w-[14rem] rounded-2xl p-5 md:block">
            <div className="font-display text-3xl">12 yrs</div>
            <div className="mt-1 text-xs text-white/60">Of obsessive craft from Porto to Tokyo.</div>
          </div>
        </div>

        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">— Our Story</div>
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
            Built by makers,<br /> for the ones who move.
          </h2>
          <p className="mt-6 max-w-lg text-white/65">
            Kairos was born in a small atelier in 2018 — three friends, one obsession: build a sneaker that respects both the wearer and the planet. Every silhouette is prototyped 40+ times before it ever sees production.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10">
            {[
              { k: "Italian leather", v: "Vegetable-tanned, fully traceable" },
              { k: "Carbon negative", v: "Verified offset on every pair" },
              { k: "Lifetime repair", v: "We re-sole what we make" },
              { k: "Limited runs", v: "Never more than 500 per drop" },
            ].map((f) => (
              <div key={f.k} className="bg-primary p-6">
                <div className="font-display text-base">{f.k}</div>
                <div className="mt-2 text-sm text-white/55">{f.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
