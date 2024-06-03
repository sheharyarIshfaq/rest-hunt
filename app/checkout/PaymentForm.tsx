"use client";
import React, { FormEvent, useState } from "react";
import {
  AddressElement,
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/store";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { token } = useAppSelector((state) => state.auth);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError?.message || "An unknown error occurred");
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch(`${BACKEND_URL}/bookings/create-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        amount: 1000 * 100, // amount in cents
        currency: "pkr",
      }),
    });

    const { client_secret: clientSecret } = await res.json();

    const { error }: any = await stripe?.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/confirmation`,
      },
      redirect: "if_required",
    });

    if (
      (error as any)?.type === "card_error" ||
      (error as any)?.type === "validation_error"
    ) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error?.message || "An unknown error occurred");
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
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
        disabled={!stripe || !elements}
      >
        Confirm and pay
      </Button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default PaymentForm;
