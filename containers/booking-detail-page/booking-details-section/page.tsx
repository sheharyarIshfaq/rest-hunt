import BookingDetailCard from "@/components/BookingDetailCard";
import { StaticImageData } from "next/image";
import React from "react";

interface BookingDetailCardProps {
  image: StaticImageData | string;
  property: string;
  price: number;
  moveInDate: string;
  moveOutDate: string;
  rentAmountUnit: string;
  totalAmount: number;
}

const BookingDetailsSection = ({
  image,
  property,
  price,
  moveInDate,
  moveOutDate,
  rentAmountUnit,
  totalAmount,
}: BookingDetailCardProps) => {
  return (
    <div className="flex justify-end flex-1">
      <BookingDetailCard
        image={image}
        property={property}
        price={price}
        moveInDate={moveInDate}
        moveOutDate={moveOutDate}
        rentAmountUnit={rentAmountUnit}
        totalAmount={totalAmount}
      />
    </div>
  );
};

export default BookingDetailsSection;
