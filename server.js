var express = require('express')
var url = require('url')
var path = require('path')
var requestLanguage = require('express-request-language')
var cookieParser = require('cookie-parser')

var app = express();

app.use(cookieParser());
app.use(requestLanguage({
    languages: ['en-US', 'zh-CN'],
    cookie: {
        name: 'language',
        options: { maxAge: 24*3600*1000 },
        url: '/languages/{language}'
    }
}));

app.get('/', function(request, response) {
    var address = request.connection.remoteAddress
    var language = request.language
    var platform = process.platform
    response.send(address + " " + language + " " + platform)
})

app.listen(process.env.PORT || 8080, function() {
    console.log('Listening...');
})