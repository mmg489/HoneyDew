// required dependencies
var express = require('express');
var router = express.Router();

// 
router.get('/', function (req, res) {
    res.render('index');
})

// exports express router
module.exports = router;