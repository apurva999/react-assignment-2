import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatus } from './Store';

const TodoList = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleToggleStatus = (id) => {
    dispatch(toggleStatus(id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.status === 'completed'}
            onChange={() => handleToggleStatus(todo.id)}
          />
          <span>{todo.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;