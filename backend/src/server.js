// const express = require('express');
// const http = require('http');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const SocketManager = require('./sockets/socket');
// const urlRoutes = require('./routes/index');

// // Load environment variables
// dotenv.config();

// const app = express();
// const server = http.createServer(app);

// // Middleware
// app.use(express.json());

// // Socket.IO
// new SocketManager(server)

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
// connectDB();
//   console.log(`Server running on port ${PORT}`);
// });

// server.js
const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const app = express()
app.use(cors())

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST'],
  },
})

// Store active interviews
const activeInterviews = new Map()

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`)

  // Handle when a user joins an interview
  socket.on('join_interview', (data) => {
    const { interviewId } = data
    socket.join(interviewId)
    console.log(`User ${socket.id} joined interview: ${interviewId}`)

    // Initialize interview if it's new
    if (!activeInterviews.has(interviewId)) {
      activeInterviews.set(interviewId, {
        currentQuestionIndex: 0,
        questions: [
          'What are your strengths?',
          'Tell me about a time you faced a challenge.',
          'Why do you want to work for this company?',
          'Where do you see yourself in five years?',
        ],
        answers: [],
      })
    }

    // Send the current question to the user
    const interview = activeInterviews.get(interviewId)
    socket.emit('new_question', {
      question: interview.questions[interview.currentQuestionIndex],
    })
  })

  // Handle when a user submits an answer
  socket.on('submit_answer', (data) => {
    const { answer, questionId } = data
    console.log(`Received answer from ${socket.id}: ${answer}`)

    // Find which room this user belongs to
    const userRooms = Array.from(socket.rooms)
    const interviewId = userRooms.find((room) => room !== socket.id)

    if (interviewId && activeInterviews.has(interviewId)) {
      const interview = activeInterviews.get(interviewId)

      // Store the answer
      interview.answers.push({
        questionIndex: interview.currentQuestionIndex,
        questionText: interview.questions[interview.currentQuestionIndex],
        answer,
        timestamp: new Date(),
      })

      // Move to the next question if available
      if (interview.currentQuestionIndex < interview.questions.length - 1) {
        interview.currentQuestionIndex++

        // Send the next question after a short delay
        setTimeout(() => {
          io.to(interviewId).emit('new_question', {
            question: interview.questions[interview.currentQuestionIndex],
          })
        }, 1000)
      } else {
        // Interview is complete
        io.to(interviewId).emit('interview_complete', {
          message: 'Thank you for completing the interview!',
          summary: interview.answers,
        })
      }
    }
  })

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`)
  })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
