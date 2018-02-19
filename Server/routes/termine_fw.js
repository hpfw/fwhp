var express = require('express');
var router = express.Router();
var app = require('.././app');
var mysql = require('mysql');
var date = new Date()

var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "feuerweh",
    password: "Feuerwehr!?123FFW!",
    database: "feuerweh_"
});


router.get('/', function(req, res) {
    con.connect(function(err) {
        if (err) throw err;
        var datum = date.getFullYear() + "-0" + date.getMonth()+1 + "-" + date.getDate()
        con.query("SELECT * FROM termine_fw WHERE datum > " + datum, function (err, result, fields) {
            if (err) throw err;
            con.end();
            res.send({datum: result[0].datum, uhrzeit: result[0].uhrzeit, probe: result[0].probe, leiter: result[0].leiter, tag: "Mittwoch"})
        });
    });


});

module.exports = router;