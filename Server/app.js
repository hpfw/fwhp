var express = require('express'),
    app = express();
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var passport = require('passport')
var localStrategy = require('passport-local').Strategy
var session = require('express-session');
var auth = require("./database/auth")

var index = require('./routes/index');
var insert = require('./routes/insert');
var login = require('./routes/login');
var logout = require('./routes/logout');
var termine_fw = require('./routes/termine_fw');
var termine_jf = require('./routes/termine_jf');
var aktuelles = require('./routes/aktuelles');
var kontakt = require('./routes/kontakt');
var einsaetze = require('./routes/einsaetze');

var path = require('path');
var os = require('os')
var Greenlock = require('greenlock');

var greenlock = Greenlock.create({
    agreeTos: true                      // Accept Let's Encrypt v2 Agreement
    , email: 'fwhp@web.com'           // IMPORTANT: Change email and domains
    , approveDomains: [ 'feuerwehr-waldburg.de' ]
    , communityMember: false              // Optionally get important updates (security, api changes, etc)
                                          // and submit stats to help make Greenlock better
    , version: 'draft-11'
    , server: 'https://acme-v02.api.letsencrypt.org/directory'
    , configDir: path.join(os.homedir(), 'acme/etc')
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    next();
})

app.use(logger('dev')); //log every request on console
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});

//Passport initialisieren & session
passport.use('local', new localStrategy(
    function (username, password, done) {
        auth.checkauth(username, password, function (auth) {
            return done(null, username);
            if (auth == true) {
                console.log('login true');
                return done(null, username);
            } else {
                console.log('login false');
                return done(null, false, {"message": "User not found."});
            }
        });
    })
);

app.use(session({
    secret: "tHiSiSasEcRetStr",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/insert', insert);
app.use('/login', login);
app.use('/logout', logout);
app.use('/termine_fw', termine_fw);
app.use('/termine_jf', termine_jf);
app.use('/aktuelles', aktuelles);
app.use('/kontakt', kontakt);
app.use('/einsaetze', einsaetze);


app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('index');
});

var redir = require('redirect-https')();
require('http').createServer(greenlock.middleware(redir)).listen(80);

require('https').createServer(greenlock.tlsOptions, function (req, res) {
    res.end('Hello, Secure World!');
}).listen(443);

//app.listen(80);
//app.listen("46.251.225.11");

module.exports = app;
