'use strict';
// Source: .build/js/config.js
requirejs.config({
    paths: {
        'jquery': '/components/jquery/dist/jquery.min'
    }
});

// Source: .build/js/app.js
//zeek todo: fix mailchimp form ajax auth


require(['jquery'], function ($) {

    var app = {
        initialize: function () {
            //lets put our shizz here mayne!!!
        }
    };

    app.initialize();

});
