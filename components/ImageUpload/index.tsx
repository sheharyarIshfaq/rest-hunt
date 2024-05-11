"use client";
import Image from "next/image";
import React from "react";
import { useDropzone } from "react-dropzone";
import { BsPerson, BsCameraFill } from "react-icons/bs";

const ImageUpload = ({ image, setImage }: any) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/heic": [".heic", ".HEIC"],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles: any) => {
      // Update state with the uploaded file
      setImage(acceptedFiles[0]);
    },
  });

  return (
    <section className="bg-black text-white flex flex-col items-center justify-center text-center gap-4 w-28 h-28 rounded-full  relative">
      <div
        {...getRootProps({ className: "dropzone" })}
        className="flex-1 w-full h-full flex flex-col items-center justify-center overflow-hidden"
      >
        <input {...getInputProps()} />
        {image ? (
          <Image
            src={URL.createObjectURL(image)}
            alt="Uploaded Cover Photo"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <BsPerson className="text-2xl mx-auto" />
        )}
      </div>
      <button className="absolute bottom-0 right-1 text-gray-300 rounded-full p-1">
        <BsCameraFill className="text-2xl" />
      </button>
    </section>
  );
};

export default ImageUpload;
