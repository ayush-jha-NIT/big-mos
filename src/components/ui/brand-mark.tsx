import Image from "next/image";

import { cn } from "@/lib/utils";

type BrandMarkProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

export function BrandMark({ size = 88, className, priority = false }: BrandMarkProps) {
  return (
    <Image
      src="/branding/logo.webp"
      alt="Cafe Big Mo's logo"
      width={size}
      height={size}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
    />
  );
}
