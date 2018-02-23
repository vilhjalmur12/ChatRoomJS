/*
    Server code for creating a chat server
**/

const app = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Default constants
const PORT = 3000;

// Data
var rooms = { };

io.on('connection', (connectingSocket) => {
    console.log(`User connected (${connectingSocket})`);

    // Define messages to emit
    connectingSocket.on('msg', (msg) => {
        var room = msg['room'];
        // Emit the message to everyone
        io.sockets.in(room).emit('msg', msg);
    });

    connectingSocket.on('create_room', (room) => {
            connectingSocket.join(room);
            io.emit('create_room', room);
            for (var key in room) {
                rooms[key] = room[key];
            }
    });

    connectingSocket.on('disconnect', () => {
        console.log(`User disconnected (${connectingSocket})`);
    });

    connectingSocket.on('get_rooms', () => {
        io.emit('get_rooms', rooms);
    });

    connectingSocket.on('change_room', (room) => {
        connectingSocket.join(room);
        //io.emit('change_room', room);
    });
});

http.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
