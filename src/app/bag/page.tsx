import type { Metadata } from "next";

import { PageHero } from "@/components/layout";

export const metadata: Metadata = {
  title: "Your Bag",
  description: "Review the items in your Cafe Big Mo's bag before checkout. Cart functionality arrives in Part 6 and Part 7.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Your order"
        title="Your Bag"
        description="Review the items in your Cafe Big Mo's bag before checkout. Cart functionality arrives in Part 6 and Part 7."
        breadcrumbs={[{ label: "Your Bag" }]}
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="max-w-2xl text-base leading-7 text-[var(--brand-muted)]">
            This route is connected to the global Cafe Big Mo&apos;s layout. Its complete page-specific implementation belongs to a later project part.
          </p>
        </div>
      </section>
    </main>
  );
}
