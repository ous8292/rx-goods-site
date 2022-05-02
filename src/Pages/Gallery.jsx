import React, { useState } from 'react';
import images from '../api-mock.json';
import '../styles/Gallery.css';

function Gallery() {
  //initilizing state hook with our images from api data
  const [imageList, setImageList] = useState(images.resources);

  return (
    <div className="image-grid">
      {imageList.map(image => (
        <img src={image.url} alt={image.public_id}></img>
      ))}
    </div>
  );
}

export default Gallery;
