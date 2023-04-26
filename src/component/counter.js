import React, { useState } from 'react'
import './coutnter.css'


export default function Counter(){

    const[num,setNum]=useState(0)

    function incNum(){
          setNum(num+1)
    }
    function decNum(){
        if(num>0){
            setNum(num-1)
        }else{
            setNum(0)
        }
  }

    return(<>
    <div className='main'>
    <div className='center'>
    <h1>{num}</h1>
<div className="btn">
    <button onClick={incNum}>Increment</button>
    <button onClick={decNum}>Decrement</button>
</div>
    </div>
    </div>
    </>
)}