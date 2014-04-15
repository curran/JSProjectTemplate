module.exports = function(grunt) {
  grunt.initConfig({

    // Copies files from bower_components to lib
    copy: {
      main: {
        files: [
          { src: 'bower_components/lodash/dist/lodash.min.js', dest: 'lib/lodash.js' },
          { src: 'bower_components/requirejs/require.js', dest: 'lib/require.js' },

          { src: 'bower_components/jasmine/lib/jasmine-core/jasmine.js', dest: 'lib/jasmine/jasmine.js' },
          { src: 'bower_components/jasmine/lib/jasmine-core/jasmine.css', dest: 'lib/jasmine/jasmine.css' },
          { src: 'bower_components/jasmine/lib/jasmine-core/jasmine-html.js', dest: 'lib/jasmine/jasmine-html.js' },
          { src: 'bower_components/jasmine/lib/jasmine-core/boot.js', dest: 'lib/jasmine/boot.js' }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy']);

};
