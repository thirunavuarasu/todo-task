
import React, { useState, useEffect } from 'react';

const TodoForm = ({ currentTodo, onSave, onCancel }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('not completed');

  useEffect(() => {
    if (currentTodo) {
      setName(currentTodo.name);
      setDescription(currentTodo.description);
      setStatus(currentTodo.status);
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, description, status });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="completed">Completed</option>
        <option value="not completed">Not Completed</option>
      </select>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default TodoForm;
