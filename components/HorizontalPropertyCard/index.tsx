import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface HorizontalPropertyCardProps {
  bookingId: string | number;
  image: StaticImageData;
  title: string;
  price: number;
  startDate: string;
  endDate: string;
}

const HorizontalPropertyCard = ({
  image,
  title,
  price,
  startDate,
  endDate,
  bookingId,
}: HorizontalPropertyCardProps) => {
  return (
    <Link
      href={`/booking/${bookingId}`}
      className="shadow-sm border p-3 flex relative rounded-lg cursor-pointer hover:shadow-md"
    >
      <Image
        src={image}
        alt={title}
        className="w-56 h-28 object-cover rounded-md"
      />
      <div className="p-3 flex flex-col justify-between flex-1 gap-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex justify-between items-center gap-3">
          <p className="text-label">Private Room</p>
          <p className="text-label">
            <span className="font-medium text-black">Rs.{price}</span>
            /Month
          </p>
        </div>
        <p className="text-label">
          From {startDate} to {endDate}
        </p>
      </div>
    </Link>
  );
};

export default HorizontalPropertyCard;
