import React, { useState, useEffect } from 'react';

function DogImage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setImageUrl(data.message))
      .catch(error => console.error(error));
  }, []);

  return <img src={imageUrl} alt="Random dog" />;
}

export default DogImage;