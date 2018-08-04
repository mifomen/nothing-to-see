var gulp = require('gulp');
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var plumber = require('gulp-plumber');

var del = require("del");
var run = require("run-sequence");

var eslint = require('gulp-eslint');

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