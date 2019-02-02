var pkg = require('../package.json');

var banner = `
  /*******************************************************************************
  * ${pkg.name} - ${pkg.description}
  * Author: ${pkg.author}
  * Version: ${pkg.version}
  * Homepage: ${pkg.homepage}
  * Github: ${pkg.repository.url}
  * Bugs: ${pkg.bugs.url}
  * License: ${pkg.license}
  *******************************************************************************/
`

module.exports = function (gulp, plugins, src, dest) {
    return function () {
        var stream = gulp.src(src)
          .pipe(plugins.header(banner))
          .pipe(gulp.dest(dest))
        return stream
    };
};
