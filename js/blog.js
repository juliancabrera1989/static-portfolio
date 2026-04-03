// const categories = {
//       webdev: [
//         "https://dev.to/feed",
//         "https://www.smashingmagazine.com/feed/",
//         "https://hacks.mozilla.org/feed/"
//       ],
//       startups: [
//         "https://techcrunch.com/feed/",
//         "https://hnrss.org/frontpage"
//       ],
//       design: [
//         "https://alistapart.com/main/feed/",
//         "https://css-tricks.com/feed/"
//       ]
//     };

//     const CACHE_KEY = "programmingNewsCache";
//     const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

//     async function fetchFeed(rssUrl) {
//       const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       return data.items || [];
//     }

//     async function getCategoryNews(category, forceRefresh = false) {
//       const cached = localStorage.getItem(CACHE_KEY);
//       const now = Date.now();
//       let cache = cached ? JSON.parse(cached) : { timestamp: 0, data: {} };

//       if (!forceRefresh && cache.data[category] && (now - cache.timestamp < CACHE_DURATION)) {
//         console.log(`✅ Loaded ${category} from cache`);
//         return cache.data[category];
//       }

//       console.log(`🌐 Fetching fresh ${category} news...`);
//       const results = await Promise.all(categories[category].map(fetchFeed));

//       let articles = results.flat().map(item => ({
//         title: item.title,
//         link: item.link,
//         pubDate: new Date(item.pubDate),
//         source: item.author || item.feedTitle || "Unknown"
//       }));

//       articles.sort((a, b) => b.pubDate - a.pubDate);

//       // Update cache
//       cache.timestamp = now;
//       cache.data[category] = articles;
//       localStorage.setItem(CACHE_KEY, JSON.stringify(cache));

//       return articles;
//     }

//     async function loadCategory(category, forceRefresh = false) {
//       try {
//         const container = document.querySelector(`#${category} .news-list`);
//         container.innerHTML = "Loading...";

//         const articles = await getCategoryNews(category, forceRefresh);
//         container.innerHTML = "";

//         articles.slice(0, 6).forEach(article => {
//           const div = document.createElement("div");
//           div.className = "news-item";
//           div.innerHTML = `
//             <a href="${article.link}" target="_blank">${article.title}</a>
//             <p>${article.pubDate.toDateString()} — ${article.source}</p>
//           `;
//           container.appendChild(div);
//         });
//       } catch (error) {
//         console.error(error);
//         document.querySelector(`#${category} .news-list`).innerText = "Error loading news.";
//       }
//     }

//     function loadAll(forceRefresh = false) {
//       Object.keys(categories).forEach(cat => loadCategory(cat, forceRefresh));
//     }

//     // Initial load
//     loadAll();

//     // Refresh button
//     document.getElementById("refreshBtn").addEventListener("click", () => loadAll(true));



    // const feeds = {
    //   devto: "https://api.rss2json.com/v1/api.json?rss_url=https://dev.to/feed",
    //   smashing: "https://api.rss2json.com/v1/api.json?rss_url=https://www.smashingmagazine.com/feed/",
    //   hackernews: "https://api.rss2json.com/v1/api.json?rss_url=https://hnrss.org/frontpage"
    // };

    // const placeholderImage = "https://via.placeholder.com/400x200.png?text=Coding+News";

    // async function fetchFeed(category, url) {
    //   try {
    //     const res = await fetch(url);
    //     const data = await res.json();

    //     const container = document.getElementById(category);
    //     container.innerHTML = "";

    //     data.items.slice(0, 6).forEach(item => {
    //       const img = item.enclosure?.link || extractImage(item.description) || placeholderImage;

    //       const card = `
    //         <div class="news-card">
    //           <img class="news-image" src="${img}" alt="News image">
    //           <div class="news-content">
    //             <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
    //             <p class="news-description">${stripHTML(item.description).substring(0, 100)}...</p>
    //             <p class="news-date">${new Date(item.pubDate).toLocaleDateString()}</p>
    //           </div>
    //         </div>
    //       `;
    //       container.insertAdjacentHTML("beforeend", card);
    //     });
    //   } catch (err) {
    //     console.error("Error fetching feed:", err);
    //   }
    // }

    // function stripHTML(html) {
    //   const div = document.createElement("div");
    //   div.innerHTML = html;
    //   return div.textContent || div.innerText || "";
    // }

    // function extractImage(html) {
    //   const div = document.createElement("div");
    //   div.innerHTML = html;
    //   const img = div.querySelector("img");
    //   return img ? img.src : null;
    // }

    // // Fetch feeds
    // fetchFeed("devto", feeds.devto);
    // fetchFeed("smashing", feeds.smashing);
    // fetchFeed("hackernews", feeds.hackernews);








//   const feeds = {
//     devto: "https://api.rss2json.com/v1/api.json?rss_url=https://dev.to/feed",
//     smashing: "https://api.rss2json.com/v1/api.json?rss_url=https://www.smashingmagazine.com/feed/",
//     hackernews: "https://api.rss2json.com/v1/api.json?rss_url=https://hnrss.org/frontpage"
//   };

//   const placeholderImage = "https://via.placeholder.com/400x200.png?text=Coding+News";

