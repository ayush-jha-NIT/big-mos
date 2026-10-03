import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Footer, Header, MobileOrderBar } from "@/components/layout";

import "./globals.css";

export const metadata: Metadata = {
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
          className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-full bg-[var(--brand-yellow)] px-4 py-2 text-sm font-extrabold text-[var(--brand-black)] transition focus:translate-y-0"
        >
          Skip to content
        </a>
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
