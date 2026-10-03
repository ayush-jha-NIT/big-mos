import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export function IconButton({ label, className, type = "button", ...props }: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={cn(
        "inline-grid size-11 place-items-center rounded-full border border-[var(--brand-border)] bg-white text-[var(--brand-black)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]",
        className,
      )}
      {...props}
    />
  );
}
