var express = require('express');
var Twitter = require('twitter');
var env = require('dotenv/config');

var router = express.Router();

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.TOKEN_KEY,
  access_token_secret: process.env.TOKEN_SECRET
});
 
var params = {}
router.get('/:object/:function/:id', function(req, res){
    params.screen_name = req.params.id;
    var api = req.params.object +"/"+req.params.function;

    client.get(api, params, function(error, tweets, response) {
        res.json(tweets);
    });
});

module.exports = router;