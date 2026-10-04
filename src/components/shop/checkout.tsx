"use client";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { cartLines, useCart } from "@/store/cart";
import { checkoutSchema, deliveryMessage, formatOrder, type CheckoutValues } from "@/lib/ordering";
import { whatsappOrderUrl } from "@/data/business";
import { Button } from "@/components/ui/button";
export function Checkout() {
  const lines = cartLines(useCart((s) => s.items));
  const subtotal = lines.reduce((s, l) => s + l.item.price * l.quantity, 0);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CheckoutValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { method: "delivery", outlet: "prayagraj", address: "", notes: "" },
  });
  const method = useWatch({ control, name: "method" });
  if (!lines.length)
    return (
      <div className="panel">
        Your bag is empty.{" "}
        <Link className="underline" href="/menu">
          Choose something from the menu.
        </Link>
      </div>
    );
  return (
    <div className="grid items-start gap-8 lg:grid-cols-2">
      <form
        className="panel space-y-5"
        onSubmit={handleSubmit((v) => {
          // External WhatsApp handoff, not an internal Next.js navigation.
          // eslint-disable-next-line @next/next/no-location-assign-relative-destination
          window.location.assign(
            `${whatsappOrderUrl}?text=${encodeURIComponent(formatOrder(v, lines))}`,
          );
        })}
      >
        <h2 className="text-2xl font-bold">Your details</h2>
        {(
          [
            ["name", "Full name"],
            ["phone", "Mobile number"],
          ] as const
        ).map(([key, label]) => (
          <label className="block" key={key}>
            {label}
            <input
              className="field mt-2"
              autoComplete={key === "name" ? "name" : "tel"}
              type={key === "phone" ? "tel" : "text"}
              {...register(key)}
              aria-invalid={!!errors[key]}
            />
            {errors[key] && (
              <span role="alert" className="error">
                {errors[key]?.message}
              </span>
            )}
          </label>
        ))}
        <label className="block">
          Order type
          <select className="field mt-2" {...register("method")}>
            <option value="delivery">Delivery</option>
            <option value="pickup">Pickup</option>
          </select>
        </label>
        <label className="block">
          Outlet
          <select className="field mt-2" {...register("outlet")}>
            <option value="prayagraj">Prayagraj</option>
            <option value="haldwani">Haldwani</option>
          </select>
        </label>
        {method === "delivery" && (
          <label className="block">
            Delivery address
            <textarea
              className="field mt-2"
              autoComplete="street-address"
              {...register("address")}
              aria-invalid={!!errors.address}
            />
            {errors.address && (
              <span role="alert" className="error">
                {errors.address.message}
              </span>
            )}
          </label>
        )}
        <label className="block">
          Order notes (optional)
          <textarea
            className="field mt-2"
            placeholder="Allergies, preferences or collection time"
            {...register("notes")}
          />
          {errors.notes && <span className="error">{errors.notes.message}</span>}
        </label>
        <p className="text-sm leading-6">
          Your details will be shared with the selected cafe through WhatsApp. Sending a message
          requests an order; the cafe must confirm it.{" "}
          <Link href="/privacy-policy" className="underline">
            Privacy policy
          </Link>
        </p>
        <Button type="submit" className="w-full">
          Send order on WhatsApp
        </Button>
      </form>
      <aside className="panel">
        <h2 className="text-2xl font-bold">Review your order</h2>
        {lines.map((l) => (
          <p className="my-4 flex justify-between gap-5" key={l.item.id}>
            <span>
              {l.quantity} × {l.item.name}
            </span>
            <strong>₹{l.quantity * l.item.price}</strong>
          </p>
        ))}
        <hr />
        <p className="my-5 text-xl font-bold">Food subtotal: ₹{subtotal}</p>
        <p>{deliveryMessage(subtotal, method)}</p>
        <p className="mt-4 text-sm leading-6">
          Delivery is offered 11 AM–9 PM IST, within the cafe’s service area (approximately 5–7 km).
          Requests outside these hours need confirmation for the next available slot. No online
          payment is collected here.
        </p>
        <Link className="mt-5 block underline" href="/bag">
          Edit your bag
        </Link>
      </aside>
    </div>
  );
}
