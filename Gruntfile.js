'use strict';

// Package configs are in separate files located in "grunt/" folder; 
// FILE_NAME.js must match the corresponding Grunt package name
// All tasks are defined in "grunt/aliases.js"

module.exports = function (grunt) {

  var path = require('path');
  var rootPath = process.cwd();
  var bowerAppPath = require('./bower.json').appPath || '.';
  var deployCredentials = grunt.file.readJSON('deploy.json');

  var options  = {
    init: true,
    configPath: path.join(rootPath, 'grunt'),
    jitGrunt: {
      staticMappings: {
        useminPrepare: 'grunt-usemin',
        cdnify: 'grunt-google-cdn',
        deploy: 'grunt-ssh-deploy'
      }
    },
    data: {
      rootPath: '',
      appPath: bowerAppPath,
      distPath: 'dist',
      credentials: deployCredentials
    }
  };
  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, options);
};
