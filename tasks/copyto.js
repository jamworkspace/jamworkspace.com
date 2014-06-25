'use strict';


module.exports = function copyto(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-copy-to');

    // Options
    return {
        build: {
            files: [
                { cwd: 'public', src: ['**/*'], dest: '.build/' }
            ],
            options: {
                ignore: [//right now we basically ignore everything, keeping this task around incase we need it later
                   'public/css/**/*',
                    'public/components',
                   'public/components/**/*',
                   'public/templates/**/*',
                    'public/js/**/*',
                    'public/img/**/*'
                ]
            }
        }
    };
};
