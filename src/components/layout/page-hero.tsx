import Image from "next/image";
import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

import { Breadcrumbs } from "./breadcrumbs";

type PageHeroProps = {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  actions?: ReactNode;
  className?: string;
};

export function PageHero({
  title,
  description,
  eyebrow,
  image,
  imageAlt = "",
  breadcrumbs,
  actions,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-[var(--brand-black)] py-14 text-white sm:py-18 lg:py-22",
        className,
      )}
    >
      {image ? (
        <>
          <Image src={image} alt={imageAlt} fill priority className="-z-20 object-cover opacity-42" sizes="100vw" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/82 to-black/34" />
        </>
      ) : (
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_20%,rgba(255,212,0,0.18),transparent_25rem)]" />
      )}

      <Container className="relative z-10">
        {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} inverse className="mb-7" /> : null}
        {eyebrow ? (
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--brand-yellow)]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl font-display text-4xl leading-[0.98] tracking-[-0.035em] text-balance sm:text-5xl lg:text-7xl">
          {title}
        </h1>
        {description ? (
          <div className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            {description}
          </div>
        ) : null}
        {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
      </Container>
    </section>
  );
}
