import "./App.css";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_IMAGES } from "./graphql/queries";

function App() {
  const [searchTerms, setSearchTerms] = useState();
  const [image, setImage] = useState();
  const [images, setImages] = useState();
  const [imageCount, setImageCount] = useState();

  useEffect(() => {
    if (Array.isArray(images)) {
      setImageCount(images.length);
    }
  }, [images]);

  const { loading, error, data } = useQuery(GET_IMAGES);

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>well that's embarassing...</h1>;

  const handleUpload = (e) => {
    // console.log("handling the file upload", e);
    // setImage(e)
  };

  const handleSearchTerms = (e) => {
    // console.log("setting search tesrm", e);
    const { target: { value } = { target: { value: "" } } } = e;
    if (!value) return null;
    setSearchTerms(value);
  };

  const handleSearch = (e) => {
    // console.log("in the submit fn", e);
    if (!image) return null;
    // upload image
  };

  const handleFileUpload = (e) => {
    // TODO upload ArrayList to server
    // const { target: { files } = { target: { files: [] } } } = e;
    // const filesToUpload = Array.from(files);
    // console.log("found incoming files???", filesToUpload);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="flexRow">
          <div className="flexItem">
            <h2>Search</h2>
            <input
              type="input"
              id="searchInputBox"
              value={searchTerms}
              data-testid="searchInput"
              onChange={handleSearchTerms}
            />
          </div>
          <div className="flexItem">
            <h2>Add an image</h2>
            <input
              id="uploadButton"
              data-testid="uploadButton"
              type="file"
              onSubmit={handleUpload}
              accept=".png,.jpg,.svg,.webp,.gif"
              onChange={handleFileUpload}
              // value="upload"
            />

            <input type="button" onClick={handleSearch} value="upload" />
          </div>
        </div>
      </header>
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
    </div>
  );
}

export default App;
