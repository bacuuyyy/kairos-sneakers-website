import { ArrowUpRight } from "lucide-react";
import { ProductCard, type Product } from "./ProductCard";
import s1 from "@/assets/sneaker-1.jpg";
import s2 from "@/assets/sneaker-2.jpg";
import s3 from "@/assets/sneaker-3.jpg";
import s4 from "@/assets/sneaker-4.jpg";

const products: Product[] = [
  { name: "Adidas Samba OG — Cloudwhite", series: "Adidas Originals", price: 198, rating: 4.9, reviews: 412, tag: "New", image: s1 },
  { name: "Adidas Ultraboost 5 — Phantom", series: "Adidas Performance", price: 224, rating: 4.8, reviews: 308, tag: "Drop", image: s2 },
  { name: "Adidas Gazelle Bold — Sand", series: "Adidas Originals", price: 186, rating: 4.7, reviews: 521, image: s3 },
  { name: "Adidas Y-3 Kaiwa — Chromaflux", series: "Adidas Y-3", price: 268, rating: 5.0, reviews: 96, tag: "Limited", image: s4 },
];

export function FeaturedGrid() {
  return (
    <section id="products" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">— Featured</div>
            <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
              Crafted to outlast<br /> the season.
            </h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-2 text-sm font-medium">
            View all 48 styles
            <span className="grid h-9 w-9 place-items-center rounded-full border border-border transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
