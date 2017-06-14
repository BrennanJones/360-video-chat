/**
 *
 * server.js
 * Node.js Server
 *
 */


"use strict";

var app = require('http').createServer(handler),
	io = require('socket.io', { rememberTransport: false, transports: ['WebSocket', 'Flash Socket', 'AJAX long-polling'] })(app),
	node_static = require('node-static'),
	fs = new node_static.Server('../desktop-client-web'),
	filesystem = require('fs');


/**
 * SOCKET.IO SERVER CODE
 */

// If the URL of the server is opened in a browser.
function handler(request, response)
{
	request.addListener('end', function() {
		fs.serve(request, response);
	}).resume();
}

app.listen(8082);

console.log('Socket.io server started. [' + (new Date()).toString() + ']');