//   async function fetchFeed(category, url) {
//     try {
//       // localStorage cache
//       const cached = localStorage.getItem(category);
//       if (cached) {
//         const parsed = JSON.parse(cached);
//         const age = Date.now() - parsed.timestamp;
//         if (age < 30 * 60 * 1000) { // 30 minutes
//           renderFeed(category, parsed.data);
//           return;
//         }
//       }

//       // fetch live
//       const res = await fetch(url);
//       const data = await res.json();

//       // cache
//       localStorage.setItem(category, JSON.stringify({
//         data,
//         timestamp: Date.now()
//       }));

//       renderFeed(category, data);
//     } catch (err) {
//       console.error("Error fetching feed:", err);
//     }
//   }

//   function renderFeed(category, data) {
//     const container = document.getElementById(category);
//     container.innerHTML = "";

//     data.items.slice(0, 6).forEach(item => {
//       const img = getImage(item);

//       const card = `
//         <div class="news-card">
//           <img class="news-image" src="${img}" alt="News image">
//           <div class="news-content">
//             <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
//             <p class="news-description">${stripHTML(item.description).substring(0, 100)}...</p>
//             <p class="news-date">${new Date(item.pubDate).toLocaleDateString()}</p>
//           </div>
//         </div>
//       `;
//       container.insertAdjacentHTML("beforeend", card);
//     });
//   }

//   function getImage(item) {
//     if (item.enclosure?.link) return item.enclosure.link;
//     if (item.thumbnail) return item.thumbnail;
//     if (item.content) {
//       const img = extractImage(item.content);
//       if (img) return img;
//     }
//     const descImg = extractImage(item.description);
//     if (descImg) return descImg;
//     return placeholderImage;
//   }

//   function stripHTML(html) {
//     const div = document.createElement("div");
//     div.innerHTML = html;
//     return div.textContent || div.innerText || "";
//   }

//   function extractImage(html) {
//     const div = document.createElement("div");
//     div.innerHTML = html;
//     const img = div.querySelector("img");
//     return img ? img.src : null;
//   }

//   // Fetch feeds
//   fetchFeed("devto", feeds.devto);
//   fetchFeed("smashing", feeds.smashing);
//   fetchFeed("hackernews", feeds.hackernews);












//   const feeds = {
//     devto: "https://api.rss2json.com/v1/api.json?rss_url=https://dev.to/feed",
//     smashing: "https://api.rss2json.com/v1/api.json?rss_url=https://www.smashingmagazine.com/feed/",
//     hackernews: "https://api.rss2json.com/v1/api.json?rss_url=https://hnrss.org/frontpage"
//   };

//   // 👇 Replace with your own custom coding image if you like
//   const placeholderImage = "https://via.placeholder.com/400x200.png?text=Coding+News";

//   async function fetchFeed(category, url) {
//     try {
//       // cache check
//       const cached = localStorage.getItem(category);
//       if (cached) {
//         const parsed = JSON.parse(cached);
//         const age = Date.now() - parsed.timestamp;
//         if (age < 30 * 60 * 1000) { // 30 minutes
//           renderFeed(category, parsed.data);
//           return;
//         }
//       }

//       // fetch live
//       const res = await fetch(url);
//       const data = await res.json();

//       // save to cache
//       localStorage.setItem(category, JSON.stringify({
//         data,
//         timestamp: Date.now()
//       }));

//       renderFeed(category, data);
//     } catch (err) {
//       console.error("Error fetching feed:", err);
//     }
//   }

//   function renderFeed(category, data) {
//     const container = document.getElementById(category);
//     container.innerHTML = "";

//     data.items.slice(0, 6).forEach(item => {
//       const img = getImage(item);

//       const card = `
//         <div class="news-card">
//           <img class="news-image" src="${img}" alt="News image">
//           <div class="news-content">
//             <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
//             <p class="news-description">${stripHTML(item.description).substring(0, 100)}...</p>
//             <p class="news-date">${new Date(item.pubDate).toLocaleDateString()}</p>
//           </div>
//         </div>
//       `;
//       container.insertAdjacentHTML("beforeend", card);
//     });
//   }
// function getImage(item) {
//   // DEV.to and many feeds put images in `content` or `description`
//   let img = null;

//   if (item.cover_image) img = item.cover_image;
//   if (!img && item.enclosure?.link) img = item.enclosure.link;
//   if (!img && item.thumbnail) img = item.thumbnail;
//   if (!img && item.content) img = extractImage(item.content);
//   if (!img && item.description) img = extractImage(item.description);

//   // Always return something valid
//   return img || placeholderImage;
// }
// //   function getImage(item) {
// //     // Check multiple possible fields
// //     if (item.cover_image) return item.cover_image;          // DEV.to
// //     if (item.enclosure?.link) return item.enclosure.link;   // Some RSS feeds
// //     if (item.thumbnail) return item.thumbnail;              // Some feeds
// //     if (item.content) {
// //       const img = extractImage(item.content);
// //       if (img) return img;
// //     }
// //     if (item.description) {
// //       const img = extractImage(item.description);
// //       if (img) return img;
// //     }
// //     return placeholderImage; // 👈 Always return valid URL
// //   }

//   function stripHTML(html) {
//     const div = document.createElement("div");
//     div.innerHTML = html;
//     return div.textContent || div.innerText || "";
//   }

