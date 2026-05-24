import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const { items, isOpen, setOpen, updateQty, removeItem, subtotal, count, clear } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent side="right" className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <SheetTitle className="flex items-center gap-2 font-display text-lg">
            <ShoppingBag className="h-4 w-4" /> Your bag
            <span className="ml-1 text-sm text-muted-foreground">({count})</span>
          </SheetTitle>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-secondary">
              <ShoppingBag className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-display text-xl">Your bag is empty</h3>
            <p className="max-w-xs text-sm text-muted-foreground">
              Add a pair to begin. Members get early access to every drop.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-foreground"
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-surface">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                            {item.series}
                          </div>
                          <h4 className="font-display text-sm font-medium">{item.name}</h4>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          aria-label="Remove"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="inline-flex items-center rounded-full border border-border">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            aria-label="Decrease"
                            className="grid h-8 w-8 place-items-center transition-colors hover:bg-secondary"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm tabular-nums">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            aria-label="Increase"
                            className="grid h-8 w-8 place-items-center transition-colors hover:bg-secondary"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <div className="font-display text-sm">${item.price * item.qty}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                onClick={clear}
                className="mt-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <Trash2 className="h-3 w-3" /> Clear bag
              </button>
            </div>

            <div className="border-t border-border bg-surface px-6 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-display text-lg">${subtotal}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="mt-4 w-full rounded-full bg-primary py-3.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-foreground">
                Checkout · ${subtotal}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="mt-2 w-full rounded-full border border-border py-3 text-xs font-medium uppercase tracking-wider transition-colors hover:bg-secondary"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
