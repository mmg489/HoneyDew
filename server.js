// dependencies
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

// sets port with localhost or process.env
var PORT = process.env.PORT || 8080;

// allows use of static files in 'public' directory
app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// sets engine to handlebars, set default html layout to main.handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// connects css
app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// imports 'controller' file as router
var routes = require('./controllers/honey_controller.js');

app.use(routes);

// starts localhost through port number
app.listen(PORT, function() {
    console.log('Server listening on: http://localhost:' + PORT);
});

module.exports = app;