// //   function extractImage(html) {
// //     const div = document.createElement("div");
// //     div.innerHTML = html;
// //     const img = div.querySelector("img");
// //     return img ? img.src : null;
// //   }
//   function extractImage(html) {
//     const div = document.createElement("div");
//     div.innerHTML = html;
//     const img = div.querySelector("img");
//     return img ? img.src : null;
//   }

//   // Run feeds
//   fetchFeed("devto", feeds.devto);
//   fetchFeed("smashing", feeds.smashing);
//   fetchFeed("hackernews", feeds.hackernews);




  // const feeds = {
  //   devto: "https://api.rss2json.com/v1/api.json?rss_url=https://dev.to/feed",
  //   smashing: "https://api.rss2json.com/v1/api.json?rss_url=https://www.smashingmagazine.com/feed/",
  //   hackernews: "https://api.rss2json.com/v1/api.json?rss_url=https://hnrss.org/frontpage"
  // };

  // // 👇 Use your own custom coding image if you like
  // const placeholderImage = "https://via.placeholder.com/400x200.png?text=Coding+News";

  // async function fetchFeed(category, url) {
  //   try {
  //     // Check cache
  //     const cached = localStorage.getItem(category);
  //     if (cached) {
  //       const parsed = JSON.parse(cached);
  //       const age = Date.now() - parsed.timestamp;
  //       if (age < 30 * 60 * 1000) { // 30 minutes
  //         renderFeed(category, parsed.data);
  //         return;
  //       }
  //     }

  //     // Fetch live
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     // Cache it
  //     localStorage.setItem(category, JSON.stringify({
  //       data,
  //       timestamp: Date.now()
  //     }));

  //     renderFeed(category, data);
  //   } catch (err) {
  //     console.error("Error fetching feed:", err);
  //   }
  // }

  // function renderFeed(category, data) {
  //   const container = document.getElementById(category);
  //   container.innerHTML = "";

  //   data.items.slice(0, 6).forEach(item => {
  //     const img = getImage(item);

  //     const card = `
  //       <div class="news-card">
  //         <img class="news-image" src="${img}" alt="News image">
  //         <div class="news-content">
  //           <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
  //           <p class="news-description">${stripHTML(item.description).substring(0, 100)}...</p>
  //           <p class="news-date">${new Date(item.pubDate).toLocaleDateString()}</p>
  //         </div>
  //       </div>
  //     `;
  //     container.insertAdjacentHTML("beforeend", card);
  //   });
  // }

  // // 🧹 Clean malformed URLs (like trailing ":")
  // function cleanUrl(url) {
  //   if (!url) return null;
  //   url = url.trim();
  //   url = url.replace(/[:;]+$/, ""); // remove trailing : or ;
  //   return url;
  // }

  // function getImage(item) {
  //   let img = null;

  //   if (item.cover_image) img = item.cover_image;           // DEV.to often here
  //   if (!img && item.enclosure?.link) img = item.enclosure.link;
  //   if (!img && item.thumbnail) img = item.thumbnail;
  //   if (!img && item.content) img = extractImage(item.content);
  //   if (!img && item.description) img = extractImage(item.description);

  //   img = cleanUrl(img);

  //   return img || placeholderImage;
  // }

  // function stripHTML(html) {
  //   const div = document.createElement("div");
  //   div.innerHTML = html;
  //   return div.textContent || div.innerText || "";
  // }

  // function extractImage(html) {
  //   const div = document.createElement("div");
  //   div.innerHTML = html;
  //   const img = div.querySelector("img");
  //   if (!img) return null;

  //   let src = img.getAttribute("src") || img.src;

  //   // Fix relative paths
  //   if (src.startsWith("/")) {
  //     src = "https://dev.to" + src;
  //   }

  //   return cleanUrl(src);
  // }

  // // Run feeds
  // fetchFeed("devto", feeds.devto);
  // fetchFeed("smashing", feeds.smashing);
  // fetchFeed("hackernews", feeds.hackernews);


// const devtoFeed = "https://api.rss2json.com/v1/api.json?rss_url=https://dev.to/feed";

// function cleanUrl(url) {
//   if (!url) return null;
//   url = url.trim();
//   url = url.replace(/[:;]+$/, ""); // remove trailing : or ;
//   return url;
// }

// function extractImage(html) {
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   const img = div.querySelector("img");
//   if (!img) return null;
//   let src = img.getAttribute("src") || img.src;
//   if (src.startsWith("/")) src = "https://dev.to" + src;
//   return cleanUrl(src);
// }

// function getDevtoImage(item) {
//   let img = item.cover_image || extractImage(item.content) || extractImage(item.description);
//   return cleanUrl(img); // just return the cleaned URL
// }

// function stripHTML(html) {
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   return div.textContent || div.innerText || "";
// }

// async function loadDevto() {
//   try {
//     const res = await fetch(devtoFeed);
//     const data = await res.json();

//     const container = document.getElementById("devto");
//     container.innerHTML = "";

//     data.items.slice(0, 6).forEach(item => {
//       const img = getDevtoImage(item); // real image only

