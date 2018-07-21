var mysql = require('mysql');

module.exports.checkauth = function(username, password, callback) {
    callback(false)
    var auth = false
    var con = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "feuerweh",
        password: "Feuerwehr!?123FFW!",
        database: "feuerweh_"
    });
    con.connect(function(err) {
        if (err) throw err;

        con.query("SELECT * FROM user WHERE username = " +  mysql.escape(username) + " AND password = " +  mysql.escape(password), function (err, result, fields) {
            if (err || result.length){
                auth = false
            }else{
                auth = true
            }
            callback(auth)
        });
    });
}