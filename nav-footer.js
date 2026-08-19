/* ==========================================================================
   NAV + FOOTER
   Renders the header and footer from SITE_CONTENT into every page, and
   wires up the mobile menu + header scroll state.
   Each page just needs: <div id="site-header"></div> and
   <div id="site-footer"></div>, plus <body data-page="...">.
   ========================================================================== */

(function renderNavFooter() {
  const currentPage = document.body.getAttribute("data-page");
  const c = SITE_CONTENT;

  const links = [
    { page: "work", href: "work.html", label: c.nav.work },
    { page: "about", href: "about.html", label: c.nav.about },
    { page: "contact", href: "contact.html", label: c.nav.contact },
  ];

  // Adjust relative links when rendering from inside /work/
  const inSubfolder = currentPage === "project";
  const prefix = inSubfolder ? "../" : "";
  const homeHref = inSubfolder ? "../index.html" : "index.html";

  const isActive = (page) => (currentPage === page ? ' data-active="true"' : "");

  const headerEl = document.getElementById("site-header");
  if (headerEl) {
    headerEl.innerHTML = `
      <header class="site-header" id="siteHeader">
        <div class="site-header__row">
          <a href="${homeHref}" class="site-header__brand">
            <span class="site-header__brand-name">${esc(c.name)}</span>
            <span class="label-xs site-header__brand-title">${esc(c.professionalTitle)}</span>
          </a>

          <nav class="site-nav">
            ${links
              .map(
                (l) =>
                  `<a href="${prefix}${l.href}" class="label-sm link-underline"${isActive(l.page)}>${esc(l.label)}</a>`,
              )
              .join("")}
          </nav>

          <button type="button" class="menu-toggle label-xs" id="menuToggle" aria-expanded="false" aria-label="Toggle menu">
            Menu
          </button>
        </div>
      </header>

      <div class="mobile-nav" id="mobileNav">
        <nav class="mobile-nav__links">
          ${links.map((l) => `<a href="${prefix}${l.href}" class="display">${esc(l.label)}</a>`).join("")}
        </nav>
        <a href="mailto:${esc(c.email)}" class="label-xs mobile-nav__email">${esc(c.email)}</a>
      </div>`;
  }

  const footerEl = document.getElementById("site-footer");
  if (footerEl) {
    footerEl.innerHTML = `
      <footer class="site-footer">
        <div class="site-footer__grid">
          <div>
            <p class="site-footer__title">${esc(c.footerTitle)}</p>
            ${c.footerNote ? `<p class="body-copy site-footer__note">${esc(c.footerNote)}</p>` : ""}
          </div>

          <nav class="site-footer__col">
            ${links.map((l) => `<a href="${prefix}${l.href}" class="label-xs link-underline">${esc(l.label)}</a>`).join("")}
          </nav>

          <div class="site-footer__col">
            <a href="mailto:${esc(c.email)}" class="label-xs link-underline">${esc(c.email)}</a>
          </div>
        </div>

        <div class="site-footer__bottom">
          <p class="label-xs text-muted">${esc(c.copyright)}</p>
        </div>
      </footer>`;
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const open = mobileNav.getAttribute("data-open") === "true";
      mobileNav.setAttribute("data-open", String(!open));
      menuToggle.setAttribute("aria-expanded", String(!open));
      menuToggle.textContent = !open ? "Close" : "Menu";
      document.body.style.overflow = !open ? "hidden" : "";
    });
    mobileNav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mobileNav.setAttribute("data-open", "false");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "Menu";
        document.body.style.overflow = "";
      }),
    );
  }

  // Header background on scroll
  const header = document.getElementById("siteHeader");
  if (header) {
    const onScroll = () => {
      header.setAttribute("data-scrolled", String(window.scrollY > 24));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
