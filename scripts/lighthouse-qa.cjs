/* eslint-disable @typescript-eslint/no-require-imports -- standalone audit runner */
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
(async () => {
  const port = Number(process.env.LIGHTHOUSE_PORT || 9340);
  const browser = await chromium.launch({
    channel: process.env.QA_BROWSER_CHANNEL || "msedge",
    args: [`--remote-debugging-port=${port}`],
  });
  fs.mkdirSync("reports", { recursive: true });
  const cli =
    process.env.LIGHTHOUSE_CLI ||
    path.resolve(path.dirname(require.resolve("lighthouse")), "../cli/index.js");
  const child = spawn(
    process.execPath,
    [
      cli,
      process.env.QA_URL || "http://localhost:3000",
      `--port=${port}`,
      "--output=json",
      "--output-path=reports/lighthouse.json",
      "--only-categories=performance,accessibility,best-practices,seo",
      "--quiet",
    ],
    { stdio: "inherit" },
  );
  const code = await new Promise((resolve, reject) => {
    child.once("exit", resolve);
    child.once("error", reject);
  });
  await browser.close();
  if (code) process.exit(code);
  const report = JSON.parse(fs.readFileSync("reports/lighthouse.json", "utf8"));
  const scores = Object.fromEntries(
    Object.entries(report.categories).map(([key, value]) => [key, Math.round(value.score * 100)]),
  );
  console.log(JSON.stringify(scores));
  if (
    scores.performance < 80 ||
    scores.accessibility < 95 ||
    scores["best-practices"] < 95 ||
    scores.seo < 95
  )
    process.exitCode = 1;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
