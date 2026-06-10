const dinosaurs = [
  { name: "Tyrannosaurus Rex", scientific: "Tyrannosaurus rex", era: "Late Cretaceous", location: "North America", size: "12.3 m long, 5 m tall", weight: "8 tonnes", diet: "carnivore", period: "cretaceous", funFact: "Bite force of over 12,800 pounds!", imageClass: "t-rex-img" },
  { name: "Spinosaurus", scientific: "Spinosaurus aegyptiacus", era: "Cretaceous", location: "North Africa", size: "15 m long", weight: "7 tonnes", diet: "carnivore", period: "cretaceous", funFact: "Semi-aquatic, longest known carnivorous dinosaur!", imageClass: "spinosaurus-img" },
  { name: "Triceratops", scientific: "Triceratops horridus", era: "Late Cretaceous", location: "North America", size: "9 m long", weight: "6–12 tonnes", diet: "herbivore", period: "cretaceous", funFact: "Frill could grow up to 2 meters wide!", imageClass: "triceratops-img" },
  { name: "Quetzalcoatlus", scientific: "Quetzalcoatlus northropi", era: "Late Cretaceous", location: "North America", size: "Wingspan up to 11 m", weight: "200–250 kg", diet: "carnivore", period: "cretaceous", funFact: "Largest flying animal of all time, likely a terrestrial stalker.", imageClass: "quetzalcoatlus-img" },
  { name: "Mosasaurus", scientific: "Mosasaurus hoffmannii", era: "Late Cretaceous", location: "Worldwide oceans", size: "Up to 18 m", weight: "15 tonnes", diet: "carnivore", period: "cretaceous", funFact: "A marine reptile, not a dinosaur – apex predator of the seas.", imageClass: "mosasaurus-img" },
  { name: "Plesiosaurus", scientific: "Plesiosaurus dolichodeirus", era: "Early Jurassic", location: "Europe", size: "3–5 m", weight: "500 kg", diet: "carnivore", period: "jurassic", funFact: "Long neck and four flippers – swam like a sea turtle.", imageClass: "plesiosaurus-img" },
  { name: "Ichthyosaurus", scientific: "Ichthyosaurus communis", era: "Early Jurassic", location: "Europe", size: "2–3 m", weight: "90 kg", diet: "carnivore", period: "jurassic", funFact: "Gave live birth at sea – resembled modern dolphins.", imageClass: "ichthyosaurus-img" },
  { name: "Elasmosaurus", scientific: "Elasmosaurus platyurus", era: "Late Cretaceous", location: "North America", size: "10–14 m", weight: "2–5 tonnes", diet: "carnivore", period: "cretaceous", funFact: "Neck longer than its entire body – used for ambush.", imageClass: "elasmosaurus-img" },
  { name: "Velociraptor", scientific: "Velociraptor mongoliensis", era: "Late Cretaceous", location: "Mongolia/China", size: "2 m long", weight: "15 kg", diet: "carnivore", period: "cretaceous", funFact: "Feathered and the size of a turkey – not a giant.", imageClass: "velociraptor-img" },
  { name: "Deinonychus", scientific: "Deinonychus antirrhopus", era: "Early Cretaceous", location: "North America", size: "3.4 m", weight: "75 kg", diet: "carnivore", period: "cretaceous", funFact: "Sickle-clawed predator that inspired 'raptors' in movies.", imageClass: "deinonychus-img" },
  { name: "Giganotosaurus", scientific: "Giganotosaurus carolinii", era: "Late Cretaceous", location: "Argentina", size: "12–13 m", weight: "8 tonnes", diet: "carnivore", period: "cretaceous", funFact: "Slightly bigger than T. rex in height but with a narrower skull.", imageClass:"giganotosaurus-img" },
  { name: "Coelophysis", scientific: "Coelophysis bauri", era: "Late Triassic", location: "North America", size: "3 m", weight: "20 kg", diet: "carnivore", period: "triassic", funFact: "One of the earliest known dinosaurs – possible cannibalism.", imageClass: "coelophysis-img" },
  { name: "Argentinosaurus", scientific: "Argentinosaurus huinculensis", era: "Late Cretaceous", location: "Argentina", size: "35 m", weight: "75 tonnes", diet: "herbivore", period: "cretaceous", funFact: "One of the heaviest land animals ever – eggs like soccer balls.", imageClass: "argentinosaurus-img" },
  { name: "Ankylosaurus", scientific: "Ankylosaurus magniventris", era: "Late Cretaceous", location: "North America", size: "8 m", weight: "6 tonnes", diet: "herbivore", period: "cretaceous", funFact: "Armored like a tank – tail club could break bones.", imageClass: "ankylosaurus-img" },
  {
  name: "Modern Avian Theropods (Birds)",
  scientific: "Neornithes",
  era: "Jurassic to Present Day",
  location: "Global Distribution",
  size: "Varies (5 cm to 2.8 m)",
  weight: "Varies up to 150 kg",
  diet: "omnivore",
  period: "Jurassic", // Tagged to show up during filtering or search
  funFact: "The only clade of Coelurosaurian theropods to clear the K-Pg extinction filter completely!",
  imageClass: "avian_dinosaur-img" // You can style this in CSS using a silhouette of a hawk or ratite
}
];

