"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Checkbox } from "@/components/ui/checkbox";
import { BsChevronDown } from "react-icons/bs";

const PropertyTypeFilter = ({ name }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <DropdownMenu open={isOpen}>
      <DropdownMenuTrigger onClick={() => setIsOpen(true)}>
        <div className="flex items-center border border-gray-300 gap-2 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in hover:bg-gray-100 min-w-fit">
          <p>{name}</p>
          <BsChevronDown className="text-xl" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-64 pr-4">
        <DropdownMenuLabel className="flex items-center justify-between gap-2">
          <p className="text-lg">{name}</p>
          <button className="text-main" onClick={() => setIsOpen(false)}>
            Apply
          </button>
        </DropdownMenuLabel>
        <div className="my-2 grid grid-cols-2 gap-2">
          <DropdownMenuItem className="flex items-center space-x-2">
            <Checkbox id="house" />
            <label htmlFor="recommended">House</label>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center space-x-2">
            <Checkbox id="apartment" />
            <label htmlFor="low-to-high">Apartment</label>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center space-x-2">
            <Checkbox id="condo" />
            <label htmlFor="high-to-low">Condo</label>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center space-x-2">
            <Checkbox id="townhouse" />
            <label htmlFor="newly-added">Townhouse</label>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center space-x-2">
            <Checkbox id="land" />
            <label htmlFor="newly-added">Land</label>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center space-x-2">
            <Checkbox id="commercial" />
            <label htmlFor="newly-added">Commercial</label>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center space-x-2">
            <Checkbox id="other" />
            <label htmlFor="newly-added">Other</label>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center space-x-2">
            <Checkbox id="all" />
            <label htmlFor="newly-added">All</label>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PropertyTypeFilter;
