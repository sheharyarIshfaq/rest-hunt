import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BsChevronRight } from "react-icons/bs";
import Enquire from "./Enquire";
import Book from "./Book";
import IconButton from "@/components/Shared/IconButton";
import { MdOutlineBathtub } from "react-icons/md";
import { BiArea } from "react-icons/bi";
import ImageSlider from "@/components/ImageSlider";
import getFacilityIcon from "../facilities-section/getFacilityIcons";

interface IRoomDetail {
  title: string;
  price: number;
  images: string[];
  facilities?: string[];
  noOfBathrooms: number;
  availableRooms: string;
  type: string;
  rentAmountUnit: string;
  propertySize: number;
  propertySizeUnit: string;
  propertyId: string;
  roomId: string;
  ownerId: string;
}

const RoomDetail = ({
  title,
  price,
  images,
  facilities,
  noOfBathrooms,
  availableRooms,
  type,
  rentAmountUnit,
  propertySize,
  propertySizeUnit,
  propertyId,
  roomId,
  ownerId,
}: IRoomDetail) => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="flex items-center gap-2 my-3 text-label">
          View Details <BsChevronRight />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {type === "entire-place"
              ? "Entire Place"
              : type === "shared"
              ? "Shared Room"
              : "Private Room"}
            <span className="text-sm text-label ml-2">({availableRooms})</span>
          </DialogTitle>
        </DialogHeader>
        <div>
          <ImageSlider images={images} />
          <div className="mt-2">
            <div className="flex items-center gap-3 my-3">
              {noOfBathrooms > 0 && (
                <IconButton
                  icon={<MdOutlineBathtub />}
                  title={`${noOfBathrooms} bathrooms`}
                />
              )}
              <IconButton
                icon={<BiArea />}
                title={`${propertySize} ${propertySizeUnit}`}
              />
            </div>
            <div>
              <h1 className="font-semibold">Room Facilities</h1>
              <div className="flex items-center gap-6 flex-wrap mt-3">
                {facilities?.map((facility: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 min-w-24">
                    {getFacilityIcon(facility)}
                    <span className="capitalize">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Enquire
            title={title}
            price={price}
            image={images?.length > 0 ? images[0] : ""}
            type={type}
            ownerId={ownerId}
            propertyId={propertyId}
            roomId={roomId}
          />
          <Book
            id={propertyId}
            roomId={roomId}
            title={title}
            price={price}
            image={images?.length > 0 ? images[0] : ""}
            type={type}
            rentAmountUnit={rentAmountUnit}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RoomDetail;
