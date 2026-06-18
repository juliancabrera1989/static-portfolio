
const categorySelect = document.getElementById("categorySelect");
const displayTypeSelect = document.getElementById("displayTypeSelect");
const subCategorySelect = document.getElementById("subCategorySelect");
const subCategoryCheckboxes = document.getElementById("subCategoryCheckboxes");
const categoryContainer = document.getElementById("category-container");

let TECHS = [];

// Subcategories structure (keys are slugs used in tech.classes)
const SUBCATS = {
  proyectos: ["flights", "portfolio", "structures"],
  categoria1: ["front-end", "back-end", "data-base"],
  categoria2: ["prog-lang", "framework", "tool"]
};

// Human-friendly labels for subcategories (item 4)
const SUBCAT_LABELS = {
  flights: "Flights",
  portfolio: "Portfolio",
  structures: "Data Structures",
  "front-end": "Front-end",
  "back-end": "Back-end",
  "data-base": "Databases",
  "prog-lang": "Programming Languages",
  framework: "Frameworks",
  tool: "Tools"
};

function labelize(slug) {
  return SUBCAT_LABELS[slug] || slug.replace(/-/g, " ").replace(/\b\w/g, m => m.toUpperCase());
}

// Load techs (your assets/data/techs.json)
fetch("assets/data/techs.json")
  .then(res => res.json())
  .then(data => {
    TECHS = data;
    updateSubCategoryUI();
    renderCards();
  })
  .catch(err => {
    console.error("Failed to load techs.json:", err);
  });

// IntersectionObserver: simple observer that adds .show when card is visible
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

/* updateSubCategoryUI: populate selector and/or checkboxes depending on displayTypeSelect */
function updateSubCategoryUI() {
  const cat = categorySelect.value;
  const type = displayTypeSelect.value;
  const subs = SUBCATS[cat] || [];

  subCategorySelect.innerHTML = "";
  subCategoryCheckboxes.innerHTML = "";

  // if category is 'all' -> hide sub selectors (they don't apply)
  if (cat === "all" || !SUBCATS[cat]) {
    subCategorySelect.parentElement.classList.add("opacity-60", "pointer-events-none");
    subCategoryCheckboxes.classList.add("hidden");
    return;
  } else {
    subCategorySelect.parentElement.classList.remove("opacity-60", "pointer-events-none");
  }

  if (type === "select") {
    subCategorySelect.classList.remove("hidden");
    subCategoryCheckboxes.classList.add("hidden");

    const allOpt = document.createElement("option");
    allOpt.value = "all";
    allOpt.textContent = "Todas";
    subCategorySelect.appendChild(allOpt);

    subs.forEach(s => {
      const o = document.createElement("option");
      o.value = s;
      o.textContent = labelize(s);
      subCategorySelect.appendChild(o);
    });
  } else {
    subCategorySelect.classList.add("hidden");
    subCategoryCheckboxes.classList.remove("hidden");

    subs.forEach(s => {
      const id = `cb-${s}`;
      const lbl = document.createElement("label");
      lbl.className = "inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:border-blue-400 cursor-pointer";

      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.id = id;
      cb.value = s;
      cb.checked = true;
      cb.className = "accent-blue-600";

      const span = document.createElement("span");
      span.className = "text-sm";
      span.textContent = labelize(s);

      lbl.appendChild(cb);
      lbl.appendChild(span);
      subCategoryCheckboxes.appendChild(lbl);
    });
  }
}

/* helper: build a card (returns DOM node)
   - tailwind classes added here (no layout CSS)
   - card starts invisible; observer will add .show when in viewport
*/
function buildCard(tech, delayMs = 0) {
  const a = document.createElement("a");
  a.href = tech.link || "#";
  a.target = "_blank";

  a.className = [
    "tech-card",                   // CSS: opacity/transform/transition
    "bg-white",
    "rounded-2xl",
    "p-4",
    "shadow",
    "flex",
    "items-center",
    "justify-center",
    "transition-transform",         // tailwind hover transform
    "duration-300",
    "hover:-translate-y-1",
    "hover:shadow-xl",
    "hover:text-blue-600",
    "select-none"
  ].join(" ");

  const img = document.createElement("img");
  img.src = tech.img;
  img.alt = tech.name;
  img.className = "object-contain w-[75%] h-[75%] pointer-events-none";

  a.appendChild(img);

  // stagger: transition-delay para efecto cascada
  if (delayMs) {
    a.style.transitionDelay = `${delayMs}ms`;
  }

  return a;
}

