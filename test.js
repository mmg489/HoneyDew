var chai = require('chai');
var chaiHttp = require('chai-http');
//var input = require("./honey_controller.js");
var should = chai.should();
var expect = chai.expect();

var server = require('./server.js');
var foods = require('./models/foods.js');
var activities = require('./models/activities.js');
var users = require('./models/users.js');


//FOOD

//testing on pulling all foods
chai.use(chaiHttp);
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



//testing updates of liked countsfor foods
describe('/PUT/:uniqueurl/:id foods', () => {
    it('it should UPDATE a food like given the id', (done) => {
        let food = {id: 500, uniqueurl: " ", meal_name: "Ramen", meal_img: "http://blog.williams-sonoma.com/wp-content/uploads/2017/07/july-19-Pork-Belly-Ramen-652x978.jpg", swipe: 2}
        foods.all(food.id, food.uniqueurl, (err, res) => {
            chai.request(server)
            .put('/api/foods/like/' + food.uniqueurl + food.id)
            .send({id: 500, uniqueurl: " ", meal_name: "Ramen", meal_img: "http://blog.williams-sonoma.com/wp-content/uploads/2017/07/july-19-Pork-Belly-Ramen-652x978.jpg", swipe: 2})
            .end((err, res) => {
                res.should.have.status(200);
            done();
            });
        });
    });
});

// // testing for undoing likes on foods
// describe('/PUT/:id foods', () => {cd
//     it('it should UPDATE a food unlike given the id', (done) => {
//         let food = {id: 500, meal_name: "Ramen", meal_img: "http://blog.williams-sonoma.com/wp-content/uploads/2017/07/july-19-Pork-Belly-Ramen-652x978.jpg", swipe: 2}
//         foods.update(food.id, (err, res) => {
//             chai.request(server)
//             .put('/api/foods/undo/' + food.id)
//             .send({id: 500, meal_name: "Ramen", meal_img: "http://blog.williams-sonoma.com/wp-content/uploads/2017/07/july-19-Pork-Belly-Ramen-652x978.jpg", swipe: 2})
//             .end((err, res) => {
//                 res.should.have.status(200);
//             done();
//             });
//         });
//     });
// });

// // shows liked idea from both users
// describe('/GET foods', function() {
//     it('it should GET all foods liked from both users', function(done) {
//         chai.request(server)
//             .get('/api/foods/both:uniqueurl')
//             .end(function (err, res) {
//                 res.should.have.status(200);
//                 done();
//             });
//     });
// });


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
// describe('/PUT/:id activities', () => {
//     it('it should UPDATE an activity like given the id', (done) => {
//         let food = {id: 650, event_name: "Home Improvement", event_img: "https://www.lincolnsdacu.org/wp-content/uploads/2018/08/q-and-a-july-13.jpg", swipe: 2}
//         foods.update(food.id, (err, res) => {
//             chai.request(server)
//             .put('/api/activities/liked/:uniqueurl/' + food.id + users.uniqueurl)
//             .send({id: 650, event_name: "Home Improvement", event_img: "https://www.lincolnsdacu.org/wp-content/uploads/2018/08/q-and-a-july-13.jpg", swipe: 2})
//             .end((err, res) => {
//                 res.should.have.status(200);
//             done();
//             });
//         });
//     });
// });

// //testing updates for undoing like on activity
// describe('/PUT/:id activities', () => {
//     it('it should UPDATE an activity unlike given the id', (done) => {
//         let food = {id: 650, event_name: "Home Improvement", event_img: "https://www.lincolnsdacu.org/wp-content/uploads/2018/08/q-and-a-july-13.jpg", swipe: 2}
//         foods.update(food.id, (err, res) => {
//             chai.request(server)
//             .put('/api/activities/undo/' + food.id + users.uniqueurl)
//             .send({id: 650, event_name: "Home Improvement", event_img: "https://www.lincolnsdacu.org/wp-content/uploads/2018/08/q-and-a-july-13.jpg", swipe: 2})
//             .end((err, res) => {
//                 res.should.have.status(200);
//             done();
//             });
//         });
//     });
// });

// //show liked from both users
// describe('/GET activities', function() {
//     it('it should GET all liked activities from both users', function(done) {
//         chai.request(server)
//             .get('/api/foods/both:uniqueurl')
//             .end(function (err, res) {
//                 res.should.have.status(200);
//                 done();
//             });
//     });
// });




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

