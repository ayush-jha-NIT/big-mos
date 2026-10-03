import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import Image from "next/image";

import { buttonStyles } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type OutletMiniCardProps = {
  name: string;
  location: string;
  image: string;
  mapUrl: string;
  hours?: string;
  className?: string;
};

export function OutletMiniCard({
  name,
  location,
  image,
  mapUrl,
  hours = "Online delivery · 11 AM – 9 PM",
  className,
}: OutletMiniCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-white shadow-[var(--shadow-card)]",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
        <Image
          src={image}
          alt={`${name} cafe outlet`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.035]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-2xl tracking-tight">{name}</h3>
        <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-[var(--brand-muted)]">
          <MapPin className="mt-1 shrink-0 text-[var(--brand-red)]" size={16} aria-hidden="true" />
          {location}
        </p>
        <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-[var(--brand-muted)]">
          <Clock3 className="mt-1 shrink-0 text-[var(--brand-red)]" size={16} aria-hidden="true" />
          {hours}
        </p>
        <a
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
          className={buttonStyles({ variant: "ghost", size: "sm", className: "mt-5" })}
        >
          Get Directions <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
