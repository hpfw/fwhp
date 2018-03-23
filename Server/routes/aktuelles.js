
var express = require('express');
var router = express.Router();
var app = require('.././app');
var mysql = require('mysql');
var date = new Date();
var dateFormat = require('dateformat');
var user = require('../database/user');


router.get('/', function (req, res) {
    var con = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "feuerweh",
        password: "Feuerwehr!?123FFW!",
        database: "feuerweh_"
    });

    con.connect(function (err) {
        if (err) throw err;

        con.query("SELECT * FROM aktuelles WHERE datum <= " + mysql.escape(date) + " ORDER BY datum DESC LIMIT 1", function (err, result, fields) {
            if (err) throw err;
            con.end();
            res.send({text: result[0].text, bild: result[0].bild})
        });
    });
});

router.post('/', function (req, res) {

    console.log("asdasddsad");
    console.log(req.body);
    console.log(req.file);



   /* res.send({status: req.cookies})
    user(req.sessionStore.sessions, function (username) {
        var con = mysql.createConnection({
            host: "localhost",
            port: "3306",
            user: "feuerweh",
            password: "Feuerwehr!?123FFW!",
            database: "feuerweh_"
        });
        var values = []
        req.body.data.push(username)
        values.push(req.body.data)

        con.connect(function (err) {
            if (err) throw err;

            con.query("INSERT INTO aktuelles (text, bild, datum, username) VALUES ?", [values], function (err, result) {
                if (err) throw err;
                con.end();

                res.send({status: req.sessionStore.sessions})
                res.send({status: result})
            });
        });
    })*/
});

module.exports = router;