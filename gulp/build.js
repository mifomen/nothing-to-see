var gulp = require('gulp');
var cfg = require('../package.json').config;
var run = require("run-sequence");
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
    "html",
    "css",
    // "sass",
    "minjs",
    // "images",
    // "symbols",
    evt
  );
});