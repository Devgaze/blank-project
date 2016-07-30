'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `filerev.js`');
  }

  return {
    dist: {
      src: [
        data.distPath + '/scripts/{,*/}*.js',
        data.distPath + '/styles/{,*/}*.css'
      ]
    }
  };
};
