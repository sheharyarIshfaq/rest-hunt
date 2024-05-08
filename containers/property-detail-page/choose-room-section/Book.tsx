"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import { IoCalendarOutline } from "react-icons/io5";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

interface IBook {
  title: string;
  price: number;
  image: StaticImageData;
}

const Book = ({ title, price, image }: IBook) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          size={"sm"}
          className="min-w-20 bg-main hover:bg-main hover:shadow-md"
        >
          Book
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Now</DialogTitle>
          <DialogDescription>
            Choose your move-in and move-out date to book this room
          </DialogDescription>
        </DialogHeader>
        <div>
          <Image src={image} alt="Room" className="w-full h-56 object-cover" />
          <div className="mt-2">
            <h1 className="text-lg font-semibold">{title}</h1>
            <div className="flex justify-between items-center gap-3 border-b pb-2">
              <h1 className="font-medium">Private Room</h1>
              <p className="my-2">
                <span className="font-semibold">Rs.{price}</span>/Month
              </p>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center gap-2">
              <IoCalendarOutline className="text-lg" />
              <p>Move in date: </p>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="text-main font-semibold">
                    choose your dates
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar />
                </PopoverContent>
              </Popover>
            </div>
            <div className="h-10 my-1 ml-2">
              <Separator orientation="vertical" className="" />
            </div>
            <div className="flex items-center gap-2">
              <IoCalendarOutline className="text-lg" />
              <p>Move out date: </p>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="text-main font-semibold">
                    choose your dates
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button className="bg-main w-full">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Book;
