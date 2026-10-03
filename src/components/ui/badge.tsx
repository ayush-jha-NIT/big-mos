import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BadgeVariant = "red" | "yellow" | "dark" | "cream";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variants: Record<BadgeVariant, string> = {
  red: "bg-[var(--brand-red)] text-white",
  yellow: "bg-[var(--brand-yellow)] text-[var(--brand-black)]",
  dark: "bg-[var(--brand-black)] text-white",
  cream: "border border-[var(--brand-border)] bg-[var(--brand-cream)] text-[var(--brand-black)]",
};

export function Badge({ className, variant = "yellow", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em]",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
