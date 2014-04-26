var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    rjs = require('gulp-requirejs'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');

gulp.task('default', ['lint', 'build', 'test']);

gulp.task('lint', function() {
  gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('build', function() {
  rjs({
    baseUrl: 'src',
    name: 'myModule',
    out: 'myModule.js',
  })
  .pipe(gulp.dest('dist'));
});

gulp.task('test', function () {
  gulp.src(['tests/**/*.js'])
    .pipe(mocha({
      reporter: 'spec'
    }));
});
