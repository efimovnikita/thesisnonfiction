const del = require("del");
const fs = require("fs");
const replace = require("gulp-replace");
const gulp = require("gulp");
const cleancss = require("gulp-clean-css");

// Styles

gulp.task("minify-styles", () => {
  return gulp
    .src("src/styles/*.css")
    .pipe(cleancss({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/styles"));
});

gulp.task("styles:inline", () => {
  return gulp
    .src("dist/**/*.html")
    .pipe(
      replace(/<link rel="stylesheet" href="\/styles\/style.css">/, () => {
        const style = fs.readFileSync("dist/styles/style.css", "utf8");
        return "<style>" + style + "</style>";
      })
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("clean", () => {
  return del("dist/styles");
});

// Build

gulp.task("build", gulp.series("minify-styles", "styles:inline", "clean"));
