
"use strict";

let express = require("express");
let path = require("path");

const port = 3000;

let Chrome = require("chrome-remote-interface");

Chrome(function(chrome) {
  chrome.Network.requestWillBeSent(function(params) {
    // console.log(params.request.url);
  });

  chrome.Network.requestServedFromCache(function(params) {
    // console.log(params.request.url);
  });

  chrome.Console.messageAdded(function(params) {
    if (params && params.message && params.message.level === "log" && params.message.type === "log" && params.message.text) {
      console.log(params.message.text);
    }
  });

  // chrome.Page.loadEventFired(chrome.close);
  chrome.Network.enable();
  chrome.Page.enable();

  chrome.once("ready", function() {
    chrome.Page.navigate({
      "url": "http://localhost:3000/promise"
    });

    chrome.Console.clearMessages();
    chrome.Console.enable();
  });

}).on("error", function() {
  console.error("Cannot connect to Chrome");
});

let app = express();
let router = express.Router();

/* 1 */ router.use(express.static(__dirname));

(function taunusMiddleware() {
  // TODO: Disabled for now; needs to compile view templates.
  // return;

  let routes = require("./controllers/routes");
  let taunus = require("taunus");
  let taunusExpress = require("taunus-express");

  let layout = function(model) {
    let fs = require("fs");
    let angularTemplate = require("angular-template");

    let content;
    let data;
    let html;
    let partial;

    try {
      partial = fs.readFileSync(path.join("views/", model.action, ".html"));
    } catch (ex) {
      partial = fs.readFileSync("views/main.html");
    }

    content = angularTemplate(partial, model.model);

    data = {
      "content": content,
      "foo": true
    };

    html = fs.readFileSync("index.html");

    return angularTemplate(html, data);
  };

  let options = {
    "layout": layout,
    "routes": routes
  };

  /* 2 */ taunusExpress(taunus, app, options);
})();

/* 3 */ router.use("/*", express.static(path.join(__dirname, "/index.html")));

app.listen(port);
app.use(router);

