'use strict';

var IndexModel = require('../models/index'),
    ProfileModel = require('../models/profile'),
    AdminModel = require('../models/admin'),
    AboutModel = require('../models/about'),
    MembershipsModel = require('../models/memberships'),
    ProgramsModel = require('../models/programs'),
    auth = require('../lib/auth'),
    EventsModel = require('../models/events');

module.exports = function (router) {

    var indexModel = new IndexModel(),
        profileModel = new ProfileModel(),
        adminModel = new AdminModel(),
        aboutModel = new AboutModel(),
        membershipsModel = new MembershipsModel(),
        programsModel = new ProgramsModel(),
        eventsModel = new EventsModel();

    router.get('/', function (req, res) {
        res.render('temp-index', indexModel);
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

    router.get('/memberships', function(req, res) {
        res.render('memberships', membershipsModel);
    });

    router.get('/programs', function(req, res) {
        res.render('programs', programsModel);
    });

    router.get('/events', function(req, res) {
        res.render('events', eventsModel);
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
