import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

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
      <body>{children}</body>
    </html>
  );
}
