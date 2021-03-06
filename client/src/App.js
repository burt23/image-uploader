import React, { useEffect, useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import { useQuery } from "@apollo/client";
import { GET_IMAGES } from "./graphql/queries";

function App() {
  const [images, setImages] = useState();
  const { loading, error, data = false, refetch } = useQuery(GET_IMAGES);

  const { images: fetchedImages = false } = data;

  useEffect(() => {
    if (fetchedImages) {
      setImages(fetchedImages);
    }
  }, [fetchedImages]);

  if (loading) return <h1>loading</h1>;
  if (error)
    return (
      <>
        <h1>Error fetching images from the backend...</h1>
        <h3>
          Please make sure your backend is running and that you've created an
          'image-uploader' postgres database.
        </h3>
      </>
    );

  return (
    <div className="App">
      <Header refetch={refetch} setImages={setImages} />
      <MainContent images={images} />
    </div>
  );
}

export default App;
