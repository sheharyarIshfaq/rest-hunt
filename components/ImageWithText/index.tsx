"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface ImageWithTextProps {
  image: StaticImageData;
  title: string;
  totalProperties: number;
}

const ImageWithText = ({
  image,
  title,
  totalProperties,
}: ImageWithTextProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="relative cursor-pointer max-h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={image} alt={title} className="w-full h-full object-cover" />
      <div
        className={`absolute inset-0 bg-black transition-all duration-200 ease-in ${
          isHovered ? "bg-opacity-40" : "bg-opacity-20"
        }`}
      ></div>
      {!isHovered && (
        <div className="absolute bottom-0 left-0 text-white p-4">
          <h3 className="text-xl font-bold my-2">{title}</h3>
        </div>
      )}
      {isHovered && (
        <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-white p-4 text-center">
          <p className="font-semibold text-3xl">{totalProperties} Properties</p>
        </div>
      )}
    </div>
  );
};

export default ImageWithText;
