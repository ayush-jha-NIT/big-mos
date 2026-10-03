import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { CTASection, OutletMiniCard, PageHero } from "@/components/layout";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export default function HomePage() {
  return (
    <main>
      <PageHero
        eyebrow="Part 2 · Global Layout"
        title={
          <>
            Big flavour. <span className="text-[var(--brand-yellow)]">Clean structure.</span>
          </>
        }
        description="The global header, mobile navigation, footer, shared page hero, outlet cards and mobile ordering bar are now ready for the real pages that follow."
        image="/outlets/prayagraj/exterior-golden-hour.webp"
        imageAlt="Cafe Big Mo's Prayagraj outlet at golden hour"
        actions={
          <>
            <Link href="/menu" className={buttonStyles({ size: "lg" })}>
              Explore Menu <ArrowRight size={18} />
            </Link>
            <Link href="/outlets" className={buttonStyles({ variant: "secondary", size: "lg" })}>
              Find an Outlet
            </Link>
          </>
        }
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Two real locations"
            title="Visit Big Mo's"
            accent="near you"
            description="The real supplied outlet photography and corrected Google Maps links are already connected to reusable location cards."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <OutletMiniCard
              name="Big Mo's Prayagraj"
              location="Tagore Town, Prayagraj"
              image="/outlets/prayagraj/exterior-golden-hour.webp"
              mapUrl="https://maps.app.goo.gl/PvMcasc6uue8SmC3A"
            />
            <OutletMiniCard
              name="Big Mo's Haldwani"
              location="Haldwani, Uttarakhand"
              image="/outlets/haldwani/storefront.webp"
              mapUrl="https://maps.app.goo.gl/hF2xU94AXTqUMyd3A"
            />
          </div>
        </Container>
      </Section>

      <CTASection
        title="The shell is ready. The real Home page comes next."
        description="Part 2 deliberately keeps page-specific content light while locking the navigation, responsive shell and reusable global sections."
      />
    </main>
  );
}
