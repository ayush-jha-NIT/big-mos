"use client";
import Link from "next/link";
import Image from "next/image";
import { getMenuPhoto } from "@/data/menu-photos";
import { useCart, cartLines } from "@/store/cart";
import { Button, buttonStyles } from "@/components/ui/button";
import { FeaturedProducts } from "./products";
import { deliveryMessage } from "@/lib/ordering";
export function Bag() {
  const items = useCart((s) => s.items),
    quantity = useCart((s) => s.quantity),
    clear = useCart((s) => s.clear);
  const lines = cartLines(items);
  const total = lines.reduce((s, l) => s + l.item.price * l.quantity, 0);
  return (
    <>
      {!lines.length ? (
        <div className="panel text-center">
          <h2 className="text-2xl font-bold">Your bag is waiting for something delicious.</h2>
          <Link href="/menu" className={buttonStyles({ className: "mt-6" })}>
            Explore menu
          </Link>
        </div>
      ) : (
        <div className="grid items-start gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {lines.map(({ item, quantity: n }) => (
              <article
                className="panel flex flex-wrap items-center justify-between gap-4"
                key={item.id}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={getMenuPhoto(item).src}
                    alt={getMenuPhoto(item).alt}
                    width={80}
                    height={80}
                    className="h-20 w-20 shrink-0 rounded-xl object-cover"
                  />
                  <div>
                    <h2 className="font-bold">{item.name}</h2>
                    <p>
                      ₹{item.price} each · ₹{item.price * n}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    className="quantity"
                    aria-label={`Decrease ${item.name}`}
                    onClick={() => quantity(item.id, n - 1)}
                  >
                    −
                  </button>
                  <span aria-label={`${n} portions`}>{n}</span>
                  <button
                    className="quantity"
                    disabled={n >= 99}
                    aria-label={`Increase ${item.name}`}
                    onClick={() => quantity(item.id, n + 1)}
                  >
                    +
                  </button>
                  <button className="text-sm underline" onClick={() => quantity(item.id, 0)}>
                    Remove<span className="sr-only"> {item.name}</span>
                  </button>
                </div>
              </article>
            ))}
            <Button variant="ghost" onClick={clear}>
              Clear bag
            </Button>
          </div>
          <aside className="panel">
            <h2 className="text-xl font-bold">Order summary</h2>
            <p className="my-4 flex justify-between">
              Food subtotal <strong>₹{total}</strong>
            </p>
            <p className="text-sm leading-6">{deliveryMessage(total)}</p>
            <p className="my-4 text-sm">
              Delivery 11 AM–9 PM. The cafe confirms your order on WhatsApp.
            </p>
            <Link href="/checkout" className={buttonStyles({ className: "w-full" })}>
              Proceed to Checkout
            </Link>
            <Link href="/menu" className="mt-4 block text-center underline">
              Continue Shopping
            </Link>
          </aside>
        </div>
      )}
      <h2 className="section-title mt-14">A little something extra?</h2>
      <FeaturedProducts />
    </>
  );
}
