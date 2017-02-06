var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
    res.send("That's api zone for you!");
});

module.exports = router;

//Generic Object
function createObject(keys, data){
    var obj = {};
    
    for(var i in keys){
        obj[keys[i]] = data[keys[i]];
    }

    return obj;
}

//Generic api
function createApi(opt){
    if(!opt.hasOwnProperty("name") || !opt.hasOwnProperty("collection")){
        console.log("ERR: NO NAME or COLLECTION for API");
        return;
    }

    console.log("create Api : "+opt.name);
    //get -> list
    app.get('/'+opt.name, function(ref, res){
        console.log("/"+opt.name+"[get]");

        opt.collection.find().sort({name:1},function(err, docs){
            res.json(docs);
        });

    });

    //get -> one by id
    app.get('/'+opt.name+'/:id', function(req, res){
        var id = req.params.id;

        console.log("/"+opt.name+"[get]:"+id);
        opt.collection.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
            res.json(doc);
        });

    });

    //get -> search with text
    app.get('/'+opt.name+'/search/:text', function(req, res){
        var text = req.params.text;

        console.log("/"+opt.name+"[search]:"+text);
        opt.collection.find( 
            {
                $text:
                {
                    $search: text,
                    $caseSensitive: false
                },
            },{
                $orderby: {
                    name: 1
                }
            }, function(err, doc){
            res.json(doc);
        });

    });

    //insert -> new one
    app.post('/'+opt.name, function(req, res){
        console.log("/"+opt.name+"[post]");
        opt.collection.insert(req.body, function(err, doc){
            res.json(doc);
        });

    });

    //delete -> one by id
    app.delete('/'+opt.name+'/:id', function(req, res){
        var id = req.params.id;

        console.log("/"+opt.name+"[delete]:"+id);
        opt.collection.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
            res.json(doc);
        })

    });

    if(opt.hasOwnProperty("update")){
        console.log("create update Api : "+opt.update);
       
        //update -> id / data 
        app.put('/'+opt.name+'/:id', function(req, res){
            var id = req.params.id;

            console.log("/"+opt.name+"[update]:"+id);
            console.log(createObject(opt.update, req.body));
            opt.collection.findAndModify(
                {
                    query :{_id: mongojs.ObjectId(id)}, 
                    update : {$set: createObject(opt.update, req.body)},
                    new: true
                }, function(err, doc){
                res.json(doc);}
            )

        });
    }

}


