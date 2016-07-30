'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `deploy.js`');
  }

  return {
    environments: {
        options: {
          local_path: data.appPath + '/dist',
          current_symlink: 'current',
          deploy_path: '/full/path'
        },
        production: {
            options: {
                host: '<%= data.credentials.host %>',
                username: '<%= data.credentials.username %>',
                password: '<%= data.credentials.password %>',
                releases_to_keep: '5',
                release_subdir: 'myapp'
            }
        }
    }
  };
};



