// required dependencies
var express = require('express');
var router = express.Router();

// imports foods and activities objects with methods
var foods = require('../models/foods.js');
var activities = require('../models/activities.js');
var users= require('../models/users.js');

// basic homepage route
router.get('/', function (req, res) {
    res.render('index');
});

router.get('/dashboard', function (req, res) {
    res.render('dashboard');
});

router.get('/login', function (req, res) {
    users.all(function(data){
        res.render('login', {users_data: data})
    })
});

router.get('/table', function (req, res) {
    res.render('table');
});

router.get('/api/like/foods', function (req, res) {
    foods.all(function(data) {
        res.render('swipe', {foods_data: data})
    })
});

router.get('/api/like/activities', function (req, res) {
    activities.all(function(data) {
        res.render('swipe', {activites_data: data})
    })
});


router.post('/api/add')

// exports express router
module.exports = router;