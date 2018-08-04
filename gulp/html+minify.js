var gulp = require('gulp');
var htmlminify = require("gulp-html-minify");

gulp.task("html", function() {
  return gulp.src("src/**/*.html")

  .pipe(gulp.dest("./build"));
});

gulp.task("html-min", function() {
  return gulp.src("src/**/*.html")
  .pipe(htmlminify())
  .pipe(gulp.dest("./build"));
});