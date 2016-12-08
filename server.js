var express = require('express')
var url = require('url')
var path = require('path')
var requestLanguage = require('express-request-language')
var cookieParser = require('cookie-parser')
var useragent = require('useragent')

var app = express();

app.use(cookieParser());
app.use(requestLanguage({
    languages: ['en-US', 'zh-CN', 'ru-RU'],
    cookie: {
        name: 'language',
        options: { maxAge: 24*3600*1000 },
        url: '/languages/{language}'
    }
}));

app.get('/', function(request, response) {
    var address = request.connection.remoteAddress
    var language = request.language
    var agent = useragent.parse(request.headers['user-agent'])
    response.send(JSON.stringify({"ipaddress": address, "language": language, "software": agent.os.toString()}));

})

app.listen(process.env.PORT || 8080, function() {
    console.log('Listening...');
})