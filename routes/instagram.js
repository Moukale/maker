var express = require('express');
const http = require('http');
var env = require('dotenv/config');
var request = require("request");

var router = express.Router();


var BASE_URL = process.env.INSTA_BASE_URI;
var config = {
    client_id: process.env.INSTA_CLIENT_ID,
    client_secret: process.env.INSTA_CLIENT_SECRET,
    redirect_uri: process.env.INSTA_REDIRECT_URI,
    tokenObject: null,
    access_token: ''
}
//Authentication process

router.get("/oauth-/", function(req, res){
    //On client side?
    var data = {
        method: "GET",
        uri: "https://api.instagram.com/oauth/authorize",
        form:{
            client_id: config.client_id ,
            redirect_uri: config.redirect_uri+"/oauth/",
            response_type:'code'
        }
    }

    request(data, function(error, response, body) {
        console.log(body); //http.get(, this.initToken);
    });
    
})

router.get("/oauth", function(req, res){
    //save for later
    config.code = req.query.code;

    if(config.code){
        var data = {
            method: "POST",
            uri: "https://api.instagram.com/oauth/access_token",
            form: {
                client_id: config.client_id ,
                client_secret: config.client_secret,
                code: config.code,
                redirect_uri: config.redirect_uri+"/oauth/",
                grant_type: "authorization_code"
            }
        }
        
        request(data, function(error, response, body) {
            config.tokenObject = body;
            res.send(body); 
        });
    }
    
})

///
    
function popular (callback){
    getJSON(this.endpoint("/media/popular"), callback);
}

function self(callback){        
    getJSON(this.endpoint("/users/self"), callback);
}

function getJSON(url, callback, type, data){       
    $.ajax(url, {
        headers: {
            "Access-Control-Allow-Origin": '*',
            "Access-Control-Allow-Methods": 'PUT, GET, POST, DELETE, OPTIONS',
            "Access-Control-Allow-Headers": 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token'
        },
        type: type || "GET",
        data: data,
        dataType: ( type == "POST" ? "json" : "jsonp"),
        success: function(response){
            if (typeof callback == 'function') callback(response);
        }
    });
}
 

//Start the script

module.exports = router;