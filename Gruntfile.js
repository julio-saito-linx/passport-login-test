'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib: {
                src: [
                    'clientapp/*.js',
                    'clientapp/helpers/**/*.js',
                    'clientapp/models/**/*.js',
                    'clientapp/pages/**/*.js',
                    'clientapp/views/**/*.js',
                    'API/*.js'
                ]
            },
            test: {
                src: ['tests/**/*.js']
            },
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib: {
                files: '<%= jshint.lib.src %>',
                tasks: ['jshint:lib', 'nodeunit']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'nodeunit']
            },
        },

        copy: {
          main: {
            src:[  'bower_components/google-code-prettify/src/prettify.*',
                    'bower_components/jquery/dist/*.*',
                    'bower_components/bootstrap/dist/**/*.*',
                ],
            dest: 'public/js/',
          },
        },        

        // concat: {
        //   options: {
        //     // define a string to put between each file in the concatenated output
        //     separator: ';'
        //   },
        //   dist: {
        //     // the files to concatenate
        //     src: ['src/**/*.js'],
        //     // the location of the resulting JS file
        //     dest: 'dist/<%= pkg.name %>.js'
        //   }
        // },

        // uglify: {
        //   options: {
        //     // the banner is inserted at the top of the output
        //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        //   },
        //   dist: {
        //     files: {
        //       'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        //     }
        //   }
        // }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task.
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dist', ['copy']);

};
