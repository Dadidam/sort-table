module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: [
      './lib'
    ],
    watch: {
      scripts: {
        files: [
          'src/**/*.js'
        ],
        options: {
          spawn: false
        },
        tasks: ['babel']
      }
    },
    babel: {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          'lib/SortHeader.js': 'src/SortHeader.js',
          'lib/SortTable.js': 'src/SortTable.js',
          'lib/TableConstants.js': 'src/TableConstants.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('dev', ['build', 'watch']);
  grunt.registerTask('default', ['clean', 'babel']);

};
