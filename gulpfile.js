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

gulp.task("posts-styles:inline", () => {
  return gulp
    .src("dist/**/*.html")
    .pipe(
      replace(/<link rel="stylesheet" href="\/styles\/posts.css">/, () => {
        const style = fs.readFileSync("dist/styles/posts.css", "utf8");
        return "<style>" + style + "</style>";
      })
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("post-styles:inline", () => {
  return gulp
    .src("dist/**/*.html")
    .pipe(
      replace(/<link rel="stylesheet" href="\/styles\/post.css">/, () => {
        const style = fs.readFileSync("dist/styles/post.css", "utf8");
        return "<style>" + style + "</style>";
      })
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("clean", () => {
  return del(["dist/styles/chunks", "dist/styles"]);
});

// Build

gulp.task(
  "build",
  gulp.series(
    "minify-styles",
    "posts-styles:inline",
    "post-styles:inline",
    "clean"
  )
);
