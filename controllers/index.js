'use strict';


var IndexModel = require('../models/index'),
    ProfileModel = require('../models/profile'),
    AdminModel = require('../models/admin'),
    AboutModel = require('../models/about'),
    auth = require('../lib/auth');


module.exports = function (router) {

    var indexmodel = new IndexModel();
    var profilemodel = new ProfileModel();
    var adminmodel = new AdminModel();
    var aboutmodel = new AboutModel();


    router.get('/', function (req, res) {
        res.render('index', indexmodel);
    });


    router.get('/profile', function(req, res) {
        res.render('profile', profilemodel);
    });


    router.get('/admin', auth.isAuthenticated('admin'), auth.injectUser(), function(req, res) {
        res.render('admin', adminmodel);
    });

    router.get('/about', function(req, res) {
        res.render('about', aboutmodel);
    });

    /**
     * Allow the users to log out
     */
    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/login');
    });

    router.get('/setLocale/:locale', function (req, res) {
        res.cookie('locale', req.params.locale);
        res.redirect('/');
    });
};
