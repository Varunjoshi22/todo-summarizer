const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todo-summary-assist')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import routes
const todoRoutes = require('./routes/todos');
const summaryRoutes = require('./routes/summary');

// Use routes
app.use('/api/todos', todoRoutes);
app.use('/api/summarize', summaryRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Todo Summary Assistant API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});