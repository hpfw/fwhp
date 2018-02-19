var express = require('express');
var router = express.Router();
var app = require('.././app');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "feuerweh",
    password: "Feuerwehr!?123FFW!",
    database: "feuerweh_"
});

/* GET home page. */
router.get('/', function(req, res) {
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM termine_fw", function (err, result, fields) {
            if (err) throw err;
            //console.log(result);
            res.send(result[0].datum)
        });
    });


});

module.exports = router;