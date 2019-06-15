var orm = require("../config/orm.js");

var users = {
    new: function (cb) {
        orm.create('users', newUser, cb);
    },
    login: function (acct_name, secret_word, cb) {
        orm.login(acct_name, secret_word, cb);
    },
    create: function (table, col, vals, cb) {
        orm.create(table, col, vals, cb);
    },
    insert: function (table, col, vals, cb) {
        orm.insert(table, col, vals, cb);
    },
    data: function (uniqueurl, cb) {
        orm.find('users', 'uniqueurl', "`" + uniqueurl + "'", function (res) {
            cb(res);
        })
    }
}


module.exports = users;