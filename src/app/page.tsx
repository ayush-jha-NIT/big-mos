import { ArrowRight, MapPin, ShoppingBag } from "lucide-react";

import {
  Badge,
  BrandMark,
  Button,
  Card,
  Container,
  Heading,
  ImageCard,
  Price,
  Section,
  SectionHeading,
} from "@/components/ui";

const swatches = [
  { name: "Big Mo's Red", value: "#ED1C24", className: "bg-[var(--brand-red)] text-white" },
  {
    name: "Big Mo's Yellow",
    value: "#FFD400",
    className: "bg-[var(--brand-yellow)] text-[var(--brand-black)]",
  },
  { name: "Charcoal", value: "#0B0D0D", className: "bg-[var(--brand-black)] text-white" },
  { name: "Cafe Cream", value: "#FFF7E8", className: "bg-[var(--brand-cream)] text-black" },
];

export default function HomePage() {
  return (
    <main>
      <section className="overflow-hidden bg-[var(--brand-black)] py-12 text-white sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Badge>Part 1 · Brand System</Badge>
            <Heading level={1} className="mt-5 text-white">
              Cafe <span className="text-[var(--brand-yellow)]">Big Mo&apos;s</span>
            </Heading>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              The production brand palette, reusable UI primitives and real outlet assets are now
              wired into the project. Page-specific design begins in Part 2.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button size="lg">
                Primary Action <ArrowRight size={18} />
              </Button>
              <Button variant="secondary" size="lg">
                Secondary Action
              </Button>
            </div>
          </div>
          <div className="mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-full bg-[var(--brand-yellow)] p-5 shadow-[var(--shadow-strong)]">
            <BrandMark size={320} priority className="max-h-full max-w-full" />
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Brand foundation"
            title="One visual system."
            accent="No random colours."
            description="These tokens are the shared source of truth for future pages, product cards, cart UI, checkout and outlet sections."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {swatches.map((swatch) => (
              <Card key={swatch.name} className="overflow-hidden">
                <div className={`h-28 ${swatch.className}`} />
                <div className="p-4">
                  <p className="font-bold">{swatch.name}</p>
                  <p className="mt-1 text-sm text-[var(--brand-muted)]">{swatch.value}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white/55">
        <Container>
          <SectionHeading
            eyebrow="Component preview"
            title="Reusable before"
            accent="repeatable"
            description="Buttons, badges, price treatment, cards and typography are established once and reused everywhere."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card className="p-6 sm:p-8">
              <Badge variant="red">Bestseller</Badge>
              <Heading level={3} className="mt-4">
                Crunchy Veg Burger
              </Heading>
              <p className="mt-3 leading-7 text-[var(--brand-muted)]">
                Sample product treatment for the future menu and bag interfaces.
              </p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <Price value={60} />
                <Button>
                  <ShoppingBag size={17} /> Add to Bag
                </Button>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <Badge variant="dark">Outlet</Badge>
              <Heading level={3} className="mt-4">
                Two real locations
              </Heading>
              <p className="mt-3 leading-7 text-[var(--brand-muted)]">
                Prayagraj and Haldwani imagery is now stored separately so the site never mixes the
                two outlet identities.
              </p>
              <Button variant="ghost" className="mt-6">
                <MapPin size={17} /> Outlet component style
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Real cafe assets"
            title="Prayagraj &"
            accent="Haldwani"
            description="Optimized WebP versions of the supplied real outlet photography are included in the project and ready for Home, About, Gallery and Outlets."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <ImageCard
              src="/outlets/prayagraj/exterior-golden-hour.webp"
              alt="Cafe Big Mo's Prayagraj storefront at golden hour"
              title="Prayagraj"
              subtitle="Real supplied outlet photography"
              className="min-h-[360px] md:min-h-[460px]"
              priority
            />
            <ImageCard
              src="/outlets/haldwani/storefront.webp"
              alt="Cafe Big Mo's Haldwani storefront"
              title="Haldwani"
              subtitle="Real supplied outlet photography"
              className="min-h-[360px] md:min-h-[460px]"
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
