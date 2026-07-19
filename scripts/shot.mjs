import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";
import { mkdir } from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../src/assets/projects");
await mkdir(outDir, { recursive: true });

const sites = [
  { url: "https://mimivirtualagent.com/", file: "mimi-virtual-agent.png" },
  { url: "https://chatflow.zeltacode.com/", file: "chatflow.png" },
  { url: "https://taxflowpro.ai/", file: "taxflow.png" },
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const site of sites) {
  try {
    await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(3500);
    await page.screenshot({ path: path.join(outDir, site.file), fullPage: false });
    console.log("OK", site.file);
  } catch (e) {
    console.log("FAIL", site.file, e.message);
  }
}

await browser.close();
