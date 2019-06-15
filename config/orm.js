// imports mysql connection to make mysql queries
var connection = require("../config/connection.js");

// helper to create number of questions marks needed in mysql query
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// converts object into mysql query
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// object relational mapping (ORM) to use throughout app, easier to create mysql queries
var orm = {

    // shows all parts of a table
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // creates a new item in the table
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    create: function (table, object, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " SET ?";


        console.log(queryString);

        connection.query(queryString, object, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // updates/changes a value for an item in the table
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objColVals;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // deletes an item from a table
    delete: function (table, condition, cb) {
        var queryString = "DELETE FROM " + table;

        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    login: function (acct_name, secret_word, cb) {
        if (acct_name && secret_word) {
            connection.query('SELECT * FROM users WHERE acct_name = ? AND secret_word = ?', [acct_name, secret_word], function (err, result) {

                if (err) {
                    throw err;
                }
                cb(result);
            })
        };
    },
    find: function (table, col, val, cb) {
        var queryString = 'SELECT * FROM ' + table + ' WHERE ' + col + ' = ?';
        connection.query(queryString, val, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// exports ORM for use in model
module.exports = orm;
