/* ==========================================================================
   CASE STUDY (PROJECT DETAIL) PAGE
   One template for every project — reads ?slug=... from the URL and
   renders from the matching object in PROJECTS. This is why adding
   Project 05 doesn't need a new HTML file: just add it to js/content.js
   and link to work/project.html?slug=your-new-slug.
   ========================================================================== */

(function renderProject() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const project = slug ? findProject(slug) : null;

  const root = document.getElementById("caseStudyRoot");
  const notFound = document.getElementById("caseNotFound");

  if (!project) {
    root.style.display = "none";
    notFound.style.display = "block";
    document.title = "Project not found";
    return;
  }

  // This page lives in /work/, but image paths in content.js are written
  // relative to the site root (e.g. "images/hero.jpg") — rewrite them here
  // so this is the only place that needs to know about the folder depth.
  const img = (src) => (src && !/^https?:\/\//.test(src) ? `../${src}` : src);

  document.title = `${project.title} — Case Study`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", project.shortDescription);

  // TITLE
  document.getElementById("caseTitle").textContent = project.title;
  document.getElementById("caseMeta").textContent = [project.category, project.year]
    .filter(Boolean)
    .join(" — ");

  // HERO IMAGE
  document.getElementById("caseHeroMedia").innerHTML = mediaFrame({
    src: img(project.heroImage),
    alt: `${project.title} campaign image`,
    label: `${project.title} hero`,
    priority: true,
  });

  // THE CONCEPT
  const conceptSection = document.getElementById("conceptSection");
  if (project.concept) {
    document.getElementById("conceptText").textContent = project.concept;
  } else {
    conceptSection.remove();
  }

  // CREATIVE DIRECTION
  const directionSection = document.getElementById("directionSection");
  if (project.creativeDirection) {
    document.getElementById("directionText").textContent = project.creativeDirection;
  } else {
    directionSection.remove();
  }

  // VISUAL DEVELOPMENT
  const devSection = document.getElementById("devSection");
  if (project.visualDevelopment && project.visualDevelopment.length > 0) {
    document.getElementById("devGrid").innerHTML = project.visualDevelopment
      .map((src, i) =>
        mediaFrame({
          src: img(src),
          alt: `${project.title} visual development ${i + 1}`,
          label: `Development ${i + 1}`,
          className: "",
        }),
      )
      .join("");
  } else {
    devSection.remove();
  }

  // FINAL CAMPAIGN GALLERY
  const gallerySection = document.getElementById("gallerySection");
  if (project.galleryImages && project.galleryImages.length > 0) {
    document.getElementById("galleryList").innerHTML = project.galleryImages
      .map((src, i) => {
        const full = i % 3 === 0;
        const frame = mediaFrame({
          src: img(src),
          alt: `${project.title} final campaign image ${i + 1}`,
          label: `Campaign ${i + 1}`,
          className: full ? "md-aspect-16-9 aspect-4-5" : "aspect-4-5",
        });
        return full
          ? `<div class="reveal case-gallery__item--full">${frame}</div>`
          : `<div class="reveal case-gallery__item--inset"><div>${frame}</div></div>`;
      })
      .join("");
  } else {
    gallerySection.remove();
  }

  // MOTION (video)
  const motionSection = document.getElementById("motionSection");
  if (project.video) {
    document.getElementById("motionVideo").src = img(project.video);
  } else {
    motionSection.remove();
  }

  // MY ROLE
  if (project.role) {
    document.getElementById("roleText").textContent = project.role;
  }

  // CREDITS
  const creditsSection = document.getElementById("creditsSection");
  if (project.credits) {
    document.getElementById("creditsText").textContent = project.credits;
  } else {
    creditsSection.remove();
  }

  // NEXT PROJECT
  const nextSection = document.getElementById("nextSection");
  const published = publishedProjects();
  if (published.length > 1) {
    const index = published.findIndex((p) => p.slug === project.slug);
    const next = published[(index + 1) % published.length];
    document.getElementById("nextLink").href = `project.html?slug=${encodeURIComponent(next.slug)}`;
    document.getElementById("nextTitle").textContent = next.title;
  } else {
    nextSection.remove();
  }

  initReveal();
})();
