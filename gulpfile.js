var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    rjs = require('gulp-requirejs');

gulp.task('default', ['build', 'test']);

gulp.task('test', function () {
  gulp.src(['tests/**/*.js'])
    .pipe(mocha({
      reporter: 'spec'
    }));
});
gulp.task('build', function() {
  rjs({
    baseUrl: 'src',
    name: 'myModule',
    out: 'myModule.js',
  })
  .pipe(gulp.dest('dist'));
});
