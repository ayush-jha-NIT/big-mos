"use client";
import { useState } from "react";
import { menuCategories, menuItems } from "@/data/menu";
import type { MenuItem } from "@/types/menu";
import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/button";
export const favourites = [
  "crunchy-veg",
  "white-sauce-pasta",
  "cheesy-margherita",
  "classic-cold-coffee",
];
export function ProductCard({ item }: { item: MenuItem }) {
  const add = useCart((s) => s.add);
  const [added, setAdded] = useState(false);
  return (
    <article className="product-card">
      <div className="flex items-center justify-between gap-3">
        <span className="veg-label">● Pure veg</span>
        {favourites.includes(item.id) && <span className="pill">Mo’s favourite</span>}
      </div>
      <p className="mt-5 text-xs tracking-widest text-neutral-500 uppercase">
        {menuCategories.find((c) => c.id === item.category)?.label}
      </p>
      <h3 className="mt-2 text-xl font-bold">{item.name}</h3>
      {item.note && <p className="mt-2 text-sm text-neutral-600">{item.note}</p>}
      <div className="mt-auto flex items-center justify-between gap-3 pt-6">
        <strong className="text-2xl">₹{item.price}</strong>
        <Button
          disabled={!item.available}
          size="sm"
          onClick={() => {
            add(item.id);
            setAdded(true);
            window.setTimeout(() => setAdded(false), 1500);
          }}
        >
          {!item.available ? "Unavailable" : added ? "Added ✓" : "Add to Bag +"}
        </Button>
      </div>
      <span className="sr-only" role="status">
        {added ? `${item.name} added to bag` : ""}
      </span>
    </article>
  );
}
export function FeaturedProducts() {
  return (
    <div className="product-grid">
      {menuItems
        .filter((i) => favourites.includes(i.id))
        .map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
    </div>
  );
}
export function MenuBrowser() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const filtered = menuItems.filter(
    (i) =>
      (category === "all" || i.category === category) &&
      i.name.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <label className="block font-bold" htmlFor="menu-search">
        Find your next favourite
      </label>
      <input
        id="menu-search"
        className="field mt-3"
        placeholder="Search burgers, pasta, coffee…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="my-7 flex gap-2 overflow-x-auto pb-3" aria-label="Menu categories">
        {[{ id: "all", label: "All" }, ...menuCategories].map((c) => (
          <button
            className={`category ${category === c.id ? "selected" : ""}`}
            aria-pressed={category === c.id}
            key={c.id}
            onClick={() => setCategory(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <p className="mb-5 text-sm text-neutral-600">
        {filtered.length} items · All prices in INR · 100% vegetarian
      </p>
      <div className="product-grid">
        {filtered.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      {!filtered.length && <p role="status">No matching items. Try another search or category.</p>}
    </>
  );
}
