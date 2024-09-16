"use strict";
//npm install npm install gulp npm start

//npm install  gulp-cli --save-dev
// npm install  gulp --save-dev
// npm i browser-sync --save-dev
//npm remove minify-js --save-dev
var gulp = require("gulp");
var bs = require("browser-sync").create(); // livereload
var plumber = require("gulp-plumber"); // dont stop with mistake
var csso = require("gulp-csso"); //min css
var uglify = require("gulp-uglify"); //min js
var rm = require("gulp-rm"); // clear build folder
var autoprefixer = require("gulp-autoprefixer"); // autoprefixer
var postcss = require("gulp-postcss"); // post css
var mqpacker = require("css-mqpacker"); // sotr css, media query

var html2pug = require("gulp-html2pug");
var imagemin = require("gulp-imagemin");
var minify = require("gulp-minify");
var notify = require("gulp-notify");

var postcss = require("gulp-postcss");
var pug = require("gulp-pug");
var rename = require("gulp-rename");
var replace = require("gulp-replace");
// var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var svgSprite = require("gulp-svg-sprite");
var stripCssComments = require("gulp-strip-css-comments");
var svgmin = require("gulp-svgmin");
var uglify = require("gulp-uglify");
var uncss = require("gulp-uncss");
var babel = require("gulp-babel");

