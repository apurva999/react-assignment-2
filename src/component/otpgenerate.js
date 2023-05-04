import { React, useState } from "react";
import './otpgenerate.css'

function Generateotp() {
  const [mobile, setMobile] = useState("");
  const [Message, setMessage] = useState("");

  const sendOTP =async() => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setMessage("Please enter valid 10 digit mobile number");
      return;
    }

    const response=await fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:({ mobile:Number(mobile) }),
    })

        if (!response.ok) {
          setMobile("Failed to send OTP");
          return;
        } 
        setMobile(" ");
        setMessage("OTP send successfully");
  };

  return (
    <div className="main">
      <input
        placeholder="mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <div>
      <button onClick={sendOTP}>Get OTP</button>
      </div>
      <div className="message">{Message}</div>
    </div>
  );
}

export default Generateotp;