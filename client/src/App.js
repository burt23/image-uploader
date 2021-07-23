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
      <header className="App-header">
        <input
          type="input"
          value={searchTerms}
          data-testid="searchInput"
          onChange={handleSearchTerms}
          onSubmit={handleSearchSubmit}
        />
        <input
          id="uploadButton"
          data-testid="uploadButton"
          type="submit"
          onSubmit={handleUpload}
          // accept=".png,.jpg,.svg,.webp,.gif"
          value="upload"
        />
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
