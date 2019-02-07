// Gulp plugins
var gulp = require('gulp');
var rollup = require('gulp-better-rollup');
var minify = require('gulp-minify');
var sucrase = require('@sucrase/gulp-plugin');
var sass = require('gulp-sass');
var cssimport = require('gulp-cssimport');
var cssnano = require('gulp-cssnano');
var header = require('gulp-header');
var gzip = require('gulp-gzip');
var rename = require("gulp-rename");

// Rollup plugins
var resolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var replace = require('rollup-plugin-replace');
var json = require('rollup-plugin-json');
var builtins = require('rollup-plugin-node-builtins');
var rootImport = require('rollup-plugin-root-import');
var globals = require('rollup-plugin-node-globals');

// Package.json
var pkg = require('./package.json');


const plugins = {
  rollup:     rollup,
  minify:     minify,
  sucrase:    sucrase,
  sass:       sass,
  header:     header,
  gzip:       gzip,
  rename:     rename,

  resolve:    resolve,
  commonjs:   commonjs,
  replace:    replace,
  json:       json,
  builtins:   builtins,
  rootImport: rootImport,
  globals:    globals,
}



function getTask(task, src, dest, pkg) {
    return require('./gulp/' + task)(gulp, plugins, src, dest);
}


var PATHS = {
    css:      './indigo/css/',
    html:     './indigo/html/',
    react:    './indigo/react/',
    site:     './indigo/site/',
    sandbox:  './sandbox/'
};


/*******************************************************************************
Indigo CSS Library
*/

// Generate indigo.css *********************************************************


// SCSS => CSS with minification
gulp.task(
    'sass-compressed',
    getTask(
      'sass_compressed',
      `${PATHS.css}src/indigo.scss`,
      `${PATHS.css}dist`
    )
);


// SCSS => CSS without minification
gulp.task(
    'sass-plain',
    getTask(
      'sass_plain',
      `${PATHS.css}src/indigo.scss`,
      `${PATHS.css}dist`
    )
);


// Gzip .css file and add the .gz extension suffix to the compressed indigo.css
// file
gulp.task(
    'sass-gzip',
    getTask(
      'gzip',
      `${PATHS.css}dist/indigo.css`,
      `${PATHS.css}dist`
    )
);


// Append information from package.json to the top of the indigo.css file
gulp.task(
    'sass-header',
    getTask(
      'sass_header',
      `${PATHS.css}dist/indigo.css`,
      `${PATHS.css}dist`
    )
);


// Runs above tasks. Also in package.json as `npm run build:indigo.css`
gulp.task('indigo-sass', gulp.series(
  'sass-compressed',
  'sass-header',
  'sass-gzip'
));


gulp.task('watch-indigo-sass', function () {
  gulp.watch(`${PATHS.css}/**/*.scss`, gulp.parallel('indigo-sass'));
});



// System CSS ******************************************************************


gulp.task(
    'sass-compressed-system',
    getTask(
      'sass_compressed',
      `${PATHS.css}src/system.scss`,
      `${PATHS.css}dist/system`
    )
);



gulp.task(
    'sass-plain-system',
    getTask(
      'sass_plain',
      `${PATHS.css}src/system.scss`,
      `${PATHS.css}dist/system`
    )
);



gulp.task(
    'sass-gzip-system',
    getTask(
      'gzip',
      `${PATHS.css}dist/system/system.css`,
      `${PATHS.css}dist/system`
    )
);



gulp.task(
    'sass-header-system',
    getTask(
      'sass_header',
      `${PATHS.css}dist/system/system.css`,
      `${PATHS.css}dist/system`
    )
);


// Runs above tasks. Also in package.json as `npm run build:indigo-system-css`
gulp.task('indigo-system-css', gulp.series(
  'sass-compressed-system',
  'sass-header-system',
  'sass-gzip-system'
));



// Utilities CSS ***************************************************************


gulp.task(
    'sass-compressed-utils',
    getTask(
      'sass_compressed',
      `${PATHS.css}src/utilities.scss`,
      `${PATHS.css}dist/utilities`
    )
);



gulp.task(
    'sass-plain-utils',
    getTask(
      'sass_plain',
      `${PATHS.css}src/utilities.scss`,
      `${PATHS.css}dist/utilities`
    )
);



gulp.task(
    'sass-gzip-utils',
    getTask(
      'gzip',
      `${PATHS.css}dist/utilities/utilities.css`,
      `${PATHS.css}dist/utilities`
    )
);



gulp.task(
    'sass-header-utils',
    getTask(
      'sass_header',
      `${PATHS.css}dist/utilities/utilities.css`,
      `${PATHS.css}dist/utilities`
    )
);


