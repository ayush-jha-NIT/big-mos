import { PageHero } from "@/components/layout";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Terms of Use",
  "Terms of Use for Cafe Big Mo’s website and WhatsApp ordering.",
  "/terms",
);
export default function Page() {
  return (
    <main>
      <PageHero title="Terms of Use" breadcrumbs={[{ label: "Terms of Use" }]} />
      <Container className="max-w-4xl py-16">
        <p className="mb-8 text-sm">Updated 4 October 2026</p>
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold">Ordering and confirmation</h2>
          <p className="leading-8 text-neutral-600">
            Adding items to your bag or opening WhatsApp does not confirm an order. The cafe
            confirms availability, the final amount, payment arrangements and fulfilment time
            directly. This website does not collect online payment.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold">Prices and availability</h2>
          <p className="leading-8 text-neutral-600">
            Menu prices are shown in INR. Items and prices may change; the cafe will communicate any
            changes before accepting your order. Ask about allergens and preparation before placing
            an order.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold">Delivery and pickup</h2>
          <p className="leading-8 text-neutral-600">
            Delivery requests are handled from 11 AM to 9 PM IST within the outlet’s service area,
            approximately 5–7 km. Delivery is free at a food subtotal of ₹299 or more. Below ₹299,
            the delivery fee must be confirmed with the cafe. Pickup is collected at the selected
            outlet.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold">Changes, cancellations and problems</h2>
          <p className="leading-8 text-neutral-600">
            Contact +91 79061 23442 immediately for changes, cancellation requests, missing items or
            quality concerns. The cafe will discuss available remedies based on preparation and
            fulfilment status. These terms do not limit rights available under applicable consumer
            law.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold">Website use</h2>
          <p className="leading-8 text-neutral-600">
            Use the website for genuine enquiries and orders. Photography and branding belong to
            their respective owners. External links lead to services with their own terms. Contact
            the cafe with questions about these terms.
          </p>
        </section>
      </Container>
    </main>
  );
}
