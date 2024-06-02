import React from "react";
import Image, { StaticImageData } from "next/image";
import HeartIcon from "@/public/icons/heart.svg";
import HeartWhiteIcon from "@/public/icons/heart-white.svg";
import Link from "next/link";

interface PropertyCardProps {
  id: string;
  image: string | StaticImageData;
  title: string;
  address: string;
  price: number;
  isFavorite?: boolean;
  priceUnit?: string;
}

const PropertyCard = ({
  id,
  image,
  title,
  address,
  price,
  isFavorite = false,
  priceUnit,
}: PropertyCardProps) => {
  const getFormattedUnit = () => {
    switch (priceUnit) {
      case "per-month":
        return "Month";
      case "per-week":
        return "Week";
      case "per-day":
        return "Day";
      default:
        return "";
    }
  };
  return (
    <Link
      href={`/property/${id}`}
      className="shadow-sm border flex flex-col relative rounded-lg cursor-pointer hover:shadow-md"
    >
      <Image
        src={image}
        alt={title}
        className="w-full max-h-[300px] object-cover"
        width={300}
        height={200}
      />
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-label">{address}</p>
        </div>
        <p className="mt-2">
          From{" "}
          <span className="font-semibold text-xl text-main">
            Rs.{price}/- {getFormattedUnit()}
          </span>
        </p>
      </div>
      <button
        className={`absolute top-3 right-3  bg-opacity-95 transition-all duration-200 ease-in hover:bg-opacity-100 p-2 rounded-full shadow-md ${
          isFavorite ? "bg-main" : "bg-white"
        }`}
      >
        {isFavorite ? (
          <Image src={HeartWhiteIcon} alt="Unlike" />
        ) : (
          <Image src={HeartIcon} alt="Like" />
        )}
      </button>
    </Link>
  );
};

export default PropertyCard;
