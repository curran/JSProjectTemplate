JSProjectTemplate
=================

Boilerplate structure for starting a JavaScript project. Intended to:

 * be as simple as possible
 * use the best tools
 * support essential tasks:
   * dependency management
   * unit testing
   * documentation generation
   * linting
   * minification
   * universal module definition

The tools used are:

 * [Gulp](http://gulpjs.com/) for task automation
 * [Require.js](http://requirejs.org/) for dependency management within the project
   * Alternatives: [Browserify](http://browserify.org/), [WebPack](http://webpack.github.io/)
 * [Bower](http://bower.io/) for package management
 * [Mocha](http://visionmedia.github.io/mocha/) for unit testing
   * via [gulp-mocha](https://www.npmjs.org/package/gulp-mocha)
   * Alternatives: [Jasmine](http://jasmine.github.io/2.0/introduction.html), [QUnit](https://qunitjs.com/)
 * [JSHint](http://www.jshint.com/) for linting
 * [Docco](http://jashkenas.github.io/docco/) for documentation generation
   * Alternatives: [JSDoc](https://github.com/jsdoc3/jsdoc)
 * [Uglify](https://github.com/mishoo/UglifyJS) for minification
 * TODO add UMD

Directory structure:

TODO update
 * `index.html` the main page of the application
 * `src` contains JavaScript source files as [AMD modules](http://requirejs.org/)
 * `spec` contains [Jasmine](http://jasmine.github.io/) unit tests
 * `SpecRunner.html` is the Jasmine test runner that runs tests in the `spec` directory
 * `lib` contains JavaScript libraries
 * `server.js` is a simple static file server for development use. It is necessary to use a file server because code that uses XMLHttpRequest does not work when using the `file:///` protocol.
 * `package.json` is used by Grunt, and also installs dependencies for `server.js`
 * `LICENSE` The MIT license
 * `README.md` The Markdown file that contains documentation for the project
 * `bower.json` The Bower configuration file
 * `bower_components` the directory where Bower dependencies go
 * `node_modules
 * `.gitignore` causes Git to ignore node modules and Bower components
 * `requireConfig.js` the Require.js configuration file
 * `countLines.sh` a shell script that counts lines of code in source files and unit tests

Sample output from `countLines.sh`:

    Source code files:
       4 ./main.js
       7 ./myModule.js
       11 in total
    Unit tests:
       12 ./MyModuleSpec.js
       12 in total

Development workflow:

 * Start the static file server in the background with the command `node server.js &`
   * If necessary, run `npm install` to install Express, a dependency of `server.js`
 * Navigate to `http://localhost:8000/` to run `index.html`
 * Navigate to `http://localhost:8000/http://localhost:8000/SpecRunner.html` to run unit tests
 * Iterate by editing code, saving code and refreshing the page.
 * Generate documentation by running `grunt` and navigating to `http://localhost:8000/docs/main.html`
 * Run `./countLines.sh` if you are curious about how many lines of code each file contains, not counting comments and empty lines (my preference is to keep files under 100 lines).

## Related Articles

that informed tool choices:

 * Gulp
   * [Gulp vs. Grunt: Comparing the Duelling Node.js Workhorses](http://unobfuscated.blogspot.com/2014/01/gulp-vs-grunt-comparing-duelling-nodejs.html)
   * [And just like that Grunt and RequireJS are out, it’s all about Gulp and Browserify now](http://www.100percentjs.com/just-like-grunt-gulp-browserify-now/)
   * [Build Wars: Gulp vs Grunt](http://markdalgleish.github.io/presentation-build-wars-gulp-vs-grunt/)
   * [Inspiration (slides) about why gulp was made](http://slides.com/contra/gulp)