// Runs above tasks. Also in package.json as
// `npm run build:indigo-utilities-css`
gulp.task('indigo-utilities-css', gulp.series(
  'sass-compressed-utils',
  'sass-header-utils',
  'sass-gzip-utils'
));


// Generate all CSS Packages ***************************************************


// Builds indigio.css, system.css and utilities.css. Also in package.json as
// `npm run build:indigo-all-css`
gulp.task('indigo-all', gulp.series(
  'indigo-sass',
  'indigo-utilities-css',
  'indigo-system-css'
));




/*******************************************************************************
Indigo React Library
*/


gulp.task(
    'indigo-react-transpile',
    getTask(
      'js_sucrase',
      `${PATHS.react}src/**/*.js`,
      `${PATHS.react}bin/`
    )
);



gulp.task(
    'indigo-react-minify',
    getTask(
      'js_minify',
      `${PATHS.react}dist/index.js`,
      `${PATHS.react}dist/`
    )
);



gulp.task(
    'indigo-react-bundle',
    getTask(
      'js_quick_bundle',
      `${PATHS.react}bin/index.js`,
      `${PATHS.react}dist/`
    )
);



gulp.task('indigo-react', gulp.series(
  'indigo-react-transpile',
  'indigo-react-bundle'
));



gulp.task('indigo-react-mini', gulp.series(
  'indigo-react-transpile',
  'indigo-react-bundle',
  'indigo-react-minify'
));



gulp.task('watch-indigo-react', function () {
  gulp.watch(`${PATHS.react}/**/*.js`, gulp.parallel('indigo-react'))
});



gulp.task('watch-indigo-react-mini', function () {
  gulp.watch(`${PATHS.react}/**/*.js`, gulp.parallel('indigo-react-mini'))
});


/*******************************************************************************
Build everything
*/


gulp.task('indigo-build-all', gulp.parallel(
  'indigo-react',
  'indigo-sass',
));


gulp.task('watch-indigo-all', function () {
  gulp.parallel(
    'watch-indigo-react',
    'watch-indigo-sass'
  );
});



/*******************************************************************************
Run the sandbox
*/

gulp.task(
    'sandbox-react-transpile',
    getTask(
      'js_sucrase',
      `${PATHS.sandbox}src/**/*.js`,
      `${PATHS.sandbox}dist`
    )
);


gulp.task(
    'sandbox-react-bundle',
    getTask(
      'js_quick_bundle',
      `${PATHS.sandbox}dist/js/index.js`,
      `${PATHS.sandbox}dist/js`
    )
);



gulp.task('sandbox-html-copy', function() {
  return gulp
    .src(`${PATHS.sandbox}src/index.html`)
    .pipe(gulp.dest(`${PATHS.sandbox}dist`));
})



gulp.task('sandbox-react', gulp.series(
  'sandbox-react-transpile',
  'sandbox-react-bundle'
));



gulp.task('copy-indigo-sass-to-sandbox', function() {
  return gulp
    .src(`${PATHS.css}dist/indigo.css`)
    .pipe(gulp.dest(`${PATHS.sandbox}src/css`));
})



gulp.task('copy-indigo-react-to-sandbox', function() {
  return gulp
    .src(`${PATHS.react}dist/index.js`)
    .pipe(gulp.dest(`${PATHS.sandbox}src/js/indigo`));
})



gulp.task('sandbox-sass', function() {
  return gulp
    .src(`${PATHS.sandbox}src/css/index.css`)
    .pipe(cssimport())
    .pipe(cssnano())
    .pipe(gulp.dest(`${PATHS.sandbox}dist/css`));
});



gulp.task('build-sandbox-react', gulp.series(
  // rebuild and copy indigo
  'indigo-react',
  'indigo-sass',
  'copy-indigo-react-to-sandbox',
  'copy-indigo-sass-to-sandbox',
  // build sandbox
  'sandbox-html-copy',
  'sandbox-react',
  'sandbox-sass',
));



gulp.task('watch-sandbox-react', function () {
  gulp.watch(`${PATHS.sandbox}src/js/**/*.js`, gulp.parallel('sandbox-react'))
});



gulp.task('watch-sandbox-sass', function () {
  gulp.watch(`${PATHS.sandbox}src/css/**/*.scss`, gulp.parallel('sandbox-sass'))
});



gulp.task('watch-sandbox',
  gulp.parallel(
    'watch-sandbox-react',
    'watch-sandbox-sass'
  )
);



gulp.task('watch-sandbox-dev',
  gulp.parallel(
    'watch-indigo-react',
    'watch-indigo-sass',
    'watch-sandbox-react',
    'watch-sandbox-sass'
  )
);
