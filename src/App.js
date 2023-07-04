import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './'


function App() {
  const [inputarr,setinputarr]=useState([])
  const [inputdata, setinputdata]=useState({
    name:"",
    rollNo:""
  })
  const changehandle=(e)=>{
    setinputdata({...inputdata,[e.target.name]:e.target.value})
   }
   
   let {name,rollNo}=inputdata
   const handlesubmit=()=>{
    setinputarr([...inputarr,{name,rollNo}])
    setinputdata({name:"",rollNo:""})
   }


  return (
    <div className="App">
          <input type="text" autoComplete='off' name="name" value={inputdata.name} placeholder='Enter your name' onChange={changehandle}/><br/>  
          <input type="text" autoComplete='off' name="rollNo" value={inputdata.rollNo} placeholder='RollNo' onChange={changehandle}/><br/>
          <button onClick={handlesubmit}>Add Info</button>
   
          <table border={1} cellPadding={10} width="30%">
            <tbody>
            <tr>
              <td>Name</td>
              <td>RollNo</td>
            </tr>

            {
              inputarr.map((info,ind)=>(
                  
                    <tr key={ind}>
                    <td>{info.name}</td>
                    <td>{info.rollNo}</td>
                    </tr>
                  
                ))}
            </tbody>
          </table>
    </div>
  );
}

export default App;
