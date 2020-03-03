var http =require('http');
var fs= require('fs');
var log= require('./modules/mylog');
var {countries}= require('countries-list');
var url = require("url");
var querystring = require("querystring");

var server= http.createServer((request,response)=>{
    var parse = url.parse(request.url)
var query = querystring.parse(parse.query);
    if (parse.pathname ==='/countries') {
        response.writeHead(200,{'Content-type':'application/json'});
        response.write(JSON.stringify(countries[query.code]));
        response.end();
    }
});

server.listen(4000);
console.log('runing port 4000');
