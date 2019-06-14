var expect = require("chai").expect;
var authenticatedUser = request.agent(app);
var userName = request.agent(app);
var password = request.agent(app);
var userCredentials = {
    couple_name: 'SquidBob',
    secret_word: 'garyTheSnail'
}

// checks to see if user signed in with correct credential and send to dashboard
before(function (done) {
    authenticatedUser
        .post('/login')
        .send(userCredentials)
        .end(function (err, response) {
            expect(response.statusCode).to.equal(200);
            expect('Location', '/dashboard');
            done();
        });
});

// Testing for username input
describe("userName", function() {
    it("to capitalize initial letters of each word when displayed", function () {
        expect(userName("seth smith")).to.equal("Seth Smith");
    });

    it("to lowerscase name when sent to table", function () {
        expect(userName("Seth Smith")).to.equal("seth smith");
    });

    it("to change spces to _ when sent to table", function () {
        expect(userName("Seth Smith")).to.equal("seth_smith");
    });
});

//testing password for requirements
describe("password", function() {
    it("to check if the username has a capital letter", function () {
        expect(password("coolBeans")).to.equal("coolBeans")
    });

    it("to check if the username has a unique character", function () {
        expect(password("cool#beans")).to.equal("cool#beans")
    });
});
