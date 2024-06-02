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
import Image from "next/image";
import { IoCalendarOutline } from "react-icons/io5";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { toast } from "@/components/ui/use-toast";

interface IBook {
  title: string;
  price: number;
  image: string;
}

const Book = ({ title, price, image }: IBook) => {
  const router = useRouter();
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const [moveInDate, setMoveInDate] = React.useState<any>(null);
  const [moveOutDate, setMoveOutDate] = React.useState<any>(null);

  const calculateDifference = () => {
    //in months, if not in months then in days
    if (moveInDate && moveOutDate) {
      const diff = moment(moveOutDate).diff(moveInDate, "months");
      return diff > 0
        ? diff + " months"
        : moment(moveOutDate).diff(moveInDate, "days") + " days";
    }
    return "";
  };

  const continueBookingHandler = () => {
    if (!isLoggedIn) {
      toast({
        variant: "destructive",
        title: "Please login to continue",
        description: "You need to login to book a property",
      });
      return;
    }
    if (moveInDate && moveOutDate) {
      router.push(
        `/checkout?property=${title}&price=${price}&moveInDate=${moveInDate}&moveOutDate=${moveOutDate}`
      );
    }
  };

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
          <Image
            src={image}
            alt="Room"
            className="w-full h-56 object-cover"
            width={500}
            height={500}
          />
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
                    {moveInDate
                      ? moment(moveInDate).format("MMM DD, YYYY")
                      : "choose your dates"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={moveInDate}
                    onSelect={setMoveInDate}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="h-10 my-1 ml-2 flex items-center gap-4">
              <Separator orientation="vertical" className="" />
              {moveInDate && moveOutDate && (
                <div className="bg-gray-100 rounded-sm py-2 px-4 text-sm">
                  {calculateDifference()}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <IoCalendarOutline className="text-lg" />
              <p>Move out date: </p>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="text-main font-semibold">
                    {moveOutDate
                      ? moment(moveOutDate).format("MMM DD, YYYY")
                      : "choose your dates"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={moveOutDate}
                    onSelect={setMoveOutDate}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="mt-2 border-t pt-2 flex items-center gap-3 justify-between">
            <h1>Total</h1>
            <p className="font-semibold">Rs.{price}</p>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button
            disabled={!moveInDate || !moveOutDate}
            className="bg-main w-full"
            onClick={continueBookingHandler}
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Book;
