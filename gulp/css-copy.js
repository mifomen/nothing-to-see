var gulp = require('gulp');
// var run = require("run-sequence");
var cfg = require('../package.json').config;
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer"); 
var minify = require("gulp-csso"); 
var mqpacker = require("css-mqpacker"); 
var browserSync = require('browser-sync').create(); 
var csso = require('gulp-csso');
var plumber = require('gulp-plumber');

gulp.task('css', function() {
  // return gulp.src( cfg.css.css-copy + '/nothing-to-see.css')
    return gulp.src('src/css/**/nothing-to-see.css')
  .pipe(plumber())
  // .pipe(sass())
  .pipe(postcss([ 
    autoprefixer({ browsers: [
  'last 10 versions', 
  'ie 11',
  'ie 10',
  'Android >= 4.1', 
  'Safari >= 8',
  'iOS >= 8'
  ] }),     
  mqpacker({ sort: true })
]))
  .pipe(csso())
  // .pipe(rename('style.min.css-copy'))
  .pipe(gulp.dest(cfg.build.css))
  .pipe(browserSync.stream());
});

// gulp.task("copy", function() {
//   return gulp.src([

//     "src/css/**/*.css"
//     // "src/fonts/**/*.{woff,woff2}",
//     // "src/img/**"
//     // "src/js/**",
//     // "src/*.html"
//   ], {
//     base: "src/"
//   })
//   .pipe(gulp.dest("build"));
// });


