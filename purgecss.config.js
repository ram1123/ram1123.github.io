module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: {
    standard: [
      /^home-highlight/,
      /^blog-tools/,
      /^topic-chip/,
      /^post-taxonomy/,
      /^post-chip/,
      /^repo-/,
      /^teaching-/,
      "post-list__item",
      "projects",
      "card-item",
      "grid-item",
    ],
  },
};
