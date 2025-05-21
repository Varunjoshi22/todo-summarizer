# Todo Summarizer

A full-stack application that allows users to manage todo items, generate summaries using Google Gemini API, and send them to Slack.

## Features

- Create, edit, and delete todo items
- View a list of all todos
- Generate AI-powered summaries of pending todos using Google Gemini API
- Send summaries to a Slack channel
- Responsive design for desktop and mobile

## Tech Stack

### Frontend

- React.js
- React Router
- Axios for API requests
- React Toastify for notifications

### Backend

- Node.js with Express
- MongoDB with Mongoose
- Google Gemini API for AI summaries
- Slack API for sending messages

## Project Structure

```
todo-summary-assist/
├── client/                 # React frontend
│   ├── public/             # Static files
│   ├── src/                # Source code
│   │   ├── components/     # React components
│   │   ├── services/       # API services
│   │   ├── App.js          # Main component
│   │   └── index.js        # Entry point
│   ├── .env                # Environment variables
│   └── package.json        # Dependencies
│
└── server/                 # Express backend
    ├── config/             # Configuration files
    ├── models/             # Database models
    ├── routes/             # API routes
    ├── .env                # Environment variables
    ├── index.js            # Entry point
    └── package.json        # Dependencies
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Google Gemini API key
- Slack Webhook URL

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd todo-summarizer
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the server directory with the following variables:

```
PORT=5001
MONGODB_URI=mongodb://localhost:27017/todo-summary-assist
GEMINI_API_KEY=your_gemini_api_key_here
SLACK_WEBHOOK_URL=your_slack_webhook_url_here
```

### 3. Frontend Setup

```bash
cd ../client
npm install
```

Create a `.env` file in the client directory with the following variables:

```
REACT_APP_API_URL=http://localhost:5001/api
```

## Running the Application

### Start the Backend

```bash
cd server
npm run dev  # For development with nodemon
# or
npm start     # For production
```

### Start the Frontend

```bash
cd client
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Todos

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

### Summary

- `POST /api/summarize` - Generate summary and send to Slack
- `POST /api/summarize/generate` - Generate summary without sending to Slack

## External API Setup

### Google Gemini API

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create an API key
3. Add the API key to your server's `.env` file

### Slack Webhook

1. Go to [Slack API Apps](https://api.slack.com/apps)
2. Create a new app or select an existing one
3. Navigate to "Incoming Webhooks" and activate them
4. Create a new webhook for your workspace and channel
5. Copy the webhook URL and add it to your server's `.env` file

## Deployment

### Backend

The backend can be deployed to platforms like Heroku, Render, or Railway.

### Frontend

The frontend can be deployed to platforms like Vercel, Netlify, or Firebase Hosting.

## Sample Output

<img width="1440" alt="Screenshot 2025-05-22 at 12 05 00 AM" src="https://github.com/user-attachments/assets/25f31e02-eb8d-476b-8a33-9536a6740992" />
<img width="1440" alt="Screenshot 2025-05-22 at 12 04 48 AM" src="https://github.com/user-attachments/assets/6c709b7e-e219-4607-a139-c76960108845" />





