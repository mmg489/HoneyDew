// required dependencies
var express = require('express');
var router = express.Router();

var foods = require('../models/foods.js');


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


// exports express router
module.exports = router;