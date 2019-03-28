var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('images'));


console.log("Starting server on 4000");
app.listen(4000);