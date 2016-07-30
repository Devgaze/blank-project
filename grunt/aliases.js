'use strict';

var serveTasks = [
  'clean:server',
  'jshint',
  'wiredep',
  'concurrent:server',
  'postcss:server',
  'connect:livereload',
  'watch',
];

var buildTasks = [
  'clean:dist',
  'wiredep',
  'useminPrepare',
  'concurrent:dist',
  'postcss',
  'concat',
  'copy:dist',
  'cdnify',
  'cssmin',
  'uglify',
  'filerev',
  'usemin',
  'htmlmin',
];

var defaultTasks = [
  'newer:jshint',
  'newer:jscs',
  'build',
];

module.exports = {

  /* serve */
  serve: {
    description: '',
    tasks: serveTasks,
  },

  /* build */
  build: {
    description: '',
    tasks: buildTasks,
  },

  /* default */
  default: {
    description: '',
    tasks: defaultTasks,
  },

};

