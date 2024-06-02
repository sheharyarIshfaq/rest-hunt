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
import Image, { StaticImageData } from "next/image";
import Book from "./Book";
import IconButton from "@/components/Shared/IconButton";
import { MdOutlineBathtub } from "react-icons/md";
import { BiArea } from "react-icons/bi";
import { FaWifi } from "react-icons/fa";
import {
  IoWaterOutline,
  IoBulbOutline,
  IoLibraryOutline,
} from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
import { LuSofa } from "react-icons/lu";
import { CiDumbbell } from "react-icons/ci";
import { GiWashingMachine } from "react-icons/gi";
import ImageSlider from "@/components/ImageSlider";
import getFacilityIcon from "../facilities-section/getFacilityIcons";

interface IRoomDetail {
  title: string;
  price: number;
  images: string[];
  facilities?: string[];
}

const RoomDetail = ({ title, price, images, facilities }: IRoomDetail) => {
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
            Private Room{" "}
            <span className="text-sm text-label ml-2">
              (10 private rooms are available)
            </span>
          </DialogTitle>
        </DialogHeader>
        <div>
          <ImageSlider images={images} />
          <div className="mt-2">
            <div className="flex items-center gap-3 my-3">
              <IconButton icon={<MdOutlineBathtub />} title="4 bathrooms" />
              <IconButton icon={<BiArea />} title="62.5 sq. ft." />
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
          />
          <Book
            title={title}
            price={price}
            image={images?.length > 0 ? images[0] : ""}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RoomDetail;
