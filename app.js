const http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var querystring = require('querystring');
var bodyparser = require('body-parser');
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    var tmp="";
    tmp += "<div><p>Hi his is your app</p></div>";
    res.end(tmp);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});




