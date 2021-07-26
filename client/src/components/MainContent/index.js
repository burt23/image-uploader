import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_IMAGES } from "../../graphql/queries";

const MainContent = () => {
  const [images, setImages] = useState();
  const [imageCount, setImageCount] = useState();

  const { loading, error, data } = useQuery(GET_IMAGES);
  useEffect(() => {
    if (Array.isArray(images)) {
      setImageCount(images.length);
    }
  }, [images]);
  if (loading) return <h1>loading</h1>;
  if (error) return <h1>well that's embarassing...</h1>;

  return (
    <div data-testid="mainContent" className="mainContent">
      {images ? (
        <h3>{`${imageCount} Images`}</h3>
      ) : (
        <h3>{`Please search for images`}</h3>
      )}
      {data &&
        data.images.map(({ file }, index) => {
          return <h1 key={file + index}>{file}</h1>;
        })}
    </div>
  );
};

export default MainContent;