const fossils = [
  { name: "Archaeopteryx", type: "skeleton", period: "Late Jurassic (150 mya)", desc: "Transitional fossil showing dinosaur-bird link.", location: "Bavaria, Germany", year: "1861", significance: "Key evidence for evolution.", imageClass: "archaeopteryx-img" },
  { name: "Dinosaur Footprints", type: "trace", period: "Various", desc: "Trace fossils showing behavior and movement.", location: "Texas, Australia", year: "1930s-70s", significance: "Revealed herd behavior.", imageClass: "footprint-img" },
  { name: "Amber Inclusions", type: "amber", period: "Cretaceous (100 mya)", desc: "Fossilized tree resin preserving feathers and insects.", location: "Myanmar, Baltic", year: "2016", significance: "Feather evolution insights.", imageClass: "amber-img" },
  { name: "Sue the T.rex", type: "skeleton", period: "Late Cretaceous (67 mya)", desc: "Most complete T.rex specimen.", location: "South Dakota, USA", year: "1990", significance: "90% complete skeleton.", imageClass: "sue-img" }
];

const dinoDetailsDB = {
  "tyrannosaurus-rex": { name:"Tyrannosaurus Rex", scientific:"Tyrannosaurus rex", length:"12.3 meters (40 ft)", weight:"8–14 metric tons", era:"Late Cretaceous (68–66 mya)", location:"North America", diet:"Carnivore, apex predator", facts:"Bite force ~12,800 lbs; had forward-facing eyes for binocular vision; lived up to 28 years. This was the largest theropod ever discovered." },
  "spinosaurus": { name:"Spinosaurus", scientific:"Spinosaurus aegyptiacus", length:"15–16 meters", weight:"7–9 tons", era:"Cretaceous (100–94 mya)", location:"North Africa", diet:"Piscivore / Carnivore", facts:"Semi-aquatic, unique sail, possibly the longest theropod." },
  "triceratops": { name:"Triceratops", scientific:"Triceratops horridus", length:"9 meters", weight:"6–12 tons", era:"Late Cretaceous", location:"North America", diet:"Herbivore", facts:"One of the last non-avian dinosaurs; used frill for defense and display." },
  "velociraptor": { name:"Velociraptor", scientific:"Velociraptor mongoliensis", length:"1.8–2.1 m", weight:"15–20 kg", era:"Late Cretaceous", location:"Mongolia/China", diet:"Carnivore", facts:"Covered in feathers; sickle claw for grasping prey." },
  "stegosaurus": { name:"Stegosaurus", scientific:"Stegosaurus stenops", length:"9 meters", weight:"5–7 tons", era:"Late Jurassic", location:"USA/Portugal", diet:"Herbivore", facts:"Brain size of a walnut; plates used for thermoregulation." },
  "brachiosaurus": { name:"Brachiosaurus", scientific:"Brachiosaurus altithorax", length:"22 meters", weight:"35–40 tons", era:"Late Jurassic", location:"North America", diet:"Herbivore", facts:"Front legs longer than hind legs; high browser." },
  "ankylosaurus": { name:"Ankylosaurus", scientific:"Ankylosaurus magniventris", length:"8 meters", weight:"6–8 tons", era:"Late Cretaceous", location:"North America", diet:"Herbivore", facts:"Armored like a tank; tail club could break bones." },
  "allosaurus": { name:"Allosaurus", scientific:"Allosaurus fragilis", length:"8.5 meters", weight:"2.5 tons", era:"Late Jurassic", location:"North America", diet:"Carnivore", facts:"Over 100 teeth in its jaw; called the lion of the Jurassic." },
  "diplodocus": { name:"Diplodocus", scientific:"Diplodocus longus", length:"27 meters", weight:"15 tons", era:"Late Jurassic", location:"North America", diet:"Herbivore", facts:"Could crack its tail faster than sound; whip-like tail." },
  "carnotaurus": { name:"Carnotaurus", scientific:"Carnotaurus sastrei", length:"8 meters", weight:"1.5 tons", era:"Early Cretaceous", location:"Argentina", diet:"Carnivore", facts:"Bull-like horns; smallest arms of any large theropod." },
  "argentinosaurus": { name:"Argentinosaurus", scientific:"Argentinosaurus huinculensis", length:"35 meters", weight:"70–75 tons", era:"Late Cretaceous", location:"Argentina", diet:"Herbivore", facts:"One of the heaviest land animals ever; possibly herded." },
  "coelophysis": { name:"Coelophysis", scientific:"Coelophysis bauri", length:"3 meters", weight:"15–20 kg", era:"Late Triassic", location:"North America", diet:"Small animals", facts:"One of oldest known dinosaurs; fossil evidence of cannibalism." },
  "dilophosaurus": { name:"Dilophosaurus", scientific:"Dilophosaurus wetherilli", length:"7 meters", weight:"400 kg", era:"Early Jurassic", location:"Arizona, USA", diet:"Carnivore", facts:"Twin crests on head; media often exaggerates its abilities." },
  "mapusaurus": { name:"Mapusaurus", scientific:"Mapusaurus roseae", length:"11.3 meters", weight:"3.8 tons", era:"Early Cretaceous", location:"Argentina", diet:"Carnivore", facts:"May have hunted in packs like modern lions." },
  "titanosaurus": { name:"Titanosaurus", scientific:"Titanosauria", length:"18–35 meters", weight:"50–75 tons", era:"Late Cretaceous", location:"Argentina & South America", diet:"Herbivore", facts:"Gave name to entire diverse group of sauropods." }
};