//       const card = `
//         <div class="news-card">
//           <img class="news-image" src="${img}" alt="${item.title}">
//           <div class="news-content">
//             <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
//             <p class="news-description">${stripHTML(item.description).substring(0, 100)}...</p>
//             <p class="news-date">${new Date(item.pubDate).toLocaleDateString()}</p>
//           </div>
//         </div>
//       `;
//       container.insertAdjacentHTML("beforeend", card);
//     });

//   } catch (err) {
//     console.error("Error loading Dev.to feed:", err);
//   }
// }

// loadDevto();

// async function loadDevtoAPI() {
//   try {
//     const res = await fetch("https://dev.to/api/articles?per_page=6");
//     const data = await res.json();

//     const container = document.getElementById("devto");
//     container.innerHTML = "";

//     data.forEach(item => {
//       // Use cover_image if available
//       const img = item.cover_image || "";

//       const card = `
//         <div class="news-card">
//           ${img ? `<img class="news-image" src="${img}" alt="${item.title}">` : ""}
//           <div class="news-content">
//             <h3><a href="${item.url}" target="_blank">${item.title}</a></h3>
//             <p class="news-description">${item.description.substring(0, 100)}...</p>
//             <p class="news-date">${new Date(item.published_at).toLocaleDateString()}</p>
//           </div>
//         </div>
//       `;
//       container.insertAdjacentHTML("beforeend", card);
//     });

//   } catch(err) {
//     console.error("Error loading Dev.to API:", err);
//   }
// }

// // Load articles on page load
// loadDevtoAPI();





// const placeholderImage = "/images/coding-news.png"; // Use your local placeholder here

// // Utility: strip HTML for description
// function stripHTML(html) {
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   return div.textContent || div.innerText || "";
// }

// // Extract first <img> from HTML string
// function extractFirstImage(html) {
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   const img = div.querySelector("img");
//   return img ? img.src : null;
// }

// // Load DEV.to articles
// async function loadDevtoAPI() {
//   try {
//     const res = await fetch("https://dev.to/api/articles?per_page=6");
//     const data = await res.json();

//     const container = document.getElementById("devto");
//     container.innerHTML = "";

//     data.forEach(item => {
//       // 1️⃣ cover_image if exists
//       // 2️⃣ first image in body_html if exists
//       // 3️⃣ fallback placeholder
//       const img = item.cover_image || extractFirstImage(item.body_html) || placeholderImage;

//       const card = `
//         <div class="news-card">
//           <img class="news-image" src="${img}" alt="${item.title}">
//           <div class="news-content">
//             <h3><a href="${item.url}" target="_blank">${item.title}</a></h3>
//             <p class="news-description">${stripHTML(item.description).substring(0, 100)}...</p>
//             <p class="news-date">${new Date(item.published_at).toLocaleDateString()}</p>
//           </div>
//         </div>
//       `;
//       container.insertAdjacentHTML("beforeend", card);
//     });

//   } catch(err) {
//     console.error("Error loading Dev.to API:", err);
//   }
// }

// // Run on page load
// loadDevtoAPI();



// async function loadDevtoWithImages() {
//   try {
//     const res = await fetch("https://dev.to/api/articles?per_page=20"); // fetch more in case some have no images
//     const data = await res.json();

//     const container = document.getElementById("devto");
//     container.innerHTML = "";

//     let count = 0;
//     for (const item of data) {
//       // Use cover_image if it exists
//       const img = item.cover_image;

//       // Skip items without a real image
//       if (!img) continue;

//       const card = `
//         <div class="news-card">
//           <img class="news-image" src="${img}" alt="${item.title}">
//           <div class="news-content">
//             <h3><a href="${item.url}" target="_blank">${item.title}</a></h3>
//             <p class="news-description">${item.description.substring(0, 100)}...</p>
//             <p class="news-date">${new Date(item.published_at).toLocaleDateString()}</p>
//           </div>
//         </div>
//       `;
//       container.insertAdjacentHTML("beforeend", card);

//       count++;
//       if (count >= 6) break; // stop after 6 news with real images
//     }

//     if (count === 0) {
//       container.innerHTML = "<p>No articles with images available right now.</p>";
//     }

//   } catch(err) {
//     console.error("Error loading Dev.to API:", err);
//   }
// }

// // Run on page load
// loadDevtoWithImages();


// function isValidImage(url) {
//   return url && url !== "null" && url.startsWith("http");
// }

// async function loadDevtoWithImages() {
//   try {
//     const res = await fetch("https://dev.to/api/articles?per_page=20");
//     const data = await res.json();

//     const container = document.getElementById("devto");
//     container.innerHTML = "";

//     let count = 0;
//     for (const item of data) {
//       const img = item.cover_image;

//       if (!isValidImage(img)) continue; // only valid images

//       const card = `
//         <div class="news-card">
//           <img class="news-image" src="${img}" alt="${item.title}">
//           <div class="news-content">
//             <h3><a href="${item.url}" target="_blank">${item.title}</a></h3>
//             <p class="news-description">${item.description.substring(0, 100)}...</p>
//             <p class="news-date">${new Date(item.published_at).toLocaleDateString()}</p>
//           </div>
//         </div>
//       `;
//       container.insertAdjacentHTML("beforeend", card);

//       count++;
//       if (count >= 6) break;
//     }

//     if (count === 0) {
//       container.innerHTML = "<p>No articles with images available right now.</p>";
//     }

