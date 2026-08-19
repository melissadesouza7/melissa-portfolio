/* ==========================================================================
   CONTACT PAGE — renders copy from SITE_CONTENT and builds a mailto: link
   from the form fields on submit (no backend required).
   ========================================================================== */

(function renderContact() {
  const c = SITE_CONTENT;

  document.title = "Contact — Creative Direction & Campaign Collaborations";

  document.getElementById("contactHeading").textContent = c.contactHeadline;
  document.getElementById("contactCopy").textContent = c.contactCopy;

  const emailLink = document.getElementById("contactEmail");
  emailLink.href = `mailto:${c.email}`;
  emailLink.textContent = c.email;

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const company = data.get("company") || "";
    const projectType = data.get("projectType") || "";
    const message = data.get("message") || "";

    const subject = `Enquiry — ${projectType || "Creative direction"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company / Brand: ${company}`,
      `Project type: ${projectType}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${c.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  initReveal();
})();
