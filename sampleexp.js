// handler.js
const express = require('express')
const app = express()

app.get('/sampleexp', function (req, res) {
    var response = 'hello world 123!!!';
    //callback(null, response);
    res.send(response);
});

exports.handler = require('express-on-serverless')(app)