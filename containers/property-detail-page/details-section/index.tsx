import React from "react";
import IconButton from "@/components/Shared/IconButton";
import { IoLocationSharp } from "react-icons/io5";
import { FaWalking, FaCar } from "react-icons/fa";

interface IPropertyDetailsSection {
  name: string;
  address: string;
  nearbySiteName: string;
}

const PropertyDetailsSection = ({
  name,
  address,
  nearbySiteName,
}: IPropertyDetailsSection) => {
  return (
    <div className="mt-4 border-b pb-2">
      <div className="flex justify-between items-center gap-3 flex-wrap">
        <h1 className="text-xl font-semibold">{name}</h1>
      </div>
      <p className="text-label mt-2">{address}</p>
      <div className="flex items-center gap-3 my-3">
        {nearbySiteName !== "" && (
          <div className="flex items-center gap-1">
            <IoLocationSharp className="text-xl" />
            <span className="text-label">{nearbySiteName}</span>
          </div>
        )}
        {/* <div className="flex items-center gap-1">
          <FaWalking className="text-xl" />
          <span className="text-label">20 Mins</span>
        </div>
        <div className="flex items-center gap-1">
          <FaCar className="text-xl" />
          <span className="text-label">5 Mins</span>
        </div> */}
      </div>
    </div>
  );
};

export default PropertyDetailsSection;
