'use strict';


module.exports = function cssmin(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	return {
        build: {
            expand: true,
            cwd: '.build/css',
            src: ['*.css', '!*.min.css'],
            dest: '.build/css',
            ext: '.min.css'
        }
	};
};







