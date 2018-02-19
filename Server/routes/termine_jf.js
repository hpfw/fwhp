var express = require('express');
var router = express.Router();
var app = require('.././app');
var mysql = require('mysql');
var date = new Date();
var dateFormat = require('dateformat');


var wochentage = (param) => {
    var day;

    switch(param) {
        case 'Monday': day = 'Montag'
                        break;
        case 'Tuesday': day = 'Dienstag'
                        break;
        case 'Wednesday': day = 'Mittwoch'
                        break;
        case 'Thursday': day = 'Donnerstag'
                        break;
        case 'Friday': day = 'Freitag'
                        break;  
        case 'Saturday': day = 'Samstag'
                        break;
        case 'Sunday': day = 'Sonntag'
                        break;
        default: day = 'Mittwoch'
                        break;
    }

    return day;
}

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
    
        con.query("SELECT * FROM termine_jf WHERE datum >= " + mysql.escape(date) + ' LIMIT 1', function (err, result, fields) {
            if (err) throw err;
            con.end();

            var stringDate = result[0].datum.toString();
            var dateFrom = dateFormat(stringDate, "dd.mm.yyyy");
            var day = wochentage(dateFormat(stringDate, "dddd"));
            
            res.send({ datum: dateFrom, uhrzeit: result[0].uhrzeit, probe: result[0].probe, leiter: result[0].leiter, tag: day })
        });
    });


});

module.exports = router;