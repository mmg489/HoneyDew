var chai = require('chai');
var chaiHttp = require('chai-http');
//var input = require("./honey_controller.js");
var should = chai.should();
var expect = chai.expect();

var server = require('./server.js');
var foods = require('./models/foods.js');
var activities = require('./models/activities.js');
var users = require('./models/users.js');


//testing route to homepage
chai.use(chaiHttp);
describe('/GET index', function() {
    it('it should GET index page', function(done) {
        chai.request(server)
            .get('/')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});




//FOOD

//testing on pulling all foods
describe('/GET foods', function() {
    it('it should GET all the foods', function(done) {
        chai.request(server)
            .get('/api/foods/like/:uniqueurl')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});



//testing updates of liked counts for foods
describe('/PUT/:uniqueurl/:mealname foods', function() {
    it('it should UPDATE a food like given the id', function(done) {
        let user = {id: 500, uniqueurl: "a4b2217d-9163-11e9-bcbb-0200cecd583e", meal_name: "Ramen"}
        users.insert('user_likes', 'uniqueurl, liked_foods', '"' + user.uniqueurl + '", "'  + user.meal_name +'"', function(err, res) {
            chai.request(server)
            .put('/api/foods/like/' + user.uniqueurl + '/' + user.meal_name)
            .send({id: 500, uniqueurl: "a4b2217d-9163-11e9-bcbb-0200cecd583e", meal_name: "Ramen"})
            .end(function(err, res) {
                res.should.have.status(200);
            done();
            });
        });
    });
});

// // testing for undoing likes on foods
describe('/PUT/:uniqueurl/:mealname foods', function() {
    it('it should UPDATE a food unliked given the mealname', function(done) {
        let user = {id: 500, uniqueurl: "a4b2217d-9163-11e9-bcbb-0200cecd583e", meal_name: "Ramen"}
        users.insert('user_likes', 'uniqueurl, liked_foods', '"' + user.uniqueurl + '", "'  + user.meal_name +'"', function(err, res) {
            chai.request(server)
            .put('/api/foods/like/' + user.uniqueurl + '/' + 'undo' + '/' + user.meal_name)
            .send({id: 500, uniqueurl: "a4b2217d-9163-11e9-bcbb-0200cecd583e", meal_name: "Ramen"})
            .end(function(err, res) {
                res.should.have.status(200);
            done();
            });
        });
    });
});

// // shows liked idea from both users
describe('/GET foods', function() {
    it('it should GET all foods liked from both users', function(done) {
        chai.request(server)
            .get('/api/foods/both/:uniqueurl')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});


// //ACTIVITIES

//pulls all of the activities
describe('/GET activities', function() {
    it('it should GET all activities', function(done) {
        chai.request(server)
            .get('/api/activities/like/:uniqueurl')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});

// //testing updates of liked counts for activities
describe('/PUT/:uniqueurl/:eventname activities', function() {
    it('it should UPDATE a food like given the eventname', function(done) {
        let user = {id: 500, uniqueurl: "a4b2217d-9163-11e9-bcbb-0200cecd583e", event_name: "Vampire Hunting"}
        users.insert('user_likes', 'uniqueurl, liked_activities', '"' + user.uniqueurl + '", "'  + user.event_name +'"', function(err, res) {
            chai.request(server)
            .put('/api/activities/like/' + user.uniqueurl + '/' + user.event_name)
            .send({id: 500, uniqueurl: "a4b2217d-9163-11e9-bcbb-0200cecd583e", event_name: "Vampire Hunting"})
            .end(function(err, res) {
                res.should.have.status(200);
            done();
            });
        });
    });
});


// //testing updates for undoing like on activity
describe('/PUT/:uniqueurl/:eventname foods', function() {
    it('it should UPDATE a food unliked given the eventname', function(done) {
        let user = {id: 500, uniqueurl: "a4b2217d-9163-11e9-bcbb-0200cecd583e", event_name: "Vampire Hunting"}
        users.insert('user_likes', 'uniqueurl, liked_activities', '"' + user.uniqueurl + '", "'  + user.event_name +'"', function(err, res) {
            chai.request(server)
            .put('/api/activities/like/' + user.uniqueurl + '/' + 'undo' + '/' + user.event_name)
            .send({id: 500, uniqueurl: "a4b2217d-9163-11e9-bcbb-0200cecd583e", event_name: "Vampire Hunting"})
            .end(function(err, res) {
                res.should.have.status(200);
            done();
            });
        });
    });
});

// //show liked from both users
describe('/GET activities', function() {
    it('it should GET all liked activities from both users', function(done) {
        chai.request(server)
            .get('/api/activities/both/:uniqueurl')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});




// USERS

//testing to create new user
describe('POST users', () => {
    it('it should POST new user', (done) => {
        let users = {
            id: 430,
            uniqueurl: " ",
            acct_name: "Gasana",
            couple_name: "Gasana",
            secret_word: "lovebirds",
            userone_name: "Ana",
            usertwo_name: "Gaspard",
        }
        chai.request(server)
            .post('/api/users/register')
            .send(users)
            .end((err, res) => {
                res.should.have.status(200);
            done();
            });
    });
});

// testing the login verification
describe('POST users', () => {
    it('it should POST verify the login', (done) => {
        let users = {
            id: 430,
            uniqueurl: " ",
            acct_name: "Gasana",
            couple_name: "Gasana",
            secret_word: "lovebirds",
            userone_name: "Ana",
            usertwo_name: "Gaspard",
        }
        chai.request(server)
            .post('/auth')
            .send(users)
            .end((err, res) => {
                res.should.have.status(200);
            done();
            });
    });
});

// Displays users name and allows them to pick who is using it
describe('/GET users', function() {
    it('it should GET allow the user to chose who is using it', function(done) {
        chai.request(server)
            .get('/dashboard/:uniqueurl/')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});

// Displays usersname with the avatars
describe('/GET users', function() {
    it('it should GET the users names and diplay them with an avatar', function(done) {
        chai.request(server)
            .get('/dashboard/:uniqueurl/:username')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});

// tests if the images of foods that were both liked shown
describe('/GET users', function() {
    it('it should GET the images that were both liked by the users for foods', function(done) {
        chai.request(server)
            .get('/dashboard/:uniqueurl/:username')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});

// testing to see if the images of activites that were both liked are shown
describe('/GET users', function() {
    it('it should GET the images that were both liked by the users for activities', function(done) {
        chai.request(server)
            .get('/dashboard/:uniqueurl/:username')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});


