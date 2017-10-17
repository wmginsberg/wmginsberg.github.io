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

// --------------- BLOG POSTS ----------------

app.get('/blog/poly-express', function(req, res){
    res.sendFile("/blog/poly-express.html", {root: '.'});
});

app.get('/blog/poly-flask', function(req, res){
    res.sendFile("/blog/poly-flask.html", {root: '.'});
});

app.get('/blog/raspi-arduino', function(req, res){
    res.sendFile("/blog/raspi-arduino.html", {root: '.'});
});

// --------------- EXPERIMENTS ----------------

app.get('/silly-apps', function(req, res){
    res.sendFile("/blog/silly-apps.html", {root: '.'});
});

app.get('/ultimate-guide', function(req, res){
    res.sendFile("/blog/ultimate-guide.html", {root: '.'});
});

// --------------- POSTS ----------------

app.get('/where-ive-been', function(req, res){
    res.sendFile("/where-ive-been.html", {root: '.'});
});

app.get('/petsit', function(req, res){
    res.sendFile("/petsit.html", {root: '.'});
});

app.get('/resume-pdf', function(req, res){
    res.sendFile("/resume-pdf.pdf", {root: '.'});
});


// Tell the app to listen for requests on port 8083
app.listen(port, function () {
  console.log('Example app listening on port '+ port + '!');
});
