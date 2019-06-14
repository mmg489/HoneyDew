var orm = require("../config/orm.js");
//var express = require('express');
//var router = express.Router();

var users = {
    new:function(cb) {
        orm.createUser('users', newUser , cb );
    },
    login:function(acct_name, secret_word, cb) {
        orm.login(acct_name, secret_word, cb);
    },
    data:function(acct_name, cb) {
        orm.find('users', 'acct_name', 'acct_name', function(res){
            cb(res);
        })
    }
}


module.exports = users;