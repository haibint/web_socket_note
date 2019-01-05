var app = require('http').createServer(handler)
var io = require('socket.io')(app);

app.listen(8080, function(){
    console.log("server is now listenning at port 8080..")
});

function handler (req, res) {
  console.log("handler function called")
}

io.on('connection', function (socket) {
  console.log("socket "+ socket.id +" is connected.")
  socket.emit('connection confirm', { msg: 'you are now connected to the server through socket' });
  socket.on('led', function (data) {
    console.log(data);
  });
  socket.on("disconnect", function (){
      console.log("a socket is disconnected")
  })
});