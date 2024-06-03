"use client";
import moment from "moment";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { Separator } from "../ui/separator";

interface BookingDetailCardProps {
  image: StaticImageData | string;
  property: string;
  price: number;
  moveInDate: string;
  moveOutDate: string;
  rentAmountUnit: string;
}

const BookingDetailCard = ({
  image,
  property,
  price,
  moveInDate,
  moveOutDate,
  rentAmountUnit,
}: BookingDetailCardProps) => {
  const [totalPrice, setTotalPrice] = React.useState<number>(0);

  const calculateDifference = () => {
    //in months, if not in months then in days
    if (moveInDate && moveOutDate) {
      const diff = moment(moveOutDate).diff(moveInDate, "months");
      return diff > 0
        ? diff + " months"
        : moment(moveOutDate).diff(moveInDate, "days") + " days";
    }
    return "";
  };

  const setTotalPriceHandler = () => {
    if (moveInDate && moveOutDate) {
      //rent amount unit is per-month, per-week, per-day, per-year, so we need to calculate the total price based on the rent amount unit
      //we can convert the rent amount to per-day and then multiply by the number of days
      const diff = moment(moveOutDate).diff(moveInDate, "days");
      let totalPrice = 0;
      switch (rentAmountUnit) {
        case "per-month":
          totalPrice = (price * diff) / 30;
          break;
        case "per-week":
          totalPrice = (price * diff) / 7;
          break;
        case "per-day":
          totalPrice = price * diff;
          break;
        case "per-year":
          totalPrice = (price * diff) / 365;
          break;
        default:
          totalPrice = price * diff;
          break;
      }
      setTotalPrice(Number(totalPrice.toFixed(2)));
    }
  };

  React.useEffect(() => {
    setTotalPriceHandler();
  }, [moveInDate, moveOutDate]);

  return (
    <div className="w-full md:w-[80%] border p-4 rounded-md flex flex-col justify-between">
      <Image
        src={image}
        alt="Property"
        className="w-full h-56 object-cover rounded-md"
        width={500}
        height={500}
      />
      <div className="mt-2">
        <h1 className="text-lg font-semibold">{property}</h1>
        <div className="flex justify-between items-center gap-3 border-b pb-2">
          <h1 className="font-medium">Private Room</h1>
          <p className="my-2">
            <span className="font-semibold">Rs.{price}</span>/{rentAmountUnit}
          </p>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center gap-2">
          <IoCalendarOutline className="text-lg" />
          <p>Move in date: </p>
          <button className="text-main font-semibold">
            {moveInDate
              ? moment(moveInDate).format("MMM DD, YYYY")
              : "choose your dates"}
          </button>
        </div>
        <div className="h-10 my-1 ml-2 flex items-center gap-4">
          <Separator orientation="vertical" className="" />
          {moveInDate && moveOutDate && (
            <div className="bg-gray-100 rounded-sm py-2 px-4 text-sm">
              {calculateDifference()}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <IoCalendarOutline className="text-lg" />
          <p>Move out date: </p>
          <button className="text-main font-semibold">
            {moveOutDate
              ? moment(moveOutDate).format("MMM DD, YYYY")
              : "choose your dates"}
          </button>
        </div>
      </div>
      <div className="mt-2 border-t pt-2 flex items-center gap-3 justify-between">
        <h1 className="text-xl font-semibold">Total</h1>
        <p className="font-semibold text-lg text-main">Rs.{totalPrice}</p>
      </div>
    </div>
  );
};

export default BookingDetailCard;
