// Node.js notation for importing packages
var express = require('express');

// Spin up a server
var app = express();


// Serve static files from the main directory
app.use(express.static(__dirname));
var port = process.env.PORT || 8083;

//  ____________________________________
// |                                    |
// |       Setting up Page Routes       |
// |____________________________________|
//

app.get('/', function(req, res){
    res.sendFile("index.html", {root: '.'});
});

app.get('/blog/poly-express', function(req, res){
    res.sendFile("/blog/poly-express.html", {root: '.'});
});

app.get('/silly-apps', function(req, res){
    res.sendFile("/blog/silly-apps.html", {root: '.'});
});


// Tell the app to listen for requests on port 3001
app.listen(port, function () {
  console.log('Example app listening on port '+ port + '!');
});
