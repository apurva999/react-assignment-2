import { React, useRef } from 'react';
import './useref.css'


function Pickfile() {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };


  return (
    <div className='main'>
      <input type="file" ref={fileInputRef}/>
      
      <button onClick={handleClick}>Pick a file</button>
    </div>
  );
}

export default Pickfile;