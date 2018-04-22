var express = require('express');
var app = express();
var Datastore = require('nedb'),
  db = new Datastore({
    filename: 'db.json',
    autoload: true
  });
var fs = require('fs');
var handlebars = require('handlebars');

app.get(['/everyone','/'], function (req, res) {
  fs.readFile('everyone.hbs', 'utf8', (err, data) => {
    var template = handlebars.compile(data);
    db.find({}, {}, (err, docs) => {
      var rendered = template({
        people: docs
      });
      res.contentType('text/html');
      res.status(200).send(rendered);
    });
  });
});

app.get('/male', function (req, res) {
  fs.readFile('everyone.hbs', 'utf8', (err, data) => {
    var template = handlebars.compile(data);
    db.find({
      gender: 'male'
    }, {}, (err, docs) => {
      var rendered = template({
        people: docs
      });
      res.contentType('text/html');
      res.status(200).send(rendered);
    });
  });
});

app.get('/female', function (req, res) {
  fs.readFile('everyone.hbs', 'utf8', (err, data) => {
    var template = handlebars.compile(data);
    db.find({
      gender: 'female'
    }, {}, (err, docs) => {
      var rendered = template({
        people: docs
      });
      res.contentType('text/html');
      res.status(200).send(rendered);
    });
  });
});

app.get('/under30', function (req, res) {
  fs.readFile('everyone.hbs', 'utf8', (err, data) => {
    var template = handlebars.compile(data);
    db.find({
      age: {
        $lt: 30
      }
    }, {}, (err, docs) => {
      var rendered = template({
        people: docs
      });
      res.contentType('text/html');
      res.status(200).send(rendered);
    });
  });
});

app.get('/over30', function (req, res) {
  fs.readFile('everyone.hbs', 'utf8', (err, data) => {
    var template = handlebars.compile(data);
    db.find({
      age: {
        $gte: 30
      }
    }, {}, (err, docs) => {
      var rendered = template({
        people: docs
      });
      res.contentType('text/html');
      res.status(200).send(rendered);
    });
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});