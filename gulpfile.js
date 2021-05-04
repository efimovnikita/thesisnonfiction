const del = require("del");
const gulp = require("gulp");
const cleancss = require("gulp-clean-css");

// Styles

// gulp.task("minify-css", () => {
//   return gulp
//     .src("src/styles/post.css")
//     .pipe(cleancss({ level: 2 }))
//     .pipe(gulp.dest("dist/styles"));
// });

// gulp.task("minify-css", () => {
//   return gulp
//     .src("src/styles/posts.css")
//     .pipe(cleancss({ level: 2 }))
//     .pipe(gulp.dest("dist/styles"));
// });

// gulp.task("minify-css", () => {
//   return gulp
//     .src("src/styles/chunks/fonts.css")
//     .pipe(cleancss({ level: 2 }))
//     .pipe(gulp.dest("dist/styles/chunks"));
// });

// gulp.task("minify-css", () => {
//   return gulp
//     .src("src/styles/chunks/footer.css")
//     .pipe(cleancss({ level: 2 }))
//     .pipe(gulp.dest("dist/styles/chunks"));
// });

// gulp.task("minify-css", () => {
//   return gulp
//     .src("src/styles/chunks/header.css")
//     .pipe(cleancss({ level: 2 }))
//     .pipe(gulp.dest("dist/styles/chunks"));
// });

// gulp.task("minify-css", () => {
//   return gulp
//     .src("src/styles/chunks/main.css")
//     .pipe(cleancss({ level: 2 }))
//     .pipe(gulp.dest("dist/styles/chunks"));
// });

// gulp.task("minify-css", () => {
//   return gulp
//     .src("src/styles/chunks/nav.css")
//     .pipe(cleancss({ level: 2 }))
//     .pipe(gulp.dest("dist/styles/chunks"));
// });

// gulp.task("minify-css", () => {
//   return gulp
//     .src("src/styles/chunks/post-nav.css")
//     .pipe(cleancss({ level: 2 }))
//     .pipe(gulp.dest("dist/styles/chunks"));
// });

gulp.task("minify-styles", () => {
  return gulp
    .src("src/styles/*.css")
    .pipe(cleancss({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/styles"));
});

gulp.task("minify-chunks", () => {
  return gulp
    .src("src/styles/chunks/*.css")
    .pipe(cleancss({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/styles/chunks"));
});

// Build

gulp.task("build", gulp.series(["minify-styles", "minify-chunks"]));
