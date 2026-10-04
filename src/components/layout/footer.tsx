import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { BrandMark } from "@/components/ui/brand-mark";
import { Container } from "@/components/ui/container";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Outlets", href: "/outlets" },
  { label: "Contact", href: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[var(--brand-black)] pt-14 pb-24 text-white sm:pt-16 sm:pb-10">
      <Container>
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.3fr_0.8fr_1fr] lg:gap-16">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-xl focus-visible:outline-none"
              aria-label="Cafe Big Mo's home"
            >
              <BrandMark className="h-18 w-auto" />
              <span className="font-display text-xl leading-none">
                CAFE <span className="text-[var(--brand-yellow)]">BIG MO&apos;S</span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/62 sm:text-base">
              Pure vegetarian comfort food, pocket-friendly pricing and modern cafe spaces in
              Prayagraj and Haldwani.
            </p>
            <a
              href="tel:+917906123442"
              className="mt-5 inline-flex items-center gap-2 rounded-lg text-sm font-bold text-white transition hover:text-[var(--brand-yellow)]"
            >
              <Phone size={17} aria-hidden="true" /> +91 79061 23442
            </a>
          </div>

          <div>
            <h2 className="font-display text-lg text-[var(--brand-yellow)]">Quick Links</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-white/68 md:grid-cols-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link className="transition hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-[var(--brand-yellow)]">Our Outlets</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-white/68">
              <a
                href="https://maps.app.goo.gl/PvMcasc6uue8SmC3A"
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 transition hover:text-white"
              >
                <MapPin className="mt-0.5 shrink-0" size={17} aria-hidden="true" />
                <span>Tagore Town, Prayagraj</span>
              </a>
              <a
                href="https://maps.app.goo.gl/hF2xU94AXTqUMyd3A"
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 transition hover:text-white"
              >
                <MapPin className="mt-0.5 shrink-0" size={17} aria-hidden="true" />
                <span>Haldwani, Uttarakhand</span>
              </a>
              <p className="pt-1 text-xs tracking-[0.18em] text-white/60 uppercase">
                Online delivery: 11 AM – 9 PM
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Cafe Big Mo&apos;s. All rights reserved.</p>
          <div className="flex gap-5">
            <Link className="transition hover:text-white" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="transition hover:text-white" href="/terms">
              Terms
            </Link>
            <Link className="transition hover:text-white" href="/photo-credits">
              Photo credits
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
