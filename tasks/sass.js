'use strict';


module.exports = function sass(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Options
	return {
        build: {
            files: [{
                expand: true,
                cwd: 'public/css',
                src: ['**/*.scss'],
                dest: 'public/css',
                ext: '.css'
            }]
        }
	};
};
