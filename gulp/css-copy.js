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

