'use strict';

var User = require('../models/user');

var UserLibrary = function() {
    return {
        addUsers: function() { //add two users
            var u1 = new User({
                name: 'Admin',
                login: 'admin',
                password: 'admin',
                role: 'admin'
            });

            var u2 = new User({
                name: 'Test',
                login: 'test',
                password: 'test',
                role: 'user'
            });

            u1.save();
            u2.save();
        },
        serialize: function(user, done) {
            done(null, user.id);
        },
        deserialize: function(id, done) {
            User.findOne({
                _id: id
            }, function(err, user) {
                done(null, user);
            });
        }
    };
};

module.exports = UserLibrary;
