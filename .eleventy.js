const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = (config) => {
  config.addPassthroughCopy("src/images");
  config.addPassthroughCopy("src/scripts");
  config.addPassthroughCopy("src/styles");
  config.addPlugin(eleventyNavigationPlugin);

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      layouts: "layouts",
    },
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,
    templateFormats: ["md", "njk"],
  };
};
