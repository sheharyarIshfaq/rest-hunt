"use client";
import Navbar from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ConfirmGif from "@/public/images/confirm.gif";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ConfirmationPage = () => {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col">
      <Navbar showSearch={false} isDark={false} />
      <div className="container flex-1 flex flex-col justify-center items-center">
        <Image src={ConfirmGif} alt="Confirmation" className="w-36" />
        <h1 className="text-2xl font-semibold">Congratulations 🎉</h1>
        <p className="my-6 sm:max-w-[70vw] text-center">
          Your booking is confirmed, download the receipt from below. Check out
          the details in my booking tab. In case you want to change or cancel
          the booking reservation please contact{" "}
          <span className="font-medium underline">customer support</span>
        </p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => router.push("/")}>
            <BsChevronLeft className="mr-1 -ml-2" />
            Back to home
          </Button>
          {/* <Button variant="outline">
            Download Receipt <BsChevronRight className="ml-1" />
          </Button> */}
        </div>
      </div>
      <div className="h-24"></div>
    </div>
  );
};

export default ConfirmationPage;
