// src/App.js
import React, { useState } from 'react';
import TodoForm from './Components/TodoForm.jsx';
import TodoList from './Components/TodoList.jsx';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleAddTodo = () => {
    setCurrentTodo(null);
    setIsFormVisible(true);
  };

  const handleSaveTodo = (todo) => {
    if (currentTodo) {
      setTodos(todos.map(t => t.id === currentTodo.id ? { ...todo, id: t.id } : t));
    } else {
      setTodos([...todos, { ...todo, id: Date.now() }]);
    }
    setIsFormVisible(false);
  };

  const handleEditTodo = (todo) => {
    setCurrentTodo(todo);
    setIsFormVisible(true);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleStatusChange = (id, status) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status } : todo));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.status === 'completed';
    if (filter === 'not completed') return todo.status === 'not completed';
    return true;
  });

  return (
    <div className="app">
      <h1>Todo App</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('not completed')}>Not Completed</button>
      </div>
      {isFormVisible && (
        <TodoForm
          currentTodo={currentTodo}
          onSave={handleSaveTodo}
          onCancel={() => setIsFormVisible(false)}
        />
      )}
      <TodoList
        todos={filteredTodos}
        onEdit={handleEditTodo}
        onDelete={handleDeleteTodo}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default App;
