import { Instagram, Twitter, Youtube, Github } from "lucide-react";

const columns = [
  { title: "Shop", links: ["New arrivals", "Men", "Women", "Collections", "Sale"] },
  { title: "Company", links: ["Our story", "Sustainability", "Careers", "Press", "Contact"] },
  { title: "Support", links: ["Shipping", "Returns", "Sizing", "Care guide", "FAQ"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-2 font-display text-xl font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">◆</span>
              KAIROS
            </a>
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              Premium sneakers, engineered in Porto. Built for the ones who move with intent.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Twitter, Youtube, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {col.title}
                </div>
                <ul className="space-y-3 text-sm">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-foreground/80 transition-colors hover:text-foreground">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© 2026 Kairos Atelier · Porto / Tokyo / New York</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>

        <div
          aria-hidden
          className="mt-12 select-none font-display text-[18vw] font-bold leading-none tracking-tighter text-foreground/[0.04]"
        >
          KAIROS
        </div>
      </div>
    </footer>
  );
}
