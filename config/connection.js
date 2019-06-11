var mysql = require('mysql');

require('dotenv').config();

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
    connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port:3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'honeydew_db'
})
};
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
});

module.exports = connection;