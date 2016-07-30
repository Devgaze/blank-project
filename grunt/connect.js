'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `connect.js`');
  }
  console.log(data);
  return {
    options: {
      port: 9000,
      // Change this to '0.0.0.0' to access the server from outside.
      hostname: 'localhost',
      debug: false,
      livereload: 35729
    },
    livereload: {
      options: {
        open: true,
        middleware: function (connect) {
          return [
            connect.static(data.rootPath + '/.tmp'),
            connect().use(
              '/bower_components',
              connect.static(data.rootPath + '/bower_components')
            ),
            connect().use(
              '/styles',
              connect.static('./styles')
            ),
            connect.static(data.appPath)
          ];
        }
      }
    },
    dist: {
      options: {
        open: true,
        middleware: function (connect) {
          return [
            connect.static(data.distPath)
          ];
        }
      }
    }
  };
};
