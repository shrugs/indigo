// Gulp plugins
var gulp = require("gulp");
var rollup = require("gulp-better-rollup");
var minify = require("gulp-minify");
var sucrase = require("@sucrase/gulp-plugin");
var sass = require("gulp-sass");
var cssimport = require("gulp-cssimport");
var cssnano = require("gulp-cssnano");
var header = require("gulp-header");
var gzip = require("gulp-gzip");
var rename = require("gulp-rename");
var server = require("gulp-server-livereload");
// var base64 = require("gulp-base64");

// Rollup plugins
var resolve = require("rollup-plugin-node-resolve");
var commonjs = require("rollup-plugin-commonjs");
var replace = require("rollup-plugin-replace");
var json = require("rollup-plugin-json");
var builtins = require("rollup-plugin-node-builtins");
var rootImport = require("rollup-plugin-root-import");
var globals = require("rollup-plugin-node-globals");

// Package.json
var pkg = require("./package.json");

const plugins = {
  // gulp
  minify: minify,
  sucrase: sucrase,
  sass: sass,
  header: header,
  gzip: gzip,
  rename: rename,
  server: server,
  // base64: base64,
  // rollup
  rollup: rollup,
  resolve: resolve,
  commonjs: commonjs,
  replace: replace,
  json: json,
  builtins: builtins,
  rootImport: rootImport,
  globals: globals
};

function getTask(task, src, dest, pkg) {
  return require("./gulp/" + task)(gulp, plugins, src, dest);
}

