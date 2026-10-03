"use client";

import { ShoppingBag, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function MobileOrderBar() {
  const pathname = usePathname();
  const hidden = pathname === "/bag";

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-black/8 bg-[rgba(255,247,232,0.96)] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_35px_rgba(0,0,0,0.11)] backdrop-blur-xl sm:hidden",
        hidden && "hidden",
      )}
    >
      <div className="mx-auto grid max-w-lg grid-cols-[1fr_auto] gap-2">
        <Link
          href="/menu"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand-red)] px-5 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(237,28,36,0.22)]"
        >
          <UtensilsCrossed size={17} aria-hidden="true" /> Order Online
        </Link>
        <Link
          href="/bag"
          className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-black)] text-white"
          aria-label="View bag, 0 items"
        >
          <ShoppingBag size={18} aria-hidden="true" />
          <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-[var(--brand-yellow)] px-1 text-[10px] font-extrabold text-[var(--brand-black)]">
            0
          </span>
        </Link>
      </div>
    </div>
  );
}
