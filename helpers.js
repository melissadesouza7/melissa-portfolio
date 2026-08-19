/* ==========================================================================
   SHARED HELPERS
   Small utilities used across every page. Not content — safe to leave alone.
   ========================================================================== */

/** Escape text before injecting into innerHTML. */
function esc(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

/**
 * Build a media-frame element: an <img> if src is set, otherwise a
 * labelled placeholder so the layout never breaks while you're filling
 * in real images.
 */
function mediaFrame({ src, alt, label, className = "", priority = false }) {
  if (!src) {
    return `
      <div class="media-frame media-frame--empty ${className}">
        <span class="label-xs">${esc(label || alt)} — image slot</span>
      </div>`;
  }
  return `
    <div class="media-frame ${className}">
      <img
        src="${esc(src)}"
        alt="${esc(alt)}"
        loading="${priority ? "eager" : "lazy"}"
        decoding="${priority ? "sync" : "async"}"
        fetchpriority="${priority ? "high" : "auto"}"
      />
    </div>`;
}

/** Build a project card (image + title + index + category/year + description). */
function projectCard(project, { ratio = "portrait", index } = {}) {
  const idx =
    typeof index === "number" ? `<span class="label-xs project-card__index">${String(index + 1).padStart(2, "0")}</span>` : "";
  const meta = [project.category, project.year].filter(Boolean).join(" — ");
  const desc = project.shortDescription
    ? `<p class="body-copy project-card__desc">${esc(project.shortDescription)}</p>`
    : "";

  return `
    <a href="work/project.html?slug=${encodeURIComponent(project.slug)}" class="group project-card">
      ${mediaFrame({
        src: project.thumbnail,
        alt: project.title,
        label: project.title,
        className: `ratio-${ratio}`,
      })}
      <div class="project-card__meta">
        <h3 class="project-card__title">${esc(project.title)}</h3>
        ${idx}
      </div>
      <p class="label-xs project-card__cat">${esc(meta)}</p>
      ${desc}
    </a>`;
}

/** Find a project by slug, or null. */
function findProject(slug) {
  return PROJECTS.find((p) => p.slug === slug) || null;
}

/** Published projects only, in array order. */
function publishedProjects() {
  return PROJECTS.filter((p) => p.published !== false);
}
