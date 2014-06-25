'use strict';


module.exports = function cssmin(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	return {
        build: {
            files: {
                '.build/css/app.css': ['.build/css/app.css']
            }
        }
	};
};




