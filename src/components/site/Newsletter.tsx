import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="px-6 pb-24 md:pb-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] gradient-hero p-10 text-white md:p-16">
        <div aria-hidden className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
        <div aria-hidden className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">— Members club</div>
            <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
              Early access<br /> to every drop.
            </h2>
            <p className="mt-5 max-w-md text-white/65">
              Join 180,000+ members. Get first dibs on limited releases, behind-the-scenes films, and 10% off your first pair.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setDone(true);
            }}
            className="glass-dark flex flex-col gap-3 rounded-2xl p-3 md:flex-row md:items-center"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
              className="flex-1 bg-transparent px-4 py-3 text-base text-white placeholder:text-white/40 focus:outline-none"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-accent"
            >
              {done ? "You're in" : "Join the club"}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
