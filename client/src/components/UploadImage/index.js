import React from "react";

const UploadImage = () => {
  const handleUpload = (e) => {
    // console.log("handling the file upload", e);
    // setImage(e)
  };

  const handleFiles = (e) => {
    // TODO upload ArrayList to server
    const { target: { files } = { target: { files: [] } } } = e;
    const filesToUpload = Array.from(files);
    // useQuery(SAVE_IMAGES(filesToUpload))
    console.log("found incoming files???", filesToUpload);
  };
  return (
    <div className="flexItem">
      <h2>Add an image</h2>
      <input
        id="uploadButton"
        data-testid="uploadButton"
        type="file"
        accept=".png,.jpg,.svg,.webp,.gif"
        onChange={handleFiles} // needed?
      />

      <input type="button" onClick={handleUpload} value="upload" />
    </div>
  );
};

export default UploadImage;
