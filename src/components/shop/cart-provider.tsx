"use client";
import { useEffect } from "react";
import { useCart } from "@/store/cart";
export function CartProvider() {
  useEffect(() => {
    void useCart.persist.rehydrate();
  }, []);
  return null;
}
