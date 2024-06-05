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
import { useRouter } from "next/navigation";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const BookingsPage = () => {
  const router = useRouter();

  const [bookings, setBookings] = useState([]);

  const { token } = useAppSelector((state) => state.auth);

  const fetchBookings = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/bookings/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data.bookings);
      setBookings(data.bookings);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong!",
        description: error.message,
      });
    }
  };

  React.useEffect(() => {
    console.log("Bookings Page");
    if (!token) return;
    fetchBookings();
  }, [token]);

  const approveBookingHandler = async (bookingId: string) => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/bookings/approve/${bookingId}`,
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

      fetchBookings();
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

  const rejectBookingHandler = async (bookingId: string) => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/bookings/reject/${bookingId}`,
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

      fetchBookings();
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
            <TableHead className="text-black font-semibold">
              Booking Id
            </TableHead>
            <TableHead className="text-black font-semibold">Status</TableHead>
            <TableHead className="text-black font-semibold">
              Property Name
            </TableHead>
            <TableHead className="text-black font-semibold">Amount</TableHead>
            <TableHead className="text-black font-semibold">
              Room Type
            </TableHead>
            <TableHead className="text-black font-semibold">
              Move In Date
            </TableHead>
            <TableHead className="text-black font-semibold">
              Move Out Date
            </TableHead>
            <TableHead className="text-black font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings?.map((booking: any) => (
            <TableRow key={booking._id}>
              <TableCell>{booking._id}</TableCell>
              <TableCell className="capitalize">{booking.status}</TableCell>
              <TableCell>{booking?.property?.name}</TableCell>
              <TableCell>{Number(booking?.total).toFixed()}</TableCell>
              <TableCell className="capitalize">
                {booking?.room?.category}
              </TableCell>
              <TableCell>
                {moment(booking.moveIn).format("MMM DD, YYYY")}
              </TableCell>
              <TableCell>
                {moment(booking.moveOut).format("MMM DD, YYYY")}
              </TableCell>
              <TableCell className="flex items-center gap-3">
                <button onClick={() => router.push(`/booking/${booking._id}`)}>
                  <BsEye className="text-xl text-gray-500" />
                </button>

                <Dialog>
                  <DialogTrigger asChild>
                    {booking.status === "pending" && (
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
                          onClick={() => approveBookingHandler(booking._id)}
                        >
                          Confirm
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    {booking.status === "pending" && (
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
                        <Button
                          onClick={() => rejectBookingHandler(booking._id)}
                        >
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

export default BookingsPage;
