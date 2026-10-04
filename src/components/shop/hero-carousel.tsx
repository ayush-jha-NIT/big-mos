"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { buttonStyles } from "@/components/ui/button";
const slides = [
  {
    image: "/outlets/prayagraj/exterior-golden-hour.webp",
    title: "Big flavour. Bigger smiles.",
    text: "Your neighbourhood hangout, with a whole lot of flavour. Pure vegetarian. Always pocket-friendly.",
    label: "Prayagraj",
  },
  {
    image: "/outlets/haldwani/dining-lounge.webp",
    title: "Good company. Great food.",
    text: "Settle in, share a pizza, make a memory. Meet your next favourite spot in Haldwani.",
    label: "Haldwani",
  },
  {
    image: "/outlets/prayagraj/counter.webp",
    title: "Small prices. Happy appetites.",
    text: "Burgers from ₹60, pasta from ₹129, and plenty of reasons to come back.",
    label: "Made for your cravings",
  },
];
export function HeroCarousel() {
  const [index, setIndex] = useState(0),
    [paused, setPaused] = useState(false),
    [holding, setHolding] = useState(false),
    [focused, setFocused] = useState(false);
  const start = useRef<number | null>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (paused || holding || focused || reduced) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, holding, focused, reduced]);
  const move = (delta: number) => setIndex((i) => (i + delta + slides.length) % slides.length);
  return (
    <section
      className="hero-carousel"
      aria-roledescription="carousel"
      aria-label="Discover Big Mo’s"
      onPointerDown={(e) => {
        start.current = e.clientX;
        setHolding(true);
      }}
      onPointerUp={(e) => {
        if (start.current !== null && Math.abs(e.clientX - start.current) > 50)
          move(e.clientX < start.current ? 1 : -1);
        start.current = null;
        setHolding(false);
      }}
      onPointerCancel={() => setHolding(false)}
      onPointerLeave={() => setHolding(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
      }}
    >
      <h1 className="sr-only">Cafe Big Mo’s — pure vegetarian cafe in Prayagraj and Haldwani</h1>
      <div className="hero-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, i) => (
          <div className="hero-slide" key={slide.image} aria-hidden={index !== i}>
            <Image
              src={slide.image}
              alt={`Inside Cafe Big Mo’s — ${slide.label}`}
              fill
              sizes="100vw"
              priority={i === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
            <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
              <p className="text-sm font-bold tracking-[.25em] text-yellow-300 uppercase">
                100% vegetarian · {slide.label}
              </p>
              <h2 className="font-display mt-5 max-w-3xl text-5xl leading-tight sm:text-7xl">
                {slide.title}
              </h2>
              <p className="my-7 max-w-xl text-lg leading-8 text-white/80">{slide.text}</p>
              <Link
                tabIndex={i === index ? 0 : -1}
                className={buttonStyles({ size: "lg" })}
                href="/menu"
              >
                Explore the menu →
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-0 flex w-full items-center justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Show slide ${i + 1}`}
            aria-pressed={i === index}
            className={`h-3 rounded-full ${i === index ? "w-9 bg-yellow-300" : "w-3 bg-white/60"}`}
            onClick={() => setIndex(i)}
          />
        ))}
        <button
          className="ml-4 rounded-full border border-white/40 px-4 py-2 text-sm"
          onClick={() => setPaused((p) => !p)}
        >
          {paused ? "Play" : "Pause"}
        </button>
        <button aria-label="Previous slide" onClick={() => move(-1)}>
          ←
        </button>
        <button aria-label="Next slide" onClick={() => move(1)}>
          →
        </button>
      </div>
    </section>
  );
}
