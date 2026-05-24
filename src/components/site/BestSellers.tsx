import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { ProductCard, type Product } from "./ProductCard";
import s5 from "@/assets/sneaker-5.jpg";
import s6 from "@/assets/sneaker-6.jpg";
import s1 from "@/assets/sneaker-1.jpg";
import s2 from "@/assets/sneaker-2.jpg";
import s3 from "@/assets/sneaker-3.jpg";
import s4 from "@/assets/sneaker-4.jpg";

const bestsellers: Product[] = [
  { name: "Adidas Forum Low — Midnight", series: "Adidas Originals", price: 198, rating: 4.9, reviews: 1284, tag: "#1", image: s5 },
  { name: "Adidas Forum Hi — Onyx", series: "Adidas Originals", price: 218, rating: 4.8, reviews: 942, tag: "Hot", image: s6 },
  { name: "Adidas Samba OG — Cloud", series: "Adidas Originals", price: 198, rating: 4.9, reviews: 412, image: s1 },
  { name: "Adidas Ultraboost 5 — Phantom", series: "Adidas Performance", price: 224, rating: 4.8, reviews: 308, image: s2 },
  { name: "Adidas Gazelle Bold — Sand", series: "Adidas Originals", price: 186, rating: 4.7, reviews: 521, image: s3 },
  { name: "Adidas Y-3 Kaiwa — Chromaflux", series: "Adidas Y-3", price: 268, rating: 5.0, reviews: 96, image: s4 },
];

export function BestSellers() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">— Best sellers</div>
            <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
              Loved by the<br /> movement.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface-elevated transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface-elevated transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] md:px-[max(1.5rem,calc((100vw-80rem)/2))] [&::-webkit-scrollbar]:hidden"
      >
        {bestsellers.map((p) => (
          <div key={p.name} className="w-[280px] shrink-0 md:w-[320px]">
            <ProductCard product={p} />
          </div>
        ))}
        <div className="w-6 shrink-0" />
      </div>
    </section>
  );
}
