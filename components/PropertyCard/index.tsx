import React from "react";
import Image, { StaticImageData } from "next/image";
import HeartIcon from "@/public/icons/heart.svg";

interface PropertyCardProps {
  image: StaticImageData;
  title: string;
  address: string;
  price: number;
}

const PropertyCard = ({ image, title, address, price }: PropertyCardProps) => {
  return (
    <div className="shadow-sm border flex flex-col relative">
      <Image src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-label">{address}</p>
        </div>
        <p className="mt-2">
          From{" "}
          <span className="font-semibold text-xl text-main">
            Rs.{price}/Month
          </span>
        </p>
      </div>
      <button className="absolute top-3 right-3 bg-white bg-opacity-95 transition-all duration-200 ease-in hover:bg-opacity-100 p-2 rounded-full shadow-md">
        <Image src={HeartIcon} alt="Like" />
      </button>
    </div>
  );
};

export default PropertyCard;
