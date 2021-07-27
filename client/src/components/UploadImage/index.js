import React from "react";
import { ADD_IMAGE } from "../../graphql/queries";
import { useMutation } from "@apollo/client";

const UploadImage = () => {
  const [uploadImage, { loading }] = useMutation(ADD_IMAGE);

  const handleUpload = (e) => {
    const file = document.getElementById("uploadButton").files[0];
    if (!file) return null;
    const reader = new FileReader();
    reader.onloadend = function onLoadCallback() {
      const { result: base64String } = reader;
      uploadImage({ variables: { file: base64String } });
    };
    reader.readAsDataURL(file);
  };

  if (loading) return <p>Uploading...</p>;

  return (
    <div className="flexItem">
      <h2>Add an image</h2>
      <input
        id="uploadButton"
        data-testid="uploadButton"
        type="file"
        accept=".png,.jpg,.svg,.webp,.gif"
      />

      <input type="button" onClick={handleUpload} value="upload" />
    </div>
  );
};

export default UploadImage;
