"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import GoogleMapContainer from "@/components/GoogleMapContainer";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const BasicInfo = () => {
  const [location, setLocation] = useState<any>(null);
  const [latitude, setLatitude] = useState<number>(33.7665138);
  const [longitude, setLongitude] = useState<number>(72.820658);

  const geocodeLocation = (location: any) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: location }, (results, status) => {
      if (status === "OK") {
        const result = results && results[0];
        if (!result) return;
        const { lat, lng } = result?.geometry?.location;
        setLatitude(lat());
        setLongitude(lng());
      }
    });
  };

  useEffect(() => {
    if (location) {
      geocodeLocation(location.label);
    }
  }, [location]);

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
        <GooglePlacesAutocomplete
          apiKey={GOOGLE_MAP_API_KEY}
          selectProps={{
            className: "w-full mt-2",
            placeholder:
              "Address of your property, i.e, street, block, phase etc.",
            value: location,
            onChange: setLocation,
            styles: {
              control: (provided) => ({
                ...provided,
                padding: "6px 6px",
                borderColor: "214.3 31.8% 91.4%",
                boxShadow: "none",
                "&:hover": {
                  borderColor: "214.3 31.8% 91.4%",
                },
                "&:focus-within": {
                  borderColor: "#34C759",
                  boxShadow: "0 0 0 1px #34C759",
                },
              }),
            },
          }}
        />
        <div className="w-full h-[250px] mt-4">
          <GoogleMapContainer center={{ lat: latitude, lng: longitude }} />
        </div>
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
