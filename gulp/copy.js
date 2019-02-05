module.exports = function (gulp, plugins, src, dest) {
    return function () {
        var stream = gulp.src(src)
          .pipe(plugins.copy(dest))
          .pipe(gulp.dest(dest));
        return stream
    };
};
