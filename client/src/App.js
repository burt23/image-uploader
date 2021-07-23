import "./App.css";
import { useEffect, useState } from "react";

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

  const handleUpload = (e) => {
    console.log("handling the file upload", e);
    // setImage(e)
  };

  const handleSearchTerms = (e) => {
    const { target: { value } = { target: { value: "" } } } = e;
    if (!value) return null;
    setSearchTerms(value);
  };

  const handleSearchSubmit = (e) => {
    if (!image) return null;
    // upload image
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
              onSubmit={handleSearchSubmit}
            />
          </div>
          <div className="flexItem">
            <h2>Upload an image</h2>
            <input
              id="uploadButton"
              data-testid="uploadButton"
              type="submit"
              onSubmit={handleUpload}
              // accept=".png,.jpg,.svg,.webp,.gif"
              value="upload"
            />
          </div>
        </div>
      </header>
      <div data-testid="mainContent" className="mainContent">
        {images ? (
          <h3>{`${imageCount} Images`}</h3>
        ) : (
          <h3>{`Please search for images`}</h3>
        )}
      </div>
    </div>
  );
}

export default App;
