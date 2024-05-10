import BookingDetailCard from "@/components/BookingDetailCard";
import { StaticImageData } from "next/image";
import React from "react";

interface BookingDetailCardProps {
  image: string | StaticImageData;
  title: string;
  price: string | number;
  moveInDate: string;
  moveOutDate: string;
}

const BookingDetailsSection = ({
  image,
  title,
  price,
  moveInDate,
  moveOutDate,
}: BookingDetailCardProps) => {
  return (
    <div className="flex justify-end flex-1">
      <BookingDetailCard
        image={image}
        property={title}
        price={price}
        moveInDate={moveInDate}
        moveOutDate={moveOutDate}
      />
    </div>
  );
};

export default BookingDetailsSection;
