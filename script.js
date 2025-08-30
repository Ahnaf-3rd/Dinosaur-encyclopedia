const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

document.addEventListener('DOMContentLoaded', () => {
  // Search
  const searchForm = $('.search-bar');
  const searchInput = $('#search-input');
  const dinoCards = $$('.dino-card');
  const noResults = $('.no-results');
  const filterButtons = $$('.filter-btn');

  function applyFilters(searchTerm = '', active = 'all') {
    let visible = 0;
    dinoCards.forEach(card => {
      const name = card.querySelector('h3').textContent.toLowerCase();
      const desc = card.querySelector('p').textContent.toLowerCase();
      const diet = card.dataset.diet;
      const period = card.dataset.period;

      const matchSearch = !searchTerm || name.includes(searchTerm) || desc.includes(searchTerm);
      const matchFilter  = active === 'all' || active === diet || active === period;

      const show = matchSearch && matchFilter;
      card.style.display = show ? 'block' : 'none';
      if (show) visible++;
    });
    noResults.style.display = visible ? 'none' : 'block';
  }

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const activeFilter = $('.filter-btn.active').dataset.filter;
    applyFilters(searchInput.value.toLowerCase().trim(), activeFilter);
  });

  // Filters
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      applyFilters(searchInput.value.toLowerCase().trim(), btn.dataset.filter);
    });
  });

  // Fossil filtering functionality
  const fossilFilterButtons = $$('.fossil-filter-btn');
  const fossilCards = $$('.fossil-card');
  const fossilNoResults = $('.fossil-no-results'); // Specific element for fossils

  function applyFossilFilters(activeFilter = 'all') {
      let visible = 0;
      
      fossilCards.forEach(card => {
          const fossilType = card.dataset.type;
          const matchFilter = activeFilter === 'all' || activeFilter === fossilType;

          card.style.display = matchFilter ? 'block' : 'none';
          if (matchFilter) visible++;
      });
      
      // Show/hide fossil-specific no results message
      if (fossilNoResults) {
          fossilNoResults.style.display = visible ? 'none' : 'block';
      }
  }

  // Add event listeners to fossil filter buttons
  fossilFilterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
          fossilFilterButtons.forEach(b => { 
              b.classList.remove('active'); 
              b.setAttribute('aria-pressed', 'false'); 
          });
          btn.classList.add('active');
          btn.setAttribute('aria-pressed', 'true');
          applyFossilFilters(btn.dataset.filter);
      });
  });

  // Initialize fossil filters
  applyFossilFilters();

  // Modal functionality
  const modal = $('#modal');
  const modalTitle = $('#modal-title');
  const modalBody = $('#modal-body');

  function openModal(title, body) {
    modalTitle.textContent = title;
    modalBody.textContent = body;
    modal.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    // Focus on close button for accessibility
    $('.modal-close').focus();
  }
  
  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  
  modal.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-close')) closeModal();
  });
  
  document.addEventListener('keydown', (e) => { 
    if (e.key === 'Escape') closeModal(); 
  });

  // Timeline modal events
  $$('.timeline-dot').forEach(dot => {
    dot.addEventListener('click', () => openModal(dot.dataset.title, dot.dataset.body));
    dot.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(dot.dataset.title, dot.dataset.body);
      }
    });
  });

  // Fossil modal events
  $$('.learn-more').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.title, btn.dataset.body));
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(btn.dataset.title, btn.dataset.body);
      }
    });
  });

  // Reveal animation on scroll
  const timelineItems = $$('.timeline-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });
  timelineItems.forEach(i => observer.observe(i));

  // Mobile nav
  const navToggle = $('.nav-toggle');
  const nav = $('#site-nav');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
  
  // Close nav after clicking a link (mobile)
  $$('#site-nav a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));

  // Initial run
  applyFilters();
});