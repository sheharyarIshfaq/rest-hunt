"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Shared/Navbar";
import { IoCalendarOutline } from "react-icons/io5";
import Image from "next/image";
import DUMMY_PROPERTIES from "@/data/properties";
import moment from "moment";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import VisaImg from "@/public/images/VISA.svg";
import MasterCardImg from "@/public/images/MASTERCARD.svg";
import JazzCashImg from "@/public/images/JAZZCASH.svg";
import EasyPaisaImg from "@/public/images/EASYPAISA.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CheckoutPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const property = searchParams.get("property");
  const price = searchParams.get("price");
  const moveInDate = searchParams.get("moveInDate");
  const moveOutDate = searchParams.get("moveOutDate");

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

  const checkoutHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Checkout logic here
    router.push("/confirmation");
  };

  return (
    <>
      <Navbar showSearch={false} isDark={false} />
      <div className="container py-6 grid grid-cols-2 gap-6">
        <div>
          <h1 className="text-2xl font-semibold">Confirm and Pay</h1>
          <p className="my-3 text-sm text-gray-500">
            Please ensure that you fill in real and accurate information in the
            following fields, as inaccurate information may cause a failure to
            confirm your booking.
          </p>
          <form onSubmit={checkoutHandler}>
            <div className="flex justify-between items-center gap-4 mb-3">
              <h1 className="text-xl font-semibold">Pay With</h1>
              <div className="flex items-center gap-2">
                <Image src={VisaImg} alt="Visa" />
                <Image src={MasterCardImg} alt="MasterCard" />
                <Image src={JazzCashImg} alt="JazzCash" />
                <Image src={EasyPaisaImg} alt="EasyPaisa" />
              </div>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose Payment Method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="card">Card</SelectItem>
                <SelectItem value="EasyPaisa">EasyPaisa</SelectItem>
                <SelectItem value="JazzCash">JazzCash</SelectItem>
              </SelectContent>
            </Select>
            <div className="mt-4">
              <Input type="text" placeholder="Card Number" required />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <Input type="text" placeholder="MM/YY" required />
              <Input type="text" placeholder="CVV" required />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <Input type="text" placeholder="First Name" required />
              <Input type="text" placeholder="Last Name" required />
            </div>
            <div className="mt-4">
              <Input type="email" placeholder="Email" required />
            </div>
            <div className="mt-4 flex items-center gap-2 text-gray-500">
              <Checkbox />
              <p>Remember payment method</p>
            </div>
            <Button className="mt-6 bg-main w-full">Confirm and pay</Button>
          </form>
        </div>
        <div className="flex justify-end flex-1">
          <div className="w-[80%] border p-4 rounded-md flex flex-col justify-between">
            <Image
              src={DUMMY_PROPERTIES[0].image}
              alt="Room"
              className="w-full h-56 object-cover rounded-md"
            />
            <div className="mt-2">
              <h1 className="text-lg font-semibold">{property}</h1>
              <div className="flex justify-between items-center gap-3 border-b pb-2">
                <h1 className="font-medium">Private Room</h1>
                <p className="my-2">
                  <span className="font-semibold">Rs.{price}</span>/Month
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
              <p className="font-semibold text-lg text-main">Rs.{price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
