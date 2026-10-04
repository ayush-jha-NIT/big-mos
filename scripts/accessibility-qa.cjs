/* eslint-disable @typescript-eslint/no-require-imports -- standalone browser QA */
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const fs = require("node:fs");
(async () => {
  const browser = await chromium.launch({ channel: process.env.QA_BROWSER_CHANNEL || "msedge" });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const results = [];
  await page.goto((process.env.QA_URL || "http://localhost:3000") + "/menu");
  await page.getByRole("button", { name: "Add to Bag +" }).first().click();
  for (const route of [
    "/",
    "/menu",
    "/about",
    "/gallery",
    "/outlets",
    "/contact",
    "/bag",
    "/checkout",
    "/privacy-policy",
    "/terms",
  ]) {
    await page.goto((process.env.QA_URL || "http://localhost:3000") + route);
    await page.addScriptTag({
      path: process.env.AXE_SCRIPT || require.resolve("axe-core/axe.min.js"),
    });
    const report = await page.evaluate(async () =>
      window.axe.run(document, {
        runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa"] },
      }),
    );
    results.push({
      route,
      violations: report.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => ({ target: n.target, summary: n.failureSummary })),
      })),
    });
  }
  fs.writeFileSync(
    process.env.A11Y_OUTPUT || "accessibility-report.json",
    JSON.stringify(results, null, 2),
  );
  await browser.close();
  console.log(
    JSON.stringify(
      results.map((r) => ({
        route: r.route,
        violations: r.violations.map((v) => ({ id: v.id, nodes: v.nodes.length })),
      })),
    ),
  );
  if (results.some((r) => r.violations.length)) process.exitCode = 1;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
