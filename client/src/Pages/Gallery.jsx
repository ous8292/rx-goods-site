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
      <div className="load-more">
        {nextCursor && (
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-10"
            onClick={handleLoadMoreButtonClick}
          >
            {' '}
            Load More
          </button>
        )}
      </div>
    </>
  );
}

export default Gallery;
