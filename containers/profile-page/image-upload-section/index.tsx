"use client";
import React from "react";
import ImageUpload from "@/components/ImageUpload";

const ImageUploadSection = () => {
  const [image, setImage] = React.useState(null);
  return (
    <div className="my-4 flex justify-center items-center">
      <ImageUpload image={image} setImage={setImage} />
    </div>
  );
};

export default ImageUploadSection;
