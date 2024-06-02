import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import getFacilityIcon from "./getFacilityIcons";

const PropertyFacilitiesSection = ({
  generalFacilities,
  roomFacilities,
}: {
  generalFacilities: string[];
  roomFacilities: string[];
}) => {
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
              {getFacilityIcon(facility)}
              <span className="capitalize">{facility}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyFacilitiesSection;
