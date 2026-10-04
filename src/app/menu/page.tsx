import { PageHero } from "@/components/layout";
import { Container } from "@/components/ui/container";
import { MenuBrowser } from "@/components/shop/products";
import { pageMetadata } from "@/lib/seo";
import { MenuSchema } from "@/components/shop/schema";
export const metadata = pageMetadata(
  "Good food. Great prices.",
  "Explore our complete pure vegetarian menu, from crunchy burgers to creamy coffees.",
  "/menu",
  false,
);
export default function Page() {
  return (
    <main>
      <MenuSchema />
      <PageHero
        title="Good food. Great prices."
        description="Explore our complete pure vegetarian menu, from crunchy burgers to creamy coffees."
        breadcrumbs={[{ label: "Menu" }]}
      />
      <Container className="py-14">
        <MenuBrowser />
      </Container>
    </main>
  );
}
