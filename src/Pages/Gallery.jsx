import React, { useEffect, useState } from 'react';
import { getImages } from '../API';
// import images from '../api-mock.json';
import '../styles/Gallery.css';

function Gallery() {
  //initilizing state hook with our images from api data
  const [imageList, setImageList] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const responseJson = await getImages();
      setImageList(responseJson.resources);
      //next_cursor is inside the response object
      setNextCursor(responseJson.next_cursor);
    };
    fetchData();
  }, []);

  const handleLoadMoreButtonClick = async () => {
    const responseJson = await getImages(nextCursor);
    setImageList(currentImageList => [
      ...currentImageList,
      ...responseJson.resources,
    ]);
    setNextCursor(responseJson.next_cursor);
  };

  return (
    <>
      <div className="image-grid">
        {imageList.map(image => (
          <img src={image.url} alt={image.public_id}></img>
        ))}
      </div>
      <div className="load-button">
        {nextCursor && (
          <button onClick={handleLoadMoreButtonClick}> Load More</button>
        )}
      </div>
    </>
  );
}

export default Gallery;
