// imports ORM
var orm = require("../config/orm.js");

// creates object with methods - uses ORM and controller to manipulate database table
var foods = {
  all: function (uniqueurl, cb) {
    orm.all('foods', function (res) {
      cb(res);
    });
  },
<<<<<<< HEAD
  //create: function(mealidea, cb) {
  //  orm.create('foods', 'meal_name', mealidea, cb);
  //},

  delete: function(id, cb) {
=======
  create: function (mealidea, cb) {
    orm.create('foods', 'meal_name', mealidea, cb);
  },
  update: function (id, cb) {
    var condition = "id=" + id;
    orm.update('foods', 'swipe = swipe + 1', condition, cb);
  },
  undo: function (id, cb) {
    var condition = "id=" + id;
    orm.update('foods', 'swipe = swipe - 1', condition, cb);
  },
  both: function (col, uniqueurl, cb) {
    orm.both('user_likes', col, uniqueurl, function (res) {
      cb(res);
    });
  },
  delete: function (id, cb) {
>>>>>>> ee2e05fcbfcb7b64bc341815bb72c5e10f3092ea
    var condition = "id=" + id;
    orm.delete('foods', condition, function (res) {
      cb(res);
    });
  }
};

// exports foods object for use in controller
module.exports = foods;
