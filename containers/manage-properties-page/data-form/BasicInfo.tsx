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
import GoogleMapContainer from "@/components/GoogleMapContainer";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { IBasicInfo } from ".";

const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const BasicInfo = ({
  basicInfo,
  setBasicInfo,
}: {
  basicInfo: IBasicInfo;
  setBasicInfo: React.Dispatch<React.SetStateAction<IBasicInfo>>;
}) => {
  const geocodeLocation = (location: any) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: location }, (results, status) => {
      if (status === "OK") {
        const result = results && results[0];
        if (!result) return null;
        const { lat, lng } = result?.geometry?.location;
        setBasicInfo((prev) => ({
          ...prev,
          location: {
            lat: lat(),
            lng: lng(),
          },
        }));
      }
    });
  };

  const changeLocationHandler = (location: any) => {
    if (!location) return;
    setBasicInfo((prev) => ({
      ...prev,
      address: location,
    }));
    geocodeLocation(location.label);
  };

  return (
    <div className="my-8 flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Label htmlFor="title" className="ml-1 font-semibold">
          Title
        </Label>
        <Input
          id="title"
          placeholder="Name of your property"
          value={basicInfo.name}
          onChange={(e) =>
            setBasicInfo((prev) => ({ ...prev, name: e.target.value }))
          }
        />
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
            value: basicInfo.address,
            onChange: changeLocationHandler,
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
          <GoogleMapContainer
            center={{
              lat: basicInfo.location.lat,
              lng: basicInfo.location.lng,
            }}
          />
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
          value={basicInfo.nearbySiteName}
          onChange={(e) =>
            setBasicInfo((prev) => ({
              ...prev,
              nearbySiteName: e.target.value,
            }))
          }
        />
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="flex flex-col gap-3 justify-between">
          <Label htmlFor="property-type" className="ml-1 font-semibold">
            Property Type
          </Label>
          <Select
            onValueChange={(value) =>
              setBasicInfo((prev) => ({ ...prev, propertyType: value }))
            }
            value={basicInfo?.propertyType}
          >
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
          <Select
            onValueChange={(value) =>
              setBasicInfo((prev) => ({ ...prev, propertySizeUnit: value }))
            }
            value={basicInfo?.propertySizeUnit}
          >
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
          <Input
            id="property-area"
            placeholder="Area of your property"
            type="number"
            value={basicInfo?.propertySize}
            onChange={(e) =>
              setBasicInfo((prev) => ({
                ...prev,
                propertySize: Number(e.target.value),
              }))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
