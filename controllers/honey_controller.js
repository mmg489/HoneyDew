// required dependencies
var express = require('express');
var router = express.Router();

// imports foods and activities objects with methods
var foods = require('../models/foods.js');
var activities = require('../models/activities.js');

// basic homepage route
router.get('/', function (req, res) {
    res.render('index');
});

router.get('/dashboard', function (req, res) {
    res.render('dashboard');
});

router.get('/both', function (req, res) {
    res.render('both');
});

router.get('/api/foods/like', function (req, res) {
    foods.all(function (data) {
        res.render('swipe', { foods_data: data })
    })
});

router.get('/api/activities/like', function (req, res) {
    activities.all(function (data) {
        res.render('swipe', { activites_data: data })
    })
});

router.post('/api/foods/add', function (req, res) {
    foods.create('')
})

// exports express router
module.exports = router;