//   } catch(err) {
//     console.error("Error loading Dev.to API:", err);
//   }
// }

// loadDevtoWithImages();



// Utility: strip HTML for description
// function stripHTML(html) {
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   return div.textContent || div.innerText || "";
// }

// // Extract first <img> from HTML string
// function extractFirstImage(html) {
//   if (!html) return null;
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   const img = div.querySelector("img");
//   return img ? img.src : null;
// }

// // Check if a URL is a valid image
// function isValidImage(url) {
//   return url && url.startsWith("http");
// }

// async function loadDevtoSixWithAnyImages() {
//   try {
//     const res = await fetch("https://dev.to/api/articles?per_page=30"); // fetch extra posts
//     const data = await res.json();

//     const container = document.getElementById("devto");
//     container.innerHTML = "";

//     const postsWithImages = [];

//     for (const item of data) {
//       // Try cover_image first
//       let img = item.cover_image;

//       // If no cover_image, try first image in body_html
//       if (!isValidImage(img)) {
//         img = extractFirstImage(item.body_html);
//       }

//       // Skip posts with no valid image
//       if (!isValidImage(img)) continue;

//       postsWithImages.push({ ...item, img });

//       // Stop once we have 6
//       if (postsWithImages.length >= 6) break;
//     }

//     // Render the posts
//     postsWithImages.forEach(item => {
//       const card = `
//         <div class="news-card">
//           <img class="news-image" src="${item.img}" alt="${item.title}">
//           <div class="news-content">
//             <h3><a href="${item.url}" target="_blank">${item.title}</a></h3>
//             <p class="news-description">${stripHTML(item.description).substring(0, 100)}...</p>
//             <p class="news-date">${new Date(item.published_at).toLocaleDateString()}</p>
//           </div>
//         </div>
//       `;
//       container.insertAdjacentHTML("beforeend", card);
//     });

//     if (postsWithImages.length === 0) {
//       container.innerHTML = "<p>No articles with images available right now.</p>";
//     }

//   } catch(err) {
//     console.error("Error loading Dev.to API:", err);
//   }
// }

// // Run on page load
// loadDevtoSixWithAnyImages();






// function stripHTML(html) {
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   return div.textContent || div.innerText || "";
// }

// // Extract first <img> from HTML string
// function extractFirstImage(html) {
//   if (!html) return null;
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   const img = div.querySelector("img");
//   return img ? img.src : null;
// }

// // Check if a URL is a valid image
// function isValidImage(url) {
//   return url && url.startsWith("http");
// }

// async function loadDevtoAllImages() {
//   try {
//     const res = await fetch("https://dev.to/api/articles?per_page=50"); // fetch up to 50 posts
//     const data = await res.json();

//     const container = document.getElementById("devto");
//     container.innerHTML = "";

//     const postsWithImages = [];

//     for (const item of data) {
//       // Try cover_image first
//       let img = item.cover_image;

//       // If no cover_image, try first image in body_html
//       if (!isValidImage(img)) {
//         img = extractFirstImage(item.body_html);
//       }

//       // Skip posts with no valid image
//       if (!isValidImage(img)) continue;

//       postsWithImages.push({ ...item, img });
//     }

//     // Render all posts with images
//     postsWithImages.forEach(item => {
//       const card = `
//         <div class="news-card">
//           <img class="news-image" src="${item.img}" alt="${item.title}">
//           <div class="news-content">
//             <h3><a href="${item.url}" target="_blank">${item.title}</a></h3>
//             <p class="news-description">${stripHTML(item.description).substring(0, 100)}...</p>
//             <p class="news-date">${new Date(item.published_at).toLocaleDateString()}</p>
//           </div>
//         </div>
//       `;
//       container.insertAdjacentHTML("beforeend", card);
//     });

//     if (postsWithImages.length === 0) {
//       container.innerHTML = "<p>No articles with images available right now.</p>";
//     }

//     console.log(`Displayed ${postsWithImages.length} posts with images out of 50 fetched.`);

//   } catch(err) {
//     console.error("Error loading Dev.to API:", err);
//   }
// }

// // Run on page load
// loadDevtoAllImages();



// // Strip HTML
// function stripHTML(html) {
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   return div.textContent || div.innerText || "";
// }

// // Extract first <img> from HTML string
// function extractFirstImage(html) {
//   if (!html) return null;
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   const img = div.querySelector("img");
//   return img ? img.src : null;
// }

// // Preload image to check if it exists
// function preloadImage(url) {
//   return new Promise((resolve) => {
//     if (!url) return resolve(false);
//     const img = new Image();
//     img.src = url;
//     img.onload = () => resolve(true);
//     img.onerror = () => resolve(false);
//   });
// }

// // Render a single card
// function renderCard(container, img, title, url, description, date) {
//   const card = `
//     <div class="news-card">
//       <img class="news-image" src="${img}" alt="${title}">
//       <div class="news-content">
//         <h3><a href="${url}" target="_blank">${title}</a></h3>
//         <p class="news-description">${stripHTML(description).substring(0, 100)}...</p>
//         <p class="news-date">${new Date(date).toLocaleDateString()}</p>
//       </div>
//     </div>
//   `;
//   container.insertAdjacentHTML("beforeend", card);
// }


