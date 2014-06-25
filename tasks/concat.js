'use strict';


module.exports = function concat(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-concat');


	return {
        css: {
            src: [
                'public/components/pure/pure-min.css',
                'public/css/*.css'
            ],
            dest: '.build/css/app.css'
        },

        js: {
            options:{
                banner: "'use strict';\n",
                process: function(src, filepath) {
                  return '// Source: ' + filepath + '\n' +
                    src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                }
            },
            src: [
                'public/js/config.js',
                'public/js/app.js',
            ],
            dest: '.build/js/app.js'
        }


	};
};




