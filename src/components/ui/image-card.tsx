import Image from "next/image";

import { cn } from "@/lib/utils";

type ImageCardProps = {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function ImageCard({
  src,
  alt,
  title,
  subtitle,
  className,
  imageClassName,
  priority = false,
}: ImageCardProps) {
  return (
    <figure
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--brand-black)] shadow-[var(--shadow-card)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={cn(
          "object-cover transition duration-500 group-hover:scale-[1.03]",
          imageClassName,
        )}
      />
      {title || subtitle ? (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 pt-16 text-white">
          {title ? <p className="font-display text-xl font-black uppercase">{title}</p> : null}
          {subtitle ? <p className="mt-1 text-sm text-white/80">{subtitle}</p> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
