// imports ORM
var orm = require("../config/orm.js");

// creates object with methods - uses ORM and controller to manipulate database table
var foods = {
  all: function(cb) {
    orm.all('foods', function(res) {
      cb(res);
    });
  },
  create: function(mealidea, cb) {
    orm.create('foods', 'meal_name', mealidea, cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update('foods', 'swipe = swipe + 1', condition, cb);
  },
  undo: function(id, cb) {
    var condition = "id=" + id;
    orm.update('foods', 'swipe = swipe - 1', condition, cb);
  },
  delete: function(id, cb) {
    var condition = "id=" + id;
    orm.delete('foods', condition, function(res) {
        cb(res);
    });
  }
};

// exports foods object for use in controller
module.exports = foods;
