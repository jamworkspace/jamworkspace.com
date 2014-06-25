'use strict';


module.exports = function concatcss(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-concat');


	return {
        dist: {
            src: [
                'public/components/pure/pure-min.css',
                'public/css/*.css'
            ],
            dest: '.build/css/app.css'
        }
	};
};