// async function loadDevtoSix() {
//   const container = document.getElementById("devto");
//   container.innerHTML = "";
//   try {
//     const res = await fetch("https://dev.to/api/articles?per_page=50");
//     const data = await res.json();

//     const postsWithImages = [];

//     for (const item of data) {
//       let img = item.cover_image;
//       if (!img || img === "null" || !img.startsWith("http")) {
//         img = extractFirstImage(item.body_html);
//       }

//       if (!img) continue;
//       const valid = await preloadImage(img);
//       if (!valid) continue;

//       postsWithImages.push({ ...item, img });
//       if (postsWithImages.length >= 6) break;
//     }

//     postsWithImages.forEach(item =>
//       renderCard(container, item.img, item.title, item.url, item.description, item.published_at)
//     );

//   } catch (err) {
//     console.error("DEV.to error:", err);
//   }
// }



// async function loadSmashingSix() {
//   const container = document.getElementById("smashing");
//   container.innerHTML = "";
//   try {
//     const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://www.smashingmagazine.com/feed/");
//     const data = await res.json();

//     const postsWithImages = [];

//     for (const item of data.items) {
//       // Try enclosure (feed image) or first <img> in content
//       let img = item.enclosure?.link || extractFirstImage(item.content);
//       if (!img) continue;

//       const valid = await preloadImage(img);
//       if (!valid) continue;

//       postsWithImages.push({ ...item, img });
//       if (postsWithImages.length >= 6) break;
//     }

//     postsWithImages.forEach(item =>
//       renderCard(container, item.img, item.title, item.link, item.content, item.pubDate)
//     );

//   } catch (err) {
//     console.error("Smashing Magazine error:", err);
//   }
// }




// const hackerPlaceholder = "/images/hacker-news.png"; // your placeholder

// async function loadHackerSix() {
//   const container = document.getElementById("hacker");
//   container.innerHTML = "";
//   try {
//     const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://news.ycombinator.com/rss");
//     const data = await res.json();

//     const posts = [];
//     for (const item of data.items) {
//       const img = hackerPlaceholder;
//       const valid = await preloadImage(img);
//       if (!valid) continue;

//       posts.push({ ...item, img });
//       if (posts.length >= 6) break;
//     }

//     posts.forEach(item =>
//       renderCard(container, item.img, item.title, item.link, item.content || "", item.pubDate)
//     );

//   } catch (err) {
//     console.error("Hacker News error:", err);
//   }
// }




// loadDevtoSix();
// loadSmashingSix();
// loadHackerSix();





// function stripHTML(html) {
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   return div.textContent || div.innerText || "";
// }

// function extractFirstImage(html) {
//   if (!html) return null;
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   const img = div.querySelector("img");
//   return img ? img.src : null;
// }

// // Generate preview image if no cover exists
// function getPreviewImage(item) {
//   let img = item.cover_image || item.enclosure?.link || extractFirstImage(item.body_html || item.content);
//   if (!img) {
//     const url = item.url || item.link;
//     if (url) img = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=400&h=200`;
//   }
//   return img;
// }

// // Render a single news card
// function renderCard(container, item) {
//   const img = getPreviewImage(item);
//   if (!img) return; // skip if still no image

//   const card = `
//     <div class="news-card">
//       <img class="news-image" src="${img}" alt="${item.title}">
//       <div class="news-content">
//         <h3><a href="${item.url || item.link}" target="_blank">${item.title}</a></h3>
//         <p class="news-description">${stripHTML(item.description || item.content || "").substring(0, 100)}...</p>
//         <p class="news-date">${new Date(item.published_at || item.pubDate).toLocaleDateString()}</p>
//       </div>
//     </div>
//   `;
//   container.insertAdjacentHTML("beforeend", card);
// }

// // --- Load DEV.to ---
// async function loadDevto() {
//   const container = document.getElementById("devto");
//   container.innerHTML = "";
//   try {
//     const res = await fetch("https://dev.to/api/articles?per_page=50");
//     const data = await res.json();
//     let count = 0;
//     for (const item of data) {
//       renderCard(container, item);
//       count++;
//       if (count >= 6) break;
//     }
//   } catch (err) {
//     console.error("DEV.to error:", err);
//   }
// }

// // --- Load Smashing Magazine ---
// async function loadSmashing() {
//   const container = document.getElementById("smashing");
//   container.innerHTML = "";
//   try {
//     const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://www.smashingmagazine.com/feed/");
//     const data = await res.json();
//     let count = 0;
//     for (const item of data.items) {
//       renderCard(container, item);
//       count++;
//       if (count >= 6) break;
//     }
//   } catch (err) {
//     console.error("Smashing Magazine error:", err);
//   }
// }

// // --- Load Hacker News ---
// async function loadHacker() {
//   const container = document.getElementById("hacker");
//   container.innerHTML = "";
//   try {
//     const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://news.ycombinator.com/rss");
//     const data = await res.json();
//     let count = 0;
//     for (const item of data.items) {
//       renderCard(container, item); // fallback will generate preview image
//       count++;
//       if (count >= 6) break;
//     }
//   } catch (err) {
//     console.error("Hacker News error:", err);
//   }
// }

