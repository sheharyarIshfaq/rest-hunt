import GoogleMapContainer from "@/components/GoogleMapContainer";
import React from "react";

const PropertyLocationSection = () => {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="text-lg font-semibold">Nearby Map Location</h1>
      <div className="w-full h-[500px] mt-4">
        <GoogleMapContainer
          center={{ lat: 33.7665138, lng: 72.820658 }}
          place_id="123"
        />
      </div>
    </div>
  );
};

export default PropertyLocationSection;
