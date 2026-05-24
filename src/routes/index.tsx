import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { FeaturedGrid } from "@/components/site/FeaturedGrid";
import { BrandStory } from "@/components/site/BrandStory";
import { BestSellers } from "@/components/site/BestSellers";
import { Testimonials } from "@/components/site/Testimonials";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/site/CartDrawer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kairos — Premium Sneakers, Engineered for Motion" },
      {
        name: "description",
        content:
          "Kairos crafts limited-run premium sneakers in Porto. Shop the K01 signature drop and member-only releases for spring 2026.",
      },
      { property: "og:title", content: "Kairos — Premium Sneakers" },
      { property: "og:description", content: "Limited-run premium sneakers, engineered for motion." },
    ],
  }),
});

function Index() {
  return (
    <CartProvider>
      <main id="top" className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <FeaturedGrid />
        <div id="story">
          <BrandStory />
        </div>
        <div id="bestsellers">
          <BestSellers />
        </div>
        <Testimonials />
        <Newsletter />
        <Footer />
        <CartDrawer />
      </main>
    </CartProvider>
  );
}
