import React from "react";
import { Separator } from "@/components/ui/separator";
import { BsChevronDown } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const SortFilter = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center border border-gray-300 gap-2 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in hover:bg-gray-100 min-w-fit">
            <p>Sort</p>
            <BsChevronDown className="text-xl" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="min-w-56">
          <DropdownMenuLabel className="text-lg">Sort By</DropdownMenuLabel>
          <RadioGroup defaultValue="recommended" className="my-2">
            <DropdownMenuItem className="flex items-center space-x-2">
              <RadioGroupItem value="recommended" id="r1" />
              <Label htmlFor="r1">Recommended</Label>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center space-x-2">
              <RadioGroupItem value="low-to-high" id="r2" />
              <Label htmlFor="r2">Price (Low to High)</Label>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center space-x-2">
              <RadioGroupItem value="high-to-low" id="r3" />
              <Label htmlFor="r3">Price (High to Low)</Label>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center space-x-2">
              <RadioGroupItem value="newly-added" id="r4" />
              <Label htmlFor="r4">Newly Added</Label>
            </DropdownMenuItem>
          </RadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="h-12">
        <Separator orientation="vertical" />
      </div>
    </>
  );
};

export default SortFilter;
