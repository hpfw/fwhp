var express = require('express');
var router = express.Router();
var app = require('.././app');

router.get('/', function (req, res) {
    if (req.isAuthenticated()) {
        req.logout();
        req.session.destroy();  // Session löschen
        res.render('login');
    }
    else {
        res.render('login');
    }
});

module.exports = router;
