import Link from "next/link";
import { buttonStyles } from "@/components/ui/button";
export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="section-title">This table is empty.</h1>
      <p className="mb-8">We couldn’t find that page. There’s plenty to explore on the menu.</p>
      <Link href="/menu" className={buttonStyles()}>
        Explore the menu
      </Link>
    </main>
  );
}
