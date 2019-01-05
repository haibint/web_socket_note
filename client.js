const io = require('socket.io-client');

const socket = io.connect("http://localhost:8080")

socket.on("connection confirm", function(msg){
    console.log(msg)
})
socket.emit('led', {data:"please turn on led."})

