'use strict';


module.exports = function concat(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-concat');


	return {
        css: {
            src: [
                '.build/css/app.css',//note:we need to explicity list out our depenancies here to obey order
                '.build/css/test.css'
            ],
            dest: '.build/css/app-build.css'//todo:lets add app version number for naming convention
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




