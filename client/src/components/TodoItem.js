import React, { useState } from 'react';
import { updateTodo, deleteTodo } from '../services/api';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({
    title: todo.title,
    description: todo.description || '',
    completed: todo.completed
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedTodo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleUpdate = async () => {
    try {
      const updatedTodo = await updateTodo(todo._id, editedTodo);
      onUpdate(updatedTodo);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(todo._id);
      onDelete(todo._id);
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  const handleToggleComplete = async () => {
    try {
      const updatedTodo = await updateTodo(todo._id, {
        ...todo,
        completed: !todo.completed
      });
      onUpdate(updatedTodo);
    } catch (error) {
      console.error('Failed to update todo status:', error);
    }
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div className="todo-edit-form">
          <input
            type="text"
            name="title"
            value={editedTodo.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <textarea
            name="description"
            value={editedTodo.description}
            onChange={handleChange}
            placeholder="Description (optional)"
          />
          <div className="todo-actions">
            <button onClick={handleUpdate} className="btn-save">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="btn-cancel">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className={`todo-content ${todo.completed ? 'completed' : ''}`}>
          <div className="todo-header">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={handleToggleComplete}
              className="todo-checkbox"
            />
            <h3 className="todo-title">{todo.title}</h3>
          </div>
          {todo.description && (
            <p className="todo-description">{todo.description}</p>
          )}
          <div className="todo-actions">
            <button onClick={() => setIsEditing(true)} className="btn-edit">
              Edit
            </button>
            <button onClick={handleDelete} className="btn-delete">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;