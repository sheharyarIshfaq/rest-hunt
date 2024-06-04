"use client";
import React, { FormEvent, useState } from "react";
import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const PaymentForm = ({
  propertyId,
  roomId,
  moveInDate,
  moveOutDate,
  totalAmount,
}: {
  propertyId: string;
  roomId: string;
  moveInDate: string;
  moveOutDate: string;
  totalAmount: number;
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const router = useRouter();
  const { token } = useAppSelector((state) => state.auth);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [processing, setProcessing] = useState<boolean>(false);

  const createBookingHandler = async (id: string, amount: number) => {
    try {
      const res = await fetch(`${BACKEND_URL}/bookings/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          property: propertyId,
          room: roomId,
          moveIn: moveInDate,
          moveOut: moveOutDate,
          total: amount,
          paymentId: id,
          status: "approved",
          provider: "stripe",
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      router.push("/confirmation");
    } catch (error) {
      console.log(error);
    } finally {
      setProcessing(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProcessing(true);

    if (elements == null) {
      return setProcessing(false);
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError?.message || "An unknown error occurred");
      return setProcessing(false);
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch(`${BACKEND_URL}/bookings/create-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        amount: totalAmount * 100, // amount in cents
        currency: "pkr",
      }),
    });

    const { client_secret: clientSecret } = await res.json();

    const response = await stripe?.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/confirmation`,
      },
      redirect: "if_required",
    });

    const { error, paymentIntent }: any = response;

    if (!error) {
      // The payment has been processed!, create booking
      createBookingHandler(
        paymentIntent?.id,
        Number(paymentIntent?.amount / 100)
      );
    }

    if (
      (error as any)?.type === "card_error" ||
      (error as any)?.type === "validation_error"
    ) {
      setErrorMessage(error?.message || "An unknown error occurred");
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
      <PaymentElement />
      <AddressElement
        options={{
          mode: "billing",
        }}
      />

      <Button
        type="submit"
        className="bg-main w-full"
        disabled={!stripe || !elements || processing}
      >
        {!processing ? "Confirm and pay" : "Processing..."}
      </Button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default PaymentForm;
