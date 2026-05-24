import { Heart, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

export type Product = {
  name: string;
  series: string;
  price: number;
  rating: number;
  reviews: number;
  tag?: string;
  image: string;
};

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const id = `${product.series}-${product.name}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id,
      name: product.name,
      series: product.series,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-surface-elevated shadow-soft transition-all duration-500 hover:shadow-card">
      <div className="relative aspect-square overflow-hidden bg-surface">
        {product.tag && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
            {product.tag}
          </span>
        )}
        <button
          aria-label="Save"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full glass transition-colors hover:bg-foreground hover:text-background"
        >
          <Heart className="h-4 w-4" />
        </button>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={handleAdd}
            className="w-full rounded-full bg-primary py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-card transition-colors hover:bg-foreground"
          >
            Quick add · ${product.price}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="uppercase tracking-wider">{product.series}</span>
          <span className="inline-flex items-center gap-1">
            <Star className="h-3 w-3 fill-accent stroke-accent" />
            {product.rating.toFixed(1)} <span className="text-muted-foreground/70">({product.reviews})</span>
          </span>
        </div>
        <h3 className="font-display text-lg font-medium">{product.name}</h3>
        <div className="mt-1 flex items-center justify-between">
          <div className="font-display text-base text-foreground">${product.price}</div>
          <button
            onClick={handleAdd}
            className="rounded-full border border-border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
