'use strict';

var IndexModel = require('../models/index'),
    ProfileModel = require('../models/profile'),
    AdminModel = require('../models/admin'),
    AboutModel = require('../models/about'),
    JoinModel = require('../models/join'),
    auth = require('../lib/auth');

module.exports = function (router) {

    var indexModel = new IndexModel(),
        profileModel = new ProfileModel(),
        adminModel = new AdminModel(),
        aboutModel = new AboutModel(),
        joinModel = new JoinModel();

    router.get('/', function (req, res) {
        res.render('index', indexModel);
    });

    router.get('/profile', function(req, res) {
        res.render('profile', aboutModel);
    });


    router.get('/admin', auth.isAuthenticated('admin'), auth.injectUser(), function(req, res) {
        res.render('admin', adminModel);
    });

    router.get('/about', function(req, res) {
        res.render('about', aboutModel);
    });

    router.get('/join', function(req, res) {
        res.render('join', joinModel);
    });

    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/login');
    });

    router.get('/setLocale/:locale', function (req, res) {
        res.cookie('locale', req.params.locale);
        res.redirect('/');
    });
};
