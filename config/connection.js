var mysql = require('mysql');

require('dotenv').config();

var connection;

if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else if (process.env.AWS_HOST) {
    connection = mysql.createConnection({
        host: process.env.AWS_HOST,
        port: 3306,
        user: process.env.AWS_USER,
        password: process.env.AWS_PASS,
        database: 'honeydew'
    })
 } else {
     connection = mysql.createConnection({
         host: process.env.DB_HOST,
         port: 3306,
         user: process.env.DB_USER,
         password: process.env.DB_PASS,
         database: 'honeydew'
     })
 };
connection.connect(function (err) {
    if (err) throw err;
    console.log("database connected.");
});

module.exports = connection;