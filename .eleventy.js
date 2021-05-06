const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const htmlmin = require("html-minifier");

module.exports = (config) => {
  config.addPassthroughCopy("src/images");
  config.addPassthroughCopy("src/scripts");
  config.addPassthroughCopy("src/styles");
  config.addPassthroughCopy("src/fonts");

  getCatList = function (collection) {
    let catSet = new Set();

    collection
      .getAllSorted()
      .forEach(
        (item) =>
          typeof item.data.category === "string" &&
          catSet.add(item.data.category)
      );

    return [...catSet];
  };

  makeCategories = function (collection) {
    let categories = {};

    collection.getAllSorted().forEach((item) => {
      let category = item.data.category;

      if (typeof category !== "string") return;

      if (Array.isArray(categories[category])) categories[category].push(item);
      else categories[category] = [item];
    });

    return categories;
  };

  config.addCollection("categories", makeCategories);

  config.addCollection("categoryList", getCatList);

  config.addPlugin(eleventyNavigationPlugin);

  config.addFilter("htmlmin", (value) => {
    return htmlmin.minify(value, {
      removeComments: true,
      collapseWhitespace: true,
    });
  });

  config.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      const result = htmlmin.minify(content, {
        removeComments: true,
        collapseWhitespace: true,
      });

      return result;
    }

    return content;
  });

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
