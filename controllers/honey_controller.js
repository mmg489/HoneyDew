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


// ROUTES FOR FOODS

// inital swiping and likeing
router.get('/api/foods/like/:uniqueurl', function (req, res) {
    foods.all(req.params.uniqueurl, function (data) {
        res.render('swipe-foods', { foods_data: data });
    });
});

//updates the 'liked' column for foods
router.put('/api/foods/like/:uniqueurl/:id', function (req, res) {
    var uniqueurl = req.params.uniqueurl;
    users.insert('user_likes', 'uniqueurl, liked_foods', '"' + uniqueurl + '", ' + req.params.id, function (result) {
        // console.log(result);
        res.sendStatus(200);
    });
});


// undo 'liked'
router.put('/api/foods/like/:uniqueurl/undo/:id', function (req, res) {
    var uniqueurl = req.params.uniqueurl;
    users.undo('user_likes', 'uniqueurl = ' + '"' + uniqueurl + '" AND liked_foods = ' + req.params.id + ' LIMIT 1', function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

// shows 'liked' food ideas from both users
router.get('/api/foods/both/:uniqueurl', function (req, res) {
    foods.both(req.params.uniqueurl, function (data) {
        console.log(data);
        res.render('both-foods', { foods_data: data });
    });
});



// ROUTES FOR ACTIVITIES

// the initial swiping and liking
router.get('/api/activities/like/:uniqueurl', function (req, res) {
    activities.all(req.params.uniqueurl, function (data) {
        res.render('swipe-activities', { activities_data: data });
        console.log(data);
    });
});

// adding new activity ideas
// router.post('/api/activities/add', function (req, res) {
//     activities.create('');
// });

// Updates the 'like' count for activity ideas
router.put('/api/activities/like/:uniqueurl/:id', function (req, res) {
    var uniqueurl = req.params.uniqueurl;
    users.insert('user_likes', 'uniqueurl, liked_activities', '"' + uniqueurl + '", ' + req.params.id, function (result) {
        // console.log(result);
        res.sendStatus(200);
    });
});

// undo 'liked'
router.put('/api/activities/like/:uniqueurl/undo/:id', function (req, res) {
    var uniqueurl = req.params.uniqueurl;
    users.undo('user_likes', 'uniqueurl = ' + '"' + uniqueurl + '" AND liked_activities = ' + req.params.id + ' LIMIT 1', function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

// show 'liked ideas from both users
router.get('/api/foods/both:uniqueurl', function (req, res) {
    activities.both(req.params.uniqueurl, function (data) {
        console.log(data);
        res.render('both-activities', { activites_data: data });
    });
});


// USER ROUTES

// creates new user
router.post('/api/users/register', function (req, res) {
    newUser = `'${req.body.acct_name.split(' ').join('_')}', '${req.body.acct_name}', '${req.body.secret_word}', '${req.body.userone_name}', '${req.body.usertwo_name}'`;

    users.new(newUser, function (result) {
        console.log(result);
        res.redirect('/');
    });
});


// login verification
router.post('/auth', function (req, res) {
    var acct_name = req.body.acct_name;
    var secret_word = req.body.secretword;
    if (acct_name && secret_word) {
        users.login(acct_name, secret_word, function (results) {
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = acct_name;
                res.redirect('/dashboard/' + results[0].uniqueurl);
            } else {
                res.send('Incorrect Username and/or Password!');
            }
            res.end();
        });
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
});

router.get('/dashboard/:uniqueurl/', function (req, res) {
    users.data(req.params.uniqueurl, function (data) {
        console.log('data: ' + data);
        res.render('userselection', { user_data: data });
    });
});

router.get('/dashboard/:uniqueurl/:username', function (req, res) {
    // var username = req.params.username;
    users.data(req.params.uniqueurl, function (data) {
        console.log('data: ' + data)
        res.render('dashboard', { user_data: data });
    });
});

router.get('/dashboard/:uniqueurl/:username', function (req, res) {
    var username = req.params.username;
    users.data(req.params.uniqueurl, function (data) {
        res.render('both_foods', { meal_img: 'https://i.pinimg.com/originals/03/c4/15/03c415e3dc2ca9fdac2c1e747dde4696.jpg' });
    })
});

router.get('/dashboard/:uniqueurl/:username', function (req, res) {
    var username = req.params.username;
    users.data(req.params.uniqueurl, function (data) {
        res.render('both_activities', { event_img: 'https://www.highlandvillage.org/ImageRepository/Document?documentID=5524' });
    })
});
// exports express router
module.exports = router;