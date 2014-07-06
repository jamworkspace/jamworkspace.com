'use strict';


module.exports = function copyto(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-copy-to');

    // Options
    return {

        css: {
            files: [
                { cwd: 'public/css/', src: ['**/*.css'], dest: '.build/css/' }
            ]
        },
        js: {
            files: [
                { cwd: 'public/js/', src: ['**/*.js'], dest: '.build/js/' }
            ]
        }
        //,build: {
           // files: [
             //   { cwd: 'public', src: ['**/*'], dest: '.build/' }
           // ],
            //options: {
              //  ignore: [
                //   'public/css/**/*',
                  //  'public/components',
                 //  'public/components/**/*',
                   //'public/templates/**/*',
                   // 'public/js/**/*',
                   // 'public/img/**/*'
                //]
            //}
        //}
    };
};
