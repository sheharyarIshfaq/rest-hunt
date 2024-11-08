import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppSelector } from "@/redux/store";

interface HorizontalPropertyCardProps {
  bookingId: string | number;
  image: StaticImageData;
  title: string;
  price: number;
  startDate: string;
  endDate: string;
  status: string;
  userData: any;
  roomCategory: string;
  rentAmountUnit: string;
}

const HorizontalPropertyCard = ({
  image,
  title,
  price,
  startDate,
  endDate,
  bookingId,
  status,
  userData,
  roomCategory,
  rentAmountUnit,
}: HorizontalPropertyCardProps) => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <Link
      href={`/booking/${bookingId}`}
      className="shadow-sm border p-3 flex flex-col sm:flex-row relative rounded-lg cursor-pointer hover:shadow-md"
    >
      <Image
        src={image}
        alt={title}
        className="w-full sm:w-56 h-40 object-cover rounded-md"
        width={224}
        height={144}
      />
      <div className="p-3 flex flex-col justify-between flex-1 gap-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex justify-between items-center gap-3 flex-wrap">
          <p className="text-label">
            {roomCategory === "entire-place"
              ? "Entire Place"
              : roomCategory === "shared"
              ? "Shared Room"
              : "Private Room"}
          </p>
          <p className="text-label">
            <span className="font-medium text-black">Rs.{price}</span>
          </p>
        </div>
        <p className="text-label capitalize font-semibold">Status: {status}</p>
        <p className="text-label">
          From {startDate} to {endDate}
        </p>
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src={userData?.profilePicture} />
            <AvatarFallback>
              {userData?.name
                .split(" ")
                .map((name: string) => name[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <p className="text-sm">
            {user?.role === "property_owner" ? "Booked by" : "Hosted by"}{" "}
            <span className="font-medium">{userData?.name}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalPropertyCard;
