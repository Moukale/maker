var express = require('express');
var helmet = require('helmet');
var app = express();
var mongojs = require('mongojs');
var bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');

var db = mongojs('fintechlist', ['fintechlist', 'privatelist']);
var env = require('dotenv/config');

app.use(function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
       next();
   });

//config
app.use(helmet());//This one is for security purpose
app.use(bodyparser.json());
app.use(cookieParser());

// set the view engine to ejs
app.set('view engine', 'ejs');

//Routes
app.use('/api', require('./routes/api'));
app.use('/twitter', require('./routes/twitter'));
app.use('/instagram', require('./routes/instagram'));
app.use('/dev', require('./routes/dev'));

app.use(express.static('public'));
app.use('/node_modules',express.static("node_modules"));//may be dangerous


app.get('/', function(req, res) {
    res.render('./page/index');
});

////// START TO LISTEN
var port = process.env.PORT || 3000;
app.listen(port);
console.log("Server running on port "+port);


