import GoogleMapContainer from "@/components/GoogleMapContainer";
import React from "react";

const PropertyLocationSection = ({
  location,
}: {
  location: { lat: number; lng: number };
}) => {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="text-lg font-semibold">Nearby Map Location</h1>
      <div className="w-full h-[500px] mt-4">
        <GoogleMapContainer
          center={{ lat: location?.lat, lng: location?.lng }}
        />
      </div>
    </div>
  );
};

export default PropertyLocationSection;
