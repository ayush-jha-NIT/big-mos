/* eslint-disable @typescript-eslint/no-require-imports -- Node test runner loads TypeScript data */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function (request, ...args) {
  return originalResolve.call(
    this,
    request.startsWith("@/") ? path.resolve(__dirname, "../src", request.slice(2)) : request,
    ...args,
  );
};
require.extensions[".ts"] = (module, filename) =>
  module._compile(
    ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    }).outputText,
    filename,
  );
const { menuItems, menuCategories } = require("../src/data/menu.ts");
const {
  checkoutSchema,
  deliveryMessage,
  formatOrder,
  isDeliveryOpen,
} = require("../src/lib/ordering.ts");
const { sanitizeCart } = require("../src/store/cart.ts");
const { getMenuPhoto } = require("../src/data/menu-photos.ts");
const photoSources = require("../public/menu/sources.json");
const suppliedPhotos = Object.entries(photoSources).filter(([key]) => key.startsWith("supplied/"));
assert.equal(suppliedPhotos.length, 44);
for (const [key, source] of suppliedPhotos) {
  assert(
    menuItems.some((item) => getMenuPhoto(item).key === key),
    `Unused supplied photo: ${key}`,
  );
  assert(fs.existsSync(path.resolve(__dirname, "../public", source.path.slice(1))));
}
assert.equal(
  getMenuPhoto(menuItems.find((item) => item.id === "crunchy-veg")).key,
  "supplied/crunchy-veg",
);
assert.equal(
  getMenuPhoto(menuItems.find((item) => item.id === "salted-fries-large")).key,
  "supplied/salted-fries-regular",
);
for (const item of menuItems) {
  const photo = getMenuPhoto(item);
  assert(
    fs.existsSync(path.resolve(__dirname, "../public", photo.src.slice(1))),
    `Missing photo: ${item.name}`,
  );
  assert(photo.alt.includes(item.name));
}
assert.equal(new Set(menuItems.map((i) => i.id)).size, menuItems.length);
assert(
  menuItems.every(
    (i) =>
      i.price > 0 &&
      Number.isInteger(i.price) &&
      menuCategories.some((c) => c.id === i.category) &&
      i.vegetarian,
  ),
);
assert(menuCategories.every((c) => menuItems.some((i) => i.category === c.id)));
assert.equal(deliveryMessage(299), "Free delivery");
assert.equal(deliveryMessage(300), "Free delivery");
assert(deliveryMessage(298).includes("₹1"));
for (const [utc, open] of [
  ["2026-10-04T05:29:00Z", false],
  ["2026-10-04T05:30:00Z", true],
  ["2026-10-04T15:29:00Z", true],
  ["2026-10-04T15:30:00Z", false],
])
  assert.equal(isDeliveryOpen(new Date(utc)), open, utc);
const order = {
  name: "QA Customer",
  phone: "9876543210",
  method: "delivery",
  outlet: "prayagraj",
  address: "Tagore Town, Prayagraj",
  notes: "Less spicy",
};
assert(checkoutSchema.safeParse(order).success);
assert(!checkoutSchema.safeParse({ ...order, address: "" }).success);
assert(checkoutSchema.safeParse({ ...order, method: "pickup", address: "" }).success);
assert(!checkoutSchema.safeParse({ ...order, phone: "123" }).success);
const lines = [{ item: { name: "Test item", price: 299 }, quantity: 1 }];
const text = formatOrder(order, lines);
assert(text.includes("Delivery fee: ₹0"));
assert(text.includes("Total: ₹299"));
assert(text.includes(order.address));
assert(!formatOrder({ ...order, method: "pickup" }, lines).includes(order.address));
assert.deepEqual(sanitizeCart(null), {});
assert.deepEqual(sanitizeCart({ "crunchy-veg": 2, unknown: 1, "white-sauce-pasta": -1 }), {
  "crunchy-veg": 2,
});
console.log(
  `PASS: ${menuItems.length} menu items / ${menuCategories.length} categories; delivery threshold and IST boundaries; validation; order formatting; persisted cart sanitation.`,
);
