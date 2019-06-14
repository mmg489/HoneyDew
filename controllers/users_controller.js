var express = require('express');
var router = express.Router();

var users = require('../models/users');

// creates new user
router.post('/api/users/register', function (req, res) {
    newUser = {
        "acct_name": req.body.acct_name.split(' ').join('_'),
        "couple_name": req.body.acct_name,
        "secret_word": req.body.secret_word,
        "userone_name": req.body.userone_name,
        "usertwo_name": req.body.usertwo_name
    };
    users.new(function (result) {
        console.log(result);
        res.sendStatus(200);
    })
});


// login verification
router.post('/auth', function(req, res) {
	var acct_name = req.body.acct_name;
	var secret_word = req.body.secret-word;
	if (acct_name && secret_word) {
		connection.query('SELECT * FROM accounts WHERE acct_name = ? AND secret_word = ?', [acct_name, secret_word], function(error, results, fields) {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.acct_name = acct_name;
				res.redirect('/dashboard/ac?=' + acct_name);
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

router.get('/dashboard/ac?=:acct_name', function(req,res){
    if (req.session.loggedin) {
		res.send('Welcome back, ' + req.session.acct_name + '!');
	} else {
		res.send('Please login to view this page!');
	}
	res.end();
});

// router.get('/dashboard/', function(request, response) {
// 	if (request.session.loggedin) {
// 		response.send('Welcome back, ' + request.session.username + '!');
// 	} else {
// 		response.send('Please login to view this page!');
// 	}
// 	response.end();
// });

module.exports = user_controller;