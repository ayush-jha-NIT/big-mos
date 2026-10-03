import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
  inverse?: boolean;
};

export function Breadcrumbs({ items, className, inverse = false }: BreadcrumbsProps) {
  const mutedClass = inverse ? "text-white/58" : "text-[var(--brand-muted)]";
  const activeClass = inverse ? "text-white" : "text-[var(--brand-black)]";

  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            href="/"
            className={cn("inline-flex items-center gap-1.5 font-bold transition hover:opacity-75", mutedClass)}
          >
            <Home size={14} aria-hidden="true" /> Home
          </Link>
        </li>
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              <ChevronRight size={14} className={mutedClass} aria-hidden="true" />
              {item.href && !last ? (
                <Link href={item.href} className={cn("font-bold transition hover:opacity-75", mutedClass)}>
                  {item.label}
                </Link>
              ) : (
                <span className={cn("font-bold", last ? activeClass : mutedClass)} aria-current={last ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
