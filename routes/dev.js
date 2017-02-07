var express = require('express');
var fs = require('fs');

var router = express.Router();

var data = require("./data/data.json");

//compare 2 lists of ingredients
function isEqualRecipies(r1, r2){
    if (r1 == null && r2 == null) return true;
    
    if (r1 == null || r2 == null) return false;
    if (r1.length != r2.length) return false;

    //Optimiser la recherche avec une fonction sort
    var found = 0;
    for(var i =0; i < r1.length; i++){
        for(var j =0; j < r2.length; j++){
            if (r1[i].id == r2[j].id && r1[i].quantity == r2[j].quantity) found++;
        }
    }

    return found == r1.length;
}

//Take a list of ingredients and check if there is a name
function findRecipyName(recipy){

    for(var i=0; i< data.listOfRecipies.length; i++){
        var r = data.listOfRecipies[i];
        if (isEqualRecipies(recipy, r.ingredients)) return r.name;
    }

    return "inconnu!";
}

router.get('/recipy/:id', function(req, res){
    //should take params from the request body req.body
    //console.log(req.body);
    var obj = data.listOfRecipies[req.params.id].ingredients;

    res.json(findRecipyName(obj));
})

router.get('/fruits', function(req, res){
    res.json(data.listOfFruits);
})

router.get('/save/:id', function(req, res){
    fs.writeFile("./savefile.data", JSON.stringify(data.listOfRecipies[req.params.id]), function(err) {
    if(err) {
        return console.log(err);
    }

    res.send("The file was saved!");
});
})

module.exports = router;