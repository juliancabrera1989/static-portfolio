// import express from "express";
// import cors from "cors";
// import fetch from "node-fetch";
// import * as cheerio from "cheerio";
// import puppeteer from "puppeteer";

// const app = express();
// app.use(cors());

// // Cache screenshots in memory (optional, avoids repeated screenshots)
// const screenshotCache = {};

// app.get("/preview", async (req, res) => {
//   const { url } = req.query;
//   if (!url) return res.status(400).json({ error: "URL required" });

//   try {
//     // 1️⃣ Try to fetch og:image or twitter:image first
//     const response = await fetch(url, { timeout: 15000 });
//     const html = await response.text();
//     const $ = cheerio.load(html);

//     let image =
//       $('meta[property="og:image"]').attr("content") ||
//       $('meta[name="twitter:image"]').attr("content") ||
//       $('link[rel="image_src"]').attr("href") ||
//       "";

//     // 2️⃣ If no image, take a screenshot using Puppeteer
//     if (!image) {
//       if (screenshotCache[url]) {
//         image = screenshotCache[url]; // use cached screenshot
//       } else {
//         const browser = await puppeteer.launch({ headless: "new" });
//         const page = await browser.newPage();
//         await page.setViewport({ width: 1200, height: 800 });
//         await page.goto(url, { waitUntil: "networkidle2", timeout: 20000 });
//         const screenshotBuffer = await page.screenshot({ fullPage: false });
//         await browser.close();

//         // Convert screenshot to base64 data URI
//         image = `data:image/png;base64,${screenshotBuffer.toString("base64")}`;
//         screenshotCache[url] = image; // cache it
//       }
//     }

//     res.json({ image });
//   } catch (err) {
//     console.error("❌ Error fetching preview:", err);
//     res.json({ image: "https://via.placeholder.com/600x400?text=No+Preview" });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () =>
//   console.log(`✅ Preview server running at http://localhost:${PORT}`)
// );





// import express from "express";
// import cors from "cors";
// import fetch from "node-fetch";
// import * as cheerio from "cheerio";
// import puppeteer from "puppeteer";

// const app = express();
// app.use(cors());

// const screenshotCache = {};

// app.get("/preview", async (req, res) => {
//   const { url } = req.query;
//   if (!url) return res.status(400).json({ error: "URL required" });

//   try {
//     // 1️⃣ Simular un navegador real para evitar bloqueos
//     const response = await fetch(url, {
//       timeout: 15000,
//       headers: {
//         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
//       }
//     });

//     const html = await response.text();
//     const $ = cheerio.load(html);

//     let image =
//       $('meta[property="og:image"]').attr("content") ||
//       $('meta[name="twitter:image"]').attr("content") ||
//       $('link[rel="image_src"]').attr("href") ||
//       "";

//     // Convertir ruta relativa a URL absoluta si es necesario
//     if (image && !image.startsWith("http")) {
//       image = new URL(image, url).href;
//     }

//     // 2️⃣ Si no hay meta-imagen, usar Puppeteer adaptado a Render
//     if (!image) {
//       if (screenshotCache[url]) {
//         image = screenshotCache[url];
//       } else {
//         const browser = await puppeteer.launch({
//           headless: "new",
//           args: [
//             "--no-sandbox",
//             "--disable-setuid-sandbox",
//             "--disable-dev-shm-usage",
//             "--single-process",
//             "--no-zygote"
//           ]
//         });

//         const page = await browser.newPage();
//         await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36");
//         await page.setViewport({ width: 1200, height: 800 });
        
//         await page.goto(url, { waitUntil: "networkidle2", timeout: 20000 });
//         const screenshotBuffer = await page.screenshot({ fullPage: false });
//         await browser.close();

//         image = `data:image/png;base64,${screenshotBuffer.toString("base64")}`;
//         screenshotCache[url] = image;
//       }
//     }

//     res.json({ image });
//   } catch (err) {
//     console.error("❌ Error fetching preview:", err);
//     res.json({ image: "https://via.placeholder.com/600x400?text=No+Preview" });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () =>
//   console.log(`✅ Preview server running on port ${PORT}`)
// );






