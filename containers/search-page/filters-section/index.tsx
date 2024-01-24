import React from "react";
import { BsChevronDown } from "react-icons/bs";

const Filters = [
  {
    id: 1,
    name: "Sort",
  },
  {
    id: 2,
    name: "Length of stay",
  },
  {
    id: 3,
    name: "University",
  },
  {
    id: 4,
    name: "Room Type",
  },
  {
    id: 5,
    name: "Price",
  },
  {
    id: 6,
    name: "Special Offers",
  },
  {
    id: 7,
    name: "More",
  },
];

const FilterSection = () => {
  return (
    <section className="container pt-6 overflow-hidden">
      <div className="w-full overflow-x-scroll no-scrollbar flex items-center gap-3">
        {Filters.map((filter) => (
          <div
            key={filter.id}
            className="flex items-center border border-gray-300 gap-2 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in hover:bg-gray-100 min-w-fit"
          >
            <p>{filter.name}</p>
            <BsChevronDown className="text-xl" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilterSection;
