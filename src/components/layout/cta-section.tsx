import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
};

export function CTASection({
  eyebrow = "Hungry yet?",
  title,
  description,
  primaryLabel = "Explore the Menu",
  primaryHref = "/menu",
  secondaryLabel = "Call Big Mo's",
  secondaryHref = "tel:+917906123442",
  className,
}: CTASectionProps) {
  return (
    <section className={cn("bg-[var(--brand-yellow)] py-12 sm:py-16", className)}>
      <Container className="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--brand-red)]">
            {eyebrow}
          </p>
          <h2 className="mt-2 max-w-3xl font-display text-3xl leading-[1.02] tracking-[-0.025em] text-[var(--brand-black)] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-2xl text-sm leading-7 text-black/64 sm:text-base">{description}</p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link href={primaryHref} className={buttonStyles({ variant: "primary", size: "lg" })}>
            {primaryLabel} <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a href={secondaryHref} className={buttonStyles({ variant: "dark", size: "lg" })}>
            <Phone size={18} aria-hidden="true" /> {secondaryLabel}
          </a>
        </div>
      </Container>
    </section>
  );
}
