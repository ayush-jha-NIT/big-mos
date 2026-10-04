import type { Metadata, Viewport } from "next";

import type { ReactNode } from "react";

import { Footer, Header, MobileOrderBar } from "@/components/layout";

import { CartProvider } from "@/components/shop/cart-provider";

import { siteUrl } from "@/lib/seo";

import { LocalSchema } from "@/components/shop/schema";

import "./globals.css";

export const metadata: Metadata = {
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/branding/logo.webp" },
  metadataBase: new URL(siteUrl),

  openGraph: {
    title: "Cafe Big Mo’s | Pure vegetarian cafe",
    description: "Big flavour, pocket-friendly prices in Prayagraj and Haldwani.",
    images: ["/outlets/prayagraj/exterior-golden-hour.webp"],
    type: "website",
  },

  twitter: { card: "summary_large_image" },

  title: {
    default: "Cafe Big Mo's",

    template: "%s | Cafe Big Mo's",
  },

  description:
    "Cafe Big Mo's is a pure vegetarian cafe serving pocket-friendly burgers, pizza, pasta, beverages and more.",
};

export const viewport: Viewport = {
  themeColor: "#0b0d0d",

  colorScheme: "light",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"

          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-[var(--brand-yellow)] px-4 py-2 text-sm font-extrabold text-[var(--brand-black)] transition focus:translate-y-0"
        >
          Skip to content
        </a>

        <CartProvider />

        <LocalSchema />

        <Header />

        <div id="main-content" className="min-h-[70vh]">
          {children}
        </div>

        <Footer />

        <MobileOrderBar />
      </body>
    </html>
  );
}
