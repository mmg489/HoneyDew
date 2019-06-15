var chai = require("chai");
var chaiHttp = require('chai-http');
//var input = require("./honey_controller.js");
var should = chai.should();
var expect = chai.expect();

var server = require('./server.js');
var foods = require('./models/foods.js');
var activities = require('./models/activities.js');
var users = require('./models/users.js');


chai.use(chaiHttp);
describe('/GET foods', () => {
    it('it should GET all the foods', (done) => {
        chai.request(server)
            .get('/api/foods/like/:uniqueurl')
            .end((err, res) => {
                res.should.have.status(200);
            done();
            });
    });
});

describe('/PUT/:id foods', () => {
    it('it should UPDATE a food given the id', (done) => {
        let food = {id: 500, meal_name: "Ramen", meal_img: "http://blog.williams-sonoma.com/wp-content/uploads/2017/07/july-19-Pork-Belly-Ramen-652x978.jpg", swipe: 2}
        foods.update(food.id, (err, res) => {
            chai.request(server)
            .put('/api/foods/liked/' + food.id)
            .send({id: 500, meal_name: "Ramen", meal_img: "http://blog.williams-sonoma.com/wp-content/uploads/2017/07/july-19-Pork-Belly-Ramen-652x978.jpg", swipe: 2})
            .end((err, res) => {
                res.should.have.status(200);
            done();
            });
        });
    });
});

describe('/PUT/:id foods', () => {
    it('it should UPDATE a food given the id', (done) => {
        let food = {id: 500, meal_name: "Ramen", meal_img: "http://blog.williams-sonoma.com/wp-content/uploads/2017/07/july-19-Pork-Belly-Ramen-652x978.jpg", swipe: 2}
        foods.update(food.id, (err, res) => {
            chai.request(server)
            .put('/api/foods/undo/' + food.id)
            .send({id: 500, meal_name: "Ramen", meal_img: "http://blog.williams-sonoma.com/wp-content/uploads/2017/07/july-19-Pork-Belly-Ramen-652x978.jpg", swipe: 2})
            .end((err, res) => {
                res.should.have.status(200);
            done();
            });
        });
    });
});






// describe("Input", function() {
//   it("to verify if username is blank and if password is blank", function() {
//     expect(input(" ", " ")).to.equal(406);
//   });

//   it("to verify if username is blank but password is invalid", function() {
//     expect(input(" ", "Invalid")).to.equal(406);
//   });

//   it("to verify if usernme is blank but password is valid", function() {
//     expect(input(" ", "Valid")).to.equal(406);
//   });

//   it("to verify if username is invalid but password is blank", function() {
//     expect(input("Invalid", " ")).to.equal(406);
//   });

//   it("to verify is username is valid but password is blank", function() {
//     expect(input("Valid", " ")).to.equal(406);
//   });

//   it("to verify if username is invalid and password is invalid", function() {
//     expect(input("Invalid", "Invalid")).to.equal(406);
//   });

//   it("to verify if username is invalid and password is valid", function() {
//     expect(input("Invalid", "Valid")).to.equal(406);
//   });

//   it("to verify if username is valid and password is invalid", function() {
//     expect(input("Valid", "Invalid")).to.equal(406);
//   });

//   it("to verify if usernme is valid and password in valid", function() {
//     expect(input("Valid", "Valid")).to.equal(200);
//   });

//   it("to verify is username is used", function() {
//     expect(input("Valid", "Valid")).to.equal(200);
//   });
// });
