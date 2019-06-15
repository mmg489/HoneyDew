var orm = require("../config/orm.js");

var users = {
    new:function(cb) {
        orm.createUser('users', newUser , cb );
    },
    login:function(acct_name, secret_word, cb) {
        orm.login(acct_name, secret_word, cb);
    },
    data:function(uniqueurl, cb) {
        orm.find('users', 'uniqueurl', uniqueurl, function(res){
            cb(res);
        })
    }
}


module.exports = users;