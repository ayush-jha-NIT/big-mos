import { PageHero } from "@/components/layout";

import { Container } from "@/components/ui/container";

import { Checkout } from "@/components/shop/checkout";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Let’s make it an order.",
  "Choose your outlet and send your order directly to Big Mo’s on WhatsApp.",
  "/checkout",
  true,
);

export default function Page() {
  return (
    <main>
      <PageHero
        title="Let’s make it an order."
        description="Choose your outlet and send your order directly to Big Mo’s on WhatsApp."
        breadcrumbs={[{ label: "Checkout" }]}
      />
      <Container className="py-14">
        <Checkout />
      </Container>
    </main>
  );
}
