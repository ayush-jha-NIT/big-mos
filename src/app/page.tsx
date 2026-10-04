import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/shop/hero-carousel";
import { FeaturedMenu, FeaturedProducts } from "@/components/shop/products";
import { Container } from "@/components/ui/container";
import { CTASection, OutletMiniCard } from "@/components/layout";
import { outlets } from "@/data/outlets";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Pure vegetarian cafe in Prayagraj & Haldwani",
  "Pocket-friendly burgers, pizza, pasta and coffee in Prayagraj and Haldwani. Order from Cafe Big Mo’s on WhatsApp.",
  "/",
);
export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <div className="bg-yellow-300 py-4 text-center text-sm font-bold">
        PURE VEG · BIG FLAVOUR · BURGERS FROM ₹60
      </div>
      <Container className="py-16">
        <p className="eyebrow">Made for your cravings</p>
        <h2 className="section-title">Big Mo’s favourites.</h2>
        <p className="mb-8 text-neutral-600">
          The little joys that make an ordinary day delicious.
        </p>
        <FeaturedProducts />
        <Link className="mt-7 inline-block font-bold text-red-600" href="/menu">
          See the full menu →
        </Link>
        <section className="mt-16">
          <p className="eyebrow">More to love</p>
          <h2 className="section-title">Make it a combo.</h2>
          <p className="mb-8 text-neutral-600">
            A burger or pizza, a drink and fries. Your break, sorted.
          </p>
          <FeaturedMenu />
        </section>
        <section className="my-20 grid items-center gap-10 md:grid-cols-2">
          <div className="relative h-96 overflow-hidden rounded-3xl">
            <Image
              src="/outlets/haldwani/booths.webp"
              alt="Booth seating at Big Mo’s Haldwani"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">A table for everyone</p>
            <h2 className="section-title">Your kind of cafe.</h2>
            <p className="text-lg leading-8 text-neutral-600">
              Born in Tagore Town, Prayagraj, in mid-2024, Big Mo’s brings together a modern cafe
              atmosphere and prices that make everyday visits possible. Come for a coffee. Stay for
              the conversations.
            </p>
            <Link className="mt-6 inline-block font-bold text-red-600" href="/about">
              Our story →
            </Link>
          </div>
        </section>
        <h2 className="section-title">Find your happy place.</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {outlets.map((o) => (
            <OutletMiniCard
              key={o.id}
              name={o.name}
              location={o.city}
              image={o.images.hero}
              mapUrl={o.mapUrl}
            />
          ))}
        </div>
        <section className="my-16">
          <h2 className="section-title">A glimpse of Big Mo’s.</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              outlets[0].images.gallery[1],
              outlets[1].images.gallery[2],
              outlets[0].images.gallery[2],
            ].map((src, i) => (
              <Link href="/gallery" key={src} className="relative h-64 overflow-hidden rounded-3xl">
                <Image
                  src={src}
                  alt={`Big Mo’s atmosphere, photo ${i + 1}`}
                  fill
                  sizes="(max-width:640px) 100vw, 33vw"
                  className="object-cover"
                />
              </Link>
            ))}
          </div>
          <Link className="mt-5 inline-block font-bold" href="/gallery">
            View gallery →
          </Link>
        </section>
        <section className="panel">
          <p className="eyebrow">From our community</p>
          <h2 className="section-title">Been to Big Mo’s?</h2>
          <p className="mb-5">Explore customer reviews and share your experience on Google Maps.</p>
          <div className="flex flex-wrap gap-5">
            {outlets.map((o) => (
              <a
                key={o.id}
                href={o.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold underline"
              >
                {o.city} reviews ↗
              </a>
            ))}
          </div>
        </section>
      </Container>
      <CTASection
        title="Your next favourite is on the menu."
        description="Pick your cravings. We’ll take care of the flavour."
      />
    </main>
  );
}
