import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type PriceProps = HTMLAttributes<HTMLSpanElement> & {
  value: number;
};

export function Price({ value, className, ...props }: PriceProps) {
  return (
    <span
      className={cn("font-display text-xl font-black text-[var(--brand-red)]", className)}
      {...props}
    >
      ₹{value.toLocaleString("en-IN")}
    </span>
  );
}
