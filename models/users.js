var orm = require("../config/orm.js");

var users = {
    new: function (newUser, cb) {
        orm.create('users', 'acct_name, couple_name, secret_word, userone_name, usertwo_name', newUser, cb);
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
    undo: function (table, condition, cb) {
        orm.delete(table, condition, cb);
      },
    data: function (uniqueurl, cb) {
        orm.find('users', 'uniqueurl', uniqueurl, function (res) {
            cb(res);
        })
    }
}


module.exports = users;