import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Todo API calls
export const getTodos = async () => {
  try {
    const response = await api.get('/todos');
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export const createTodo = async (todoData) => {
  try {
    const response = await api.post('/todos', todoData);
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};

export const updateTodo = async (id, todoData) => {
  try {
    const response = await api.put(`/todos/${id}`, todoData);
    return response.data;
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await api.delete(`/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};

// Summary API calls
export const generateAndSendSummary = async () => {
  try {
    const response = await api.post('/summarize');
    return response.data;
  } catch (error) {
    console.error('Error generating and sending summary:', error);
    throw error;
  }
};

export const generateSummary = async () => {
  try {
    const response = await api.post('/summarize/generate');
    return response.data;
  } catch (error) {
    console.error('Error generating summary:', error);
    throw error;
  }
};