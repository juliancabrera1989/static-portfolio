const projects = [
  {
    key: "proj_sv",
    titleKey: "proj_sv_title",
    descKey: "proj_sv_desc",
    defaultTitle: "Dynamic Data Structure Visualizer",
    defaultDesc: "Interactive platform to build and visualize dynamic data structures with persistent storage and authentication.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    live: "#",
    code: "#",
    image: "assets/images/projects-images/SV.gif",
    featured: true
  },
  {
    key: "proj_fm",
    titleKey: "proj_fm_title",
    descKey: "proj_fm_desc",
    defaultTitle: "Flight Management System",
    defaultDesc: "Full-stack application for managing flights, bookings, and user roles with a responsive dashboard and relational database integration.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind"],
    live: "#",
    code: "#",
    image: "assets/images/projects-images/FM.gif",
    featured: true
  },
  {
    key: "proj_portfolio",
    titleKey: "proj_portfolio_title",
    descKey: "proj_portfolio_desc",
    defaultTitle: "Static Portfolio Website",
    defaultDesc: "Minimal, responsive portfolio focused on performance, SEO, and clean UI.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "#",
    code: "#",
    image: "assets/images/projects/portfolio-preview.png",
    featured: false
  }
];

const featuredContainer = document.getElementById("featured-projects");
const otherContainer = document.getElementById("other-projects");

function createFeatured(project) {
  return `
    <div class="project-card grid md:grid-cols-2 gap-10 items-center">

      <div class="w-full aspect-video rounded-2xl bg-gray-200 relative overflow-hidden shadow-md border border-gray-200 group cursor-pointer" onclick="openModal('${project.image}')">
        <img src="${project.image}" alt="${project.defaultTitle}" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
        
        <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-medium text-sm gap-2">
          <span data-i18n="proj_click_expand">🔍 Click to expand</span>
        </div>
      </div>

      <div>
        <h3 class="text-2xl md:text-3xl font-semibold mb-4 text-gray-900" data-i18n="${project.titleKey}">
          ${project.defaultTitle}
        </h3>

        <p class="text-gray-600 mb-6 leading-relaxed" data-i18n="${project.descKey}">
          ${project.defaultDesc}
        </p>

        <div class="flex flex-wrap gap-2 mb-6">
          ${project.tech.map(t => `
            <span class="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium border border-gray-200">${t}</span>
          `).join("")}
        </div>

        <div class="flex gap-6 font-medium">
          <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 transition" data-i18n="proj_btn_demo">Live Demo →</a>
          <a href="${project.code}" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900 transition" data-i18n="proj_btn_code">GitHub Code</a>
          <a href="assets/pdf/flight-system-docs.pdf" target="_blank" class="text-gray-600" data-i18n="proj_btn_pdf">📄 PDF Overview</a>
        </div>
      </div>

    </div>
  `;
}

function createSmall(project) {
  return `
    <div class="project-card group p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition duration-300 border border-gray-200">

      <h4 class="text-lg font-semibold mb-3 text-gray-800" data-i18n="${project.titleKey}">
        ${project.defaultTitle}
      </h4>

      <p class="text-sm text-gray-600 mb-4" data-i18n="${project.descKey}">
        ${project.defaultDesc}
      </p>

      <div class="flex flex-wrap gap-2 mb-6">
        ${project.tech.map(t => `
          <span class="text-xs px-2.5 py-1 bg-gray-200 text-gray-700 rounded font-medium">${t}</span>
        `).join("")}
      </div>

      <div class="flex gap-4 text-sm font-medium">
        <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800" data-i18n="proj_btn_live">Live</a>
        <a href="${project.code}" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900" data-i18n="proj_btn_code_short">Code</a>
      </div>

    </div>
  `;
}

if (featuredContainer && otherContainer) {
  projects.forEach((p) => {
    if (p.featured) {
      featuredContainer.innerHTML += createFeatured(p);
    } else {
      otherContainer.innerHTML += createSmall(p);
    }
  });
}

/* Modal Logic */
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const modalClose = document.getElementById("modal-close");

function openModal(imageSrc) {
  if (!modal || !modalImg) return;
  modalImg.src = imageSrc;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal || !modalImg) return;
  modal.classList.add("hidden");
  modalImg.src = "";
  document.body.style.overflow = "auto";
}

if (modalClose) modalClose.addEventListener("click", closeModal);

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/* Intersection Observer */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".project-card").forEach(el => {
  observer.observe(el);
});