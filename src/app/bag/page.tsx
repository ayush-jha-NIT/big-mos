import { PageHero } from "@/components/layout";
import { Container } from "@/components/ui/container";
import { Bag } from "@/components/shop/bag";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Your bag",
  "A few favourites, one happy appetite.",
  "/bag",
  true,
);
export default function Page() {
  return (
    <main>
      <PageHero
        title="Your bag"
        description="A few favourites, one happy appetite."
        breadcrumbs={[{ label: "Bag" }]}
      />
      <Container className="py-14">
        <Bag />
      </Container>
    </main>
  );
}
