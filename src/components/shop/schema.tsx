import { outlets } from "@/data/outlets";
import { menuCategories, menuItems } from "@/data/menu";
import { siteUrl } from "@/lib/seo";
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
export function LocalSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": outlets.map((o) => ({
          "@type": "Restaurant",
          "@id": `${siteUrl}/outlets#${o.id}`,
          name: o.name,
          url: `${siteUrl}/outlets/${o.id}`,
          image: `${siteUrl}${o.images.hero}`,
          telephone: "+917906123442",
          servesCuisine: ["Vegetarian", "Cafe"],
          priceRange: "₹10–₹269",
          hasMap: o.mapUrl,
          address: {
            "@type": "PostalAddress",
            addressLocality: o.city,
            addressRegion: o.id === "prayagraj" ? "Uttar Pradesh" : "Uttarakhand",
            addressCountry: "IN",
          },
          hasMenu: `${siteUrl}/menu`,
        })),
      }}
    />
  );
}
export function MenuSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Menu",
        name: "Cafe Big Mo’s vegetarian menu",
        hasMenuSection: menuCategories.map((c) => ({
          "@type": "MenuSection",
          name: c.label,
          hasMenuItem: menuItems
            .filter((i) => i.category === c.id)
            .map((i) => ({
              "@type": "MenuItem",
              name: i.name,
              suitableForDiet: "https://schema.org/VegetarianDiet",
              offers: {
                "@type": "Offer",
                price: i.price,
                priceCurrency: "INR",
                availability: i.available
                  ? "https://schema.org/InStock"
                  : "https://schema.org/OutOfStock",
              },
            })),
        })),
      }}
    />
  );
}
