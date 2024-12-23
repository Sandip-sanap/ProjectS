import React from 'react';

function Todo({ todo, onDelete }) {
  return (
    <li>
      {todo.title}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default Todo;