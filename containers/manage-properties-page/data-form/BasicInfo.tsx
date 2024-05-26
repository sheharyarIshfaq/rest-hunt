"use client";
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
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="flex flex-col gap-3 justify-between">
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
        <div className="flex flex-col gap-3 justify-between">
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
        <div className="flex flex-col gap-3 justify-between">
          <Label htmlFor="property-area" className="ml-1 font-semibold">
            Property Area
          </Label>
          <Input id="property-area" placeholder="Area of your property" />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
