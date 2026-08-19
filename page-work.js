/* ==========================================================================
   WORK INDEX PAGE — filterable project grid, from SITE_CONTENT + PROJECTS.
   ========================================================================== */

(function renderWork() {
  const c = SITE_CONTENT;

  document.title = "Work — Campaigns, Editorials & Visual Concepts";

  const projects = publishedProjects();

  // Categories actually in use, in the configured order (matches original behavior)
  const used = new Set(projects.map((p) => p.category).filter(Boolean));
  const ordered = (c.categories || []).filter((cat) => used.has(cat));
  const extra = [...used].filter((cat) => !(c.categories || []).includes(cat));
  const categories = [...ordered, ...extra];

  let filter = null;

  const filtersRow = document.getElementById("filtersRow");
  const filtersDesc = document.getElementById("filtersDesc");
  const grid = document.getElementById("workGrid");

  function renderFilters() {
    const allBtn = `<button type="button" data-filter="" class="label-xs link-underline" data-active="${filter === null}">All</button>`;
    const catBtns = categories
      .map(
        (cat) =>
          `<button type="button" data-filter="${esc(cat)}" class="label-xs link-underline" data-active="${filter === cat}">${esc(cat)}</button>`,
      )
      .join("");
    filtersRow.innerHTML = allBtn + catBtns;

    filtersRow.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        filter = btn.getAttribute("data-filter") || null;
        renderFilters();
        renderDescription();
        renderGrid();
      });
    });
  }

  function renderDescription() {
    const desc = filter ? c.categoryDescriptions?.[filter] : undefined;
    filtersDesc.innerHTML = desc ? `<p class="body-copy work-filters__desc">${esc(desc)}</p>` : "";
  }

  function renderGrid() {
    const visible = filter ? projects.filter((p) => p.category === filter) : projects;

    if (visible.length === 0) {
      grid.innerHTML = `<p class="body-copy">Nothing in this category yet.</p>`;
      return;
    }

    grid.innerHTML = visible
      .map((project, i) => {
        const ratio = i % 3 === 0 ? "portrait" : i % 3 === 1 ? "landscape" : "tall";
        const stagger = i % 4 === 3 ? "stagger-3" : i % 4 === 1 ? "stagger-1" : "";
        const delay = (i % 2) * 90;
        return `<div class="reveal ${stagger}" style="transition-delay:${delay}ms">${projectCard(project, { ratio, index: i })}</div>`;
      })
      .join("");

    initReveal();
  }

  renderFilters();
  renderDescription();
  renderGrid();
  initReveal();
})();
