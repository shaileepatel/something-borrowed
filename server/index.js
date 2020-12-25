var express = require('express');
var bodyParser = require('body-parser');
var db = require('../db');  //initialize database

var app = express();

app.use(express.static(__dirname + '/../client/dist'));


app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
