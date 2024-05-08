import React from "react";
import HeartIcon from "@/public/icons/heart.svg";
import Image from "next/image";
import IconButton from "@/components/Shared/IconButton";
import { MdVerified } from "react-icons/md";
import { IoFlashOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const PropertySideDetailSection = () => {
  return (
    <div className="bg-white border-2 rounded-lg p-6 sticky top-4 left-0">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-medium">Starting From 8000/Month</h1>
        <button className="bg-gray-100 bg-opacity-95 transition-all duration-200 ease-in hover:bg-opacity-100 p-2 rounded-full">
          <Image src={HeartIcon} alt="Like" />
        </button>
      </div>
      <div className="flex items-center gap-2 my-3 flex-wrap">
        <IconButton icon={<MdVerified />} title="Verified" />
        <IconButton icon={<IoFlashOutline />} title="Fast Selling" />
        <IconButton icon={<MdVerified />} title="Verified" />
        <IconButton icon={<IoFlashOutline />} title="Fast Selling" />
        <IconButton icon={<MdVerified />} title="Verified" />
        <IconButton icon={<IoFlashOutline />} title="Fast Selling" />
      </div>
      <Button className="w-full bg-main hover:bg-main font-semibold hover:shadow-md mt-2">
        <a
          className="w-full h-full flex items-center justify-center"
          href="#rooms"
        >
          View Rooms
        </a>
      </Button>
      <div className="mt-4 border-t pt-4">
        <h1 className="font-semibold text-lg">Popular</h1>
        <p>15 people have viewed this property in the last 24 hours</p>
      </div>
    </div>
  );
};

export default PropertySideDetailSection;
