
import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos, onEdit, onDelete, onStatusChange }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
};

export default TodoList;