// Map markers (percent positions on the world map background)
const mapMarkers = [
  { name: "Hell Creek Formation", location: "Montana, USA", type: "skeleton", left: 28, top: 45, desc: "T-Rex, Triceratops, Edmontosaurus." },
  { name: "Solnhofen Limestone", location: "Germany", type: "skeleton", left: 51, top: 42, desc: "Archaeopteryx, exceptional preservation." },
  { name: "Lark Quarry", location: "Australia", type: "trace", left: 80, top: 70, desc: "3,300+ dinosaur footprints." },
  { name: "Hukawng Valley", location: "Myanmar", type: "amber", left: 68, top: 55, desc: "Cretaceous amber with inclusions." },
  { name: "Dinosaur Provincial Park", location: "Canada", type: "skeleton", left: 23, top: 38, desc: "Over 40 dinosaur species." },
  { name: "Ischigualasto", location: "Argentina", type: "skeleton", left: 35, top: 68, desc: "Triassic park, oldest dinosaurs." },
  { name: "Morrison Formation", location: "Western US", type: "skeleton", left: 24, top: 48, desc: "Allosaurus, Stegosaurus, Apatosaurus." },
  { name: "Gobi Desert", location: "Mongolia", type: "skeleton", left: 70, top: 45, desc: "Velociraptor, Protoceratops, eggs." }
];

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function renderDinos() {
  const grid = $("#dino-grid");
  if (!grid) return;
  grid.innerHTML = dinosaurs.map(dino => `
    <article class="dino-card" data-diet="${dino.diet}" data-period="${dino.period}" data-name="${dino.name.toLowerCase()}">
      <div class="dino-img ${dino.imageClass}" role="img" aria-label="${dino.name}"></div>
      <div class="dino-info">
        <h3>${dino.name}</h3>
        <p>${dino.funFact.substring(0, 100)}...</p>
        <div class="dino-meta">
          <span><i class="fas fa-history"></i> ${dino.period.charAt(0).toUpperCase() + dino.period.slice(1)} Period</span>
          <span><i class="fas ${dino.diet === 'carnivore' ? 'fa-drumstick-bite' : 'fa-leaf'}"></i> ${dino.diet.charAt(0).toUpperCase() + dino.diet.slice(1)}</span>
        </div>
        <button class="learn-more dino-detail" 
          data-name="${dino.name}"
          data-scientific="${dino.scientific}"
          data-era="${dino.era}"
          data-location="${dino.location}"
          data-size="${dino.size}"
          data-weight="${dino.weight}"
          data-diet="${dino.diet}"
          data-fact="${dino.funFact}">
          Details
        </button>
      </div>
    </article>
  `).join("");
  attachDinoModalEvents();
}

