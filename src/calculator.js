import React, { useState } from 'react';
import './calculator.css'
function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    setResult(Number(num1) / Number(num2));
  };

  return (
    
        <div className='maindiv'>
            <h1>Calculator</h1>
        <div className='input'>
            
      <input
        type="number"
        placeholder="Enter number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      </div>
      
       
      <button className='btn' onClick={handleAddition}>Addition</button>
      <button className='btn' onClick={handleSubtraction}>Subtraction</button>
      <button className='btn' onClick={handleMultiplication}>Multiplication</button>
      <button className='btn' onClick={handleDivision}>Division</button>
      
      
      
      <h1>Result: {result}</h1>
      </div>
  );
}

export default Calculator;