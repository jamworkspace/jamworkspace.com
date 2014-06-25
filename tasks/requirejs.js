'use strict';


module.exports = function requirejs(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Options
    return {
        build: {
            options: {
                baseUrl: 'public',
                dir: '.build',
                optimize: 'uglify',
                modules: [
                    { name: 'app' }
                ],
                paths: {
                    app: 'js/app',
                    jquery: 'components/jquery/dist/jquery.min'
                }



            }
        }
    };
};
