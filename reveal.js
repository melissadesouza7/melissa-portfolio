/* ==========================================================================
   SCROLL REVEAL
   Call initReveal() after injecting content so newly-added .reveal
   elements get observed too. Elements fade + rise the first time they
   scroll into view, matching the original site's motion.
   ========================================================================== */

function initReveal(root = document) {
  const elements = root.querySelectorAll(".reveal:not([data-observed])");

  if (typeof IntersectionObserver === "undefined") {
    elements.forEach((el) => el.setAttribute("data-visible", "true"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
  );

  elements.forEach((el) => {
    el.setAttribute("data-observed", "true");
    observer.observe(el);
  });
}
