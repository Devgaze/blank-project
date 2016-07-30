'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `wiredep.js`');
  }

  return {
    app: {
      src: [data.appPath + '/index.html'],
      ignorePath:  /\.\.\//
    },
    sass: {
      src: [data.appPath + '/styles/{,*/}*.{scss,sass}'],
      ignorePath: data.rootPath + '/bower_components/'
    }
  };
};
