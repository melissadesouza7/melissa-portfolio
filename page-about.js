/* ==========================================================================
   ABOUT PAGE — renders from SITE_CONTENT.
   ========================================================================== */

(function renderAbout() {
  const c = SITE_CONTENT;

  document.title = "About — AI Creative Director & Visual Strategist";

  document.getElementById("aboutHeadline").textContent = c.aboutHeadline;

  document.getElementById("aboutMedia").innerHTML = mediaFrame({
    src: c.aboutImage,
    alt: c.name,
    label: "About portrait",
    className: "aspect-4-5",
  });
  document.getElementById("aboutLede").textContent = c.aboutIntro;
  document.getElementById("aboutBody").textContent = c.aboutBody;

  // Background section (hidden if empty)
  const bgSection = document.getElementById("backgroundSection");
  if (c.backgroundBody) {
    document.getElementById("backgroundHeading").textContent = c.backgroundHeading;
    document.getElementById("backgroundBody").textContent = c.backgroundBody;
  } else {
    bgSection.remove();
  }

  // Approach steps (hidden if empty)
  const approachSection = document.getElementById("approachSection");
  if (c.approach && c.approach.length > 0) {
    document.getElementById("approachHeading").textContent = c.approachHeading;
    document.getElementById("approachList").innerHTML = c.approach
      .map(
        (step, i) => `
        <div class="reveal approach-step" style="transition-delay:${i * 60}ms">
          <p class="label-xs text-muted approach-step__number">${esc(step.number)}</p>
          <h3 class="approach-step__title">${esc(step.title)}</h3>
          <p class="body-copy approach-step__text">${esc(step.text)}</p>
        </div>`,
      )
      .join("");
  } else {
    approachSection.remove();
  }

  initReveal();
})();