// // --- Run all feeds ---
// loadDevto();
// loadSmashing();
// loadHacker();



// const feeds = {
//   devto: "https://api.rss2json.com/v1/api.json?rss_url=https://dev.to/feed",
//   smashing: "https://api.rss2json.com/v1/api.json?rss_url=https://www.smashingmagazine.com/feed/",
//   hackernews: "https://api.rss2json.com/v1/api.json?rss_url=https://hnrss.org/frontpage"
// };

// // --- Utilities ---
// function stripHTML(html) {
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   return div.textContent || div.innerText || "";
// }

// function extractImage(html) {
//   if (!html) return null;
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   const img = div.querySelector("img");
//   return img ? img.src : null;
// }

// function getImage(item, source) {
//   // DEV.to or Smashing: cover_image or first <img>
//   let img = item.cover_image || item.enclosure?.link || extractImage(item.description);

//   // If no image, use a reliable page preview
//   if (!img) {
//     const url = item.link || item.url;
//     if (url) {
//       if (source === "hackernews") {
//         img = `https://image.thum.io/get/width/400/crop/200/${encodeURIComponent(url)}`;
//       } else {
//         img = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=400&viewport.height=200`;
//       }
//     }
//   }
//   return img;
// }


// // --- Fetch feed ---
// async function fetchFeed(category, url) {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();

//     const container = document.getElementById(category);
//     container.innerHTML = "";

//     data.items.slice(0, 6).forEach(item => {
//       const img = getImage(item);

//       const card = `
//         <div class="news-card">
//           <img class="news-image" src="${img}" alt="${item.title}">
//           <div class="news-content">
//             <h3><a href="${item.link || item.url}" target="_blank">${item.title}</a></h3>
//             <p class="news-description">${stripHTML(item.description || item.content).substring(0, 100)}...</p>
//             <p class="news-date">${new Date(item.pubDate || item.published_at).toLocaleDateString()}</p>
//           </div>
//         </div>
//       `;
//       container.insertAdjacentHTML("beforeend", card);
//     });
//   } catch (err) {
//     console.error(`Error fetching feed for ${category}:`, err);
//   }
// }

// // --- Fetch all feeds ---
// fetchFeed("devto", feeds.devto);
// fetchFeed("smashing", feeds.smashing);
// fetchFeed("hackernews", feeds.hackernews);




// // --- Utilities ---
// function stripHTML(html) {
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   return div.textContent || div.innerText || "";
// }

// function extractImage(html) {
//   if (!html) return null;
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   const img = div.querySelector("img");
//   return img ? img.src : null;
// }

// // Generate image for DEV.to (must exist)
// function getDevtoImage(item) {
//   return item.cover_image || extractImage(item.description || item.body_html);
// }

// // Generate image for Smashing / Hacker (fallback to page preview)
// function getPreviewImage(item, source) {
//   let img = item.enclosure?.link || extractImage(item.description || item.content);
//   if (!img) {
//     const url = item.link || item.url;
//     if (url) {
//       if (source === "hackernews") {
//         img = `https://image.thum.io/get/width/400/crop/200/${encodeURIComponent(url)}`;
//       } else {
//         img = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=400&viewport.height=200`;
//       }
//     }
//   }
//   return img;
// }

// // Render card
// function renderCard(container, item, img) {
//   const card = `
//     <div class="news-card">
//       <img class="news-image" src="${img}" alt="${item.title}">
//       <div class="news-content">
//         <h3><a href="${item.link || item.url}" target="_blank">${item.title}</a></h3>
//         <p class="news-description">${stripHTML(item.description || item.content || "").substring(0, 100)}...</p>
//         <p class="news-date">${new Date(item.pubDate || item.published_at).toLocaleDateString()}</p>
//       </div>
//     </div>
//   `;
//   container.insertAdjacentHTML("beforeend", card);
// }

// // --- Fetch DEV.to (only 6 posts with actual images) ---
// async function loadDevtoSix() {
//   const container = document.getElementById("devto");
//   container.innerHTML = "";
//   try {
//     const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://dev.to/feed");
//     const data = await res.json();

//     let count = 0;
//     for (const item of data.items) {
//       const img = getDevtoImage(item);
//       if (!img) continue; // skip posts without image

//       renderCard(container, item, img);
//       count++;
//       if (count >= 6) break;
//     }

//   } catch (err) {
//     console.error("DEV.to error:", err);
//   }
// }

// // --- Fetch Smashing Magazine (6 posts, fallback to preview if no image) ---
// async function loadSmashing() {
//   const container = document.getElementById("smashing");
//   container.innerHTML = "";
//   try {
//     const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://www.smashingmagazine.com/feed/");
//     const data = await res.json();

//     data.items.slice(0, 6).forEach(item => {
//       const img = getPreviewImage(item, "smashing");
//       renderCard(container, item, img);
//     });

//   } catch (err) {
//     console.error("Smashing Magazine error:", err);
//   }
// }

// // --- Fetch Hacker News (6 posts, always fallback to page preview) ---
// async function loadHacker() {
//   const container = document.getElementById("hackernews");
//   container.innerHTML = "";
//   try {
//     const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://hnrss.org/frontpage");
//     const data = await res.json();

//     data.items.slice(0, 6).forEach(item => {
//       const img = getPreviewImage(item, "hackernews");
//       renderCard(container, item, img);
//     });