function attachDinoModalEvents() {
  $$(".dino-detail").forEach(btn => {
    btn.addEventListener("click", () => {
      const html = `
        <p><strong><i class="fas fa-microscope"></i> Scientific:</strong> ${btn.dataset.scientific}</p>
        <p><strong><i class="fas fa-globe-americas"></i> Era:</strong> ${btn.dataset.era}</p>
        <p><strong><i class="fas fa-map-pin"></i> Location:</strong> ${btn.dataset.location}</p>
        <p><strong><i class="fas fa-ruler-combined"></i> Size:</strong> ${btn.dataset.size}</p>
        <p><strong><i class="fas fa-weight-hanging"></i> Weight:</strong> ${btn.dataset.weight}</p>
        <p><strong><i class="fas fa-utensils"></i> Diet:</strong> ${btn.dataset.diet}</p>
        <p><strong><i class="fas fa-star-of-life"></i> Fun Fact:</strong> ${btn.dataset.fact}</p>
      `;
      openModal(btn.dataset.name, html);
    });
  });
}

function renderFossils() {
  const grid = $("#fossil-grid");
  if (!grid) return;
  grid.innerHTML = fossils.map(fossil => `
    <article class="fossil-card" data-type="${fossil.type}">
      <div class="fossil-img ${fossil.imageClass}" role="img" aria-label="${fossil.name}"></div>
      <div class="fossil-info">
        <h3>${fossil.name}</h3>
        <p class="fossil-period">${fossil.period}</p>
        <p>${fossil.desc}</p>
        <div class="fossil-details hidden" id="details-${fossil.name.replace(/\s/g,'')}">
          <div class="detail-item"><i class="fas fa-map-marker-alt"></i><div><h4>Location</h4><p>${fossil.location}</p></div></div>
          <div class="detail-item"><i class="fas fa-calendar-alt"></i><div><h4>Year</h4><p>${fossil.year}</p></div></div>
          <div class="detail-item"><i class="fas fa-lightbulb"></i><div><h4>Significance</h4><p>${fossil.significance}</p></div></div>
        </div>
        <button class="toggle-details">📖 Show Details</button>
      </div>
    </article>
  `).join("");

  $$(".toggle-details").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const details = btn.previousElementSibling;
      if (details.classList.contains("hidden")) {
        details.classList.remove("hidden");
        btn.textContent = "📘 Hide Details";
      } else {
        details.classList.add("hidden");
        btn.textContent = "📖 Show Details";
      }
    });
  });
}

