const del = require("del");
const fs = require("fs");
const replace = require("gulp-replace");
const gulp = require("gulp");
const cleancss = require("gulp-clean-css");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

// Styles

gulp.task("minify-styles", () => {
  return gulp
    .src("src/styles/*.css")
    .pipe(cleancss({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/styles"));
});

// gulp.task("styles:inline", () => {
//   return gulp
//     .src("dist/**/*.html")
//     .pipe(
//       replace(/<link rel="stylesheet" href="\/styles\/style.css">/, () => {
//         const style = fs.readFileSync("dist/styles/style.css", "utf8");
//         return "<style>" + style + "</style>";
//       })
//     )
//     .pipe(gulp.dest("dist"));
// });

// Scripts

gulp.task("scripts:compress", () => {
  return gulp
    .src("src/scripts/scripts.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});

// gulp.task("scripts:inline", () => {
//   return gulp
//     .src("dist/**/*.html")
//     .pipe(
//       replace(/<script src="\/scripts\/scripts.js"><\/script>/, () => {
//         const style = fs.readFileSync("dist/scripts.js", "utf8");
//         return "<script>" + style + "</script>";
//       })
//     )
//     .pipe(gulp.dest("dist"));
// });

// Clean

// gulp.task("clean", () => {
//   return del(["dist/styles", "dist/scripts", "dist/scripts.js"]);
// });

// Build

gulp.task(
  "build",
  gulp.series(
    "minify-styles",
    // "styles:inline",
    "scripts:compress",
    // "scripts:inline",
    // "clean"
  )
);
