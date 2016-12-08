var express = require('express')
var url = require('url')
var path = require('path')

var app = express();

app.get('/', function(request, response) {
    response.send('Hello World!')
})

app.listen(process.env.PORT || 8080, function() {
    console.log('Listening...');
})