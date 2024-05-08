import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import {
  IoWaterOutline,
  IoBulbOutline,
  IoLibraryOutline,
} from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
import { LuSofa } from "react-icons/lu";
import { CiDumbbell } from "react-icons/ci";
import { GiWashingMachine } from "react-icons/gi";

const PropertyFacilitiesSection = () => {
  return (
    <div className="mt-4 border-b pb-6">
      <div className="mt-6">
        <h1 className="text-lg font-semibold">
          Bills{" "}
          <span className="text-gray-500 font-normal">(All inclusive)</span>
        </h1>
        <div className="flex items-center gap-6 flex-wrap mt-3">
          <div className="flex items-center gap-2 min-w-24">
            <FaRegCircleCheck className="text-lg" />
            <span>Wifi</span>
          </div>
          <div className="flex items-center gap-2 min-w-24">
            <FaRegCircleCheck className="text-lg" />
            <span>Water</span>
          </div>
          <div className="flex items-center gap-2 min-w-24">
            <FaRegCircleCheck className="text-lg" />
            <span>Electricity</span>
          </div>
          <div className="flex items-center gap-2 min-w-24">
            <FaRegCircleCheck className="text-lg" />
            <span>Gas</span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h1 className="text-lg font-semibold">Facilities & Services</h1>
        <div className="flex items-center gap-6 flex-wrap mt-3">
          <div className="flex items-center gap-2 min-w-24">
            <FaWifi className="text-lg" />
            <span>Wifi</span>
          </div>
          <div className="flex items-center gap-2 min-w-24">
            <IoWaterOutline className="text-lg" />
            <span>Water</span>
          </div>
          <div className="flex items-center gap-2 min-w-24">
            <IoBulbOutline className="text-lg" />
            <span>Electricity</span>
          </div>
          <div className="flex items-center gap-2 min-w-24">
            <AiOutlineFire className="text-lg" />
            <span>Gas</span>
          </div>
          <div className="flex items-center gap-2 min-w-24">
            <LuSofa className="text-lg" />
            <span>Lounge</span>
          </div>
          <div className="flex items-center gap-2 min-w-24">
            <CiDumbbell className="text-lg" />
            <span>Gym</span>
          </div>
          <div className="flex items-center gap-2 min-w-24">
            <GiWashingMachine className="text-lg" />
            <span>Laundry</span>
          </div>
          <div className="flex items-center gap-2 min-w-24">
            <IoLibraryOutline className="text-lg" />
            <span>Library</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFacilitiesSection;
