import { PageHero, CTASection } from "@/components/layout";
import { Container } from "@/components/ui/container";
import { cafeProfile } from "@/data/cafe";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Our story",
  "Discover Cafe Big Mo’s, established in mid-2024 in Tagore Town, Prayagraj. Pure vegetarian food and pocket-friendly experiences.",
  "/about",
);
export default function Page() {
  return (
    <main>
      <PageHero
        title="Big heart. Big Mo’s."
        eyebrow="Our story"
        image="/outlets/prayagraj/interior-corridor.webp"
        imageAlt="Prayagraj cafe interior"
        breadcrumbs={[{ label: "About" }]}
      />
      <Container className="py-16">
        <h2 className="section-title">Good food should be for everyone.</h2>
        <p className="max-w-4xl text-lg leading-9 text-neutral-600">{cafeProfile.about}</p>
        <div className="my-12 grid gap-5 md:grid-cols-3">
          {[
            "100% pure vegetarian",
            "Pocket-friendly, every day",
            "Modern spaces. Open kitchen.",
          ].map((s) => (
            <div key={s} className="panel text-xl font-bold">
              {s}
            </div>
          ))}
        </div>
        <h2 className="section-title">Our journey</h2>
        <ol className="space-y-6 border-l-4 border-yellow-400 pl-6">
          {cafeProfile.milestones.map((m) => (
            <li className="panel" key={m.title}>
              <p className="eyebrow">{m.period}</p>
              <h3 className="my-3 text-2xl font-bold">{m.title}</h3>
              <p className="leading-7 text-neutral-600">{m.description}</p>
            </li>
          ))}
        </ol>
      </Container>
      <CTASection
        title="Come be part of the story."
        primaryLabel="Find an outlet"
        primaryHref="/outlets"
      />
    </main>
  );
}
