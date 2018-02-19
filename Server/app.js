var express = require('express'),
    app = express();
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var nodemailer = require('nodemailer');
var index = require('./routes/index'); 
var termine_fw = require('./routes/termine_fw'); 
var termine_jf = require('./routes/termine_jf');
var aktuelles = require('./routes/aktuelles');
var kontakt = require('./routes/kontakt');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    next();
})

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Login als Startseite festlegen
app.use('/', index);
app.use('/termine_fw', termine_fw);
app.use('/termine_jf', termine_jf);
app.use('/aktuelles', aktuelles);
app.use('/kontakt', kontakt);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('index');
});

//app.listen(3001);
//app.listen(80);
app.listen("46.251.225.11");

module.exports = app;
