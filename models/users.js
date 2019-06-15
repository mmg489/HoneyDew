var orm = require("../config/orm.js");

var users = {
    new: function (cb) {
        orm.create('users', newUser, cb);
    },
    login: function (acct_name, secret_word, cb) {
        orm.login(acct_name, secret_word, cb);
    },
    create: function (set, cb) {
        orm.create('users', set, cb);
    },
    data: function (uniqueurl, cb) {
        orm.find('users', 'uniqueurl', uniqueurl, function (res) {
            cb(res);
        })
    }
}


module.exports = users;