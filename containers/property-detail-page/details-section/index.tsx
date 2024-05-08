import React from "react";
import IconButton from "@/components/Shared/IconButton";
import { IoLocationSharp } from "react-icons/io5";
import { FaWalking, FaCar } from "react-icons/fa";

const PropertyDetailsSection = () => {
  return (
    <div className="mt-4 border-b pb-2">
      <div className="flex justify-between items-center gap-3">
        <h1 className="text-xl font-semibold">
          Continental Boys Hostel Model Town
        </h1>
        <IconButton title="Verified" />
      </div>
      <p className="text-gray-500">1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
      <div className="flex items-center gap-3 my-3">
        <div className="flex items-center gap-1">
          <IoLocationSharp className="text-xl" />
          <span className="text-gray-500">
            Distance to University Of Engineering & Technology, Lahore
          </span>
        </div>
        <div className="flex items-center gap-1">
          <FaWalking className="text-xl" />
          <span className="text-gray-500">20 Mins</span>
        </div>
        <div className="flex items-center gap-1">
          <FaCar className="text-xl" />
          <span className="text-gray-500">5 Mins</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsSection;
