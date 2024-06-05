"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { Separator } from "@/components/ui/separator";
import moment from "moment";
import { toast } from "@/components/ui/use-toast";
import { useAppSelector } from "@/redux/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsCheck, BsEye, BsTrash } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const router = useRouter();

  const { token } = useAppSelector((state) => state.auth);

  const fetchProperties = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/properties/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data.properties);

      setProperties(data.properties);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong!",
        description: error.message,
      });
    }
  };

  React.useEffect(() => {
    if (!token) return;
    fetchProperties();
  }, [token]);

  const approvePropertyHandler = async (propertyId: string) => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/properties/approve/${propertyId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      fetchProperties();
      toast({
        variant: "success",
        title: "Booking approved successfully!",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong!",
        description: error.message,
      });
    }
  };

  const rejectPropetyHandler = async (propertyId: string) => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/withdrawals/reject/${propertyId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      fetchProperties();
      toast({
        variant: "success",
        title: "Booking rejected successfully!",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong!",
        description: error.message,
      });
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-black font-semibold">Img</TableHead>
            <TableHead className="text-black font-semibold">Name</TableHead>
            <TableHead className="text-black font-semibold">Address</TableHead>
            <TableHead className="text-black font-semibold">Rooms</TableHead>
            <TableHead className="text-black font-semibold">Status</TableHead>
            <TableHead className="text-black font-semibold">
              Created At
            </TableHead>
            <TableHead className="text-black font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties.map((item: any) => (
            <TableRow key={item._id}>
              <TableCell>
                <Image
                  src={item?.image}
                  alt={item?.name}
                  width={50}
                  height={50}
                />
              </TableCell>
              <TableCell className="capitalize">{item?.name}</TableCell>
              <TableCell className="capitalize">{item?.address}</TableCell>
              <TableCell className="capitalize">
                {item?.rooms?.length || "0"}
              </TableCell>
              <TableCell className="capitalize">{item?.status}</TableCell>
              <TableCell className="capitalize">
                {moment(item?.createdAt).format("DD MMM YYYY")}
              </TableCell>
              <TableCell className="flex items-center gap-3">
                <button onClick={() => router.push(`/property/${item._id}`)}>
                  <BsEye className="text-xl text-gray-500" />
                </button>

                <Dialog>
                  <DialogTrigger asChild>
                    {item.status === "Pending" && (
                      <button>
                        <BsCheck className="text-2xl text-gray-500" />
                      </button>
                    )}
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Are you sure you want to approve this booking?
                      </DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will confirm the
                        booking for the user.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button
                          onClick={() => approvePropertyHandler(item._id)}
                        >
                          Confirm
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    {item.status === "Pending" && (
                      <button>
                        <BsTrash className="text-xl text-red-500" />
                      </button>
                    )}
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Are you sure you want to reject this booking?
                      </DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will reject the
                        booking for the user.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button onClick={() => rejectPropetyHandler(item._id)}>
                          Confirm
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Separator />
    </>
  );
};

export default PropertiesPage;
