import { PageHero } from "@/components/layout";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/lib/seo";
import sources from "../../../public/menu/sources.json";
export const metadata = pageMetadata(
  "Food photo credits",
  "Photographers, original sources and licenses for the representative food photography on Cafe Big Mo’s menu.",
  "/photo-credits",
);
export default function PhotoCredits() {
  return (
    <main>
      <PageHero
        title="Behind the photos."
        description="Our food photography shows representative servings. The cafe’s recipes, portions and presentation may differ."
        breadcrumbs={[{ label: "Photo credits" }]}
      />
      <Container className="py-14">
        <p className="mb-8 max-w-3xl leading-7">
          The menu includes images supplied by the site owner and photographs reused under their
          respective open licenses. Images have been resized and converted to WebP, with responsive
          cropping on the menu. Available source and license details are recorded below, including
          share-alike terms where applicable.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {Object.entries(sources).map(([key, photo]) => (
            <article className="panel min-w-0 break-words" key={key}>
              <h2 className="text-lg font-bold">{photo.title.replace(/^File:/, "")}</h2>
              <p className="my-3 text-sm">
                Photo: {photo.artist || "See original source for photographer"}
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                {photo.source && (
                  <a className="underline" href={photo.source} target="_blank" rel="noreferrer">
                    Original photograph ↗
                  </a>
                )}
                {photo.source ? (
                  <a
                    className="underline"
                    href={photo.licenseUrl || photo.source}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {photo.license} ↗
                  </a>
                ) : (
                  <span>{photo.license}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
