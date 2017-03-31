JSProjectTemplate
=================

A JavaScript project template. Intended to:

 * be as simple as possible
 * use the best and most modern tools
 * support essential tasks:
   * internal dependency management
   * package management
   * unit testing
   * documentation generation
   * linting
   * minification

## Tools

 * [Gulp](http://gulpjs.com/) for task automation
 * [Require.js](http://requirejs.org/) for dependency management within the project
   * Alternatives: [Browserify](http://browserify.org/), [WebPack](http://webpack.github.io/)
 * [Bower](http://bower.io/) for package management across projects
 * [Mocha](http://mochajs.org/) for unit testing
   * via [gulp-mocha](https://www.npmjs.org/package/gulp-mocha)
   * Alternatives: [Jasmine](http://jasmine.github.io/2.0/introduction.html), [QUnit](https://qunitjs.com/)
 * [JSHint](http://www.jshint.com/) for linting
 * [Docco](http://jashkenas.github.io/docco/) for documentation generation
   * Alternatives: [JSDoc](https://github.com/jsdoc3/jsdoc)
 * [Uglify](https://github.com/mishoo/UglifyJS) for minification

## Directory Structure

 * `src` contains JavaScript source files as [AMD modules](http://requirejs.org/)
 * `dist` contains the build of the library
 * `spec` contains unit tests
 * `lib` the directory where Bower dependencies go
 * `docs` contains the generated documentation
 * `gulpfile.js` the Gulp configuration file
 * `example` an example page that uses the library
 * `server.js` is a simple static file server for development use
 * `package.json` the Node dependencies for Gulp
 * `node_modules` the packages installed by npm
 * `LICENSE` The MIT license
 * `README.md` The Markdown file that contains documentation for the project
 * `bower.json` The Bower configuration file
 * `.gitignore` causes Git to ignore node modules and Bower components
 * `requireConfig.js` the Require.js configuration file
 * `countLines.sh` a shell script that counts lines of code

## Workflow

 * Start the static file server in the background with the command `node server.js &`
   * If necessary, run `npm install` to install Express, a dependency of `server.js`
 * Navigate to `http://localhost:8000/` to run `example/index.html`
 * Iterate by editing code, saving code, running `gulp` and refreshing the page.
 * Run `./countLines.sh` to count lines of code

## Related Articles

 * [Gulp vs. Grunt: Comparing the Duelling Node.js Workhorses](http://unobfuscated.blogspot.com/2014/01/gulp-vs-grunt-comparing-duelling-nodejs.html)
 * [And just like that Grunt and RequireJS are out, it’s all about Gulp and Browserify now](http://www.100percentjs.com/just-like-grunt-gulp-browserify-now/)
 * [Build Wars: Gulp vs Grunt](http://markdalgleish.github.io/presentation-build-wars-gulp-vs-grunt/)
 * [Inspiration (slides) about why gulp was made](http://slides.com/contra/gulp)
 * [Nodejitsu: 9 gulp.js plugins for a great build system](http://blog.nodejitsu.com/npmawesome-9-gulp-plugins/) Inspired use of gulp-rename for producing both minified and non-minified releases.
 * [cujoJS: Consuming modules: Module ids](http://know.cujojs.com/tutorials/modules/consuming-modules-module-ids) Inspired use of packages to avoid naming conflicts.
 * [Bower GitHub: Allow to include instead of just ignore?](https://github.com/bower/bower/issues/294) Inspired ignore glob used in bower.json.

Curran Kelleher 4/26/2014
