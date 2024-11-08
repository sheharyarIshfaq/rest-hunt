"use client";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
import React from "react";
import { useDropzone } from "react-dropzone";
import { BsX } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";

const PicturesUpload = ({ images, setImages }: any) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/heic": [".heic", ".HEIC"],
    },
    onDrop: (acceptedFiles: any) => {
      //if less than 4 and more than 10 images
      if (acceptedFiles.length < 4 || acceptedFiles.length > 10) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "You can only upload between 4 to 10 images",
        });
        return;
      }
      // Update state with the uploaded file
      setImages(acceptedFiles);
    },
    maxFiles: 10,
    onDropRejected(fileRejections, event) {
      const error = fileRejections[0].errors[0];
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          error?.code === "too-many-files"
            ? "You can only upload 10 images"
            : error.message,
      });
    },
  });

  return (
    <section className="flex flex-col sm:flex-row gap-8">
      <div className="border border-gray-300 rounded-md flex-1 cursor-pointer px-3 py-8">
        <div
          {...getRootProps({ className: "dropzone" })}
          className="flex-1 w-full h-full flex flex-col items-center justify-center overflow-hidden text-center"
        >
          <input {...getInputProps()} />
          <GrGallery className="text-4xl" />
          <p className="mt-4">Drag & Drop or Click to upload</p>
          <p className="underline mt-6 cursor-pointer">Upload from my device</p>
        </div>
      </div>
      <div className="flex-1 flex gap-4 h-72 overflow-y-auto custom-scrollbar flex-wrap">
        {images?.map((image: any, index: number) => (
          <div
            key={index}
            className="rounded-md w-36 h-32 overflow-hidden relative"
          >
            <Image
              key={image.path}
              src={URL.createObjectURL(image)}
              alt="Uploaded Cover Photo"
              className="w-36 h-32 object-cover rounded-md"
              width={100}
              height={100}
            />
            <button
              className="absolute top-1 right-1 rounded-full p-1 bg-gray-100"
              onClick={() =>
                setImages(images.filter((img: any) => img.path !== image.path))
              }
            >
              <BsX className="text-sm" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PicturesUpload;
