// required dependencies
var express = require('express');
var router = express.Router();

// imports foods and activities objects with methods
var foods = require('../models/foods.js');
var activities = require('../models/activities.js');
var users = require('../models/users.js');

// basic homepage route
router.get('/', function (req, res) {
    res.render('index');
});

// the account page
router.get('/dashboard', function (req, res) {
    res.render('dashboard');
});

// the swiping page for shared 'liked' 
router.get('/both', function (req, res) {
    res.render('both');
});



// ROUTES FOR FOODS

// inital swiping and likeing 
router.get('/api/foods/like', function (req, res) {
    foods.all(function (data) {
        res.render('swipe-foods', { foods_data: data });
        console.log(data);
    })
});

// adds new food ideas
router.post('api/foods/add', function (req, res) {
    foods.create('')
})

//updates the 'liked' count for foods
router.put('/api/foods/liked/:id', function (req, res) {
    foods.update(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

// undo 'liked' 
router.put('/api/foods/undo/:id', function (req, res) {
    foods.undo(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

// shows 'liked' food ideas from both users
router.get('/api/foods/both', function (req, res) {
    foods.both(function (data) {
        res.render('both-foods', { foods_data: data })
    })
});



// ROUTES FOR ACTIVITIES

// the initial swiping and liking
router.get('/api/activities/like', function (req, res) {
    activities.all(function (data) {
        res.render('swipe-activities', { activites_data: data })
    })
});

// adding new activity ideas
router.post('/api/activities/add', function (req, res) {
    activities.create('')
})

// Updates the 'like' count for activity ideas
router.put('/api/activities/liked/:id', function (req, res) {
    activities.update(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

// undo 'like'
router.put('/api/activities/undo/:id', function (req, res) {
    activities.undo(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

// show 'liked ideas from both users
router.get('/api/foods/both', function (req, res) {
    activities.both(function (data) {
        res.render('both-activities', { activites_data: data })
    })
});




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


// exports express router
module.exports = router;