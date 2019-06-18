// imports ORM
var orm = require("../config/orm.js");

// creates object with methods - uses ORM and controller to manipulate database table
var foods = {
  all: function (uniqueurl, cb) {
    orm.all('foods', function (res) {
      cb(res);
    });
  },
  both: function (col, uniqueurl, cb) {
    orm.both('user_likes', col, uniqueurl, function (res) {
      cb(res);
    });
  },
  delete: function (id, cb) {
    var condition = "id=" + id;
    orm.delete('foods', condition, function (res) {
      cb(res);
    });
  }
};

// exports foods object for use in controller
module.exports = foods;
