
var express = require('express');

var app = express();
var router = express.Router();

var taunus = require('taunus');
var taunusExpress = require('taunus-express');

var layout = function(model) {
  var angularTemplate = require('angular-template');
  var html = require('fs').readFileSync('index.html');

  var content;
  var partial;

  try {
    partial = require('fs').readFileSync('views/' + model.action + '.html');
  } catch (ex) {
    partial = require('fs').readFileSync('views/main.html');
  }

  console.log('model', model.model);
  content = angularTemplate(partial, model.model);

  var data = {
    content: content,
    foo: true
  };

  console.log(angularTemplate(html, data));
  return angularTemplate(html, data);
  // return "<a href='/hello'>hello!</a>";
}

var options = {
  layout: layout,
  routes: require('./routes')
};

/* 1 */ router.use(express.static(__dirname));
taunusExpress(taunus, app, options);
/* 2 */ router.use('/*', express.static(__dirname + "/index.html"));

app.listen(3000);
app.use(router);

