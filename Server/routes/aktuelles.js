var express = require('express');
var router = express.Router();
var app = require('.././app');
var mysql = require('mysql');
var date = new Date();
var dateFormat = require('dateformat');
var user = require('../database/user');


var multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) //Appending extension
    }
})

var upload = multer({storage: storage});
var fs = require('fs');

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
            //con.query("SELECT * FROM aktuelles LIMIT 1", function (err, result, fields) {
            if (err) throw err;
            con.end();
            res.send({text: result[0].text, bild: result[0].bild})
        });
    });
});

router.post('/', upload.array('aktuelles', 12), function (req, res) {


     fs.rename('uploads/'+req.files[0].filename, 'uploads/'+req.files[0].originalname, function(err) {
        if ( err ) console.log('ERROR: ' + err);
      });

 /*   var con = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "feuerweh",
        password: "Feuerwehr!?123FFW!",
        database: "feuerweh_"
    });

    var values = []
   // values.push(req.body.text)
   // values.push(req.files[0].filename)
   // values.push('20181224')


    values.push('20181224', '04:32', 'test', 'Standard.jpg', 'test')
    //console.log(values)



    con.connect(function (err) {
        if (err) throw err;
        con.query("INSERT INTO einsaetze (datum, uhrzeit, text, bilder, art) VALUES ?", [values], function (err, result) {
            res.send({status: err})
            if (err) throw err;
            con.end();
            res.send({status: result})
        });
    }); */

    var con = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "feuerweh",
        password: "Feuerwehr!?123FFW!",
        database: "feuerweh_"
    });

    con.connect(function (err) {
       // if (err) throw err;

        con.query("SELECT * FROM einsaetze ORDER BY datum DESC", function (err, result) {
           // if (err) throw err;
            con.end();
            sortData(result, function (data) {
                res.send({status: data});
            })
        });
    });
  /*

    con.connect(function (err) {

        if (err) throw err;

        con.query("INSERT INTO aktuelles (text, bild, datum ) VALUES ?", [values], function (err, result) {
            res.send({status: err})
            if (err) throw err;
            con.end();
            res.send({status: result})
        });

    }) */
});

router.put('/', function (req, res) {
    res.send({status: req.body.data})
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