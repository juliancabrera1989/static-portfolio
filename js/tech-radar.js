// Utility functions
function stripHTML(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

function extractFirstImage(html) {
  if (!html) return null;
  const div = document.createElement("div");
  div.innerHTML = html;
  const img = div.querySelector("img");
  return img ? img.src : null;
}

function isValidImage(url) {
  return url && url.startsWith("http");
}

async function getPreviewImage(url) {
  try {
    const res = await fetch(`https://static-portfolio-api.onrender.com/preview?url=${encodeURIComponent(url)}`);
    const data = await res.json();
    return data.image || "https://via.placeholder.com/600x400?text=No+Preview";
  } catch (err) {
    console.error("Error fetching preview image:", err);
    return "https://via.placeholder.com/600x400?text=No+Preview";
  }
}

/* =============== TRADUCTOR =============== */
async function translateText(text, targetLang = 'es') {
  if (targetLang === 'en' || !text) return text;
  try {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|es`);
    const data = await res.json();
    return data.responseData.translatedText || text;
  } catch (err) {
    console.error("Error al traducir texto:", err);
    return text;
  }
}

function getCurrentLanguage() {
  return localStorage.getItem("selectedLang") || "en";
}

/* =============== DEV.TO =============== */
async function loadDevtoAllImages() {
  try {
    const lang = getCurrentLanguage();
    const res = await fetch("https://dev.to/api/articles?per_page=50");
    const data = await res.json();
    const container = document.getElementById("devto");
    container.innerHTML = `<p class="text-gray-500 col-span-full text-center">Loading news...</p>`;

    const postsWithImages = [];

    for (const item of data) {
      let img = item.cover_image;
      if (!isValidImage(img)) img = extractFirstImage(item.body_html);
      if (!isValidImage(img)) continue;

      postsWithImages.push({ ...item, img });
    }

    container.innerHTML = "";

    for (const item of postsWithImages.slice(0, 12)) {
      const titleTrans = await translateText(item.title, lang);
      const descTrans = await translateText(stripHTML(item.description).substring(0, 100), lang);

      const card = `
        <div class="news-card">
          <img class="news-image" src="${item.img}" alt="${titleTrans}">
          <div class="news-content">
            <h3><a href="${item.url}" target="_blank">${titleTrans}</a></h3>
            <p>${descTrans}...</p>
            <p class="news-date">${new Date(item.published_at).toLocaleDateString()}</p>
          </div>
        </div>`;
      container.insertAdjacentHTML("beforeend", card);
    }

    console.log(`✅ DEV.to: Posts procesados e idioma aplicado (${lang}).`);
  } catch (err) {
    console.error("Error loading Dev.to:", err);
  }
}

/* =============== SMASHING MAGAZINE =============== */
async function loadSmashingNews() {
  try {
    const lang = getCurrentLanguage();
    const rssUrl = "https://www.smashingmagazine.com/feed/";
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    const res = await fetch(apiUrl);
    const data = await res.json();

    const container = document.getElementById("smashing");
    container.innerHTML = `<p class="text-gray-500 col-span-full text-center">Loading news...</p>`;

    const postsWithImages = data.items.filter(
      item => extractFirstImage(item.description) || isValidImage(item.enclosure?.link)
    );

    container.innerHTML = "";

    for (const item of postsWithImages.slice(0, 12)) {
      const img = extractFirstImage(item.description) || item.enclosure?.link;
      const titleTrans = await translateText(item.title, lang);
      const descTrans = await translateText(stripHTML(item.description).substring(0, 100), lang);

      const card = `
        <div class="news-card">
          <img class="news-image" src="${img}" alt="${titleTrans}">
          <div class="news-content">
            <h3><a href="${item.link}" target="_blank">${titleTrans}</a></h3>
            <p>${descTrans}...</p>
            <p class="news-date">${new Date(item.pubDate).toLocaleDateString()}</p>
          </div>
        </div>`;
      container.insertAdjacentHTML("beforeend", card);
    }

    console.log(`✅ Smashing Magazine: Posts procesados e idioma aplicado (${lang}).`);
  } catch (err) {
    console.error("Error loading Smashing Magazine:", err);
  }
}

/* =============== HACKER NEWS =============== */
async function loadHackerNews() {
  try {
    const lang = getCurrentLanguage();
    const res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
    const storyIds = await res.json();

    const container = document.getElementById("hackernews");
    container.innerHTML = `<p class="text-gray-500 col-span-full text-center">Loading news...</p>`;

    container.innerHTML = "";

    for (let i = 0; i < 9; i++) {
      const storyRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyIds[i]}.json`);
      const story = await storyRes.json();

      if (!story || !story.url) continue;

      const img = await getPreviewImage(story.url);
      const titleTrans = await translateText(story.title, lang);

      const card = document.createElement("div");
      card.className = "news-card";
      card.innerHTML = `
        <img class="news-image" src="${img}" alt="Preview of ${titleTrans}">
        <div class="news-content">
          <h3><a href="${story.url}" target="_blank">${titleTrans}</a></h3>
          <p class="news-description">${titleTrans.substring(0, 100)}...</p>
          <p class="news-date">${new Date(story.time * 1000).toLocaleDateString()}</p>
        </div>
      `;
      container.appendChild(card);
    }

    console.log(`✅ Hacker News: Posts procesados e idioma aplicado (${lang}).`);
  } catch (err) {
    console.error("Error loading Hacker News:", err);
  }
}

/* =============== CARGA Y EVENTOS =============== */
function loadAllFeeds() {
  loadDevtoAllImages();
  loadSmashingNews();
  loadHackerNews();
}

document.addEventListener("DOMContentLoaded", () => {
  loadAllFeeds();

  // Escuchar el evento de cambio de idioma emitido por el i18n del Navbar
  window.addEventListener("languageChanged", () => {
    loadAllFeeds();
  });
});