var mysql = require('mysql');

require('dotenv').config();

var connection;

if (process.env.JAWSDB_URL) {
<<<<<<< HEAD
	connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {


	connection = mysql.createConnection({
	host: process.env.DB_HOST,
	port:3306,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: "honeydew_db"
	})
=======
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
>>>>>>> 1a6b78b2ec704e62989b9cbdd0ab793fe761bbb6
};
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
});

module.exports = connection;