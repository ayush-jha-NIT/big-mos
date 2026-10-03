import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4;

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: HeadingLevel;
};

const sizes: Record<HeadingLevel, string> = {
  1: "text-4xl sm:text-5xl lg:text-7xl",
  2: "text-3xl sm:text-4xl lg:text-5xl",
  3: "text-2xl sm:text-3xl",
  4: "text-xl sm:text-2xl",
};

export function Heading({ level = 2, className, ...props }: HeadingProps) {
  const Tag = level === 1 ? "h1" : level === 2 ? "h2" : level === 3 ? "h3" : "h4";

  return (
    <Tag
      className={cn(
        "font-display text-balance font-black uppercase leading-[0.96] tracking-[-0.035em] text-[var(--brand-black)]",
        sizes[level],
        className,
      )}
      {...props}
    />
  );
}
