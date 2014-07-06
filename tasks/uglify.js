'use strict';


module.exports = function uglify(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-uglify');


	return {
        build: {
            expand: true,
            cwd: '.build/js',
            src: ['*.js', '!*.min.js'],
            dest: '.build/js',
            ext: '.min.js'
        }
	};
};




