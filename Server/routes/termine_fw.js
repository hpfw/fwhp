var express = require('express');
var router = express.Router();
var app = require('.././app');
var mysql = require('mysql');
var date = new Date();
var dateFormat = require('dateformat');
var user = require('../database/user')


var wochentage = (param) => {
    var day;

    switch (param) {
        case 'Monday':
            day = 'Montag'
            break;
        case 'Tuesday':
            day = 'Dienstag'
            break;
        case 'Wednesday':
            day = 'Mittwoch'
            break;
        case 'Thursday':
            day = 'Donnerstag'
            break;
        case 'Friday':
            day = 'Freitag'
            break;
        case 'Saturday':
            day = 'Samstag'
            break;
        case 'Sunday':
            day = 'Sonntag'
            break;
        default:
            day = 'Mittwoch'
            break;
    }

    return day;
}

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

        date.setDate(date.getDate() - 1);

        con.query("SELECT * FROM termine_fw WHERE datum >= " + mysql.escape(date) + ' LIMIT 1', function (err, result, fields) {
            if (err) {
                res.send({
                    datum: "-",
                    uhrzeit: "-",
                    probe: "-",
                    leiter: "-",
                    tag: "-"
                })
                //throw err;
            }
            con.end();

            var stringDate = result[0].datum.toString();
            var dateFrom = dateFormat(stringDate, "dd.mm.yyyy");
            var day = wochentage(dateFormat(stringDate, "dddd"));

            res.send({
                datum: dateFrom,
                uhrzeit: result[0].uhrzeit,
                probe: result[0].probe,
                leiter: result[0].leiter,
                tag: day
            })
        });
    });


});

router.post('/', function (req, res) {
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

            con.query("INSERT INTO termine_fw (uhrzeit, datum, leiter, probe, username) VALUES ?", [values], function (err, result) {
                if (err) throw err;
                con.end();
                res.send({status: result})
            });
        });
    })
});


module.exports = router;