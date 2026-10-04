import { PageHero } from "@/components/layout";
import { Container } from "@/components/ui/container";
import { OutletDetails } from "@/components/shop/outlet-details";
import { JsonLd } from "@/components/shop/schema";
import { faqs } from "@/data/faq";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Contact & FAQs",
  "Contact Big Mo’s in Prayagraj and Haldwani. Ask about orders, pickup, delivery, service areas and vegetarian food.",
  "/contact",
);
export default function Page() {
  return (
    <main>
      <PageHero
        title="Let’s talk food."
        description="Questions, cravings or plans for a visit? Call +91 79061 23442 or message us on WhatsApp."
        breadcrumbs={[{ label: "Contact" }]}
        actions={
          <>
            <a className="category selected" href="tel:+917906123442">
              Call Big Mo’s
            </a>
            <a className="category selected" href="https://wa.me/917906123442">
              Chat on WhatsApp ↗
            </a>
          </>
        }
      />
      <Container className="py-16">
        <OutletDetails />
        <h2 className="section-title mt-16">A few things you might ask.</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details className="panel" key={f.question}>
              <summary className="cursor-pointer font-bold">{f.question}</summary>
              <p className="mt-4 leading-7 text-neutral-600">{f.answer}</p>
            </details>
          ))}
        </div>
      </Container>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
    </main>
  );
}
