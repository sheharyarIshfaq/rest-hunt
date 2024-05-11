"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Shared/Navbar";
import Image from "next/image";
import DUMMY_PROPERTIES from "@/data/properties";
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
import BookingDetailCard from "@/components/BookingDetailCard";

const CheckoutPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const property = searchParams.get("property");
  const price = searchParams.get("price");
  const moveInDate = searchParams.get("moveInDate");
  const moveOutDate = searchParams.get("moveOutDate");

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
          <p className="my-3 text-sm text-label">
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
            <div className="mt-4 flex items-center gap-2 text-label">
              <Checkbox />
              <p>Remember payment method</p>
            </div>
            <Button className="mt-6 bg-main w-full">Confirm and pay</Button>
          </form>
        </div>
        <div className="flex justify-end flex-1">
          <BookingDetailCard
            image={DUMMY_PROPERTIES[0].image}
            property={property || ""}
            price={price || ""}
            moveInDate={moveInDate || ""}
            moveOutDate={moveOutDate || ""}
          />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
