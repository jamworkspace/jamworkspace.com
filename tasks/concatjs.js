'use strict';


module.exports = function concatjs(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Options
	return {

            dist: {
                src: [
                    'public/js/config.js',
                    'public/js/app.js',
                ],
                dest: '.build/js/app.js'
            }

	};
};




