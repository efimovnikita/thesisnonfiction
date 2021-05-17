const del = require("del");
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
    .pipe(gulp.dest("dist/scripts"));
});

// Clean

gulp.task("clean", () => {
  return del("dist/styles/common.blocks");
});

// Build

gulp.task("build", gulp.series("minify-styles", "scripts:compress", "clean"));
