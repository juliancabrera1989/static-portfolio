import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import * as cheerio from "cheerio";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

const app = express();
app.use(cors());

const screenshotCache = {};

app.get("/preview", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "URL required" });

  try {
    const response = await fetch(url, { timeout: 15000 });
    const html = await response.text();
    const $ = cheerio.load(html);

    let image =
      $('meta[property="og:image"]').attr("content") ||
      $('meta[name="twitter:image"]').attr("content") ||
      $('link[rel="image_src"]').attr("href") ||
      "";

    if (!image) {
      if (screenshotCache[url]) {
        image = screenshotCache[url];
      } else {
        const browser = await puppeteer.launch({
          args: chromium.args,
          defaultViewport: chromium.defaultViewport,
          executablePath: await chromium.executablePath(),
          headless: chromium.headless,
        });
        
        const page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 800 });
        await page.goto(url, { waitUntil: "networkidle2", timeout: 20000 });
        const screenshotBuffer = await page.screenshot({ fullPage: false });
        await browser.close();

        image = `data:image/png;base64,${screenshotBuffer.toString("base64")}`;
        screenshotCache[url] = image;
      }
    }

    res.json({ image });
  } catch (err) {
    console.error("❌ Error fetching preview:", err);
    res.json({ image: "https://via.placeholder.com/600x400?text=No+Preview" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`✅ Preview server running at http://localhost:${PORT}`)
);