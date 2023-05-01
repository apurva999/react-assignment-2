import React, { useState, useEffect, useRef } from "react";
import './useEffect.css'

function Imagechange() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3680912/pexels-photo-3680912.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600",
   
  ];

  const imageRef = useRef(null);

  useEffect(() => {
    imageRef.current.src = images[imageIndex];
  }, [imageIndex]);

  const changeImage = () => {
    setImageIndex((imageIndex + 1) % 3);
  };

  return (
    <div className="main">
      <img ref={imageRef} src={images[imageIndex]} />
      <button onClick={changeImage}>Change Image</button>
    </div>
  );
}

export default Imagechange;