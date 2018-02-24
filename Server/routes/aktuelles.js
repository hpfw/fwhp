var express = require('express');
var router = express.Router();
var app = require('.././app');
var mysql = require('mysql');
var date = new Date();
var dateFormat = require('dateformat');

    
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
    
        con.query("SELECT * FROM aktuelles WHERE datum <= " + mysql.escape(date) + " ORDER BY datum DESC LIMIT 1", function (err, result, fields) {
            if (err) throw err;
            con.end();
            res.send({ text: result[0].text, bild: result[0].bild })
        });
    });


});

router.post('/', function(req, res) {
    var con = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "feuerweh",
        password: "Feuerwehr!?123FFW!",
        database: "feuerweh_"
    });
    var values = []
    values.push(req.body.data)

    con.connect(function(err) {
        if (err) throw err;

        con.query("INSERT INTO aktuelles (text, bild, datum) VALUES ?", [values], function (err, result) {
            if (err) throw err;
            con.end();
            res.send({ status: result })
        });
    });
});

module.exports = router;