import { PageHero } from "@/components/layout";
import { Container } from "@/components/ui/container";
import { OutletDetails } from "@/components/shop/outlet-details";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Cafe Big Mo’s Haldwani",
  "Pure vegetarian burgers, pizza, pasta and coffee at Cafe Big Mo’s in Haldwani. Find directions, call or order on WhatsApp.",
  "/outlets/haldwani",
);
export default function Page() {
  return (
    <main>
      <PageHero
        title="Cafe Big Mo’s Haldwani"
        description="Good food and a place to make yourself at home."
        breadcrumbs={[{ label: "Outlets", href: "/outlets" }, { label: "Haldwani" }]}
      />
      <Container className="py-16">
        <OutletDetails id="haldwani" />
      </Container>
    </main>
  );
}
