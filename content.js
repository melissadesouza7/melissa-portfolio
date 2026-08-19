/* ==========================================================================
   SITE CONTENT — MASTER EDITABLE FILE
   ==========================================================================
   Everything you'd ever ask Claude to change ("change my hero text",
   "add project 05", "update my email") lives in this one file.
   Nothing here needs to touch layout, CSS, or page markup.

   To add a new project: copy one of the objects in PROJECTS below,
   paste it at the end of the array, and fill in the fields.
   Leave a field as "" (empty string) or [] (empty array) to hide that
   section on the page automatically — nothing breaks.
   ========================================================================== */

/* -------------------------------------------------------------------- */
/* SITE CONTENT                                                          */
/* -------------------------------------------------------------------- */
const SITE_CONTENT = {
  // Brand
  name: "Melissa de Souza",
  professionalTitle: "AI Creative Director",
  email: "melissadesouza@protonmail.com",

  // Navigation labels
  nav: { work: "Work", about: "About", contact: "Contact" },

  // HERO (homepage)
  heroHeadline: "AI CREATIVE DIRECTOR",
  heroDescription:
    "AI-powered visual direction, campaign concepts & storytelling for fashion, beauty, jewellery and lifestyle brands.",
  heroMedia: "images/hero.jpg",
  heroCta: "View Work",

  // SELECTED WORK (homepage)
  selectedWorkHeading: "Selected Work",

  // ABOUT (homepage strip + about page)
  aboutHeadline: "Creative direction, reimagined.",
  aboutImage: "images/about.jpg",
  aboutIntro:
    "I am an AI Creative Director and Visual Strategist working at the intersection of artificial intelligence, art direction and visual storytelling. My practice begins with an idea, a mood, a world — never with a tool.",
  aboutBody:
    "I develop campaign concepts and visual languages for fashion, beauty, jewellery and lifestyle brands, combining emerging AI production methods with human creative judgement: references, styling, lighting, casting, composition and narrative. AI is a medium and a production studio. Taste, restraint and direction are what make the work worth looking at.\n\nEvery image is directed rather than generated — built from a reference architecture, an intended emotion and a commercial understanding of what the brand needs the picture to do.",

  backgroundHeading: "Background",
  backgroundBody:
    "Years spent inside luxury hospitality and international brand environments shaped how I read a room, a guest and a brand. That work taught presentation, atmosphere, service detail and customer psychology — the same instincts that now inform how I build campaigns: what people notice, what they desire, and how a moment is staged.",

  approachHeading: "Creative Approach",
  approach: [
    { number: "01", title: "Concept", text: "Finding the idea, story and visual world." },
    { number: "02", title: "Art Direction", text: "Defining references, styling, composition, mood, lighting and visual language." },
    { number: "03", title: "AI Production", text: "Using AI tools to develop and produce the visual world." },
    { number: "04", title: "Refinement", text: "Curating, directing and refining the final imagery." },
    { number: "05", title: "Campaign", text: "Turning the visual direction into a cohesive campaign or brand story." },
  ],

  // CONTACT
  contactHeadline: "Let's create something distinctive.",
  contactCopy:
    "For creative opportunities, AI creative direction, campaign development, art direction and brand collaborations.",

  // FOOTER
  footerTitle: "AI Creative Director",
  footerNote: "AI-powered visual direction for fashion, beauty, jewellery and lifestyle.",
  copyright: "© 2026 Melissa de Souza. All rights reserved.",

  // WORK filter categories, in display order
  categories: ["Fashion & Beauty", "Product & Jewellery", "Editorial & Motion", "Creative Concepts"],
  categoryDescriptions: {
    "Fashion & Beauty": "Fashion campaigns, beauty campaigns, editorials and visual storytelling.",
    "Product & Jewellery": "Product campaigns, jewellery visuals, beauty product imagery and commercial campaign concepts.",
    "Editorial & Motion": "Editorial concepts, cinematic imagery, motion work and experimental storytelling.",
    "Creative Concepts": "Original visual worlds, experimental campaigns and conceptual projects.",
  },
};

