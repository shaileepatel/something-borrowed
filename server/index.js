var express = require('express');
var bodyParser = require('body-parser');
var db = require('../db');  //initialize database
var router = require('../router');
var app = express();

app.use(express.static(__dirname + '/../public'));
app.use('/api', router);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
