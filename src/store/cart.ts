"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getMenuItemById } from "@/data/menu";
type Cart = {
  items: Record<string, number>;
  add: (id: string) => void;
  quantity: (id: string, n: number) => void;
  clear: () => void;
};
export const useCart = create<Cart>()(
  persist(
    (set) => ({
      items: {},
      add: (id) => {
        if (getMenuItemById(id)?.available)
          set((s) => ({ items: { ...s.items, [id]: Math.min(99, (s.items[id] || 0) + 1) } }));
      },
      quantity: (id, n) =>
        set((s) => {
          const items = { ...s.items };
          if (n <= 0) delete items[id];
          else if (Number.isFinite(n) && getMenuItemById(id)?.available)
            items[id] = Math.min(99, Math.floor(n));
          return { items };
        }),
      clear: () => set({ items: {} }),
    }),
    {
      name: "big-mos-bag",
      skipHydration: true,
      partialize: (s) => ({ items: s.items }),
      merge: (persisted, current) => ({
        ...current,
        items: sanitizeCart((persisted as { items?: unknown } | null)?.items),
      }),
    },
  ),
);
export function sanitizeCart(value: unknown): Record<string, number> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.fromEntries(
    Object.entries(value).filter(
      ([id, quantity]) =>
        getMenuItemById(id)?.available &&
        typeof quantity === "number" &&
        Number.isInteger(quantity) &&
        quantity > 0 &&
        quantity <= 99,
    ),
  );
}
export function cartLines(items: Record<string, number>) {
  return Object.entries(items).flatMap(([id, quantity]) => {
    const item = getMenuItemById(id);
    return item && item.available && Number.isInteger(quantity) && quantity > 0 && quantity <= 99
      ? [{ item, quantity }]
      : [];
  });
}
