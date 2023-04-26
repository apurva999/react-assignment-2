
import './App.css';
import {useState} from 'react'

function App() {
  const [name,setName]=useState(" ")
  const[dummyName,setDummyname]=useState("")
  function displayName(){
   setName(dummyName)
  }
 
  return (
    <div className="main">
    <div className="changeN">
      <input onChange={(e)=>
      setDummyname(e.target.value)}></input>
      <button onClick={displayName}>Submit</button>
      <h2>Hi my name is: {name}</h2>
    </div>
    </div>

  );
}

export default App;
