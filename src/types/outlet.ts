export type OutletId = "prayagraj" | "haldwani";

export interface OutletImageSet {
  hero: string;
  gallery: readonly string[];
}

export interface Outlet {
  id: OutletId;
  name: string;
  city: string;
  mapUrl: string;
  phone: string;
  whatsapp: string;
  images: OutletImageSet;
}
