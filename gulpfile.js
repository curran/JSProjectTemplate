var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    rjs = require('gulp-requirejs'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    docco = require('gulp-docco'),
    rename = require('gulp-rename'),
    theCode = ['src/**/*.js','tests/**/*.js'];

gulp.task('default', ['lint', 'build', 'test', 'docs']);

gulp.task('lint', function() {
  gulp.src(theCode).pipe(jshint()).pipe(jshint.reporter(stylish));
});

gulp.task('build', function() {
  rjs({
    baseUrl: 'src',
    // Use packages so module names to not conflict with other libraries.
    // For example, without using packages, the combined file would include
    // define('myHelperModule'), but using packages, it changes to
    // define('myModule/myHelperModule'), which is less likely to produce a conflict.
    packages: [
      {
        name: 'myModule',
        main: 'myModule',
        location: '.'
      }
    ],
    name: 'myModule',
    out: 'myModule.js'
  }).pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename('myModule-min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', ['build'], function () {
  gulp.src(['tests/**/*.js'])
    .pipe(mocha({ reporter: 'spec' }));
});

gulp.task('docs', function () {
  gulp.src(theCode).pipe(docco()).pipe(gulp.dest('docs'))
});