function renderMap() {
  const mapDiv = $("#world-map");
  if (!mapDiv) return;
  mapDiv.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')";
  mapDiv.style.backgroundSize = "cover";
  mapDiv.style.minHeight = "450px";
  mapDiv.style.position = "relative";

  mapMarkers.forEach(m => {
    const marker = document.createElement("div");
    marker.className = "map-marker";
    marker.style.cssText = `
      position: absolute;
      left: ${m.left}%;
      top: ${m.top}%;
      width: 16px;
      height: 16px;
      background: ${m.type === "skeleton" ? "#e41a1c" : m.type === "trace" ? "#377eb8" : m.type === "amber" ? "#4daf4a" : "#ff7f00"};
      border-radius: 50%;
      border: 2px solid white;
      cursor: pointer;
      transform: translate(-50%, -50%);
      transition: transform 0.2s;
      box-shadow: 0 0 0 2px rgba(0,0,0,0.3);
    `;
    marker.title = `${m.name} (${m.location})`;
    marker.addEventListener("click", () => {
      openModal(m.name, `<p><strong>${m.location}</strong></p><p>${m.desc}</p><p>Type: ${m.type}</p>`);
    });
    marker.addEventListener("mouseenter", () => marker.style.transform = "translate(-50%, -50%) scale(1.3)");
    marker.addEventListener("mouseleave", () => marker.style.transform = "translate(-50%, -50%)");
    mapDiv.appendChild(marker);
  });
}

let currentSearch = "";
let currentFilter = "all";

function updateVisibleDinosaurs() {
  const cards = $$(".dino-card");
  let visible = 0;
  cards.forEach(card => {
    const name = card.dataset.name;
    const diet = card.dataset.diet;
    const period = card.dataset.period;
    const matchSearch = !currentSearch || name.includes(currentSearch);
    const matchFilter = currentFilter === "all" || currentFilter === diet || currentFilter === period;
    const show = matchSearch && matchFilter;
    card.style.display = show ? "block" : "none";
    if (show) visible++;
  });
  const visibleSpan = $("#visible-count");
  if (visibleSpan) visibleSpan.innerText = visible;
  const noResultsDiv = $(".no-results");
  if (noResultsDiv) noResultsDiv.style.display = visible ? "none" : "block";
}

const modal = $("#modal");
const modalTitle = $("#modal-title");
const modalBody = $("#modal-body");

