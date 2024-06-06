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

const WithdrawalsPage = () => {
  const router = useRouter();

  const [withdrawals, setWithdrawals] = useState([]);

  const { token } = useAppSelector((state) => state.auth);

  const fetchWithdrawals = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/withdrawals/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data.withdrawals);
      setWithdrawals(data.withdrawals);
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
    fetchWithdrawals();
  }, [token]);

  const approveBookingHandler = async (bookingId: string) => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/withdrawals/approve/${bookingId}`,
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

      fetchWithdrawals();
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
        `${BACKEND_URL}/withdrawals/reject/${bookingId}`,
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

      fetchWithdrawals();
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
            <TableHead className="text-black font-semibold">Id</TableHead>
            <TableHead className="text-black font-semibold">Status</TableHead>
            <TableHead className="text-black font-semibold">UserName</TableHead>
            <TableHead className="text-black font-semibold">Amount</TableHead>
            <TableHead className="text-black font-semibold">
              Payout Method
            </TableHead>
            <TableHead className="text-black font-semibold">
              Account Details
            </TableHead>
            <TableHead className="text-black font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {withdrawals?.map((withdrawal: any) => (
            <TableRow key={withdrawal._id}>
              <TableCell>{withdrawal._id}</TableCell>
              <TableCell className="capitalize">{withdrawal.status}</TableCell>
              <TableCell>{withdrawal?.user?.name}</TableCell>
              <TableCell>{Number(withdrawal?.amount).toFixed()}</TableCell>
              <TableCell className="capitalize">
                {withdrawal?.payoutMethod}
              </TableCell>
              <TableCell>{withdrawal?.accountDetails}</TableCell>

              <TableCell className="flex items-center gap-3">
                <button
                  onClick={() => router.push(`/booking/${withdrawal._id}`)}
                >
                  <BsEye className="text-xl text-gray-500" />
                </button>

                <Dialog>
                  <DialogTrigger asChild>
                    {withdrawal.status === "pending" && (
                      <button>
                        <BsCheck className="text-2xl text-gray-500" />
                      </button>
                    )}
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Are you sure you want to approve this withdrawal?
                      </DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will confirm the
                        withdrawal for the user.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button
                          onClick={() => approveBookingHandler(withdrawal._id)}
                        >
                          Confirm
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    {withdrawal.status === "pending" && (
                      <button>
                        <BsTrash className="text-xl text-red-500" />
                      </button>
                    )}
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Are you sure you want to reject this withdrawal?
                      </DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will reject the
                        withdrawal for the user.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button
                          onClick={() => rejectBookingHandler(withdrawal._id)}
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

export default WithdrawalsPage;
