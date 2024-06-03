"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Shared/Navbar";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import VisaImg from "@/public/images/VISA.svg";
import MasterCardImg from "@/public/images/MASTERCARD.svg";
import JazzCashImg from "@/public/images/JAZZCASH.svg";
import EasyPaisaImg from "@/public/images/EASYPAISA.svg";
import { Button } from "@/components/ui/button";
import BookingDetailCard from "@/components/BookingDetailCard";
import SyncLoader from "react-spinners/SyncLoader";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import moment from "moment";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const CheckoutPage = () => {
  const [property, setProperty] = React.useState<any>(null);
  const [roomData, setRoomData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [totalAmount, setTotalAmount] = React.useState<number>(0);

  const [choosedPaymentMethod, setChoosedPaymentMethod] =
    React.useState("card");

  const searchParams = useSearchParams();
  const propertyId = searchParams.get("property");
  const roomId = searchParams.get("room");
  const moveInDate = searchParams.get("moveInDate");
  const moveOutDate = searchParams.get("moveOutDate");

  const getProperty = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/properties/${propertyId}`);

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      const propertyData = data?.data;
      const room = propertyData?.rooms?.find(
        (room: any) => room._id === roomId
      );
      setRoomData(room);
      setProperty(propertyData);
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getProperty();
  }, []);

  const setTotalPriceHandler = () => {
    if (moveInDate && moveOutDate) {
      //rent amount unit is per-month, per-week, per-day, per-year, so we need to calculate the total price based on the rent amount unit
      //we can convert the rent amount to per-day and then multiply by the number of days
      const diff = moment(moveOutDate).diff(moveInDate, "days");
      const price = Number(roomData?.rentAmount) || 0;
      let totalPrice = 0;
      switch (roomData?.rentAmountUnit) {
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
      setTotalAmount(Number(totalPrice.toFixed(2)));
    }
  };

  React.useEffect(() => {
    if (!loading && moveInDate && moveOutDate && property && roomData)
      setTotalPriceHandler();
  }, [moveInDate, moveOutDate, property, roomData]);

  return (
    <>
      <Navbar showSearch={false} isDark={false} />
      {!loading && (
        <div className="container py-6 flex flex-col-reverse sm:flex-row justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-2xl font-semibold">Confirm and Pay</h1>
            <p className="my-3 text-sm text-label">
              Please ensure that you fill in real and accurate information in
              the following fields, as inaccurate information may cause a
              failure to confirm your booking.
            </p>
            <div>
              <div className="flex justify-between items-center gap-4 mb-3">
                <h1 className="text-xl font-semibold">Pay With</h1>
                <div className="flex items-center gap-2">
                  <Image src={VisaImg} alt="Visa" />
                  <Image src={MasterCardImg} alt="MasterCard" />
                  <Image src={JazzCashImg} alt="JazzCash" />
                  <Image src={EasyPaisaImg} alt="EasyPaisa" />
                </div>
              </div>
              <Select
                value={choosedPaymentMethod}
                onValueChange={(value) => setChoosedPaymentMethod(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose Payment Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="card">Debit or Credit Card</SelectItem>
                  <SelectItem value="EasyPaisa">EasyPaisa</SelectItem>
                  <SelectItem value="JazzCash">JazzCash</SelectItem>
                </SelectContent>
              </Select>
              {choosedPaymentMethod === "card" && (
                <Elements
                  stripe={stripePromise}
                  options={{
                    mode: "payment",
                    amount: 1000 * 100,
                    currency: "pkr",
                  }}
                >
                  <PaymentForm />
                </Elements>
              )}
              {
                //for jazzcash and easypaisa, we display our account information and ask user to transfer the amount to our account
                choosedPaymentMethod === "JazzCash" ||
                choosedPaymentMethod === "EasyPaisa" ? (
                  <div className="mt-4">
                    <p className="text-label">
                      Please transfer the amount to the following account, once
                      we receive the payment, your booking will be confirmed. In
                      the meantime, you can contact us at info@rest-hunt.com for
                      any queries.
                    </p>
                    <div className="mt-4 text-label flex flex-col gap-3">
                      <p>
                        <span className="font-semibold">Account Title:</span>{" "}
                        Rest Hunt
                      </p>
                      <p>
                        <span className="font-semibold">Account Number:</span>{" "}
                        123456789
                      </p>
                      <p>
                        <span className="font-semibold">Bank Name:</span>{" "}
                        {choosedPaymentMethod}
                      </p>
                      <p>
                        <span className="font-semibold">Amount:</span>{" "}
                        {totalAmount}
                      </p>
                    </div>
                    <p className="text-label mt-4">
                      Once you have transferred the amount, please click the
                      button below to confirm your booking. We will verify the
                      payment and confirm your booking within 24 hours.
                    </p>
                  </div>
                ) : null
              }
              {choosedPaymentMethod !== "card" && (
                <Button className="mt-6 bg-main w-full">Proceed</Button>
              )}
            </div>
          </div>
          <div className="flex justify-end flex-1 h-fit">
            <BookingDetailCard
              image={property?.rooms?.[0]?.images?.[0] || ""}
              property={property?.name || ""}
              price={Number(roomData?.rentAmount) || 0}
              moveInDate={moveInDate || ""}
              moveOutDate={moveOutDate || ""}
              rentAmountUnit={roomData?.rentAmountUnit || ""}
              totalAmount={totalAmount}
            />
          </div>
        </div>
      )}
      {loading && (
        <div className="w-full h-[80vh] flex items-center justify-center">
          <SyncLoader color="#34C759" />
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