function openModal(title, bodyHtml) {
  if (!modal || !modalTitle || !modalBody) return;
  modalTitle.innerText = title;
  modalBody.innerHTML = bodyHtml;
  modal.removeAttribute("aria-hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal) return;
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function showDinoDetail(slug) {
  const data = dinoDetailsDB[slug];
  if (!data) return;
  document.getElementById("detailName").innerText = data.name;
  const statsDiv = document.getElementById("detailStats");
  statsDiv.innerHTML = `
    <div><strong>📏 Length:</strong> ${data.length}</div>
    <div><strong>⚖️ Weight:</strong> ${data.weight}</div>
    <div><strong>📅 Era:</strong> ${data.era}</div>
    <div><strong>🌍 Location:</strong> ${data.location}</div>
    <div><strong>🍖 Diet:</strong> ${data.diet}</div>
    <div><strong>🔬 Scientific:</strong> ${data.scientific}</div>
  `;
  const extended = document.getElementById("detailExtendedText");
  extended.innerHTML = `<div style="margin-top: 20px;"><h3>✨ Broader Details & Significance</h3><p>${data.facts} ${data.name} roamed ${data.location} during the ${data.era}. Known for unique adaptations: ${data.facts.substring(0,150)}... Fossil discoveries reveal remarkable insights into prehistoric ecosystems.</p><p><strong>Interesting fact:</strong> ${data.facts}</p><p><i class="fas fa-book-open"></i> This dinosaur contributed greatly to paleontology, representing a key species of its period.</p></div>`;
  document.body.classList.add("show-detail-page");
  document.body.classList.add("hide-main-sections");
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.pushState({ detailOpen: true, slug }, "", `#dino/${slug}`);
}

function hideDetailPage() {
  document.body.classList.remove("show-detail-page", "hide-main-sections");
  history.pushState({}, "", window.location.pathname + window.location.hash.replace(/^#dino\/.*/, ""));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Bind detail links to show detail page
function bindDetailLinks() {
  document.querySelectorAll('.detail-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const slug = link.getAttribute('data-slug');
      if (slug && dinoDetailsDB[slug]) {
        showDinoDetail(slug);
      } else {
        // Fallback to modal for dinosaurs without detail page
        const cardTitle = link.closest('.dino-card').querySelector('h3')?.innerText || 'Dinosaur';
        const cardDesc = link.closest('.dino-card').querySelector('p')?.innerText || '';
        openModal(cardTitle, `<p>${cardDesc}</p><p><em>Full details coming soon!</em></p>`);
      }
    });
  });
}

// Handle browser back/forward
window.addEventListener('popstate', (event) => {
  if (document.body.classList.contains('show-detail-page') && !window.location.hash.startsWith('#dino/')) {
    hideDetailPage();
  } else if (window.location.hash.startsWith('#dino/')) {
    const slugFromHash = window.location.hash.replace('#dino/', '');
    if (dinoDetailsDB[slugFromHash]) showDinoDetail(slugFromHash);
  } else if (document.body.classList.contains('show-detail-page')) {
    hideDetailPage();
  }
});

// ========================
//  RANDOM DINOSAUR (Wow feature)
// ========================
function randomDino() {
  const random = dinosaurs[Math.floor(Math.random() * dinosaurs.length)];
  const html = `
    <p><strong>${random.desc}</strong></p>
    <p><i class="fas fa-ruler"></i> Size: ${random.size}</p>
    <p><i class="fas fa-weight-hanging"></i> Weight: ${random.weight}</p>
    <p><i class="fas fa-star"></i> Fun Fact: ${random.funFact}</p>
    <p><i class="fas fa-calendar"></i> Period: ${random.period}</p>
    <p><i class="fas fa-utensils"></i> Diet: ${random.diet}</p>
  `;
  openModal(`🎲 Random Dinosaur: ${random.name}`, html);
}

document.addEventListener("DOMContentLoaded", () => {
  renderDinos();
  renderFossils();
  renderMap();

  // Bind detail links for new detail page system
  bindDetailLinks();

  // Detail page close button
  const closeDetailBtn = document.getElementById("closeDetailBtn");
  if (closeDetailBtn) {
    closeDetailBtn.addEventListener("click", hideDetailPage);
  }

  // Home logo & nav links: close detail if open
  const closeDetailAndScroll = () => { 
    if(document.body.classList.contains('show-detail-page')) hideDetailPage(); 
  };
  document.querySelectorAll('.logo, .nav-home, .nav-dinos').forEach(el => {
    if (el) el.addEventListener('click', closeDetailAndScroll);
  });

  // Search
  const searchInput = $("#search-input");
  const searchForm = $(".search-bar");
  const clearBtn = $(".clear-search");

  function handleSearch() {
    if (!searchInput) return;
    currentSearch = searchInput.value.trim().toLowerCase();
    updateVisibleDinosaurs();
    if (clearBtn) clearBtn.style.display = currentSearch ? "block" : "none";
  }

  if (searchForm) {
    searchForm.addEventListener("submit", e => { e.preventDefault(); handleSearch(); });
  }
  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
  }
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        handleSearch();
        searchInput.focus();
      }
    });
  }

  // Filter buttons
  $$(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      updateVisibleDinosaurs();
    });
  });

  // Fossil filters
  $$(".fossil-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".fossil-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      $$(".fossil-card").forEach(card => {
        const type = card.dataset.type;
        card.style.display = (filter === "all" || filter === type) ? "block" : "none";
      });
      const anyVisible = $$(".fossil-card").some(c => c.style.display !== "none");
      const fossilNoResults = $(".fossil-no-results");
      if (fossilNoResults) fossilNoResults.style.display = anyVisible ? "none" : "block";
    });
  });

  // Random dinosaur button (defensive)
  const randomBtn = $("#randomDinoBtn");
  if (randomBtn) {
    randomBtn.addEventListener("click", randomDino);
  }

  // Timeline modal events
  $$(".timeline-dot, .timeline-learn").forEach(el => {
    el.addEventListener("click", () => {
      openModal(el.dataset.title, `<p>${el.dataset.body}</p>`);
    });
  });

  // Modal close
  if (modal) {
    modal.addEventListener("click", e => { if (e.target.hasAttribute("data-close")) closeModal(); });
  }
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  // Mobile nav toggle
  const navToggle = $(".nav-toggle");
  const nav = $("#site-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
    $$("#site-nav a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll reveal for timeline
  const timelineItems = $$(".timeline-item");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.15 });
  timelineItems.forEach(i => observer.observe(i));

  // Initial update
  updateVisibleDinosaurs();
});
