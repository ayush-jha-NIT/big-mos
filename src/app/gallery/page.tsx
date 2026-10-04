import { PageHero } from "@/components/layout";
import { Container } from "@/components/ui/container";
import { Gallery } from "@/components/shop/gallery";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Gallery",
  "Real photographs of Cafe Big Mo’s in Prayagraj and Haldwani.",
  "/gallery",
);
export default function Page() {
  return (
    <main>
      <PageHero
        title="Good times, in the frame."
        description="Real spaces. Real Big Mo’s. Take a look around our two cafes."
        breadcrumbs={[{ label: "Gallery" }]}
      />
      <Container className="py-16">
        <Gallery />
      </Container>
    </main>
  );
}
