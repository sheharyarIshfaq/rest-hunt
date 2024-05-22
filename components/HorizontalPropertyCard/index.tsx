import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
      className="shadow-sm border p-3 flex flex-col sm:flex-row relative rounded-lg cursor-pointer hover:shadow-md"
    >
      <Image
        src={image}
        alt={title}
        className="w-full sm:w-56 h-36 object-cover rounded-md"
      />
      <div className="p-3 flex flex-col justify-between flex-1 gap-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex justify-between items-center gap-3 flex-wrap">
          <p className="text-label">Private Room</p>
          <p className="text-label">
            <span className="font-medium text-black">Rs.{price}</span>
            /Month
          </p>
        </div>
        <p className="text-label">
          From {startDate} to {endDate}
        </p>
        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-sm">
            Hosted by <span className="font-medium">Sheharyar Ishfaq</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalPropertyCard;
