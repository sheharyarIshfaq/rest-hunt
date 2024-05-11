import React from "react";
import SortFilter from "./SortFilter";
import PropertyTypeFilter from "./PropertyTypeFilter";

const FilterSection = () => {
  return (
    <section className="container pt-6 overflow-hidden">
      <div className="w-full overflow-x-scroll no-scrollbar flex items-center gap-3">
        <SortFilter />
        <PropertyTypeFilter name="Property Type" />
        <PropertyTypeFilter name="Room Type" />
        <PropertyTypeFilter name="Price" />
        <PropertyTypeFilter name="Special Offer" />
        <PropertyTypeFilter name="Review rating" />
        <PropertyTypeFilter name="Facilities" />
      </div>
    </section>
  );
};

export default FilterSection;
