// required dependencies
var express = require('express');
var router = express.Router();


var activities = require('../models/activities.js');


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
router.get('/api/activities/both', function (req, res) {
    activities.both(function (data) {
        res.render('both-activities', { activites_data: data })
    })
});



// exports express router
module.exports = router;