//   } catch (err) {
//     console.error("Hacker News error:", err);
//   }
// }

// // --- Load all feeds ---
// loadDevtoSix();
// loadSmashing();
// loadHacker();








// // --- Utilities ---
// function stripHTML(html) {
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   return div.textContent || div.innerText || "";
// }

// function extractImage(html) {
//   if (!html) return null;
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   const img = div.querySelector("img");
//   return img ? img.src : null;
// }

// // --- DEV.to: only posts with actual images ---
// function getDevtoImage(item) {
//   return item.cover_image || extractImage(item.description || item.body_html);
// }

// // --- Smashing Magazine: unique page preview per article ---
// function getSmashingImage(item) {
//   let img = item.enclosure?.link || extractImage(item.description);
//   if (!img) {
//     const url = item.link || item.url;
//     if (url) {
//       img = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=400&viewport.height=200`;
//     }
//   }
//   return img;
// }

// // --- Hacker News: page preview for every post ---
// function getHackerImage(item) {
//   const url = item.link || item.url;
//   return `https://image.thum.io/get/width/400/crop/200/${encodeURIComponent(url)}`;
// }

// // --- Render a news card ---
// function renderCard(container, item, img) {
//   const card = `
//     <div class="news-card">
//       <img class="news-image" src="${img}" alt="${item.title}">
//       <div class="news-content">
//         <h3><a href="${item.link || item.url}" target="_blank">${item.title}</a></h3>
//         <p class="news-description">${stripHTML(item.description || item.content || "").substring(0, 100)}...</p>
//         <p class="news-date">${new Date(item.pubDate || item.published_at).toLocaleDateString()}</p>
//       </div>
//     </div>
//   `;
//   container.insertAdjacentHTML("beforeend", card);
// }

// // --- Fetch DEV.to (6 posts with real images) ---
// async function loadDevtoSix() {
//   const container = document.getElementById("devto");
//   container.innerHTML = "";
//   try {
//     const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://dev.to/feed");
//     const data = await res.json();
//     let count = 0;
//     for (const item of data.items) {
//       const img = getDevtoImage(item);
//       if (!img) continue; // skip if no image
//       renderCard(container, item, img);
//       count++;
//       if (count >= 6) break;
//     }
//   } catch (err) {
//     console.error("DEV.to error:", err);
//   }
// }

// // --- Fetch Smashing Magazine (6 posts, unique images) ---
// async function loadSmashing() {
//   const container = document.getElementById("smashing");
//   container.innerHTML = "";
//   try {
//     const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://www.smashingmagazine.com/feed/");
//     const data = await res.json();
//     data.items.slice(0, 6).forEach(item => {
//       const img = getSmashingImage(item);
//       renderCard(container, item, img);
//     });
//   } catch (err) {
//     console.error("Smashing Magazine error:", err);
//   }
// }

// // --- Fetch Hacker News (6 posts, page previews) ---
// async function loadHacker() {
//   const container = document.getElementById("hackernews");
//   container.innerHTML = "";
//   try {
//     const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://hnrss.org/frontpage");
//     const data = await res.json();
//     data.items.slice(0, 6).forEach(item => {
//       const img = getHackerImage(item);
//       renderCard(container, item, img);
//     });
//   } catch (err) {
//     console.error("Hacker News error:", err);
//   }
// }

// // --- Load all feeds ---
// loadDevtoSix();
// loadSmashing();
// loadHacker();






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


// async function getPreviewImage(url) {
//   try {
//     const res = await fetch(`http://localhost:3000/preview?url=${encodeURIComponent(url)}`);
//     const data = await res.json();
//     // If the site has no image, fallback to a placeholder
//     return data.image || "https://via.placeholder.com/600x400?text=No+Preview";
//   } catch (err) {
//     console.error("Error fetching preview image:", err);
//     return "https://via.placeholder.com/600x400?text=No+Preview";
//   }
// }
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

/* =============== HACKER NEWS =============== */
// async function loadHackerNews() {
//   try {
//     // Fetch top Hacker News post IDs
//     const res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
//     const storyIds = await res.json();

//     const container = document.getElementById("hackernews");
//     container.innerHTML = "";

//     // Load first 10 posts for demo purposes
//     for (let i = 0; i < 10; i++) {
//       const storyRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyIds[i]}.json`);
//       const story = await storyRes.json();

//       // Only use posts with an external URL
//       if (!story.url) continue;

//       // Get preview image from local server
//       const img = await getPreviewImage(story.url);

//       // Build the card
//       const card = document.createElement("div");
//       card.className = "news-card";
//       card.innerHTML = `
//         <img class="news-image" src="${img}" alt="Preview of ${story.title}">
//         <div class="news-content">
//           <h3><a href="${story.url}" target="_blank">${story.title}</a></h3>
//           <p class="news-description">${stripHTML(story.title).substring(0, 100)}...</p>
//           <p class="news-date">${new Date(story.time * 1000).toLocaleDateString()}</p>
//         </div>
//       `;
//       container.appendChild(card);
//     }

//     console.log("✅ Hacker News loaded successfully.");
//   } catch (err) {
//     console.error("Error loading Hacker News:", err);
//   }
// }
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
