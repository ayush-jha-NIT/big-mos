import { PageHero } from "@/components/layout";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Privacy Policy",
  "Privacy Policy for Cafe Big Mo’s website and WhatsApp ordering.",
  "/privacy-policy",
);
export default function Page() {
  return (
    <main>
      <PageHero title="Privacy Policy" breadcrumbs={[{ label: "Privacy Policy" }]} />
      <Container className="max-w-4xl py-16">
        <p className="mb-8 text-sm">Updated 4 October 2026</p>
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold">Information you share</h2>
          <p className="leading-8 text-neutral-600">
            Checkout asks for your name, phone number, selected outlet, order items and, for
            delivery, your address. Order notes are optional. The checkout prepares a WhatsApp
            message; this website does not submit that information to a website database.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold">Your bag and device storage</h2>
          <p className="leading-8 text-neutral-600">
            Your bag is saved in your browser’s localStorage so it remains available on your next
            visit. You can remove items, clear your bag or clear browser storage. The site does not
            require an account.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold">WhatsApp and external services</h2>
          <p className="leading-8 text-neutral-600">
            When you continue to WhatsApp, your order details are included in a message for the
            cafe. WhatsApp, Google Maps and the website hosting provider process information under
            their own policies. The hosting provider may process technical request logs to operate
            and secure the site.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold">Using your information</h2>
          <p className="leading-8 text-neutral-600">
            The cafe uses the details you send to respond to enquiries, confirm and fulfil orders,
            and resolve order issues. Avoid sharing sensitive personal information in order notes.
            Contact the cafe to ask about access, corrections, deletion or retention of messages and
            order records.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold">Contact and updates</h2>
          <p className="leading-8 text-neutral-600">
            For privacy questions, call +91 79061 23442 or message the same number on WhatsApp. This
            policy describes the current storefront and may be updated if its features change.
          </p>
        </section>
      </Container>
    </main>
  );
}
