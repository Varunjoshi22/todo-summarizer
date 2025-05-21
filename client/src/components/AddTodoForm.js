import React, { useState } from 'react';
import { createTodo } from '../services/api';

const AddTodoForm = ({ onAddTodo }) => {
  const [todo, setTodo] = useState({
    title: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!todo.title.trim()) {
      setError('Title is required');
      return;
    }
    
    try {
      setIsSubmitting(true);
      setError(null);
      
      const newTodo = await createTodo(todo);
      onAddTodo(newTodo);
      
      // Reset form
      setTodo({
        title: '',
        description: ''
      });
    } catch (err) {
      setError('Failed to add todo. Please try again.');
      console.error('Error adding todo:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-todo-form">
      <h2>Add New Todo</h2>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={todo.title}
            onChange={handleChange}
            placeholder="What needs to be done?"
            disabled={isSubmitting}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description (optional)</label>
          <textarea
            id="description"
            name="description"
            value={todo.description}
            onChange={handleChange}
            placeholder="Add details about this task"
            disabled={isSubmitting}
          />
        </div>
        
        <button 
          type="submit" 
          className="btn-add" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Adding...' : 'Add Todo'}
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;