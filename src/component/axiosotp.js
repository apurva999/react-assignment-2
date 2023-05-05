import React, { useState } from "react";
import axios from 'axios';
import './axiosotp.css'

const Generateotp=() =>
{
 
    const [Num ,setNum] = useState(' ')
     const [mes, setmes] = useState(' ')

      function valid()
     {
         const validatemyNumber = /^[6-9]\d{9}$/.test(Num)
         if(!validatemyNumber){
             setmes("Please Check Your Number")
         }else{
             setmes("Message sent Succesfully")
             setNum(" ")
            }
 
     }  
   
     function getOtp()
   {
  axios.post(`https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,{
   mobile:`${Num}`
 })

 .then((data)=>setNum(data.mobile))
 .catch((error)=>console.log(error))
 valid()

  

   }
    return(
        <div className="div1">
        <div className="div">
        <input type="number" placeholder="enter your number" onChange={(e)=>{setNum(e.target.value)}} className="input" value={Num}/> <br/>
        <button className="btn" onClick={getOtp}>GET OTP</button>
        <h2 className='message'>{mes}</h2>
        </div>
        </div>
    )
}
export default Generateotp;