import React from "react";
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
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

interface IEnquire {
  title: string;
  price: number;
  image: StaticImageData;
}

const Enquire = ({ title, price, image }: IEnquire) => {
  return (
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
          <Image src={image} alt="Room" className="w-full h-56 object-cover" />
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
  );
};

export default Enquire;
