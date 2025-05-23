const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const SocketManager = require('./sockets/socket');
const urlRoutes = require('./routes/index');

// Load environment variables
dotenv.config();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(express.json());


// Socket.IO
new SocketManager(server)


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
connectDB();
  console.log(`Server running on port ${PORT}`);
});