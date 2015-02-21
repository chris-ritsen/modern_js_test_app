
var express = require('express');
var taunus = require('taunus');
var taunusExpress = require('taunus-express');

var layout = function(model) {
  var fs = require('fs');
  var angularTemplate = require('angular-template');
  var html = fs.readFileSync('index.html');

  var content;
  var partial;

  try {
    partial = fs.readFileSync('views/' + model.action + '.html');
  } catch (ex) {
    partial = fs.readFileSync('views/main.html');
  }

  content = angularTemplate(partial, model.model);

  var data = {
    content: content,
    foo: true
  };

  return angularTemplate(html, data);
}

var options = {
  layout: layout,
  routes: require('./routes')
};

var app = express();
var router = express.Router();

/* 1 */ router.use(express.static(__dirname));
/* 2 */ taunusExpress(taunus, app, options);
/* 3 */ router.use('/*', express.static(__dirname + "/index.html"));

app.listen(3000);
app.use(router);

