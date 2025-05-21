const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');
const { generateSummary } = require('../config/gemini');
const { sendToSlack } = require('../config/slack');

// POST - Generate summary and send to Slack
router.post('/', async (req, res) => {
  try {
    // Get all incomplete todos
    const todos = await Todo.find({ completed: false }).sort({ createdAt: -1 });
    
    if (todos.length === 0) {
      return res.json({ 
        success: true, 
        message: 'No pending todos to summarize',
        summary: 'You have no pending tasks.'
      });
    }
    
    // Generate summary using Gemini API
    const summary = await generateSummary(todos);
    
    // Send summary to Slack
    const slackResponse = await sendToSlack(summary);
    
    res.json({ 
      success: true, 
      message: 'Summary generated and sent to Slack successfully',
      summary
    });
  } catch (err) {
    console.error('Error in summarize route:', err);
    res.status(500).json({ 
      success: false, 
      message: err.message || 'Failed to generate or send summary'
    });
  }
});

// POST - Generate summary only (without sending to Slack)
router.post('/generate', async (req, res) => {
  try {
    // Get all incomplete todos
    const todos = await Todo.find({ completed: false }).sort({ createdAt: -1 });
    
    if (todos.length === 0) {
      return res.json({ 
        success: true, 
        message: 'No pending todos to summarize',
        summary: 'You have no pending tasks.'
      });
    }
    
    // Generate summary using Gemini API
    const summary = await generateSummary(todos);
    
    res.json({ 
      success: true, 
      message: 'Summary generated successfully',
      summary
    });
  } catch (err) {
    console.error('Error generating summary:', err);
    res.status(500).json({ 
      success: false, 
      message: err.message || 'Failed to generate summary'
    });
  }
});

module.exports = router;