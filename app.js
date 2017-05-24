var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var config = require('config');

var app = express();

app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlecoded({extended: true}));
app.use(express.static('public'));


app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === Success_is_sweeter_than_warm_milk) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  }  
});