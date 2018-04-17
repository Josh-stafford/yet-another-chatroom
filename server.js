var express = require('express');

var app = express();
var server = app.listen(2222);
console.log('Listening on port 2222');

app.use(express.static('public'));

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
  console.log('New Connection: ' + socket.id);

  socket.on('message', function(data){
    console.log(data[0] + ": " + data[1]);
    socket.broadcast.emit('newMessage', data)
  })

}
