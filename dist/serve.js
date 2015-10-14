'use strict';

const http = require('http');
const Server = require('node-static').Server;

const file = new Server('./dist');

http.createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
  }).resume();
}).listen(3000);
