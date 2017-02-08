var express = require('express');
var helmet = require('helmet');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('fintechlist', ['fintechlist', 'privatelist']);
var bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');
var route_api = require('./routes/api');
var route_twitter = require('./routes/twitter');
var env = require('dotenv/config');
var route_dev = require('./routes/dev');

app.use(helmet());
app.use(express.static('public'));
app.use(express.static(__dirname + "/start/auth"));
app.use(bodyparser.json());
app.use(cookieParser());

//Routes
app.use('/api', route_api);
app.use('/twitter', route_twitter);
app.use('/dev', route_dev);

//index
app.get('/', function(req, res){
    res.send("Hello word from server.js");
});

//////
var port = process.env.PORT || 3000;
app.listen(port);
console.log("Server running on port "+port);


