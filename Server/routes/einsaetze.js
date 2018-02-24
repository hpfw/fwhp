var express = require('express');
var router = express.Router();
var app = require('.././app');
var mysql = require('mysql');
var dateFormat = require('dateformat');


var monat = (param) => {
    var monat;

    switch(param) {
        case 'January': monat = 'Januar'
            break;
        case 'February': monat = 'Februar'
            break;
        case 'March': monat = 'März'
            break;
        case 'April': monat = 'April'
            break;
        case 'May': monat = 'Mai'
            break;
        case 'June': monat = 'Juni'
            break;
        case 'July': monat = 'Juli'
            break;
        case 'August': monat = 'August'
            break;
        case 'September': monat = 'September'
            break;
        case 'October': monat = 'Oktober'
            break;
        case 'November': monat = 'November'
            break;
        case 'December': monat = 'Dezember'
            break;
        default: monat = 'Januar'
            break;
    }

    return monat;
}

var sortData = function(result, callback) {
    var dataYear = []
    var data = []
    var yearOld = "";
    for( var i = 0; i< result.length; i++){
        var stringDate = result[i].datum.toString();
        var year = dateFormat(stringDate, "yyyy");
        var month = monat(dateFormat(stringDate, "mmmm"))
        var day = dateFormat(stringDate, "dd.");
        day = day + " " + month
        if(year != yearOld && yearOld != ""){
            dataYear.push({ year: yearOld, data: data })
            data = []
        }
        data.push({ day: day, bilder: result[i].bilder, text: result[i].text, art: result[i].art })
        yearOld = year
    }
    dataYear.push({ year: year, data: data })
    callback(dataYear);
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
    
        con.query("SELECT * FROM einsaetze ORDER BY datum DESC", function (err, result, fields) {
            if (err) throw err;
            con.end();
            sortData(result, function (data) {
                res.send({ data: data });
            })
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

        con.query("INSERT INTO einsaetze (datum, uhrzeit, text, bilder, art) VALUES ?", [values], function (err, result) {
            if (err) throw err;
            con.end();
            res.send({ status: result })
        });
    });
});

module.exports = router;