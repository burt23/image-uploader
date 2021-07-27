import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_IMAGES } from "../../graphql/queries";

const MainContent = () => {
  const [imageCount, setImageCount] = useState();

  const { loading, error, data = false } = useQuery(GET_IMAGES);
  const { images = false } = data;
  useEffect(() => {
    if (Array.isArray(images)) {
      setImageCount(images.length);
    }
  }, [images]);
  if (loading) return <h1>loading</h1>;
  if (error) return <h1>well that's embarassing...</h1>;

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
            images.map(({ file }, index) => {
              return (
                <img
                  src={file}
                  key={index}
                  alt="user upload"
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