// import express from "express";
// import cors from "cors";
// import fetch from "node-fetch";
// import * as cheerio from "cheerio";
// import puppeteer from "puppeteer";

// const app = express();
// app.use(cors());

// const screenshotCache = {};

// app.get("/preview", async (req, res) => {
//   const { url } = req.query;
//   if (!url) return res.status(400).json({ error: "URL required" });

//   try {
//     // 1️⃣ Intentar obtener meta-etiquetas og:image o twitter:image
//     const response = await fetch(url, {
//       timeout: 8000,
//       headers: {
//         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
//       }
//     });

//     const html = await response.text();
//     const $ = cheerio.load(html);

//     let image =
//       $('meta[property="og:image"]').attr("content") ||
//       $('meta[name="twitter:image"]').attr("content") ||
//       $('link[rel="image_src"]').attr("href") ||
//       "";

//     // Si la ruta es relativa, la convertimos a absoluta
//     if (image && !image.startsWith("http")) {
//       image = new URL(image, url).href;
//     }

//     // 2️⃣ Si no hay meta-imagen, usar Puppeteer ligero o API de respaldo
//     if (!image) {
//       if (screenshotCache[url]) {
//         image = screenshotCache[url];
//       } else {
//         try {
//           const browser = await puppeteer.launch({
//             headless: "new",
//             args: [
//               "--no-sandbox",
//               "--disable-setuid-sandbox",
//               "--disable-dev-shm-usage",
//               "--single-process",
//               "--no-zygote",
//               "--disable-gpu"
//             ]
//           });

//           const page = await browser.newPage();
          
//           // Bloquear recursos pesados para no consumir RAM en Render
//           await page.setRequestInterception(true);
//           page.on('request', (req) => {
//             if (['font', 'stylesheet'].includes(req.resourceType())) {
//               req.abort();
//             } else {
//               req.continue();
//             }
//           });

//           await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36");
//           await page.setViewport({ width: 800, height: 600 });
          
//           await page.goto(url, { waitUntil: "domcontentloaded", timeout: 10000 });
//           const screenshotBuffer = await page.screenshot({ type: 'jpeg', quality: 60 });
//           await browser.close();

//           image = `data:image/jpeg;base64,${screenshotBuffer.toString("base64")}`;
//         } catch (puppeteerErr) {
//           console.warn("⚠️ Puppeteer falló o dio timeout. Usando API de captura rápida fallback:", puppeteerErr.message);
//           // Fallback rápido usando microlink para no dejar la tarjeta vacía
//           image = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url`;
//         }

//         screenshotCache[url] = image;
//       }
//     }

//     res.json({ image });
//   } catch (err) {
//     console.error("❌ Error en preview server:", err.message);
//     // Fallback final
//     const fallbackImage = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url`;
//     res.json({ image: fallbackImage });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () =>
//   console.log(`✅ Preview server running on port ${PORT}`)
// );


import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import * as cheerio from "cheerio";

const app = express();
app.use(cors());

const cache = {};

app.get("/preview", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "URL required" });

  if (cache[url]) {
    return res.json({ image: cache[url] });
  }

  try {
    // 1️⃣ Buscar la etiqueta og:image o twitter:image del sitio
    const response = await fetch(url, {
      timeout: 6000,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    });

    const html = await response.text();
    const $ = cheerio.load(html);

    let image =
      $('meta[property="og:image"]').attr("content") ||
      $('meta[name="twitter:image"]').attr("content") ||
      $('link[rel="image_src"]').attr("href") ||
      "";

    // Si la URL de la imagen es relativa, la convertimos a absoluta
    if (image && !image.startsWith("http")) {
      image = new URL(image, url).href;
    }

    // 2️⃣ Si no tiene imagen, la generamos en el acto con Microlink
    if (!image) {
      image = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url`;
    }

    cache[url] = image;
    res.json({ image });
  } catch (err) {
    // Si la web bloquea la lectura, recurrimos al fallback directo
    const fallbackImage = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url`;
    res.json({ image: fallbackImage });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Preview server running on port ${PORT}`));