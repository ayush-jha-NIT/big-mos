"use client";
import { Button } from "@/components/ui/button";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="section-title">Something went wrong.</h1>
      <p className="mb-8">
        Please try again. You can also call +91 79061 23442 to place your order.
      </p>
      <Button onClick={reset}>Try again</Button>
    </main>
  );
}
