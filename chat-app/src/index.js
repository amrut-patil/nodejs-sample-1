const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const Filter = require('bad-words');

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(publicDirectoryPath));

let count = 0;
io.on('connection', (socket) => {

    socket.emit('message', 'Welcome to app!');
    socket.broadcast.emit('message', 'A new user has joined!')

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter();
        if (filter.isProfane(message)){
            return callback('Profanity is not allowed');
        }

        io.emit('message', message);
        callback();
    })

    socket.on('sendLocation', (coords, callback) => {
        socket.broadcast.emit('message', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`);
        callback();
    })

    socket.on('disconnect', () => {
        io.emit('message', 'User has left!')
    })

})





server.listen(port, () =>{
    console.log(`Server is up on port ${port}`);
})