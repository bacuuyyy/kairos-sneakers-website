import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

const links: { label: string; href: string }[] = [
  { label: "New", href: "#products" },
  { label: "Men", href: "#products" },
  { label: "Women", href: "#bestsellers" },
  { label: "Collections", href: "#bestsellers" },
  { label: "Stories", href: "#story" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-7xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled || mobileOpen ? "glass shadow-soft" : "bg-transparent"
        }`}
      >
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground text-xs">◆</span>
          KAIROS
        </a>
        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <button aria-label="Search" className="grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-secondary">
            <Search className="h-4 w-4" />
          </button>
          <button aria-label="Account" className="hidden h-9 w-9 place-items-center rounded-full transition-colors hover:bg-secondary md:grid">
            <User className="h-4 w-4" />
          </button>
          <button
            onClick={openCart}
            aria-label="Open bag"
            className="relative grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-secondary"
          >
            <ShoppingBag className="h-4 w-4" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-foreground px-1 text-[10px] font-semibold text-background">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-secondary md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="absolute inset-x-4 top-20 z-40 rounded-3xl glass shadow-card md:hidden">
          <ul className="flex flex-col p-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={(e) => handleNav(e, l.href)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium transition-colors hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