gulp.task("pug", function () {
  return gulp
    .src("src/index.pug")
    .pipe(plumber())
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(rename("index.html"))
    .pipe(gulp.dest("build/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});
gulp.task("scss", function () {
  return (
    gulp
      .src("src/**/nothing-to-see.css")
      .pipe(sourcemaps.init())
      .pipe(plumber())
      // .pipe(sass())
      // .on("error", sass.logError)
      .pipe(sourcemaps.write({ includeContente: false, sourceRoot: "." })) // delete ?
      .pipe(sourcemaps.init({ loadMaps: true })) // delete ?
      .pipe(postcss([mqpacker({ sort: true })]))
      // .pipe(uncss({
      //   html: ['./build/index.html']
      // }))
      // .pipe(autoprefixer({
      //   browsers: ['last 10 versions', "IE 11", "IE 10"],
      //   cascade: true
      // }))
      // .on("error", notify.onError({
      //   title: "Error in scss"
      // }))
      .pipe(stripCssComments())
      // .pipe(csso())
      .pipe(rename("nothing-to-see.css"))
      // .pipe(sourcemaps.write('.')) // delete ',' ? ok ?
      .pipe(gulp.dest("./build"))
      .pipe(
        bs.reload({
          stream: true,
        })
      )
  );
});
gulp.task("scss-final", function () {
  return (
    gulp
      .src("src/**/nothing-to-see.css")
      .pipe(sourcemaps.init())
      .pipe(plumber())
      // .pipe(sass())
      // .on("error", sass.logError)
      // .pipe(sourcemaps.write({includeContente: false, sourceRoot: '.'}))// delete ?
      // .pipe(sourcemaps.init({loadMaps: true})) // delete ?
      .pipe(postcss([mqpacker({ sort: true })]))
      // .pipe(uncss({
      //   html: ['./build/index.html']
      // }))
      .pipe(
        autoprefixer({
          cascade: true,
        })
      )
      .on(
        "error",
        notify.onError({
          title: "Error in scss",
        })
      )
      .pipe(stripCssComments())
      .pipe(csso())
      .pipe(rename("nothing-to-see.css"))
      // .pipe(sourcemaps.write('.')) // delete ',' ? ok ?
      .pipe(gulp.dest("./build"))
      .pipe(
        bs.reload({
          stream: true,
        })
      )
  );
});

exports.img = () =>
  gulp.src("src/img/*").pipe(imagemin()).pipe(gulp.dest("build/img"));

// gulp.task('img', function() {
//  // Backend locales
//    return gulp.src('src/img/*')
//        .pipe(imagemin())
//        .pipe(gulp.dest('build/img'))
// });

// gulp.task('img', function() {
//   return gulp.src('src/img/*')
//     .pipe(imagemin([
//     .pipe(imagemin())
//     .pipe(gulp.dest('build/img'))
//         imagemin.gifsicle({interlaced: true}),
//         imagemin.mozjpeg({quality: 75, progressive: true}),
//         imagemin.optipng({optimizationLevel: 5}),
//         imagemin.svgo({
//     plugins: [
//     {removeViewBox: true},
//     {cleanupIDs: false}
//     ]
//     })
//   ]))
// .pipe(gulp.dest('build/img'))
// })

gulp.task("html2pug", function () {
  // Backend locales
  return gulp
    .src("src/**/metrika.html")
    .pipe(
      html2pug(
        { fragment: false }
        // /* options for html2pug such as { fragment: true } */
      )
    )
    .pipe(rename("metrika.pug"))
    .pipe(gulp.dest("./src/pug/pages"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

gulp.task("html", function () {
  // Backend locales
  return (
    gulp
      .src("src/**/index.html")
      // .pipe(html2pug(
      //  { fragment: false }
      //  // /* options for html2pug such as { fragment: true } */
      //  ))
      // .pipe(rename('metrika.pug'))
      .pipe(gulp.dest("./build"))
      .pipe(
        bs.reload({
          stream: true,
        })
      )
  );
});

gulp.task("script", function () {
  return (
    gulp
      .src("src/nothing-to-see.js")
      .pipe(plumber())
      // .pipe(uglify())
      .pipe(babel())
      .pipe(rename("nothing-to-see.js"))

      .pipe(gulp.dest("./build"))
      .pipe(
        bs.reload({
          stream: true,
        })
      )
  );
});
// gulp.task('scripts:lib', function() {
//   return gulp.src([
//     'node_modules/jquery/dist/jquery.min.js',
//     'node_modules/slick-carousel/slick/slick.min.js'
//     ])
//   .pipe(concat('libs.min.js'))
//   .pipe(gulp.dest('build/js'))
//   .pipe(bs.reload({
//     stream: true
//   }))
// })
//

gulp.task("svg", () => {
  return gulp
    .src("./src/img/**/*.svg")
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(
      cheerio({
        run: function ($) {
          $(["fill"]).removeAttr("fill");
          $(["stroke"]).removeAttr("stroke");
          $(["style"]).removeAttr("style");
        },
        parserOptions: { xmlMode: true },
      })
    )
    .pipe(replace("&gt;", ">"))
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: "sprite.svg",
          },
        },
      })
    )
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("./build/img/"));
});

gulp.task("script-min", function () {
  return (
    gulp
      .src("src/nothing-to-see.js")
      .pipe(plumber())
      // .pipe(minify())
      .pipe(babel())
      .pipe(uglify())
      .pipe(rename("nothing-to-see.js"))
      .pipe(gulp.dest("./build"))
      .pipe(
        bs.reload({
          stream: true,
        })
      )
  );
});
gulp.task("serve", function () {
  bs.init({
    server: {
      baseDir: "build",
    },
    notify: false,
    open: true,
    ui: false,
  }),
    gulp.watch("src/**/*.{css,scss}", gulp.parallel("scss"));
  gulp.watch("src/**/*.pug", gulp.parallel("pug"));
  gulp.watch("src/**/*.html", gulp.parallel("pug"));
  gulp.watch("src/**/*.js", gulp.parallel("script"));
  // gulp.watch("src/pug/html2pug/*.html",  gulp.series('html2pug','pug'));
  gulp.watch("src/**/*.{png,jpg,svg}", gulp.parallel("img"));
  // gulp.watch("src/pug/html2pug/*.html",  gulp.series('html2pug','pug'));
  // gulp.watch("src/pug/*.html",  gulp.parallel('html'));
});
gulp.task("serve-final", function () {
  bs.init({
    server: {
      baseDir: "build",
    },
    notify: false,
    open: true,
    ui: false,
  }),
    gulp.watch("src/**/*.{css,scss}", gulp.parallel("scss-final"));
  gulp.watch("src/**/*.pug", gulp.parallel("pug"));
  gulp.watch("src/**/*.html", gulp.parallel("pug"));
  gulp.watch("src/**/*.js", gulp.parallel("script-min"));
  gulp.watch("src/**/*.{png,jpg,svg}", gulp.parallel("img"));
});

gulp.task("copy-fonts", function () {
  return gulp
    .src(
      [
        "src/fonts/**/*.{woff,woff2,tiff}",
        "src/img/**",
        "src/css/*.css",
        // "src/js/**",
        // "src/*.html"
      ],
      {
        base: "src/",
      }
    )
    .pipe(gulp.dest("build"));
});

gulp.task("watch", function () {
  gulp.watch("src/scss/**/*.scss", gulp.parallel("scss"));
  gulp.watch("src/**/*.pug", gulp.parallel("pug"));
  gulp.watch("src/js/**/*.js", gulp.parallel("script"));
  gulp.watch("src/**/*.html", gulp.series("html2pug", "pug"));
});

gulp.task("clear", function () {
  return gulp.src("build/**/*", { read: false }).pipe(
    rm({
      async: true,
    })
  );
});

gulp.task("copy-css", function () {
  return gulp.src("src/css/*.css").pipe(gulp.dest("build/css"));
});

gulp.task(
  "build",
  gulp.series(
    "clear",
    "copy-fonts",
    // 'copy-css',
    // 'copy-css-54',
    // 'html2pug',
    "pug",
    // 'html',
    // 'img',
    // 'svg',
    "scss",
    // 'scripts:lib',
    "script"
    // $.gulp.parallel('html','img', 'scss'),
    // $.gulp.parallel('scripts:lib','script')
    // 'serve',
    // 'watch'
  )
);
gulp.task(
  "build-final",
  gulp.series(
    "clear",
    "copy-fonts",
    // 'copy-css-54',
    // 'html2pug',
    "pug",
    // 'html',
    // 'img',
    // 'svg',
    "scss-final",
    // 'scripts:lib',
    "script-min"
    // $.gulp.parallel('html','img', 'scss'),
    // $.gulp.parallel('scripts:lib','script')
    // 'serve',
    // 'watch'
  )
);
gulp.task("default", gulp.series("build", "serve"));
