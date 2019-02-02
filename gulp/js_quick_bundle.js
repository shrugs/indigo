module.exports = function (gulp, plugins, src, dest) {
    return function () {
        var stream = gulp.src(src)
            .pipe(plugins.rollup({
              plugins: [
                plugins.commonjs({
                  namedExports: {
                    'node_modules/react/index.js': [ 'Component' ]
                  }
                }),
                plugins.replace({
                  'process.env.NODE_ENV': JSON.stringify('development')
                }),
                plugins.rootImport({
                  root: `${__dirname}/dist`,
                  useEntry: 'prepend',
                  extensions: '.js'
                }),
                plugins.resolve()
                // json(),
                // globals(),
                // builtins(),
              ]
            }, 'umd'))
            .on('error', function(e){
              console.log(e);
              // cb();
            })
            .pipe(gulp.dest(dest))
            // .on('end', cb);
      return stream
    };
};