var PATHS = {
  css: "./indigo/css/",
  html: "./indigo/html/",
  react: "./indigo/react/",
  site: "./site/",
  sandbox: "./sandbox/"
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Build indigo-css

// SCSS => CSS with minification
gulp.task(
  "sass-compressed",
  getTask("sass_compressed", `${PATHS.css}src/indigo.scss`, `${PATHS.css}dist`)
);

// SCSS => CSS without minification
gulp.task(
  "sass-plain",
  getTask("sass_plain", `${PATHS.css}src/indigo.scss`, `${PATHS.css}dist`)
);

// Gzip .css file and add the .gz extension suffix to the compressed indigo.css
// file
gulp.task(
  "sass-gzip",
  getTask("gzip", `${PATHS.css}dist/indigo.css`, `${PATHS.css}dist`)
);

// Append information from package.json to the top of the indigo.css file
gulp.task(
  "sass-header",
  getTask("sass_header", `${PATHS.css}dist/indigo.css`, `${PATHS.css}dist`)
);

// inserts base64 encoded font strings into the url() filed of @font-face, emits a .scss file
// gulp.task(
//   "sass-base64-fonts",
//   getTask(
//     "base64font",
//     `${PATHS.css}src/fonts/source/**/*.scss`,
//     `${PATHS.css}src/fonts/base64`
//   )
// );

gulp.task("sass", gulp.series("sass-compressed", "sass-header", "sass-gzip"));

gulp.task("watch-sass", function() {
  gulp.watch(`${PATHS.css}src/**/*.scss`, gulp.series("sass"));
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Build indigo-react

gulp.task(
  "react-transpile",
  getTask("js_sucrase", `${PATHS.react}src/**/*.js`, `${PATHS.react}bin/`)
);

gulp.task(
  "react-bundle",
  getTask(
    "js_quick_bundle",
    `${PATHS.react}bin/index.js`,
    `${PATHS.react}dist/`
  )
);

gulp.task("react", gulp.series("react-transpile", "react-bundle"));

gulp.task("watch-react", function() {
  gulp.watch(`${PATHS.react}/**/*.js`, gulp.series("react"));
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Run/build indigo spec site

gulp.task(
  "site-transpile",
  getTask("js_sucrase", `${PATHS.site}src/**/*.js`, `${PATHS.site}dist`)
);

gulp.task(
  "site-bundle",
  getTask(
    "js_quick_bundle",
    `${PATHS.site}dist/js/index.js`,
    `${PATHS.site}dist/js`
  )
);

gulp.task(
  "copy-site-html",
  getTask("copy", `${PATHS.site}src/index.html`, `${PATHS.site}dist`)
);

gulp.task(
  "copy-site-assets",
  getTask("copy", `${PATHS.site}src/assets/**/*.*`, `${PATHS.site}dist/assets`)
);

gulp.task(
  "copy-external-css-to-site",
  getTask("copy", `${PATHS.css}dist/indigo.css`, `${PATHS.site}src/css`)
);

gulp.task(
  "copy-external-react-to-site",
  getTask("copy", `${PATHS.react}dist/index.js`, `${PATHS.site}src/js/indigo`)
);

gulp.task("site-react", gulp.series("site-transpile", "site-bundle"));

// TODO: Change to SASS
gulp.task("site-css", function() {
  return gulp
    .src(`${PATHS.site}src/css/index.css`)
    .pipe(cssimport())
    .pipe(cssnano())
    .pipe(gulp.dest(`${PATHS.site}dist/css`));
});

gulp.task("watch-site-react", function() {
  gulp.watch(`${PATHS.site}src/js/**/*.js`, gulp.series("site-react"));
});

// TODO: Change to SASS
gulp.task("watch-site-css", function() {
  gulp.watch(`${PATHS.site}src/css/**/*.css`, gulp.series("site-css"));
});

gulp.task("watch-site-assets", function() {
  gulp.watch(`${PATHS.site}src/assets/**/*.*`, gulp.series("copy-site-assets"));
});

gulp.task("site-webserver", function() {
  gulp.src(`${PATHS.site}dist`).pipe(
    server({
      livereload: true,
      open: true,
      port: 3001,
      defaultFile: "index.html"
    })
  );
});

gulp.task(
  "site",
  gulp.series(
    gulp.series("site-react", "site-css", "copy-site-assets", "copy-site-html"),
    gulp.parallel(
      "watch-site-react",
      "watch-site-css",
      "watch-site-assets",
      "site-webserver"
    )
  )
);

gulp.task(
  "site-pull-indigo",
  gulp.series(
    "react",
    "sass",
    "copy-external-react-to-site",
    "copy-external-css-to-site"
  )
);

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Run/build indigo sandbox

gulp.task(
  "sandbox-transpile",
  getTask("js_sucrase", `${PATHS.sandbox}src/**/*.js`, `${PATHS.sandbox}dist`)
);

gulp.task(
  "sandbox-bundle",
  getTask(
    "js_quick_bundle",
    `${PATHS.sandbox}dist/js/index.js`,
    `${PATHS.sandbox}dist/js`
  )
);

gulp.task(
  "copy-sandbox-html",
  getTask("copy", `${PATHS.sandbox}src/index.html`, `${PATHS.sandbox}dist`)
);

gulp.task(
  "copy-sandbox-assets",
  getTask(
    "copy",
    `${PATHS.sandbox}src/assets/**/*.*`,
    `${PATHS.sandbox}dist/assets`
  )
);

gulp.task(
  "copy-external-css-to-sandbox",
  getTask("copy", `${PATHS.css}dist/indigo.css`, `${PATHS.sandbox}src/css`)
);

gulp.task(
  "copy-external-react-to-sandbox",
  getTask(
    "copy",
    `${PATHS.react}dist/index.js`,
    `${PATHS.sandbox}src/js/indigo`
  )
);

gulp.task("sandbox-react", gulp.series("sandbox-transpile", "sandbox-bundle"));

// TODO: Change to SASS
gulp.task("sandbox-css", function() {
  return gulp
    .src(`${PATHS.sandbox}src/css/index.css`)
    .pipe(cssimport())
    .pipe(cssnano())
    .pipe(gulp.dest(`${PATHS.sandbox}dist/css`));
});

gulp.task("watch-sandbox-react", function() {
  gulp.watch(`${PATHS.sandbox}src/js/**/*.js`, gulp.series("sandbox-react"));
});

// TODO: Change to SASS
gulp.task("watch-sandbox-css", function() {
  gulp.watch(`${PATHS.sandbox}src/css/**/*.css`, gulp.series("sandbox-css"));
});

gulp.task("watch-sandbox-assets", function() {
  gulp.watch(
    `${PATHS.sandbox}src/assets/**/*.*`,
    gulp.series("copy-sandbox-assets")
  );
});

gulp.task("sandbox-webserver", function() {
  gulp.src(`${PATHS.sandbox}dist`).pipe(
    server({
      livereload: true,
      open: true,
      port: 3002,
      defaultFile: "index.html"
    })
  );
});

gulp.task(
  "sandbox-pull-indigo",
  gulp.series(
    "react",
    "sass",
    "copy-external-react-to-sandbox",
    "copy-external-css-to-sandbox"
  )
);

gulp.task("watch-external-sass", function() {
  gulp.watch(
    `${PATHS.css}src/**/*.scss`,
    gulp.series("sass", "copy-external-css-to-sandbox")
  );
});

// gulp.task("watch-external-react", function() {
//   gulp.watch(`${PATHS.react}src/**/*.scss`, gulp.series("react", "copy-external-react-to-sandbox"));
// });

gulp.task(
  "sandbox",
  gulp.series(
    gulp.series(
      "sandbox-pull-indigo",
      "sandbox-react",
      "sandbox-css",
      "copy-sandbox-assets",
      "copy-sandbox-html"
    ),
    gulp.parallel(
      "watch-sandbox-react",
      "watch-sandbox-css",
      "watch-sandbox-assets",
      "watch-external-sass",
      // "watch-external-react",
      "sandbox-webserver"
    )
  )
);
