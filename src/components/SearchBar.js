import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './Store';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      const todo = {
        id: Date.now().toString(),
        name: inputValue,
        status: 'pending',
      };
      dispatch(addTodo(todo));
      setInputValue('');
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default SearchBar;