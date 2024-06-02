import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { AiOutlineFire } from "react-icons/ai";
import { LuSofa } from "react-icons/lu";
import { CiDumbbell } from "react-icons/ci";
import { MdElevator, MdLocalParking, MdPool } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import { TbAirConditioning } from "react-icons/tb";
import { TbToolsKitchen } from "react-icons/tb";
import { PiTelevision } from "react-icons/pi";
import { MdBalcony } from "react-icons/md";

const PropertyFacilitiesSection = ({
  generalFacilities,
  roomFacilities,
}: {
  generalFacilities: string[];
  roomFacilities: string[];
}) => {
  const getIcon = (facility: string) => {
    switch (facility) {
      case "wifi":
        return <FaWifi className="text-lg" />;
      case "parking":
        return <MdLocalParking className="text-lg" />;
      case "security":
        return <CiCamera className="text-lg" />;
      case "furnished":
        return <LuSofa className="text-lg" />;
      case "ac":
        return <TbAirConditioning className="text-lg" />;
      case "heating":
        return <AiOutlineFire className="text-lg" />;
      case "kitchen":
        return <TbToolsKitchen className="text-lg" />;
      case "tv":
        return <PiTelevision className="text-lg" />;
      case "balcony":
        return <MdBalcony className="text-lg" />;
      case "gym":
        return <CiDumbbell className="text-lg" />;
      case "pool":
        return <MdPool className="text-lg" />;
      case "elevator":
        return <MdElevator className="text-lg" />;
      default:
        return <FaRegCircleCheck className="text-lg" />;
    }
  };

  return (
    <div className="mt-4 border-b pb-6">
      <div className="mt-6">
        <h1 className="text-lg font-semibold">
          Bills <span className="text-label font-normal">(All inclusive)</span>
        </h1>
        <div className="flex items-center gap-6 flex-wrap mt-3">
          {generalFacilities.map((facility) => (
            <div key={facility} className="flex items-center gap-2 min-w-24">
              <FaRegCircleCheck className="text-lg" />
              <span className="capitalize">{facility}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h1 className="text-lg font-semibold">Facilities & Services</h1>
        <div className="flex items-center gap-6 flex-wrap mt-3">
          {roomFacilities.map((facility) => (
            <div key={facility} className="flex items-center gap-2 min-w-24">
              {getIcon(facility)}
              <span className="capitalize">{facility}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyFacilitiesSection;
