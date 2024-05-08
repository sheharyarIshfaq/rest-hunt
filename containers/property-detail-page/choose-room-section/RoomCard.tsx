import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import { BsChevronRight } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface IRoomCard {
  title: string;
  price: number;
  image: StaticImageData;
  facilities: string[];
}

const RoomCard = ({ title, price, image, facilities }: IRoomCard) => {
  return (
    <div className="border p-4 rounded-lg w-full">
      <div className="flex gap-4">
        <Image src={image} alt="Room" className="w-56 object-cover" />
        <div className="mt-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm mt-1">From {price}/Month</p>
          <div className="flex items-center gap-1 flex-wrap mt-2">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex items-center gap-2 mt-1 min-w-20"
              >
                <FaRegCircleCheck className="text-lg" />
                <span>{facility}</span>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-2 my-3 text-gray-500">
            View Details <BsChevronRight />
          </button>
        </div>
      </div>
      <div className="flex justify-end items-center gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"sm"} className="min-w-20" variant={"outline"}>
              Enquire
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>Enquire</DialogTitle>
              <DialogDescription>
                Enquire about this room and the owner will get back to you
              </DialogDescription>
            </DialogHeader>
            <div>
              <Image
                src={image}
                alt="Room"
                className="w-full h-56 object-cover"
              />
              <div className="mt-2">
                <h1 className="text-lg font-semibold">{title}</h1>
                <div className="flex justify-between items-center gap-3 border-b pb-2">
                  <h1 className="font-medium">Private Room</h1>
                  <p className="my-2">
                    <span className="font-semibold">Rs.{price}</span>/Month
                  </p>
                </div>
                <Textarea placeholder="Message" />
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <Button className="bg-main w-full">Enquire</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default RoomCard;
