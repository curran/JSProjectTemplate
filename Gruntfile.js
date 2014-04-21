// The Grunt configuration file.
//
// Curran Kelleher 4/15/2014
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
    },
    uglify: {
      dist: {
        files: {'dist/myModule.min.js': ['dist/myModule.js']}
      }
    },
    umd: {
      all: {
        src: 'src/myModule.js',
        dest: 'dist/myModule.js',
        objectToExport: 'MyModule'
      }
    },
    docco: {
      debug: {
        src: ['src/**/*.js', 'spec/**/*.js'],
        options: {
          output: 'docs/'
        }
      }
    },
    jasmine: {
      all: {
        options: {
          specs: 'spec/*Spec.js',
          vendor: ['lib/requirejs/require.js', 'requireConfig.js'],
          globalAlias: 'myModule'
        }
      }
    }
  });

  grunt.registerTask('build', ['jshint', 'umd', 'uglify']);
  grunt.registerTask('default', ['build', 'jasmine', 'docco']);
};
