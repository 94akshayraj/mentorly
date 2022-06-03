const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 5000;
const chatport = process.env.PORT || 3000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/login', (req, res) => {
  res.send({ data: 'login' });
});

// Chat
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/src/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(chatport, () => {
  console.log(`Socket.IO server running at http://localhost:${chatport}/`);
});
