




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
    const res = await fetch(`http://localhost:3000/preview?url=${encodeURIComponent(url)}`);
    const data = await res.json();
    return data.image || "https://via.placeholder.com/600x400?text=No+Preview";
  } catch (err) {
    console.error("Error fetching preview image:", err);
    return "https://via.placeholder.com/600x400?text=No+Preview";
  }
}

/* =============== DEV.TO =============== */
async function loadDevtoAllImages() {
  try {
    const res = await fetch("https://dev.to/api/articles?per_page=50");
    const data = await res.json();
    const container = document.getElementById("devto");
    container.innerHTML = "";

    const postsWithImages = [];

    for (const item of data) {
      let img = item.cover_image;
      if (!isValidImage(img)) img = extractFirstImage(item.body_html);
      if (!isValidImage(img)) continue;

      postsWithImages.push({ ...item, img });
    }

    postsWithImages.forEach(item => {
      const card = `
        <div class="news-card">
          <img class="news-image" src="${item.img}" alt="${item.title}">
          <div class="news-content">
            <h3><a href="${item.url}" target="_blank">${item.title}</a></h3>
            <p>${stripHTML(item.description).substring(0, 100)}...</p>
            <p class="news-date">${new Date(item.published_at).toLocaleDateString()}</p>
          </div>
        </div>`;
      container.insertAdjacentHTML("beforeend", card);
    });

    console.log(`✅ DEV.to: ${postsWithImages.length} posts with images.`);
  } catch (err) {
    console.error("Error loading Dev.to:", err);
  }
}

/* =============== SMASHING MAGAZINE =============== */
async function loadSmashingNews() {
  try {
    const rssUrl = "https://www.smashingmagazine.com/feed/";
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    const res = await fetch(apiUrl);
    const data = await res.json();

    const container = document.getElementById("smashing");
    container.innerHTML = "";

    const postsWithImages = data.items.filter(
      item => extractFirstImage(item.description) || isValidImage(item.enclosure?.link)
    );

    postsWithImages.forEach(item => {
      const img = extractFirstImage(item.description) || item.enclosure?.link;
      const card = `
        <div class="news-card">
          <img class="news-image" src="${img}" alt="${item.title}">
          <div class="news-content">
            <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
            <p>${stripHTML(item.description).substring(0, 100)}...</p>
            <p class="news-date">${new Date(item.pubDate).toLocaleDateString()}</p>
          </div>
        </div>`;
      container.insertAdjacentHTML("beforeend", card);
    });

    console.log(`✅ Smashing Magazine: ${postsWithImages.length} posts with images.`);
  } catch (err) {
    console.error("Error loading Smashing Magazine:", err);
  }
}

async function loadHackerNews() {
  try {
    const res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
    const storyIds = await res.json();

    const container = document.getElementById("hackernews");
    container.innerHTML = "";

    for (let i = 0; i < 10; i++) {
      const storyRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyIds[i]}.json`);
      const story = await storyRes.json();

      if (!story.url) continue;

      const img = await getPreviewImage(story.url);

      const card = document.createElement("div");
      card.className = "news-card";
      card.innerHTML = `
        <img class="news-image" src="${img}" alt="Preview of ${story.title}">
        <div class="news-content">
          <h3><a href="${story.url}" target="_blank">${story.title}</a></h3>
          <p class="news-description">${stripHTML(story.title).substring(0, 100)}...</p>
          <p class="news-date">${new Date(story.time * 1000).toLocaleDateString()}</p>
        </div>
      `;
      container.appendChild(card);
    }

    console.log("✅ Hacker News loaded successfully with previews.");
  } catch (err) {
    console.error("Error loading Hacker News:", err);
  }
}



/* =============== RUN ALL =============== */
document.addEventListener("DOMContentLoaded", () => {
  loadDevtoAllImages();
  loadSmashingNews();
  loadHackerNews();
});