/* -------------------------------------------------------------------- */
/* PROJECTS                                                              */
/* -------------------------------------------------------------------- */
/*
  Field guide:
    slug              URL-safe id, used as work/project.html?slug=THIS
    title             Project name
    category          Must match one of SITE_CONTENT.categories
    year              e.g. "2025"
    featured          true = shows on the homepage "Selected Work" section
    published         true = shows in Work list at all; set false to hide
    thumbnail         image used in grid/card views
    heroImage         big image at the top of the case-study page
    shortDescription  one line, shown under the title on hover / meta
    concept           "The Concept" paragraph (serif, large)
    creativeDirection "Creative Direction" paragraph (body copy)
    visualDevelopment array of image paths for a "Visual Development" grid
                      (leave as [] to hide this section — used for extra
                      process/mood images)
    galleryImages     array of image paths for the "Final Campaign" section
    video             path to a video file, leave "" to hide "Motion" section
    role              "My Role" paragraph
    credits           "Credits" paragraph, leave "" to hide the section
*/
const PROJECTS = [
  {
    slug: "nocturne",
    title: "Nocturne",
    category: "Fashion & Beauty",
    year: "2025",
    featured: true,
    published: true,
    thumbnail: "images/nocturne-thumb.jpg",
    heroImage: "images/nocturne-hero.jpg",
    shortDescription:
      "A cinematic fashion campaign exploring after-hours dressing, anonymity and the luxury of the city at night.",
    concept:
      "Nocturne follows a woman moving through the city after midnight — unaccompanied, unhurried, entirely self-possessed. The campaign explores after-hours dressing as a form of anonymity: the black dress, the jewellery, the handbag, the doorway light. Luxury here is not display, it is privacy.",
    creativeDirection:
      "Built on a 35mm-inspired visual language: warm architectural lighting against cold blue night, wet pavement holding reflections, shallow depth and available-light exposure. Styling is reduced to a single black dress, fine jewellery and one structured handbag, so silhouette and gesture carry the story. Composition favours negative space, off-centre framing and the sense of a frame caught rather than staged.",
    visualDevelopment: [],
    galleryImages: ["images/nocturne-01.jpg", "images/nocturne-02.jpg"],
    video: "",
    role: "Concept, art direction, styling direction, lighting design, AI production and final image curation across the full campaign.",
    credits: "",
  },
  {
    slug: "ivory-form",
    title: "Ivory Form",
    category: "Fashion & Beauty",
    year: "2025",
    featured: true,
    published: true,
    thumbnail: "images/ivory-thumb.jpg",
    heroImage: "images/ivory-hero.jpg",
    shortDescription: "An editorial study of refined form, minimalism and sculptural composition.",
    concept:
      "Ivory Form strips fashion imagery back to its structural essentials: line, drape, shadow and skin. The project treats the body and the garment as one continuous sculptural gesture, photographed in a palette of ivory, bone and warm neutral.",
    creativeDirection:
      "Diffused north light, seamless warm-white environments and long uninterrupted silhouettes. Direction focuses on posture, hand placement and the exact angle at which fabric breaks. Contrast is kept low and grain is kept present, so the imagery reads as editorial rather than rendered.",
    visualDevelopment: [],
    galleryImages: ["images/ivory-01.jpg"],
    video: "",
    role: "Concept, art direction, casting direction, lighting and composition, AI production and final selection.",
    credits: "",
  },
  {
    slug: "liquid-metal",
    title: "Liquid Metal",
    category: "Product & Jewellery",
    year: "2025",
    featured: true,
    published: true,
    thumbnail: "images/liquid-thumb.jpg",
    heroImage: "images/liquid-hero.jpg",
    shortDescription:
      "A conceptual jewellery and product campaign built on reflective metallic surfaces, movement and light.",
    concept:
      "Liquid Metal is a jewellery and product visual concept exploring metal as something fluid rather than fixed. Polished gold and chrome are directed as surfaces that catch, bend and hold light — the language of luxury materiality at macro scale.",
    creativeDirection:
      "Precision product lighting with controlled speculars, deep shadow falloff and mirror-black surfaces. Movement is implied through molten forms, ripples and suspended reflection. Colour is restricted to gold, chrome, warm ivory and near-black so the material itself becomes the subject.",
    visualDevelopment: [],
    galleryImages: ["images/liquid-01.jpg"],
    video: "",
    role: "Concept, art direction, material and lighting direction, AI production and final retouch direction.",
    credits: "",
  },
  {
    slug: "after-hours-dressing",
    title: "After-Hours Dressing",
    category: "Editorial & Motion",
    year: "2025",
    featured: true,
    published: true,
    thumbnail: "images/afterhours-thumb.jpg",
    heroImage: "images/afterhours-hero.jpg",
    shortDescription: "A cinematic editorial narrative following one woman across five moments of a single night.",
    concept:
      "A visual story told in chapters — 11:47 Gallery, 1:00 Jazz, 2:13 Rooftop, 3:00 Hotel, 4:45 City. Each moment is a scene rather than an image: a night unfolding through changing light, company and solitude.",
    creativeDirection:
      "Each chapter carries its own light signature — gallery white, jazz-club amber, rooftop blue hour, hotel tungsten, dawn grey. Continuity is held by wardrobe, jewellery and the character's composure. Framing borrows from cinema: wide establishing shots, mid-frames with breathing room and close detail crops used as cutaways.",
    visualDevelopment: [],
    galleryImages: ["images/afterhours-01.jpg"],
    video: "",
    role: "Concept, narrative structure, art direction, scene and lighting design, AI production, edit and sequencing.",
    credits: "",
  },

  // Add Project 05 here — copy an object above, paste below, edit the fields.
];
