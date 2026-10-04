"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/ui/brand-mark";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

import { useCart, cartLines } from "@/store/cart";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Outlets", href: "/outlets" },
  { label: "Contact", href: "/contact" },
] as const;

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const count = cartLines(useCart((s) => s.items)).reduce((sum, l) => sum + l.quantity, 0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(11,13,13,0.96)] text-white backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-4 sm:h-22">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 rounded-xl focus-visible:outline-none"
          aria-label="Cafe Big Mo's home"
        >
          <BrandMark priority className="h-14 w-auto sm:h-16" />
          <span className="font-display hidden text-lg leading-none tracking-tight sm:block">
            CAFE <span className="text-[var(--brand-yellow)]">BIG MO&apos;S</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-bold text-white/75 transition hover:bg-white/8 hover:text-white",
                  active && "bg-white/10 text-[var(--brand-yellow)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/bag"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[var(--brand-yellow)] hover:text-[var(--brand-yellow)]"
            aria-label="Open your bag"
          >
            <ShoppingBag size={19} aria-hidden="true" />
            <span
              className="absolute -top-1 -right-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-[var(--brand-yellow)] px-1 text-[10px] font-extrabold text-[var(--brand-black)]"
              aria-label={`${count} items in bag`}
            >
              {count}
            </span>
          </Link>

          <Link
            href="/menu"
            className={buttonStyles({ size: "sm", className: "hidden sm:inline-flex" })}
          >
            Order Online
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[var(--brand-yellow)] hover:text-[var(--brand-yellow)] lg:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/10 bg-[var(--brand-black)] lg:hidden"
          >
            <Container className="py-4">
              <nav className="grid gap-1" aria-label="Mobile navigation">
                {navigation.map((item) => {
                  const active = isActivePath(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "rounded-2xl px-4 py-3.5 text-base font-bold text-white/78 transition hover:bg-white/8 hover:text-white",
                        active && "bg-white/10 text-[var(--brand-yellow)]",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <Link
                href="/menu"
                onClick={() => setMobileOpen(false)}
                className={buttonStyles({ size: "lg", className: "mt-4 w-full" })}
              >
                Order Online
              </Link>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
