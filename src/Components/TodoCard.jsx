
import React, { useState } from 'react';

const TodoCard = ({ todo, onEdit, onDelete, onStatusChange }) => {
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);

  const handleStatusToggle = () => {
    setStatusDropdownOpen(!statusDropdownOpen);
  };

  const handleStatusChange = (status) => {
    onStatusChange(todo.id, status);
    setStatusDropdownOpen(false);
  };

  return (
    <div className="todo-card">
      <h3>{todo.name}</h3>
      <p>{todo.description}</p>
      <div className="todo-card-actions">
        <button onClick={() => onEdit(todo)}>Edit</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
        <div className="todo-status">
          <button onClick={handleStatusToggle}>
            {todo.status === 'completed' ? 'Completed' : 'Not Completed'}
          </button>
          {statusDropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={() => handleStatusChange('completed')}>Completed</button>
              <button onClick={() => handleStatusChange('not completed')}>Not Completed</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
