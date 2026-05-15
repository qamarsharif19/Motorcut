import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "..", ".screenshots");

const url = process.argv[2] ?? "http://localhost:3001/preview/hero";
const tag = process.argv[3] ?? "hero";

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();

await page.goto(url, { waitUntil: "networkidle", timeout: 30_000 });
// Wait for entrance animations to settle
await page.waitForTimeout(1500);

const fs = await import("node:fs/promises");
await fs.mkdir(outDir, { recursive: true });

await page.screenshot({
  path: resolve(outDir, `${tag}-1440-above-fold.png`),
  fullPage: false,
});
await page.screenshot({
  path: resolve(outDir, `${tag}-1440-full.png`),
  fullPage: true,
});

// Mobile pass
await context.close();
const mobile = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
});
const mpage = await mobile.newPage();
await mpage.goto(url, { waitUntil: "networkidle", timeout: 30_000 });
await mpage.waitForTimeout(1500);
await mpage.screenshot({
  path: resolve(outDir, `${tag}-390-full.png`),
  fullPage: true,
});

await browser.close();

console.log(`Screenshots written to: ${outDir}`);
