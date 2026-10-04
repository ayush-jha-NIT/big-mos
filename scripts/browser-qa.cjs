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
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + "/menu");
  await page.getByRole("link", { name: "View bag, 4 items", exact: true }).waitFor();
  await page.goto(base + "/");
  await page.waitForTimeout(5500);
  assert.equal(
    await page.getByRole("button", { name: "Show slide 2" }).getAttribute("aria-pressed"),
    "true",
  );
  await page.getByRole("button", { name: "Pause", exact: true }).click();
  await page.waitForTimeout(5500);
  assert.equal(
    await page.getByRole("button", { name: "Show slide 2" }).getAttribute("aria-pressed"),
    "true",
  );
  await page.getByRole("button", { name: "Next slide", exact: true }).click();
  assert.equal(
    await page.getByRole("button", { name: "Show slide 3" }).getAttribute("aria-pressed"),
    "true",
  );
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "About", exact: true })
    .click();
  await page.waitForURL(base + "/about");
  assert.equal(new URL(page.url()).pathname, "/about");
  await page.goto(base + "/checkout");
  await page.getByLabel("Full name").fill("Delivery QA");
  await page.getByLabel("Mobile number").fill("9876543210");
  await page.getByLabel("Delivery address").fill("Tagore Town, Prayagraj");
  await page.getByRole("button", { name: "Send order on WhatsApp" }).click();
  await page.waitForURL("https://wa.me/**");
  assert(message.includes("Total: ₹299"));
  assert(message.includes("Delivery fee: ₹0"));
  assert(message.includes("Tagore Town, Prayagraj"));
  await page.goto(base + "/menu");
  await page.evaluate(() =>
    localStorage.setItem("big-mos-bag", JSON.stringify({ state: { items: null }, version: 0 })),
  );
  await page.reload();
  await page.goto(base + "/bag");
  await page.getByText("Your bag is waiting for something delicious.").waitFor();
  const sitemap = await page.request.get(base + "/sitemap.xml");
  assert.equal(sitemap.status(), 200);
  assert((await sitemap.text()).includes("/outlets/haldwani"));
  await page.goto(base + "/menu");
  assert.equal(await page.locator('link[rel="canonical"]').count(), 1);
  assert(
    (await page.locator('meta[property="og:image"]').getAttribute("content")).includes(".webp"),
  );
  const missing = await page.goto(base + "/does-not-exist");
  assert.equal(missing.status(), 404);
  const touchPage = await browser.newPage({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
  });
  await touchPage.goto(base + "/");
  await touchPage.getByRole("button", { name: "Pause", exact: true }).click();
  const cdp = await touchPage.context().newCDPSession(touchPage);
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchStart",
    touchPoints: [{ x: 300, y: 200 }],
  });
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchMove",
    touchPoints: [{ x: 100, y: 200 }],
  });
  await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
  await touchPage.waitForTimeout(200);
  assert.equal(
    await touchPage.getByRole("button", { name: "Show slide 2" }).getAttribute("aria-pressed"),
    "true",
  );
  await touchPage.goto(base + "/");
  await touchPage.mouse.move(100, 200);
  await touchPage.mouse.down();
  await touchPage.waitForTimeout(5500);
  assert.equal(
    await touchPage.getByRole("button", { name: "Show slide 1" }).getAttribute("aria-pressed"),
    "true",
  );
  await touchPage.mouse.up();
  await touchPage.emulateMedia({ reducedMotion: "reduce" });
  await touchPage.reload();
  await touchPage.waitForTimeout(5500);
  assert.equal(
    await touchPage.getByRole("button", { name: "Show slide 1" }).getAttribute("aria-pressed"),
    "true",
  );
  await touchPage.close();
  assert.deepEqual(errors, []);
  console.log(
    "PASS: 36 responsive route checks; persistence; quantities; validation; pickup/delivery WhatsApp messages; gallery; exact ₹299 boundary; carousel timer/pause; mobile navigation and bag counter; corrupted storage; SEO and 404; no runtime errors.",
  );
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
