
console.log("hello world");

var express = require('express');

var app = express();

app.listen(3000);

var router = express.Router();

router.use(express.static(__dirname));
router.use('/*', express.static(__dirname + "/index.html"));

app.use(router);

