import React, { useEffect, useState } from 'react';
import { getImages } from '../API';
// import images from '../api-mock.json';
import '../styles/Gallery.css';

function Gallery() {
  //initilizing state hook with our images from api data
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseJson = await getImages();
      setImageList(responseJson.resources);
    };
    fetchData();
  }, []);

  return (
    <div className="image-grid">
      {imageList.map(image => (
        <img src={image.url} alt={image.public_id}></img>
      ))}
    </div>
  );
}

export default Gallery;
