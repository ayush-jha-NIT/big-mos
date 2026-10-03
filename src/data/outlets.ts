import type { Outlet, OutletId } from "@/types/outlet";

export const outlets = [
  {
    id: "prayagraj",
    name: "Cafe Big Mo's - Prayagraj",
    city: "Prayagraj",
    mapUrl: "https://maps.app.goo.gl/PvMcasc6uue8SmC3A",
    phone: "7906123442",
    whatsapp: "917906123442",
    images: {
      hero: "/outlets/prayagraj/exterior-golden-hour.webp",
      gallery: [
        "/outlets/prayagraj/exterior-golden-hour.webp",
        "/outlets/prayagraj/exterior-twilight.webp",
        "/outlets/prayagraj/interior-corridor.webp",
        "/outlets/prayagraj/counter.webp",
      ],
    },
  },
  {
    id: "haldwani",
    name: "Cafe Big Mo's - Haldwani",
    city: "Haldwani",
    mapUrl: "https://maps.app.goo.gl/hF2xU94AXTqUMyd3A",
    phone: "7906123442",
    whatsapp: "917906123442",
    images: {
      hero: "/outlets/haldwani/storefront.webp",
      gallery: [
        "/outlets/haldwani/storefront.webp",
        "/outlets/haldwani/booths.webp",
        "/outlets/haldwani/dining-lounge.webp",
        "/outlets/haldwani/interior.webp",
      ],
    },
  },
] as const satisfies readonly Outlet[];

export function getOutletById(id: OutletId) {
  return outlets.find((outlet) => outlet.id === id);
}
