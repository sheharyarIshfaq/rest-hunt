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
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { useAppSelector } from "@/redux/store";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

interface IEnquire {
  title: string;
  price: number;
  image: string;
  type: string;
  ownerId: string;
  propertyId: string;
  roomId: string;
}

const Enquire = ({
  title,
  price,
  image,
  type,
  ownerId,
  propertyId,
  roomId,
}: IEnquire) => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const enquireHandler = async () => {
    //if message is empty return
    if (message.trim() === "") return;
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/messages/enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({
          senderId: user?._id,
          receiverId: ownerId,
          propertyId,
          roomId,
          text: message,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.error) {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: data.error,
        });
        return;
      }
      toast({
        variant: "success",
        title: "Enquiry sent successfully",
      });
      setMessage("");
      router.push(`/messages?id=${ownerId}`);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again later",
      });
    } finally {
      setLoading(false);
    }
  };

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
          <Button
            className="bg-main w-full"
            disabled={message?.trim() === "" || loading}
            onClick={enquireHandler}
          >
            Enquire
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Enquire;
