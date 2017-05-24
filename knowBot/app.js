var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

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
