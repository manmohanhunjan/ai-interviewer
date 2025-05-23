const { Server } = require('socket.io');

class SocketManager {
  constructor(server) {
    this.io = new Server(server);
    this.initializeSocket();
  }

  initializeSocket() {
    this.io.on('connection', (socket) => {
      console.log('A user connected:', socket.id);

      socket.on('message', (msg) => {
        console.log('Message received:', msg);
        this.io.emit('message', msg);
      });

      socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
      });
    });
  }

  getIo() {
    return this.io;
  }
}

module.exports = SocketManager; // Class export karo