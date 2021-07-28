import React from "react";
import { ADD_IMAGE } from "../../graphql/queries";
import { useMutation } from "@apollo/client";

const UploadImage = ({ refetch }) => {
  const [uploadImage, { loading }] = useMutation(ADD_IMAGE);

  const handleUpload = (e) => {
    const file = document.getElementById("uploadButton").files[0];
    if (!file) return null;
    const { name, type } = file;
    const reader = new FileReader();
    reader.onloadend = function onLoadCallback() {
      const { result: base64String } = reader;
      uploadImage({ variables: { file: base64String, name, type } });
      refetch();
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
        accept=".png,.jpg,.svg,.webp,.gif, .jpeg, .tiff, .gif"
      />

      <input type="button" onClick={handleUpload} value="upload" />
    </div>
  );
};

export default UploadImage;
