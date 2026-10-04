import { z } from "zod";
import { businessConfig } from "@/data/business";
export const checkoutSchema = z
  .object({
    name: z.string().trim().min(2, "Enter your full name").max(80),
    phone: z
      .string()
      .trim()
      .regex(/^(?:\+91[ -]?)?[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
    method: z.enum(["delivery", "pickup"]),
    outlet: z.enum(["prayagraj", "haldwani"]),
    address: z.string().trim().max(500),
    notes: z.string().trim().max(500),
  })
  .superRefine((v, ctx) => {
    if (v.method === "delivery" && v.address.length < 10)
      ctx.addIssue({
        code: "custom",
        path: ["address"],
        message: "Enter your full delivery address (at least 10 characters)",
      });
  });
export type CheckoutValues = z.infer<typeof checkoutSchema>;
export function isDeliveryOpen(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: businessConfig.timezone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const minutes =
    Number(parts.find((p) => p.type === "hour")?.value) * 60 +
    Number(parts.find((p) => p.type === "minute")?.value);
  const toMinutes = (time: string) => {
    const [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
  };
  return (
    minutes >= toMinutes(businessConfig.ordering.deliveryStart) &&
    minutes < toMinutes(businessConfig.ordering.deliveryEnd)
  );
}
export function deliveryMessage(subtotal: number, method = "delivery") {
  return method === "pickup"
    ? "Pickup: no delivery fee"
    : subtotal >= businessConfig.ordering.freeDeliveryAbove
      ? "Free delivery"
      : `Add ₹${businessConfig.ordering.freeDeliveryAbove - subtotal} for free delivery. Otherwise, delivery fee confirmed by the cafe.`;
}
export function formatOrder(
  values: CheckoutValues,
  lines: { item: { name: string; price: number }; quantity: number }[],
) {
  const subtotal = lines.reduce((sum, l) => sum + l.item.price * l.quantity, 0);
  return [
    "*Cafe Big Mo’s — New order*",
    `Outlet: ${values.outlet === "prayagraj" ? "Prayagraj" : "Haldwani"}`,
    `Service: ${values.method}`,
    "",
    ...lines.map((l) => `${l.quantity} × ${l.item.name} — ₹${l.item.price * l.quantity}`),
    "",
    `Food subtotal: ₹${subtotal}`,
    values.method === "pickup"
      ? "Delivery fee: ₹0 (pickup)"
      : subtotal >= businessConfig.ordering.freeDeliveryAbove
        ? "Delivery fee: ₹0"
        : "Delivery fee: please confirm",
    `Total${values.method === "delivery" && subtotal < businessConfig.ordering.freeDeliveryAbove ? " before delivery fee" : ""}: ₹${subtotal}`,
    "",
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    values.method === "delivery" ? `Address: ${values.address}` : "Collection from selected outlet",
    `Notes: ${values.notes || "None"}`,
    "Delivery window: 11 AM–9 PM IST",
    "Please confirm availability, service area, final total and estimated time.",
  ].join("\n");
}
