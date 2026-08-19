/* ==========================================================================
   HOMEPAGE — renders hero, selected work, about strip, contact CTA
   from SITE_CONTENT + PROJECTS.
   ========================================================================== */

(function renderHome() {
  const c = SITE_CONTENT;

  document.title = "Melissa de Souza — AI Creative Director & Visual Strategist";

  // HERO
  document.getElementById("heroMedia").innerHTML = mediaFrame({
    src: c.heroMedia,
    alt: c.heroHeadline,
    label: "Hero",
    priority: true,
  });
  document.getElementById("heroHeadline").textContent = c.heroHeadline;
  document.getElementById("heroDescription").textContent = c.heroDescription;
  document.getElementById("heroCta").textContent = c.heroCta;

  // SELECTED WORK
  document.getElementById("selectedWorkHeading").textContent = c.selectedWorkHeading;

  const featured = publishedProjects().filter((p) => p.featured);
  const listEl = document.getElementById("selectedWorkList");

  if (featured.length === 0) {
    listEl.innerHTML = `<p class="body-copy">No featured projects yet.</p>`;
  } else {
    listEl.innerHTML = featured
      .map((project, i) => {
        const layout = i % 3;
        if (layout === 0) {
          return `<div class="reveal">${projectCard(project, { ratio: "wide", index: i })}</div>`;
        }
        if (layout === 1) {
          return `<div class="reveal feature-row--tall">${projectCard(project, { ratio: "tall", index: i })}</div>`;
        }
        return `<div class="reveal feature-row--portrait">${projectCard(project, { ratio: "portrait", index: i })}</div>`;
      })
      .join("");
  }

  // ABOUT STRIP
  document.getElementById("aboutStripMedia").innerHTML = mediaFrame({
    src: c.aboutImage,
    alt: c.name,
    label: "About",
    className: "aspect-4-5",
  });
  document.getElementById("aboutStripHeading").textContent = c.aboutHeadline;
  document.getElementById("aboutStripIntro").textContent = c.aboutIntro;

  // CONTACT CTA
  document.getElementById("contactCtaHeading").textContent = c.contactHeadline;

  initReveal();
})();
