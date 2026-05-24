import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "The Atlas Low is the most comfortable shoe I've owned in a decade. Wore them through Tokyo Fashion Week non-stop.",
    name: "Mika Tanaka",
    role: "Creative Director, NORM",
  },
  {
    quote: "Kairos is doing what Common Projects did ten years ago — but with actual performance built in. I'm sold.",
    name: "Daniel Okafor",
    role: "Editor, Sole Quarterly",
  },
  {
    quote: "Bought one pair. Came back for three more. The materials feel like nothing else on the market right now.",
    name: "Elena Vargas",
    role: "Architect, Madrid",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">— Reviews</div>
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
            Trusted by the<br /> tastemakers.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="group relative flex flex-col rounded-3xl border border-border bg-surface-elevated p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote className="h-7 w-7 text-accent" />
              <blockquote className="mt-6 text-balance text-lg font-medium leading-snug">
                "{t.quote}"
              </blockquote>
              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <figcaption>
                  <div className="font-display text-base">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-foreground stroke-foreground" />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
