# Todo Summary Assistant - Frontend

This is the frontend application for the Todo Summary Assistant. It provides a user interface for managing todos, generating summaries using Google Gemini API, and sending them to Slack.

## Features

- Create, edit, and delete todo items
- View a list of all todos
- Generate summaries of pending todos using Google Gemini API
- Send summaries to a Slack channel
- Responsive design for desktop and mobile

## Prerequisites

- Node.js (v14 or higher)
- Backend server running (see server README)

## Setup

1. Clone the repository
2. Navigate to the client directory
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file based on `.env.example` and configure your environment variables:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

## Running the Application

### Development mode

```
npm start
```

This will start the development server on [http://localhost:3000](http://localhost:3000).

### Production build

```
npm run build
```

This will create an optimized production build in the `build` folder.

## Project Structure

- `src/components/` - React components
- `src/services/` - API service functions
- `src/App.js` - Main application component
- `src/App.css` - Application styles

## Integration with Backend

The frontend communicates with the backend through RESTful API endpoints. Make sure the backend server is running and accessible at the URL specified in your `.env` file.