function makeGridElement() {
  const grid = document.createElement("div");

  grid.className = [
    "grid",
    "gap-6",
    "mx-auto",
    "w-full",
    "items-stretch",                     // filas uniformes
    "max-w-[90vw]",
    "auto-rows-fr",
    // "grid-auto-rows-[250px]",                      // grid ocupa 90% por defecto
    "sm:[grid-template-columns:repeat(auto-fill,minmax(160px,1fr))]",  // sm y mediana pantalla
    "[@media(min-width:1500px)]:max-w-[70vw]",                             // >1500px → 70%
    "[@media(min-width:1500px)]:[grid-template-columns:repeat(auto-fill,minmax(1fr,13.5vw))]" // cards 13.5vw
  ].join(" ");

  return grid;
}

/* renderCards: main renderer (handles "all" and category/subcategory views) */
function renderCards() {
  const cat = categorySelect.value;
  const type = displayTypeSelect.value;

  // Determine selected subcategories
  let selectedSubcats = [];
  if (cat !== "all" && SUBCATS[cat]) {
    if (type === "select") {
      const v = subCategorySelect.value;
      selectedSubcats = v === "all" ? [...SUBCATS[cat]] : [v];
    } else {
      const checked = subCategoryCheckboxes.querySelectorAll("input[type=checkbox]:checked");
      selectedSubcats = Array.from(checked).map(cb => cb.value);
    }
  }

  categoryContainer.innerHTML = ""; // clear

  // CASE: show all techs in one grid
  if (cat === "all" || !SUBCATS[cat]) {
    const section = document.createElement("section");
    section.className = "mb-12";

    const title = document.createElement("h3");
    title.className = "text-2xl font-semibold mb-6 text-blue-700 text-center";
    title.textContent = "Full-stack (Todas las tecnologías)";
    section.appendChild(title);

    const grid = makeGridElement();

    // append cards with staggered transitionDelay (index * 100ms)
    TECHS.forEach((tech, idx) => {
      const card = buildCard(tech, idx * 120); // 120ms stagger
      grid.appendChild(card);
      cardObserver.observe(card);
    });

    section.appendChild(grid);
    categoryContainer.appendChild(section);
    return;
  }

  // CASE: show grouped by subcategory (only the selected ones)
  // build grouped object
  const grouped = {};
  TECHS.forEach(tech => {
    selectedSubcats.forEach(sc => {
      if (tech.classes && tech.classes.includes(sc)) {
        if (!grouped[sc]) grouped[sc] = [];
        grouped[sc].push(tech);
      }
    });
  });

  // For each selected subcategory, create a title + grid
  selectedSubcats.forEach(sc => {
    const list = grouped[sc] || [];
    if (list.length === 0) return;

    const section = document.createElement("section");
    section.className = "mb-12";

    const title = document.createElement("h3");
    title.className = "text-2xl font-semibold mb-6 text-blue-700 text-center";
    title.textContent = labelize(sc);
    section.appendChild(title);

    const grid = makeGridElement();

    // each list gets its own local stagger starting at 0
    list.forEach((tech, idx) => {
      const card = buildCard(tech, idx * 120);
      grid.appendChild(card);
      cardObserver.observe(card);
    });

    section.appendChild(grid);
    categoryContainer.appendChild(section);
  });
}

/* listeners */
categorySelect.addEventListener("change", () => {
  updateSubCategoryUI();
  renderCards();
});
displayTypeSelect.addEventListener("change", () => {
  updateSubCategoryUI();
  renderCards();
});
subCategorySelect.addEventListener("change", renderCards);
subCategoryCheckboxes.addEventListener("change", renderCards);
