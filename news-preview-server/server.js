import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

const app = express();
app.use(cors());

// Cache screenshots in memory (optional, avoids repeated screenshots)
const screenshotCache = {};

app.get("/preview", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "URL required" });

  try {
    // 1️⃣ Try to fetch og:image or twitter:image first
    const response = await fetch(url, { timeout: 15000 });
    const html = await response.text();
    const $ = cheerio.load(html);

    let image =
      $('meta[property="og:image"]').attr("content") ||
      $('meta[name="twitter:image"]').attr("content") ||
      $('link[rel="image_src"]').attr("href") ||
      "";

    // 2️⃣ If no image, take a screenshot using Puppeteer
    if (!image) {
      if (screenshotCache[url]) {
        image = screenshotCache[url]; // use cached screenshot
      } else {
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 800 });
        await page.goto(url, { waitUntil: "networkidle2", timeout: 20000 });
        const screenshotBuffer = await page.screenshot({ fullPage: false });
        await browser.close();

        // Convert screenshot to base64 data URI
        image = `data:image/png;base64,${screenshotBuffer.toString("base64")}`;
        screenshotCache[url] = image; // cache it
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
