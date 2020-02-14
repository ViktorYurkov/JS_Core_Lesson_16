var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();
server.use(jsonParser);

server.use(express.static(__dirname));

server.get("/", function (req, resp) {
    console.log('My SERVER');
});

server.get('/userGet', function (request, response) {
    var obj = request.query;
    for(var k in obj){
        console.log(obj[k]);
    }

    //response.send('You have succesfully used GET : ' + JSON.stringify(request.query));
    response.send(obj);
});


server.post('/userPost', function (req, resp) {
    var obj = req.body;
    for(var k in obj){
        console.log(obj[k]);
    }
    
    //obj.name = 'Petro';
    //obj.age = 100;

    resp.send(obj);
});


server.listen(3001);
