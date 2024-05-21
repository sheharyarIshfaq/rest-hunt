import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BsPlus } from "react-icons/bs";
import CheckBoxItem from "@/components/CheckBoxItem";

const BasicInfo = () => {
  return (
    <div className="my-8 flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Label htmlFor="title" className="ml-1 font-semibold">
          Title
        </Label>
        <Input id="title" placeholder="Name of your property" />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="address" className="ml-1 font-semibold">
          Address
        </Label>
        <Input
          id="address"
          placeholder="Address of your property, i.e, street, block, phase etc."
        />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="nearby-site" className="ml-1 font-semibold">
          Nearby site name
          <span className="ml-1 font-medium text-xs text-label">
            (Helps in finding property)
          </span>
        </Label>
        <Input
          id="nearby-site"
          placeholder="Name of the known site around your property"
        />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-3">
          <Label htmlFor="property-type" className="ml-1 font-semibold">
            Property Type
          </Label>
          <Select>
            <SelectTrigger id="property-type">
              <SelectValue placeholder="Choose Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="plot">Plot</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="property-size" className="ml-1 font-semibold">
            Property Size{" "}
            <span className="font-medium text-xs text-label">
              (As per room category)
            </span>
          </Label>
          <Select>
            <SelectTrigger id="property-size">
              <SelectValue placeholder="Choose Property Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Square foot">
                Square foot <span className="text-xs text-label">(Sq. ft)</span>
              </SelectItem>
              <SelectItem value="Square meter">
                Square meter{" "}
                <span className="text-xs text-label">(Sq. mt)</span>
              </SelectItem>
              <SelectItem value="Square yard">
                Square yard <span className="text-xs text-label">(Sq. yd)</span>
              </SelectItem>
              <SelectItem value="marla">Marla</SelectItem>
              <SelectItem value="kanal">Kanal</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="property-area" className="ml-1 font-semibold">
            Property Area
          </Label>
          <Input id="property-area" placeholder="Area of your property" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-3">
          <Label htmlFor="room-category" className="ml-1 font-semibold">
            Room Category{" "}
            <span className="font-medium text-xs text-label">
              (It will be shown as tab)
            </span>
          </Label>
          <Select>
            <SelectTrigger id="room-category">
              <SelectValue placeholder="Choose Room Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private">Private</SelectItem>
              <SelectItem value="shared">Shared</SelectItem>
              <SelectItem value="entire-place">Entire Place</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="no-of-rooms" className="ml-1 font-semibold">
            No. of rooms{" "}
            <span className="font-medium text-xs text-label">
              (As per category)
            </span>
          </Label>
          <Input id="no-of-rooms" placeholder="Number of rooms" />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="no-of-bathrooms" className="ml-1 font-semibold">
            No. of bathrooms{" "}
            <span className="font-medium text-xs text-label">
              (As per category)
            </span>
          </Label>
          <Input id="no-of-bathrooms" placeholder="Number of Bathrooms" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="bills" className="ml-1 font-semibold">
          Bills Included
        </Label>
        <div className="flex items-center gap-8 flex-wrap ml-1">
          <CheckBoxItem id="electricity" label="Electricity" />
          <CheckBoxItem id="gas" label="Gas" />
          <CheckBoxItem id="water" label="Water" />
          <CheckBoxItem id="internet" label="Internet" />
          <CheckBoxItem id="cable" label="Cable" />
          <CheckBoxItem id="cleaning-service" label="Cleaning Service" />
          <CheckBoxItem id="laundry" label="Laundry" />
          <CheckBoxItem id="food" label="Food" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="rent" className="ml-1 font-semibold">
          Facilities & Services
        </Label>
        <div className="flex items-center gap-8 flex-wrap ml-1">
          <CheckBoxItem id="wifi" label="Wifi" />
          <CheckBoxItem id="parking" label="Parking" />
          <CheckBoxItem id="security" label="Security" />
          <CheckBoxItem id="furnished" label="Furnished" />
          <CheckBoxItem id="ac" label="AC" />
          <CheckBoxItem id="heating" label="Heating" />
          <CheckBoxItem id="kitchen" label="Kitchen" />
          <CheckBoxItem id="tv" label="TV" />
          <CheckBoxItem id="balcony" label="Balcony" />
          <CheckBoxItem id="gym" label="Gym" />
          <CheckBoxItem id="pool" label="Pool" />
          <CheckBoxItem id="elevator" label="Elevator" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="gallery" className="ml-1 font-semibold">
          Gallery{" "}
          <span className="font-medium text-xs text-label">
            (You've to upload at least 4 images or more)
          </span>
        </Label>
        <div className="flex items-center gap-8 flex-wrap ml-1">
          <div className="w-[100px] h-[100px] bg-gray-300 rounded-lg"></div>
          <div className="w-[100px] h-[100px] bg-gray-300 rounded-lg"></div>
          <div className="w-[100px] h-[100px] bg-gray-300 rounded-lg"></div>
          <div className="w-[100px] h-[100px] bg-gray-300 rounded-lg"></div>
          <div className="w-[100px] h-[100px] bg-gray-300 rounded-lg"></div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="price" className="ml-1 font-semibold">
          Price{" "}
          <span className="font-medium text-xs text-label">
            (Choose price per day, week, month or year)
          </span>
        </Label>
        <div className="grid grid-cols-2 gap-6 md:max-w-2xl">
          <Input id="price" placeholder="Price" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Per Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Per Day</SelectItem>
              <SelectItem value="week">Per Week</SelectItem>
              <SelectItem value="month">Per Month</SelectItem>
              <SelectItem value="year">Per Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <button className="flex items-center gap-1 text-main font-medium">
        <BsPlus className="text-2xl" />
        Add another room category
      </button>
    </div>
  );
};

export default BasicInfo;
