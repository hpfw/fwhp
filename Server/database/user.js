var user = function (session, callback) {
    var username = ""
    var key = Object.keys( session )
    if(key.length > 0){
        username = JSON.parse(session[key[0]]).passport.user
    }else{
        username = "noname"
    }
    callback(username)
}

module.exports = user