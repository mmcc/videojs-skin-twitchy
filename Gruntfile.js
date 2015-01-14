module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['./src/**/*'],
        tasks: ['sass', 'browserify'],
        options: {
          spawn: false,
        },
      },
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.scss'],
          dest: 'dist',
          ext: '.css'
        }]
      }
    },
    connect: {
      dev: {
        options: {
          port: 9999,
          livereload: true
        }
      }
    },
    browserify: {
      dist: {
        files: {
          'dist/preview/preview.js': ['src/preview/preview.js'],
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browserify');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'browserify']);
  grunt.registerTask('connect-watch', ['connect', 'watch']);

};
