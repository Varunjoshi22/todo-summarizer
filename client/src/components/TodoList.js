import React, { useState, useEffect } from 'react';
import { getTodos } from '../services/api';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await getTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos. Please try again later.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = (newTodo) => {
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  const handleUpdateTodo = (updatedTodo) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo._id === updatedTodo._id ? updatedTodo : todo
      )
    );
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo._id !== todoId));
  };

  if (loading) {
    return <div className="loading">Loading todos...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="todo-list-container">
      <AddTodoForm onAddTodo={handleAddTodo} />
      
      <div className="todo-list">
        <h2>Your Todos</h2>
        {todos.length === 0 ? (
          <p className="no-todos">No todos yet. Add one above!</p>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onUpdate={handleUpdateTodo}
              onDelete={handleDeleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;