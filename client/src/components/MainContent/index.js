import React, { useState, useEffect } from "react";

const MainContent = ({ images = false }) => {
  const [imageCount, setImageCount] = useState();

  useEffect(() => {
    if (Array.isArray(images)) {
      setImageCount(images.length);
    }
  }, [images]);

  return (
    <>
      <div className="fixedTitle">
        {images ? (
          <h3>{`${imageCount} Images`}</h3>
        ) : (
          <h3>{`Please search for images`}</h3>
        )}
      </div>
      <div data-testid="mainContent" className="mainContent">
        <div className="imageWrapper">
          {images &&
            images.map(({ file, name }, index) => {
              return (
                <img
                  src={file}
                  key={name + index}
                  alt="user uploaded content"
                  className="image"
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MainContent;
