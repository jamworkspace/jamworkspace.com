'use strict';


module.exports = function (grunt) {

    // Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });

    // Register group tasks
    //grunt.registerTask('buildtemplates', [ 'i18n', 'dustjs' ]);
    //grunt.registerTask('buildcomponents', [ 'bowercopy' ]);
    grunt.registerTask('buildcss', [ 'sass', 'concatcss' ]);
   // grunt.registerTask('buildimages', [ 'imagemin' ]);
   // grunt.registerTask('buildjs', [ 'concatjs' ]);
   // grunt.registerTask('build', [ 'jshint', 'buildcss','buildtemplates', 'buildjs','buildimages']);
   // grunt.registerTask('default', ['build']);
    //grunt.registerTask('test', [ 'jshint', 'mochacli' ]);

};
