var express = require('express');
var helmet = require('helmet');
var app = express();
var mongojs = require('mongojs');
var bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');

var db = mongojs('fintechlist', ['fintechlist', 'privatelist']);
var env = require('dotenv/config');

//config
app.use(helmet());
app.use(bodyparser.json());
app.use(cookieParser());

// set the view engine to ejs
app.set('view engine', 'ejs');

//Routes
app.use('/api', require('./routes/api'));
app.use('/twitter', require('./routes/twitter'));
app.use('/dev', require('./routes/dev'));

app.use(express.static('public'));
app.use(express.static(__dirname + "/start/auth"));

//index
app.get('/', function(req, res){
    res.send("Hello word from server.js");
});

// index page 
app.get('/test', function(req, res) {
    res.render('page/test');
});

//////
app.listen(process.env.PORT);
console.log("Server running on port "+process.env.PORT);


