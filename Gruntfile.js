module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            all: [
                'tests/app/*.js',
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        watch: {
            scripts: {
                files: ['tests/app/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 5555,
                    base: {
                        path: __dirname,
                        options: {
                            index: 'tests/runner.html',
                            keepalive: true
                        }
                    }
                }
            }
        }
    });

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('develop', ['connect', 'watch']);
};
