'use strict';


module.exports = function imagemin(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	// Options
	return {
        dynamic: {
          files: [{
            expand: true,
            cwd: 'public/img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: '.build/img'
          }]
        }
	};
};
