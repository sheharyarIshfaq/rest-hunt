import React from "react";
import { BsChevronRight } from "react-icons/bs";

const PropertyDescriptionSection = () => {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="text-lg font-semibold">Description</h1>
      <p className="text-gray-500 my-3">
        Physical space is often conceived in three linear dimensions, although
        modern physicists usually con Physical space is often conceived in three
        linear dimensions, although modern physicists usually con Physical space
        is often conceived in three linear dimensions, although modern
        physicists usually con Physical space.
      </p>
      <button className="flex items-center gap-2 font-semibold">
        View full description <BsChevronRight />
      </button>
    </div>
  );
};

export default PropertyDescriptionSection;
