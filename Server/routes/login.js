var express = require('express');
var router = express.Router();
var app = require('.././app');
var passport = require('passport')

router.get('/', function (req, res) {
    if (req.isAuthenticated()) {
        res.render('insert');
    }
    else {
        res.render('login');
    }
});

router.post('/', function (req, res, next) {
    passport.authenticate('local', {
        session: true,
        successRedirect: '/insert',
        failureRedirect: '/login'
    })(req, res, next)
});

module.exports = router;
