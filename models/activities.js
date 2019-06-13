// imports ORM
var orm = require("../config/orm.js");

// creates object with methods - uses ORM and controller to manipulate database table
var activities = {
  all: function(cb) {
    orm.all('activities', function(res) {
      cb(res);
    });
  },
  create: function(mealidea, cb) {
    orm.create('activities', 'event_name', mealidea, cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update('activities', 'swipe = swipe + 1', condition, cb);
  },
  undo: function(id, cb) {
    var condition = "id=" + id;
    orm.update('activities', 'swipe = swipe - 1', condition, cb);
  },
  delete: function(id, cb) {
    var condition = "id=" + id;
    orm.delete('activities', condition, function(res) {
        cb(res);
    });
  }
};

// exports activities object for use in controller
module.exports = activities;
