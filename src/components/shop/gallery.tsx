"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { outlets } from "@/data/outlets";
const photos = outlets.flatMap((o) =>
  o.images.gallery.map((src, i) => ({
    src,
    city: o.city,
    id: o.id,
    alt: `Cafe Big Mo’s ${o.city} — ${["outlet", "seating and atmosphere", "cafe interior", "cafe space"][i]}`,
  })),
);
export function Gallery() {
  const [filter, setFilter] = useState("all"),
    [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const visible = photos.filter((p) => filter === "all" || p.id === filter);
  useEffect(() => {
    if (selected !== null) dialog.current?.showModal();
    else dialog.current?.close();
  }, [selected]);
  function close() {
    setSelected(null);
    trigger.current?.focus();
  }
  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3">
        {["all", "prayagraj", "haldwani"].map((f) => (
          <button
            key={f}
            className={`category ${filter === f ? "selected" : ""}`}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f === "all" ? "All moments" : f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <button
            key={p.src}
            className="group relative h-72 overflow-hidden rounded-3xl"
            aria-label={`Enlarge ${p.alt}`}
            onClick={(e) => {
              trigger.current = e.currentTarget;
              setSelected(i);
            }}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              className="object-cover transition group-hover:scale-105"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-black/70 px-4 py-2 text-sm text-white">
              {p.city} ↗
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Cafe photograph"
        onCancel={close}
        onClose={() => {
          if (selected !== null) close();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {selected !== null && (
          <div className="relative">
            <button
              autoFocus
              className="mb-3 rounded-full bg-white px-5 py-3 text-black"
              onClick={close}
            >
              Close ×
            </button>
            <div className="relative h-[65vh] w-[85vw] max-w-5xl">
              <Image
                src={visible[selected].src}
                alt={visible[selected].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-center">{visible[selected].alt}</p>
            <div className="mt-3 flex justify-center gap-8">
              <button onClick={() => setSelected((selected - 1 + visible.length) % visible.length)}>
                ← Previous
              </button>
              <button onClick={() => setSelected((selected + 1) % visible.length)}>Next →</button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
