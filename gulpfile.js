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
var cssfont64 = require('gulp-cssfont64');
var shell = require('gulp-shell');
var server = require('gulp-server-livereload');

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
  cssfont64:  cssfont64,
  shell:      shell,
  server:    server,

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
  css:          './indigo/css/',
  html:         './indigo/html/',
  react:        './indigo/react/',
  site:         './indigo/site/',
  sandbox:      './sandbox/'
};



// var SOURCES = {
//   css:          `${PATHS.css}src/indigo.scss`,
//   react:        `${PATHS.css}src/**/*.js`,
//   react_bin:    `${PATHS.react}bin/**/*.js`,
//   sandbox_scss: `${PATHS.sandbox}src/css/**/*.scss`,
//   sandbox_js:   `${PATHS.sandbox}src/js/**/*.js`,
// }
//
//
//
// var DEST = {
//   css:          `${PATHS.css}dist/`,
//   react:        `${PATHS.react}dist/`,
//   react_bin:    `${PATHS.react}bin/`,
//   sandbox_scss: `${PATHS.sandbox}dist/css/`,
//   sandbox_js:   `${PATHS.sandbox}dist/js/`,
// }



/*******************************************************************************
Indigo CSS Library
*/

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


// gulp.task(
//   'sass-base64-fonts',
//   getTask(
//     'cssfont64',
//     `${PATHS.css}src/fonts/*.*`
//   )
// )


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

//
// gulp.task(
//     'sass-compressed-system',
//     getTask(
//       'sass_compressed',
//       `${PATHS.css}src/system.scss`,
//       `${PATHS.css}dist/system`
//     )
// );
//
//
//
// gulp.task(
//     'sass-plain-system',
//     getTask(
//       'sass_plain',
//       `${PATHS.css}src/system.scss`,
//       `${PATHS.css}dist/system`
//     )
// );
//
//
//
// gulp.task(
//     'sass-gzip-system',
//     getTask(
//       'gzip',
//       `${PATHS.css}dist/system/system.css`,
//       `${PATHS.css}dist/system`
//     )
// );
//
//
//
// gulp.task(
//     'sass-header-system',
//     getTask(
//       'sass_header',
//       `${PATHS.css}dist/system/system.css`,
//       `${PATHS.css}dist/system`
//     )
// );
//
//
// // Runs above tasks. Also in package.json as `npm run build:indigo-system-css`
// gulp.task('indigo-system-sass', gulp.series(
//   'sass-compressed-system',
//   'sass-header-system',
//   'sass-gzip-system'
// ));
//
//
//
// // Utilities CSS ***************************************************************
//
//
// gulp.task(
//     'sass-compressed-utils',
//     getTask(
//       'sass_compressed',
//       `${PATHS.css}src/utilities.scss`,
//       `${PATHS.css}dist/utilities`
//     )
// );
//
//
//
// gulp.task(
//     'sass-plain-utils',
//     getTask(
//       'sass_plain',
//       `${PATHS.css}src/utilities.scss`,
//       `${PATHS.css}dist/utilities`
//     )
// );
//
//
//
// gulp.task(
//     'sass-gzip-utils',
//     getTask(
//       'gzip',
//       `${PATHS.css}dist/utilities/utilities.css`,
//       `${PATHS.css}dist/utilities`
//     )
// );
//
//
//
// gulp.task(
//     'sass-header-utils',
//     getTask(
//       'sass_header',
//       `${PATHS.css}dist/utilities/utilities.css`,
//       `${PATHS.css}dist/utilities`
//     )
// );
//
//
// // Runs above tasks. Also in package.json as
// // `npm run build:indigo-utilities-sass`
// gulp.task('indigo-utilities-sass', gulp.series(
//   'sass-compressed-utils',
//   'sass-header-utils',
//   'sass-gzip-utils'
// ));
//
//
// // Generate all CSS Packages ***************************************************
//
//
// // Builds indigio.css, system.css and utilities.css. Also in package.json as
// // `npm run build:indigo-all-sass`
// gulp.task('indigo-all', gulp.series(
//   'indigo-sass',
//   'indigo-utilities-sass',
//   'indigo-system-sass'
// ));




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



// gulp.task(
//     'indigo-react-minify',
//     getTask(
//       'js_minify',
//       `${PATHS.react}dist/index.js`,
//       `${PATHS.react}dist/`
//     )
// );



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



// gulp.task('indigo-react-mini', gulp.series(
//   'indigo-react-transpile',
//   'indigo-react-bundle',
//   'indigo-react-minify'
// ));



gulp.task('watch-indigo-react', function () {
  gulp.watch(`${PATHS.react}/**/*.js`, gulp.parallel('indigo-react'))
});



// gulp.task('watch-indigo-react-mini', function () {
//   gulp.watch(`${PATHS.react}/**/*.js`, gulp.parallel('indigo-react-mini'))
// });


/*******************************************************************************
Build everything
*/


// gulp.task('indigo-build-all', gulp.parallel(
//   'indigo-react',
//   'indigo-sass',
// ));


// gulp.task('watch-indigo-all', function () {
//   gulp.parallel(
//     'watch-indigo-react',
//     'watch-indigo-sass'
//   );
// });



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

gulp.task(
  'copy-sandbox-html',
  getTask(
    'js_quick_bundle',
    `${PATHS.sandbox}src/index.html`,
    `${PATHS.sandbox}dist`
))

gulp.task(
  'copy-sandbox-assets',
  getTask(
    'js_quick_bundle',
    `${PATHS.sandbox}src/assets/**/*`,
    `${PATHS.sandbox}dist/assets`
))

gulp.task(
  'copy-indigo-css-to-sandbox',
  getTask(
    'js_quick_bundle',
    `${PATHS.css}dist/indigo.css`,
    `${PATHS.sandbox}src/css`
))

gulp.task(
  'copy-indigo-react-to-sandbox',
  getTask(
    'js_quick_bundle',
    `${PATHS.react}dist/index.js`,
    `${PATHS.sandbox}src/js/indigo`
))

gulp.task('sandbox-react', gulp.series(
  'sandbox-react-transpile',
  'sandbox-react-bundle'
));

gulp.task('sandbox-css', function() {
  return gulp
    .src(`${PATHS.sandbox}src/css/index.css`)
    .pipe(cssimport())
    .pipe(cssnano())
    .pipe(gulp.dest(`${PATHS.sandbox}dist/css`));
});



gulp.task('watch-sandbox-react', function () {
  gulp.watch(`${PATHS.sandbox}src/js/**/*.js`,
    gulp.series('sandbox-react'))
});



gulp.task('watch-sandbox-sass', function () {
  gulp.watch(`${PATHS.sandbox}src/css/**/*.scss`,
    gulp.series('sandbox-sass'))
});


// gulp.task('open-sandbox-html', shell.task('open ./sandbox/dist/index.html'))
gulp.task('webserver', function() {
  gulp.src('./sandbox/dist/')
    .pipe(server({
      livereload: true,
      open: true,
      port: 3000,
      defaultFile: 'index.html'
    }));
});


gulp.task('sandbox',
  gulp.series(
    gulp.series(
      'sandbox-react',
      'sandbox-css',

      'indigo-react',
      'indigo-sass',

      'copy-indigo-react-to-sandbox',
      'copy-indigo-css-to-sandbox',
  ),
    gulp.parallel(
      'watch-indigo-react',
      'watch-indigo-sass',
      'watch-sandbox-react',

      'webserver'
    )
  )
)
