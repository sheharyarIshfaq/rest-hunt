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

interface IRoomDetail {
  title: string;
  price: number;
  image: StaticImageData;
}

const RoomDetail = ({ title, price, image }: IRoomDetail) => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="flex items-center gap-2 my-3 text-gray-500">
          View Details <BsChevronRight />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Private Room{" "}
            <span className="text-sm text-gray-500 ml-2">
              (10 private rooms are available)
            </span>
          </DialogTitle>
        </DialogHeader>
        <div>
          <ImageSlider />
          <div className="mt-2">
            <div className="flex items-center gap-3 my-3">
              <IconButton icon={<MdOutlineBathtub />} title="4 bathrooms" />
              <IconButton icon={<BiArea />} title="62.5 sq. ft." />
            </div>
            <div>
              <h1 className="font-semibold">General Facilities</h1>
              <div className="flex items-center gap-6 flex-wrap mt-3">
                <div className="flex items-center gap-2 min-w-24">
                  <FaWifi className="text-lg" />
                  <span>Wifi</span>
                </div>
                <div className="flex items-center gap-2 min-w-24">
                  <IoWaterOutline className="text-lg" />
                  <span>Water</span>
                </div>
                <div className="flex items-center gap-2 min-w-24">
                  <IoBulbOutline className="text-lg" />
                  <span>Electricity</span>
                </div>
                <div className="flex items-center gap-2 min-w-24">
                  <AiOutlineFire className="text-lg" />
                  <span>Gas</span>
                </div>
                <div className="flex items-center gap-2 min-w-24">
                  <LuSofa className="text-lg" />
                  <span>Lounge</span>
                </div>
              </div>
            </div>
            <div className="my-3">
              <h1 className="font-semibold">Room Facilities</h1>
              <div className="flex items-center gap-6 flex-wrap mt-3">
                <div className="flex items-center gap-2 min-w-24">
                  <AiOutlineFire className="text-lg" />
                  <span>Gas</span>
                </div>
                <div className="flex items-center gap-2 min-w-24">
                  <LuSofa className="text-lg" />
                  <span>Lounge</span>
                </div>
                <div className="flex items-center gap-2 min-w-24">
                  <CiDumbbell className="text-lg" />
                  <span>Gym</span>
                </div>
                <div className="flex items-center gap-2 min-w-24">
                  <GiWashingMachine className="text-lg" />
                  <span>Laundry</span>
                </div>
                <div className="flex items-center gap-2 min-w-24">
                  <IoLibraryOutline className="text-lg" />
                  <span>Library</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Enquire title={title} price={price} image={image} />
          <Book title={title} price={price} image={image} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RoomDetail;
