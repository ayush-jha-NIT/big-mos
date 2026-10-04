import Image from "next/image";
import Link from "next/link";
import { outlets } from "@/data/outlets";
import { buttonStyles } from "@/components/ui/button";
export function OutletDetails({ id }: { id?: string }) {
  return (
    <div className="space-y-12">
      {outlets
        .filter((o) => !id || o.id === id)
        .map((o) => (
          <section id={o.id} key={o.id} className="panel grid items-center gap-8 md:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-2xl">
              <Image
                src={o.images.hero}
                alt={o.name}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="eyebrow">Your neighbourhood hangout</p>
              <h2 className="section-title">Big Mo’s {o.city}</h2>
              <p className="mb-5 leading-7">
                {o.id === "prayagraj"
                  ? "Tagore Town, near Phoenix Hospital, Prayagraj, Uttar Pradesh"
                  : "Haldwani, Uttarakhand"}
                . Find the exact location using our map directions.
              </p>
              <p className="mb-6">Pure vegetarian · Delivery 11 AM–9 PM IST</p>
              <div className="flex flex-wrap gap-3">
                <a className={buttonStyles()} href={o.mapUrl} target="_blank" rel="noreferrer">
                  Maps & directions ↗
                </a>
                <a className={buttonStyles({ variant: "secondary" })} href={`tel:+91${o.phone}`}>
                  Call outlet
                </a>
                <a
                  className={buttonStyles({ variant: "ghost" })}
                  href={`https://wa.me/${o.whatsapp}`}
                >
                  WhatsApp
                </a>
              </div>
              <Link className="mt-5 inline-block underline" href={`/outlets/${o.id}`}>
                Explore {o.city} →
              </Link>
            </div>
          </section>
        ))}
    </div>
  );
}
