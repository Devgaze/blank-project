'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `copy.js`');
  }

  return {
    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: data.appPath,
        dest: data.distPath,
        src: [
          '*.{ico,png,txt}',
          '.htaccess',
          '*.html',
          '**/*.html',
          'images/*.{webp,webm}',
          'fonts/**/*'
        ]
      }, {
        expand: true,
        cwd: data.rootPath + '/.tmp/images',
        dest: data.distPath + '/images',
        src: ['generated/*']
      }]
    },
    styles: {
      expand: true,
      cwd: data.appPath + '/styles',
      dest: data.rootPath + '/.tmp/styles/',
      src: '{,*/}*.css'
    }
  };
};
