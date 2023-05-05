import React, { useState, useEffect } from 'react';
import axios from 'axios'

function DogImage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    getDogimage();     
  }, []);

  const getDogimage =async()=>{
    const response=await axios.get('https://dog.ceo/api/breeds/image/random')
    setImageUrl(response.data.message)  
}

  return (
  <div>
  <img src={imageUrl} alt="Random dog" />;
  </div>
  )
}

export default DogImage;