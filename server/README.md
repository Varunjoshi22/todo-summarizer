# Todo Summary Assistant - Backend

This is the backend server for the Todo Summary Assistant application. It provides APIs for managing todos, generating summaries using Google Gemini API, and sending them to Slack.

## Features

- RESTful API for CRUD operations on todos
- Integration with Google Gemini API for generating summaries
- Integration with Slack for sending summaries to a channel
- MongoDB database for storing todos

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Google Gemini API key
- Slack Webhook URL

## Setup

1. Clone the repository
2. Navigate to the server directory
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file based on `.env.example` and fill in your credentials:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   GEMINI_API_KEY=your_gemini_api_key
   SLACK_WEBHOOK_URL=your_slack_webhook_url
   ```

## Google Gemini API Setup

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create an API key
3. Add the API key to your `.env` file

## Slack Webhook Setup

1. Go to [Slack API Apps](https://api.slack.com/apps)
2. Create a new app or select an existing one
3. Navigate to "Incoming Webhooks" and activate them
4. Create a new webhook for your workspace and channel
5. Copy the webhook URL and add it to your `.env` file

## Running the Server

### Development mode

```
npm run dev
```

### Production mode

```
npm start
```

## API Endpoints

### Todos

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

### Summary

- `POST /api/summarize` - Generate summary and send to Slack
- `POST /api/summarize/generate` - Generate summary without sending to Slack
