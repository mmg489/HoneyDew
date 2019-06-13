var orm = require("../config/orm.js");
//var express = require('express');
//var router = express.Router();

var users = {
    new:function(cb) {
        orm.createUser('users', newUser , cb );
    }
}


module.exports = users;