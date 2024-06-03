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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface IEnquire {
  title: string;
  price: number;
  image: string;
  type: string;
}

const Enquire = ({ title, price, image, type }: IEnquire) => {
  const [message, setMessage] = React.useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"} className="min-w-20" variant={"outline"}>
          Enquire
        </Button>
      </DialogTrigger>
      <DialogContent>
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
            width={500}
            height={500}
          />
          <div className="mt-2">
            <h1 className="text-lg font-semibold">{title}</h1>
            <div className="flex justify-between items-center gap-3 border-b pb-2">
              <h1 className="font-medium">
                {type === "entire-place"
                  ? "Entire Place"
                  : type === "shared"
                  ? "Shared Room"
                  : "Private Room"}
              </h1>
              <p className="my-2">
                <span className="font-semibold">Rs.{price}</span>/Month
              </p>
            </div>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here"
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button className="bg-main w-full" disabled={message?.trim() === ""}>
            Enquire
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Enquire;
