import Image from "next/image";

import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
};

export function BrandMark({ className, priority = false }: BrandMarkProps) {
  return (
    <Image
      src="/branding/logo.webp"
      alt="Cafe Big Mo's logo"
      width={1261}
      height={1247}
      priority={priority}
      sizes="72px"
      className={cn("object-contain", className)}
    />
  );
}
