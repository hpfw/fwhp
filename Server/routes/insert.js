var express = require('express');
var router = express.Router();
var app = require('.././app');

router.get('/', function(req, res) {
    if (req.isAuthenticated()) {
        res.render('insert');
    }
    else{
        res.render('login');
    }
});



module.exports = router;