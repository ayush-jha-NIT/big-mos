import type { ReactNode } from "react";

import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

export type EmptyStateProps = {
  icon?: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
};

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <Card className="mx-auto max-w-xl px-6 py-10 text-center sm:px-10">
      {icon ? (
        <div className="mx-auto mb-5 grid size-14 place-items-center rounded-full bg-[var(--brand-yellow)]">
          {icon}
        </div>
      ) : null}
      <Heading level={3}>{title}</Heading>
      <p className="mx-auto mt-3 max-w-md leading-7 text-[var(--brand-muted)]">{description}</p>
      {action ? <div className="mt-6 flex justify-center">{action}</div> : null}
    </Card>
  );
}
