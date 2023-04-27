

import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputName = event.target.name.value;
    if (inputName !== '') {
      setName(inputName);
      event.target.name.value = '';
    }
  };

  return (
    <div className='handleAll'>
      <form onSubmit={handleSubmit}>
        
        <input type="text" id="name-input" name="name" />
        <div>
        <button type="submit">Submit</button>
        </div>
      </form>
      <h1>Hi my name is:, {name !== '' ? name : '**'}!</h1>
    </div>
  );
}


export default App;
