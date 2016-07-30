'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `watch.js`');
  }

  return {

    bower: {
      files: [data.rootPath + '/bower.json', 'bower_components/'],
      tasks: ['wiredep'],
    },
    js: {
      files: [
        data.appPath + '/scripts/**/*.js',
      ],
      tasks: ['newer:jshint:all', 'newer:jscs:all'],
      options: {
        livereload: '<%= connect.options.livereload %>',
      },
    },
    sass: {
      files: [data.appPath + '/**/*.{scss,sass}'],
      tasks: ['sass:dist'],
    },
    gruntfile: {
      files: [data.rootPath + '/Gruntfile.js', data.rootPath + '/grunt/*.js'],
    },
    livereload: {
      options: {
        livereload: '<%= connect.options.livereload %>',
      },
      files: [
        data.appPath + '/index.html',
        data.rootPath + '/.tmp/styles/{,*/}*.css',
        data.appPath + '/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
      ],
    },
  };
};
