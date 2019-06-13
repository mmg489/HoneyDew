var express = require('express');
var router = express.Router();
var users = require('../models/users');

router.post('/api/users/register', function (req, res){
    users.new('users', newUser, function(result){
        console.log(result);
        res.sendStatus(200);
    })
});

