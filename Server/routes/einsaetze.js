var express = require('express');
var router = express.Router();
var app = require('.././app');
var mysql = require('mysql');
    
router.get('/', function(req, res) {
    var con = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "feuerweh",
        password: "Feuerwehr!?123FFW!",
        database: "feuerweh_"
    });

    con.connect(function(err) {
        if (err) throw err;
    
        con.query("SELECT * FROM einsaetze ORDER BY datum DESC", function (err, result, fields) {
            if (err) throw err;
            con.end();
            res.send({ data: result });
        });
    });


});

module.exports = router;