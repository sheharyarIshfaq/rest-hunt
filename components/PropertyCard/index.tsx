"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import HeartIcon from "@/public/icons/heart.svg";
import HeartWhiteIcon from "@/public/icons/heart-white.svg";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";
import { toast } from "../ui/use-toast";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

interface PropertyCardProps {
  id: string;
  image: string | StaticImageData;
  title: string;
  address: string;
  price: number;
  isFavorite?: boolean;
  priceUnit?: string;
  updateFavourites?: () => void;
}

const PropertyCard = ({
  id,
  image,
  title,
  address,
  price,
  isFavorite = false,
  priceUnit,
  updateFavourites,
}: PropertyCardProps) => {
  const { token } = useAppSelector((state) => state.auth);

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

  const likePropertyHandler = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const response = await fetch(`${BACKEND_URL}/favourites/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ propertyId: id }),
      });
      const responseData = await response.json();

      if (responseData.error) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: responseData.error,
        });
      }

      toast({
        variant: "success",
        title: "Property added to favourites",
        description: "You can view it later!",
      });
      updateFavourites && updateFavourites();
    } catch (e: any) {
      return toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: e.message,
      });
    }
  };

  const unLikePropertyHandler = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const response = await fetch(`${BACKEND_URL}/favourites/remove`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ propertyId: id }),
      });
      const responseData = await response.json();

      if (responseData.error) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: responseData.error,
        });
      }

      toast({
        variant: "success",
        title: "Property removed from favourites",
        description: "You can always add it back!",
      });
      updateFavourites && updateFavourites();
    } catch (e: any) {
      return toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: e.message,
      });
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
        className="w-full h-[200px] object-cover"
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
            Rs.{price}/{getFormattedUnit()}
          </span>
        </p>
      </div>
      <button
        className={`absolute top-3 right-3  bg-opacity-95 transition-all duration-200 ease-in hover:bg-opacity-100 p-2 rounded-full shadow-md ${
          isFavorite ? "bg-main" : "bg-white"
        }`}
        onClick={isFavorite ? unLikePropertyHandler : likePropertyHandler}
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
