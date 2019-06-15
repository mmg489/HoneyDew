var expect = require("chai").expect;
var input = require("../server");

describe("Input", function() {
  it("to verify if username is blank and if password is blank", function() {
    expect(input(" ", " ")).to.equal(406);
  });

  it("to verify if username is blank but password is invalid", function() {
    expect(input(" ", "Invalid")).to.equal(406);
  });

  it("to verify if usernme is blank but password is valid", function() {
    expect(input(" ", "Valid")).to.equal(406);
  });

  it("to verify if username is invalid but password is blank", function() {
    expect(input("Invalid", " ")).to.equal(406);
  });

  it("to verify is username is valid but password is blank", function() {
    expect(input("Valid", " ")).to.equal(406);
  });

  it("to verify if username is invalid and password is invalid", function() {
    expect(input("Invalid", "Invalid")).to.equal(406);
  });

  it("to verify if username is invalid and password is valid", function() {
    expect(input("Invalid", "Valid")).to.equal(406);
  });

  it("to verify if username is valid and password is invalid", function() {
    expect(input("Valid", "Invalid")).to.equal(406);
  });

  it("to verify if usernme is valid and password in valid", function() {
    expect(input("Valid", "Valid")).to.equal(200);
  });
});
