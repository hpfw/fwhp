var express = require('express');
var router = express.Router();
var app = require('.././app');


/* GET home page. */
router.get('/', function(req, res) {
    res.render('insert');
});

module.exports = router;