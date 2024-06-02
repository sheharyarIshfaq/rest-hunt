"use client";
import React, { useEffect } from "react";
import { useAppSelector } from "@/redux/store";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const AddToRecentlyViewed = ({ propertyId }: { propertyId: string }) => {
  const { user } = useAppSelector((state) => state.auth);

  const addToRecentlyViewedHandler = async () => {
    if (!propertyId) return;
    try {
      const res = await fetch(`${BACKEND_URL}/recently-viewed/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ propertyId, userId: user?._id }),
      });

      if (res.ok) {
        console.log("Added to recently viewed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    addToRecentlyViewedHandler();
  });

  return <></>;
};

export default AddToRecentlyViewed;
