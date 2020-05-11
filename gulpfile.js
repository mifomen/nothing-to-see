var gulp=require('gulp');
var browserSync = require('browser-sync').create(); 
var run = require("run-sequence");
var clean = require('gulp-clean');
// var cfg = require('../package.json').config;
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer"); 
var minify = require("gulp-csso"); 
var mqpacker = require("css-mqpacker"); 
var browserSync = require('browser-sync').create(); 
var csso = require('gulp-csso');
var plumber = require('gulp-plumber');
var htmlminify = require("gulp-html-minify");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var del = require("del");
var eslint = require('gulp-eslint');

gulp.task('full-clean', function () {
  return gulp.src('build', {read: false})
  .pipe(clean());
});






gulp.task('css-min', function() {

  return gulp.src('src/**/nothing-to-see.css')
  .pipe(plumber())

  .pipe(postcss([ 
    autoprefixer({ browsers: [
      'last 10 versions', 
      'ie 11',
      'ie 10',
      'ie 9',
      'Android >= 4.1', 
      'Safari >= 8',
      'iOS >= 8'
      ] }),     
    mqpacker({ sort: true })
    ]))
  .pipe(csso())

  .pipe(gulp.dest("./build"))
  .pipe(browserSync.stream());
});

gulp.task('css', function() {

  return gulp.src('src/**/nothing-to-see.css')
  .pipe(plumber())

  .pipe(postcss([ 
    autoprefixer({ browsers: [
      'last 15 versions', 
      'ie 11',
      'ie 10',
      'ie 9',
      'Android >= 4.1', 
      'Safari >= 8',
      'iOS >= 8'
      ] }),     
    mqpacker({ sort: true })
    ]))
  .pipe(gulp.dest("./build"))
  .pipe(browserSync.stream());
});




gulp.task("html", function() {
  return gulp.src("src/**/*.html")

  .pipe(gulp.dest("./build"));
});

gulp.task("html-min", function() {
  return gulp.src("src/**/*.html")
  .pipe(htmlminify())
  .pipe(gulp.dest("./build"));
});



gulp.task('clear-js', function() {
 return del(['build/js/**'])
});

gulp.task("copy-js", function() {
  return gulp.src([
    "src/**/*.js",
    ], {
      base: "src/"
    })
  .pipe(gulp.dest("./build"));
});


gulp.task("minjs", function() {
  gulp.src("src/**/nothing-to-see.js")
  .pipe(plumber())
  .pipe(uglify())
    // .pipe(rename('min.js'))
    .pipe(gulp.dest("./build"));
  });

gulp.task("retype-js", function(evt) {
  run(
    "clear-js",
    "copy-js",

    // "minjs",
    evt
    );
});

gulp.task("eslint", function(evt) {
  gulp.src(['src/**/*.js','!node_modules/**'])
  .pipe(eslint({
    rules: {
      'my-custom-rule': 1,
      'strict': 2
    },
    globals: [
    'jQuery',
    '$'
    ],
    envs: [
    'browser'
    ]
  }))
  .pipe(eslint.formatEach('compact', process.stderr));
});

gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['src/**/*.js','!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
      });

gulp.task('default', ['lint'], function () {
    // This will only run if the lint task is successful...
    gulp.src(['src/**/*.js','!node_modules/**'])
    .pipe(eslint({
      rules: {
        'my-custom-rule': 1,
        'strict': 2
      },
      globals: [
      'jQuery',
      '$'
      ],
      envs: [
      'browser'
      ]
    }))
    .pipe(eslint.formatEach('compact', process.stderr));
  });


var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('build/**/*')
  .pipe(ghPages());
});





gulp.task("copy", function() {
  return gulp.src([
    "src/fonts/**/*.{woff,woff2}",
    "src/img/**"
    // "src/js/**",
    // "src/*.html"
    ], {
      base: "src/"
    })
  .pipe(gulp.dest("build"));
});

gulp.task("serve", function() {
  browserSync.init({
    server: "build",
    notify: false,
    open: true,
    ui: false
  });


  gulp.watch("src/**/*.js", ["retype-js"]).on("change", browserSync.reload);
  gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload);
  gulp.watch("src/**/*.css", ["css"]).on('change', browserSync.reload);
});





// var less = require('gulp-less');

gulp.task("build", function(evt) {
  run(
    "full-clean",
    // "copy",
    // "retype-images",
    // "retype-fonts",
    "html",
    "css",
    // "sass",
    "retype-js",
    // "images",
    // "symbols",
    evt
    );
});

gulp.task("publish", function(evt) {
  run(
    "full-clean",
    // "copy",
    // "retype-images",
    // "retype-fonts",
    "html-min",
    "css-min",
    // "sass",
    "minjs",
    // "images",
    // "symbols",
    evt
    );
});