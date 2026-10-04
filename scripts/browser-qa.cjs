/* eslint-disable @typescript-eslint/no-require-imports -- standalone Node QA runner */
// Run against npm run start with PLAYWRIGHT_MODULE pointing to an installed Playwright package.
const assert = require("node:assert/strict");
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
(async () => {
  const browser = await chromium.launch({
    headless: true,
    channel: process.env.QA_BROWSER_CHANNEL || "msedge",
  });
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const base = process.env.QA_URL || "http://localhost:3000";
  for (const width of [390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      "/",
      "/menu",
      "/about",
      "/gallery",
      "/outlets",
      "/outlets/prayagraj",
      "/outlets/haldwani",
      "/contact",
      "/privacy-policy",
      "/terms",
      "/bag",
      "/checkout",
    ]) {
      const response = await page.goto(base + route);
      assert.equal(response.status(), 200, route);
      assert.equal(await page.locator("h1").count(), 1, route);
      assert(
        await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
        `Horizontal overflow ${width} ${route}`,
      );
    }
  }
  await page.goto(base + "/menu");
  await page.getByLabel("Find your next favourite").fill("Crunchy Veg");
  await page.getByRole("button", { name: "Add to Bag +" }).first().click();
  await page.goto(base + "/bag");
  await page.getByRole("button", { name: "Increase Crunchy Veg", exact: true }).click();
  await page.reload();
  await page.getByLabel("2 portions").waitFor();
  await page.goto(base + "/checkout");
  await page.getByRole("button", { name: "Send order on WhatsApp" }).click();
  assert((await page.getByRole("alert").count()) >= 2);
  await page.getByLabel("Full name").fill("QA Customer");
  await page.getByLabel("Mobile number").fill("9876543210");
  await page.getByLabel("Order type").selectOption("pickup");
  await page.locator("select[name=outlet]").selectOption("haldwani");
  let message = "";
  await page.route("https://wa.me/**", async (route) => {
    message = new URL(route.request().url()).searchParams.get("text");
    await route.fulfill({ status: 200, body: "Order preview intercepted by QA; no message sent." });
  });
  await page.getByRole("button", { name: "Send order on WhatsApp" }).click();
  await page.waitForURL("https://wa.me/**");
  assert(message.includes("Haldwani"));
  assert(message.includes("2 × Crunchy Veg"));
  assert(message.includes("₹120"));
  assert(message.includes("pickup"));
  await page.goto(base + "/gallery");
  await page.getByRole("button", { name: "Haldwani", exact: true }).click();
  assert.equal(await page.getByRole("button", { name: /Enlarge/ }).count(), 4);
  await page
    .getByRole("button", { name: /Enlarge/ })
    .first()
    .click();
  await page.getByRole("dialog").waitFor();
  await page.keyboard.press("Escape");
  assert.equal(await page.getByRole("dialog").count(), 0);
  await page.goto(base + "/menu");
  await page.getByLabel("Find your next favourite").fill("Classic Cold Coffee");
  await page.getByRole("button", { name: "Add to Bag +" }).first().click();
  await page.goto(base + "/menu");
  await page.getByLabel("Find your next favourite").fill("Veg Delight");
  await page.getByRole("button", { name: "Add to Bag +" }).first().click();
  await page.goto(base + "/bag");
  await page.getByText("Free delivery", { exact: true }).waitFor();
  assert.deepEqual(errors, []);
  console.log(
    "PASS: 36 responsive route checks; bag persistence; quantity; validation; outlet/pickup order formatting; gallery; free delivery; no runtime errors.",
  );
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
