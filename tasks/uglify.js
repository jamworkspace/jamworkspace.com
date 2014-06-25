'use strict';


module.exports = function uglify(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-uglify');


	return {


        build: {
            files:{
                '.build/js/app.js': ['.build/js/app.js']
            }
        }
	};
};




