module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: [
    "home-highlight",
    "home-highlight__label",
    "home-highlight__grid",
    "home-highlight__card",
  ],
};
