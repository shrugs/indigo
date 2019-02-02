// Gulp plugins
var gulp = require('gulp');
var rollup = require('gulp-better-rollup');
var minify = require('gulp-minify');
var sucrase = require('@sucrase/gulp-plugin');
var sass = require('gulp-sass');
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
    css:      './src/css/',
    html:     './src/html/',
    react:    './src/react/',
    site:     './src/site/',
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
      `${PATHS.css}/src/indigo.scss`,
      `${PATHS.css}/dist`
    )
);


// SCSS => CSS without minification
gulp.task(
    'sass-plain',
    getTask(
      'sass_plain',
      `${PATHS.css}/src/indigo.scss`,
      `${PATHS.css}/dist`
    )
);


// Gzip .css file and add the .gz extension suffix to the compressed indigo.css
// file
gulp.task(
    'sass-gzip',
    getTask(
      'gzip',
      `${PATHS.css}/dist/indigo.css`,
      `${PATHS.css}/dist`
    )
);


// Append information from package.json to the top of the indigo.css file
gulp.task(
    'sass-header',
    getTask(
      'sass_header',
      `${PATHS.css}/dist/indigo.css`,
      `${PATHS.css}/dist`
    )
);


// Runs above tasks. Also in package.json as `npm run build:indigo.css`
gulp.task('indigo-css', gulp.series(
  'sass-compressed',
  'sass-header',
  'sass-gzip'
));



// System CSS ******************************************************************


gulp.task(
    'sass-compressed-system',
    getTask(
      'sass_compressed',
      `${PATHS.css}/src/system.scss`,
      `${PATHS.css}/dist/system`
    )
);



gulp.task(
    'sass-plain-system',
    getTask(
      'sass_plain',
      `${PATHS.css}/src/system.scss`,
      `${PATHS.css}/dist/system`
    )
);



gulp.task(
    'sass-gzip-system',
    getTask(
      'gzip',
      `${PATHS.css}/dist/system/system.css`,
      `${PATHS.css}/dist/system`
    )
);



gulp.task(
    'sass-header-system',
    getTask(
      'sass_header',
      `${PATHS.css}/dist/system/system.css`,
      `${PATHS.css}/dist/system`
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
      `${PATHS.css}/src/utilities.scss`,
      `${PATHS.css}/dist/utilities`
    )
);



gulp.task(
    'sass-plain-utils',
    getTask(
      'sass_plain',
      `${PATHS.css}/src/utilities.scss`,
      `${PATHS.css}/dist/utilities`
    )
);



gulp.task(
    'sass-gzip-utils',
    getTask(
      'gzip',
      `${PATHS.css}/dist/utilities/utilities.css`,
      `${PATHS.css}/dist/utilities`
    )
);



gulp.task(
    'sass-header-utils',
    getTask(
      'sass_header',
      `${PATHS.css}/dist/utilities/utilities.css`,
      `${PATHS.css}/dist/utilities`
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
  'indigo-css',
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
      `${PATHS.react}/src/**/*.js`,
      `${PATHS.react}/dist/`
    )
);



gulp.task(
    'indigo-react-minify',
    getTask(
      'js_minify',
      `${PATHS.react}/dist/index.js`,
      `${PATHS.react}/dist/`
    )
);



gulp.task(
    'indigo-react-bundle',
    getTask(
      'js_quick_bundle',
      `${PATHS.react}/dist/index.js`,
      `${PATHS.react}/dist/`
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



// gulp.task('default', gulp.series())


//
// gulp.task('watch', function () {
//   gulp.watch('./sass/**/*.scss', gulp.parallel('default'));
// });
